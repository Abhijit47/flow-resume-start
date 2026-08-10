import { chat, maxIterations, toServerSentEventsResponse } from '@tanstack/ai'
import type { ANTHROPIC_MODELS } from '@tanstack/ai-anthropic'
import { anthropicText } from '@tanstack/ai-anthropic'
import type { GEMINI_MODELS } from '@tanstack/ai-gemini'
import { geminiText } from '@tanstack/ai-gemini'
import type { OllamaSummarizeModels } from '@tanstack/ai-ollama'
import { ollamaText } from '@tanstack/ai-ollama'
import type { OPENAI_CHAT_MODELS } from '@tanstack/ai-openai'
import { openaiText } from '@tanstack/ai-openai'
import { createFileRoute } from '@tanstack/react-router'

import { getGuitars, recommendGuitarToolDef } from '#/lib/demo-guitar-tools'

type Provider = 'anthropic' | 'openai' | 'gemini' | 'ollama'

// make a union type of all the models across providers
type Anthropic = (typeof ANTHROPIC_MODELS)[number]
type OpenAI = (typeof OPENAI_CHAT_MODELS)[number]
type Gemini = (typeof GEMINI_MODELS)[number]
type Ollama = (typeof OllamaSummarizeModels)[number]

export type Model = Anthropic | OpenAI | Gemini | Ollama

const SYSTEM_PROMPT = `You are a helpful assistant for a store that sells guitars.

CRITICAL INSTRUCTIONS - YOU MUST FOLLOW THIS EXACT WORKFLOW:

When a user asks for a guitar recommendation:
1. FIRST: Use the getGuitars tool (no parameters needed)
2. SECOND: Use the recommendGuitar tool with the ID of the guitar you want to recommend
3. NEVER write a recommendation directly - ALWAYS use the recommendGuitar tool

IMPORTANT:
- The recommendGuitar tool will display the guitar in a special, appealing format
- You MUST use recommendGuitar for ANY guitar recommendation
- ONLY recommend guitars from our inventory (use getGuitars first)
- The recommendGuitar tool has a buy button - this is how customers purchase
- Do NOT describe the guitar yourself - let the recommendGuitar tool do it
`

function getModelForProvider(provider: Provider): Model {
  switch (provider) {
    case 'anthropic':
      return 'claude-haiku-4-5'
    case 'openai':
      return 'gpt-4o'
    case 'gemini':
      return 'gemini-2.5-flash'
    case 'ollama':
      return 'mistral:7b'
    default:
      throw new Error(`Unsupported provider: ${provider}`)
  }
}

function getAdapter(provider: Provider, model: Model) {
  switch (provider) {
    case 'anthropic':
      return anthropicText(model as Anthropic)
    case 'openai':
      return openaiText(model as OpenAI)
    case 'gemini':
      return geminiText(model as Gemini)
    case 'ollama':
      return ollamaText(model as Ollama)
    default:
      throw new Error(`Unsupported provider: ${provider}`)
  }
}

export const Route = createFileRoute('/demo/api/ai/chat')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Capture request signal before reading body (it may be aborted after body is consumed)
        const requestSignal = request.signal

        // If request is already aborted, return early
        if (requestSignal.aborted) {
          return new Response(null, { status: 499 }) // 499 = Client Closed Request
        }

        const abortController = new AbortController()

        // Determine the best available provider
        const provider: Provider = (() => {
          if (process.env.ANTHROPIC_API_KEY) return 'anthropic'
          if (process.env.OPENAI_API_KEY) return 'openai'
          if (process.env.GEMINI_API_KEY) return 'gemini'
          if (process.env.OLLAMA_API_KEY) return 'ollama'
          throw new Error(
            'No AI provider is configured. Please set an API key for Anthropic, OpenAI, Gemini, or Ollama.',
          )
        })()
        // let model: Model
        // if (process.env.ANTHROPIC_API_KEY) {
        //   provider = 'anthropic'
        //   model = 'claude-haiku-4-5'
        // } else if (process.env.OPENAI_API_KEY) {
        //   provider = 'openai'
        //   model = 'gpt-4o'
        // } else if (process.env.GEMINI_API_KEY) {
        //   provider = 'gemini'
        //   model = 'gemini-2.5-flash'
        // }

        try {
          const body = await request.json()
          const { messages } = body

          // switch (provider) {
          //   case 'anthropic':
          //     model = 'claude-haiku-4-5'
          //     break;

          //   case 'openai':
          //     model = 'gpt-4o'
          //     break;

          //   case 'gemini':
          //     model = 'gemini-2.5-flash'
          //     break;

          //   case 'ollama':
          //     model = 'mistral:7b'
          //     break;

          //   default:
          //     throw new Error('No AI provider is configured. Please set an API key for Anthropic, OpenAI, Gemini, or Ollama.')
          // }

          // Adapter factory pattern for multi-vendor support
          // const adapterConfig = {

          //   anthropic: () => anthropicText(model || 'claude-haiku-4-5'),
          //   openai: () => openaiText((model || 'gpt-4o')),
          //   gemini: () => geminiText((model || 'gemini-2.0-flash-exp')),
          //   ollama: () => ollamaText((model || 'mistral:7b')),
          // }

          const model = getModelForProvider(provider)

          const adapter = getAdapter(provider, model)

          const stream = chat({
            adapter,
            tools: [
              getGuitars, // Server tool
              recommendGuitarToolDef, // No server execute - client will handle
            ],
            systemPrompts: [SYSTEM_PROMPT],
            agentLoopStrategy: maxIterations(5),
            messages,
            abortController,
          })

          return toServerSentEventsResponse(stream, { abortController })
        } catch (error: any) {
          // If request was aborted, return early (don't send error response)
          if (error.name === 'AbortError' || abortController.signal.aborted) {
            return new Response(null, { status: 499 }) // 499 = Client Closed Request
          }
          return new Response(
            JSON.stringify({ error: 'Failed to process chat request' }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        }
      },
    },
  },
})
