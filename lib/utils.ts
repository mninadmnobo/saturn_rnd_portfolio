import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format an ISO date string for display.
 *
 * Always pins the locale to `en-US` instead of relying on the runtime's
 * default (`toLocaleDateString()` with no arguments) — the server and the
 * browser can have different default locales, which otherwise produces a
 * React hydration mismatch (e.g. server renders "7/20/2024", browser
 * re-renders "20/07/2024").
 */
export function formatDate(isoDate: string, options?: Intl.DateTimeFormatOptions) {
  return new Date(isoDate).toLocaleDateString('en-US', options)
}
