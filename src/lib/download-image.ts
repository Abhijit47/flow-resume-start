// const fs = require('node:fs/promises')
// const path = require('node:path')
import fs from 'node:fs/promises'
import path from 'node:path'
/**
 * Downloads images one by one with a delay between downloads.
 *
 * @param {Array<{ url: string, fileName: string, fileExt?: string }>} images
 * @param {number} delayMs
 */
export async function downloadImages({
  images,
  delayMs = 1500,
}: {
  images: Array<{ url: string; fileName: string; fileExt?: string }>
  delayMs: number
}) {
  const outputDir = path.join(process.cwd(), 'docs', 'images')

  await fs.mkdir(outputDir, { recursive: true })

  for (const image of images) {
    const { url, fileName, fileExt } = image

    if (!url || !fileName) {
      console.warn('Skipping image with missing URL or file name:', image)
      continue
    }

    // const extension = fileExt
    //   ? fileExt.startsWith('.')
    //     ? fileExt
    //     : `.${fileExt}`
    //   : path.extname(new URL(url).pathname) || '.jpg'

    const lowerFileName = fileName.toLowerCase().replace(/\s+/g, '_')

    const outputPath = path.join(outputDir, `${lowerFileName}.${fileExt}`)

    try {
      console.log(`Downloading: ${url}`)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`)
      }

      const imageBuffer = Buffer.from(await response.arrayBuffer())

      await fs.writeFile(outputPath, imageBuffer)

      console.log(`Saved to: ${outputPath}`)
    } catch (error) {
      console.error(`Failed to download ${url}:`, error)
    }

    // Delay before downloading the next image
    await new Promise((resolve) => setTimeout(resolve, delayMs))
  }
}
