import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * capitalize first letter of each word in a string
 * @param str hello world
 * @returns Hello world
 */
export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * make a string capitalize first letter of each word
 * @param str hello-world
 * @returns Hello World
 */
export function capitalizeString(str: string) {
  // first character and after if any space then capitalize
  return str
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ')
}

export function rgbaToHex(params: number[]): string {
  const [r, g, b] = params
  // Round to nearest integers
  const rInt = Math.round(r)
  const gInt = Math.round(g)
  const bInt = Math.round(b)

  // Convert to 2-digit hex strings
  const rHex = rInt.toString(16).padStart(2, '0')
  const gHex = gInt.toString(16).padStart(2, '0')
  const bHex = bInt.toString(16).padStart(2, '0')

  return `#${rHex}${gHex}${bHex}`.toUpperCase()
}

// Example usage:
// const color = [150.8981128241166, 41.59893921097267, 41.59893921097267, 1];
// console.log(rgbaToHex(color)); // Output: #972A2A

export function rgbalphaToHex(params: number[]): string {
  const [r, g, b, a] = params
  // Round RGB to nearest integers
  const rInt = Math.round(r)
  const gInt = Math.round(g)
  const bInt = Math.round(b)

  // Convert Alpha from 0-1 range to 0-255 range and round it
  const aInt = Math.round(a * 255)

  // Convert all to 2-digit hex strings
  const rHex = rInt.toString(16).padStart(2, '0')
  const gHex = gInt.toString(16).padStart(2, '0')
  const bHex = bInt.toString(16).padStart(2, '0')
  const aHex = aInt.toString(16).padStart(2, '0')

  return `#${rHex}${gHex}${bHex}${aHex}`.toUpperCase()
}

// Example usage with your data:
// const color = [150.8981128241166, 41.59893921097267, 41.59893921097267, 1];
// console.log(rgbaToHex(color)); // Output: #972A2AFF (FF means 100% opaque)

// Example usage with 50% transparency:
// const transparentColor = [150.898, 41.598, 41.598, 0.5];
// console.log(rgbaToHex(transparentColor)); // Output: #972A2A80

export function rgbStringToHex(rgbString: string) {
  // Extract digits using a regular expression
  const rgbValues = rgbString.match(/\d+/g)

  if (!rgbValues || rgbValues.length < 3) {
    throw new Error('Invalid RGB string format')
  }

  // Convert each parsed string to an integer, then to a 2-digit hex
  return (
    '#' +
    rgbValues
      .slice(0, 3)
      .map((x) => {
        return parseInt(x, 10).toString(16).padStart(2, '0')
      })
      .join('')
      .toUpperCase()
  )
}

// Example usage:
// console.log(rgbStringToHex('rgb(255,255,255)')) // Output: #FFFFFF
// console.log(rgbStringToHex('rgb(151, 42, 42)')) // Output: #972A2A

export function colorStringToHex(colorString: string) {
  // Match both whole numbers and decimals (e.g., 255 or 0.5)
  const values = colorString.match(/[\d.]+/g)

  if (!values || values.length < 3) {
    throw new Error('Invalid RGB or RGBA string format')
  }

  // Parse and convert RGB channels
  const rHex = Math.round(parseFloat(values[0])).toString(16).padStart(2, '0')
  const gHex = Math.round(parseFloat(values[1])).toString(16).padStart(2, '0')
  const bHex = Math.round(parseFloat(values[2])).toString(16).padStart(2, '0')

  // Check if an alpha channel exists (4th value)
  let aHex = ''
  if (values.length >= 4) {
    const alpha = parseFloat(values[3])
    // Convert 0.0-1.0 scale to 0-255 scale
    aHex = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, '0')
  }

  return `#${rHex}${gHex}${bHex}${aHex}`.toUpperCase()
}

// ---- Example Usage ----

// 1. Without Alpha
// console.log(colorStringToHex("rgb(255, 255, 255)"));
// Output: #FFFFFF

// 2. With Alpha (100% Opaque)
// console.log(colorStringToHex("rgba(151, 42, 42, 1)"));
// Output: #972A2AFF

// 3. With Alpha Decimal (50% Transparent)
// console.log(colorStringToHex("rgba(151, 42, 42, 0.5)"));
// Output: #972A2A80
