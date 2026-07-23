/**
 * Visual showcase items for the Gallery page, laid out in a CSS grid.
 *
 * ## How to add a new gallery item
 *
 * Append an object matching `GalleryItem` to the array below.
 *
 * ```ts
 * {
 *   id: '9',
 *   title: 'New Lab Wing',
 *   description: 'Short caption shown under the tile.',
 *   category: 'Facilities',
 *   width: 1,  // grid columns to span on md+ screens (1 or 2)
 *   height: 1, // grid rows to span on md+ screens (1 or 2)
 * }
 * ```
 */
export interface GalleryItem {
  /** Unique identifier — used as the React list key. */
  id: string
  title: string
  description: string
  /** Shown as a small label; also usable for future category filtering. */
  category: string
  /** Optional image path. Omit to show the placeholder tile. */
  image?: string
  /** Grid columns to span on md+ screens (1 or 2). Omit for a standard single-cell tile. */
  width?: number
  /** Grid rows to span on md+ screens (1 or 2). Omit for a standard single-cell tile. */
  height?: number
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Smart Textile Prototype',
    description: 'Advanced conductive thread integration for wearable sensors',
    category: 'Innovation',
    width: 2,
    height: 1,
  },
  {
    id: '2',
    title: 'Nano-Coating Process',
    description: 'Microscopic view of hydrophobic nano-coating application',
    category: 'Research',
    width: 1,
    height: 1,
  },
  {
    id: '3',
    title: 'Laboratory Equipment',
    description: 'State-of-the-art testing and analysis equipment',
    category: 'Facilities',
    width: 1,
    height: 1,
  },
  {
    id: '4',
    title: 'Sustainable Fiber Production',
    description: 'Biodegradable fiber manufacturing process',
    category: 'Sustainability',
    width: 1,
    height: 2,
  },
  {
    id: '5',
    title: 'Research Team Collaboration',
    description: 'Team members working on advanced textile projects',
    category: 'Team',
    width: 1,
    height: 1,
  },
  {
    id: '6',
    title: 'Material Science Testing',
    description: 'Durability and quality testing of new materials',
    category: 'Research',
    width: 2,
    height: 1,
  },
  {
    id: '7',
    title: 'Finished Fabric Samples',
    description: 'Collection of innovative textile samples',
    category: 'Products',
    width: 1,
    height: 1,
  },
  {
    id: '8',
    title: 'Production Facility',
    description: 'Advanced manufacturing equipment and processes',
    category: 'Facilities',
    width: 1,
    height: 1,
  },
]
