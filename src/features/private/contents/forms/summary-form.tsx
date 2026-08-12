import type { Value } from 'platejs'
import { Plate, usePlateEditor } from 'platejs/react'

import {
  // BoldPlugin,
  // ItalicPlugin,
  // UnderlinePlugin,
  BlockquotePlugin,
  BoldPlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  ItalicPlugin,
  UnderlinePlugin,
} from '@platejs/basic-nodes/react'

import { Editor, EditorContainer } from '@/components/editor'

import { Field, FieldLabel } from '#/components/ui/field'
import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import { BlockquoteElement } from '@/components/editor/blockquote-node'
import { FixedToolbar } from '@/components/editor/fixed-toolbar'
import {
  H1Element,
  H2Element,
  H3Element,
} from '@/components/editor/heading-node'
import { MarkToolbarButton } from '@/components/editor/mark-toolbar-button'
import { ToolbarButton } from '@/components/editor/toolbar'
import { useFormContext } from 'react-hook-form'

const initialValue: Value = [
  {
    children: [{ text: 'Title' }],
    type: 'h3',
  },
  {
    children: [
      {
        children: [{ text: 'This is a quote.' }],
        type: 'p',
      },
    ],
    type: 'blockquote',
  },
  {
    type: 'p',
    children: [
      { text: 'Hello! Try out the ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ', and ' },
      { text: 'underline', underline: true },
      { text: ' formatting.' },
    ],
  },
  {
    children: [
      { text: 'With some ' },
      { bold: true, text: 'bold' },
      { text: ' text for emphasis!' },
    ],
    type: 'p',
  },
]

export default function SummaryForm({ fieldIdx }: { fieldIdx: number }) {
  const form = useFormContext<ResumeFormValues>()
  const editor = usePlateEditor({
    plugins: [
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      H1Plugin.withComponent(H1Element),
      H2Plugin.withComponent(H2Element),
      H3Plugin.withComponent(H3Element),
      BlockquotePlugin.withComponent(BlockquoteElement),
    ],

    value: () => {
      // const savedValue = localStorage.getItem('installation-next-demo')
      // return savedValue ? JSON.parse(savedValue) : initialValue

      const savedValue = form.getValues(`contents.summary.${fieldIdx}.text`)
      return savedValue ? JSON.parse(savedValue) : initialValue
    },
  })

  return (
    <div>
      <Field>
        <FieldLabel htmlFor={`contents.summary.${fieldIdx}.text`}>
          Professional Summary
        </FieldLabel>
        <Plate
          editor={editor}
          onChange={({ value }) => {
            // localStorage.setItem('installation-next-demo', JSON.stringify(value))
            // TODO: Save to DB instead of rhf form state
            form.setValue(
              `contents.summary.${fieldIdx}.text`,
              JSON.stringify(value),
              {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              },
            )
          }}
        >
          <FixedToolbar className="flex justify-start gap-1 rounded-t-lg">
            <ToolbarButton onClick={() => editor.tf.h1.toggle()}>
              H1
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.tf.h2.toggle()}>
              H2
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.tf.h3.toggle()}>
              H3
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.tf.blockquote.toggle()}>
              Quote
            </ToolbarButton>
            <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)">
              B
            </MarkToolbarButton>
            <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)">
              I
            </MarkToolbarButton>
            <MarkToolbarButton nodeType="underline" tooltip="Underline (⌘+U)">
              U
            </MarkToolbarButton>
            <div className="flex-1" />
            <ToolbarButton
              className="px-2"
              onClick={() => editor.tf.setValue(initialValue)}
            >
              Reset
            </ToolbarButton>
          </FixedToolbar>
          <EditorContainer
            id={`contents.summary.${fieldIdx}.text`}
            className={
              'max-h-24 border border-gray-300 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-500 focus-within:ring-opacity-50 datafocus-within:rounded-md'
            }
          >
            <Editor
              id={`contents.summary.${fieldIdx}.text`}
              placeholder="Type your amazing content here..."
            />
          </EditorContainer>
        </Plate>
      </Field>
    </div>
  )
}
