import { createServerFn } from '@tanstack/react-start'
import fs from 'node:fs'
import puppeteer from 'puppeteer'
import { renderToStaticMarkup } from 'react-dom/server'

import { personalDetailsSchema } from './validators/personal-info-schema'

import { ResumeTemplate } from '#/features/private/resume-template'
import { join } from 'node:path'

export const createResumePDF = createServerFn({ method: 'POST' })
  .validator(personalDetailsSchema)
  .handler(async ({ data }) => {
    try {
      const browser = await puppeteer.launch()

      const page = await browser.newPage()

      // const css = await fs.promises.readFile(
      //   './dist/client/assets/index.css',
      //   'utf8',
      // )

      const html = renderToStaticMarkup(<ResumeTemplate data={data} />)

      await page.setContent(
        `
        <!doctype html>
          <html>
            <head>
              <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            </head>
            <body>
              ${html}
            </body>
          </html>
        `,
        { waitUntil: 'domcontentloaded' },
      )
      console.log('HTML content:', html) // Log the HTML content for debugging

      // await page.setContent(html, { waitUntil: 'domcontentloaded' })

      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
      })

      const fileName = data.fullName
        ? `${data.fullName.toLowerCase().replace(/\s+/g, '-')}-${crypto.randomUUID()}`
        : `user-${crypto.randomUUID()}`

      const filePath = join(process.cwd(), 'docs', `${fileName}-resume.pdf`)

      await fs.promises.writeFile(filePath, pdf) // Save the PDF to a file

      await browser.close()

      return true
    } catch (err) {
      console.error('Error creating resume PDF:', err)
      throw new Error(`Error creating resume PDF: ${err}`)
    }
  })
