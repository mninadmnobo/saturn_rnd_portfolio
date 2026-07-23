import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format an ISO date string for display in International Standard format (e.g., 15 January 2026).
 *
 * Uses `en-GB` with day, month ('long'), and year options to ensure consistent Day Month Year
 * formatting across both server and client without hydration mismatch.
 */
export function formatDate(isoDate: string, options?: Intl.DateTimeFormatOptions) {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  }
  return new Date(isoDate).toLocaleDateString('en-GB', defaultOptions)
}
