/**
 * News & announcement posts shown on the News page.
 *
 * ## How to add a new news item
 *
 * Append an object matching `NewsItem` to the array below. Items with
 * `featured: true` are pulled into the "Featured" grid at the top of the
 * page; everything else lists under "Recent Updates".
 *
 * ```ts
 * {
 *   id: '7',
 *   title: 'Headline of the announcement',
 *   description: 'One-sentence summary shown in the card/list preview.',
 *   content: 'The fuller body copy, for a future article/detail view.',
 *   category: 'Innovation',
 *   date: '2024-08-01',       // ISO date string
 *   author: 'Author Name',
 *   featured: true,           // optional — omit or set false for the regular list
 * }
 * ```
 */
export interface NewsItem {
  /** Unique identifier — used as the React list key. */
  id: string
  title: string
  /** Short summary shown in card/list previews. */
  description: string
  /** Full body copy — not yet rendered by a detail page, but kept for when one exists. */
  content: string
  /** Shown as a small category badge. */
  category: string
  /** ISO date string (e.g. "2024-07-20"); formatted with `toLocaleDateString()` at render time. */
  date: string
  author: string
  /** Optional image path. */
  image?: string
  /** Set to `true` to show this item in the "Featured" section instead of the regular list. */
  featured?: boolean
}

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Breakthrough in Temperature-Regulating Textiles',
    description: 'Our latest innovation achieves 78% efficiency in dynamic thermoregulation.',
    content: 'In a significant breakthrough, Saturn Textiles announces successful development of temperature-regulating fabrics that actively adapt to environmental conditions. The new technology uses advanced phase-change materials integrated at the molecular level.',
    category: 'Innovation',
    date: '2024-07-20',
    author: 'Dr. Sarah Chen',
    featured: true,
  },
  {
    id: '2',
    title: 'Sustainability Award 2024',
    description: 'Recognized for excellence in eco-friendly textile development.',
    content: 'Saturn Textiles received the prestigious Global Sustainability Award for our commitment to developing biodegradable fibers and reducing environmental impact in textile manufacturing.',
    category: 'Achievement',
    date: '2024-07-15',
    author: 'Marketing Team',
    featured: true,
  },
  {
    id: '3',
    title: 'New Partnership with Tech Leaders',
    description: 'Collaborating to integrate smart textile technology into consumer products.',
    content: 'We are excited to announce our partnership with leading technology companies to accelerate the development and commercialization of smart textiles for wearable devices and connected clothing.',
    category: 'Partnership',
    date: '2024-07-10',
    author: 'Business Development',
  },
  {
    id: '4',
    title: 'Research Facility Expansion',
    description: 'New state-of-the-art laboratory opens for advanced material research.',
    content: 'Saturn Textiles officially opens its new Advanced Materials Research Facility, featuring cutting-edge equipment for nanotechnology and polymer research.',
    category: 'Expansion',
    date: '2024-07-05',
    author: 'Dr. Sarah Chen',
  },
  {
    id: '5',
    title: 'Patent Portfolio Milestone',
    description: 'Saturn Textiles reaches 150 active patents in textile innovation.',
    content: 'Our commitment to innovation has resulted in a robust patent portfolio covering breakthrough technologies in smart textiles, sustainable materials, and advanced manufacturing processes.',
    category: 'Achievement',
    date: '2024-06-28',
    author: 'Research Team',
  },
  {
    id: '6',
    title: 'Recycled Fiber Project Achieves Certification',
    description: 'Our recycled polyester blend receives international environmental certification.',
    content: 'The Recycled Polyester Blend project successfully achieved certification from international environmental standards bodies, validating our approach to sustainable textile production.',
    category: 'Sustainability',
    date: '2024-06-20',
    author: 'Yuki Tanaka',
  },
]
