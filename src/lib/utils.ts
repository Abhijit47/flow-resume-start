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
