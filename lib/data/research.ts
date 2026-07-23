import type { IconName } from '@/lib/icons'

/**
 * Research focus areas shown on the Research page as a grid of cards.
 *
 * ## How to add a new research area
 *
 * Append an object matching `ResearchArea` to the array below.
 *
 * ```ts
 * {
 *   id: '13',
 *   title: 'Acoustic Textiles',
 *   description: 'One or two sentences describing the research focus.',
 *   icon: 'Microscope',   // must be a name registered in lib/icons.ts
 *   color: '#2563eb',     // hex used for the icon tile's tint (both themes)
 *   keywords: ['Sound Dampening', 'Insulation'],
 * }
 * ```
 */
export interface ResearchArea {
  /** Unique identifier — used as the React list key. */
  id: string
  title: string
  description: string
  /** Icon name from the shared registry — see `lib/icons.ts` for available names. */
  icon: IconName
  /** Hex color used to tint the icon tile. Kept as a literal hex (rather than a theme token) so each research area can have its own distinct identity color. */
  color: string
  /** Short tags shown beneath the description. */
  keywords: string[]
}

export const researchAreas: ResearchArea[] = [
  {
    id: '1',
    title: 'Smart Textiles',
    description: 'Integrating technology into fabrics for enhanced functionality and user experience.',
    icon: 'Zap',
    color: '#2563eb',
    keywords: ['IoT', 'Wearables', 'Sensors'],
  },
  {
    id: '2',
    title: 'Sustainable Materials',
    description: 'Developing eco-friendly alternatives that reduce environmental impact without compromising quality.',
    icon: 'Leaf',
    color: '#10b981',
    keywords: ['Biodegradable', 'Recycling', 'Eco-friendly'],
  },
  {
    id: '3',
    title: 'Nanotechnology',
    description: 'Applying nano-scale engineering to enhance fabric properties and create new capabilities.',
    icon: 'Microscope',
    color: '#8b5cf6',
    keywords: ['Nano-coating', 'Nanofibres', 'Nanoparticles'],
  },
  {
    id: '4',
    title: 'Performance Enhancement',
    description: 'Creating textiles with superior strength, durability, and specialized properties.',
    icon: 'Flame',
    color: '#f97316',
    keywords: ['Durability', 'Strength', 'Thermal'],
  },
  {
    id: '5',
    title: 'Health & Wellness',
    description: 'Developing fabrics that actively support health, comfort, and wellbeing.',
    icon: 'Heart',
    color: '#ec4899',
    keywords: ['Antimicrobial', 'Thermoregulation', 'Comfort'],
  },
  {
    id: '6',
    title: 'Advanced Manufacturing',
    description: 'Revolutionizing textile production through cutting-edge manufacturing techniques.',
    icon: 'Hammer',
    color: '#0ea5e9',
    keywords: ['3D Weaving', 'Automation', 'Precision'],
  },
  {
    id: '7',
    title: 'Material Science',
    description: 'Fundamental research into fiber composition, structure, and properties.',
    icon: 'Beaker',
    color: '#06b6d4',
    keywords: ['Chemistry', 'Physics', 'Composites'],
  },
  {
    id: '8',
    title: 'Waterproofing',
    description: 'Advanced coating and treatment technologies for water resistance and durability.',
    icon: 'Droplets',
    color: '#3b82f6',
    keywords: ['Hydrophobic', 'Membrane', 'Treatment'],
  },
  {
    id: '9',
    title: 'Dyeing & Finishes',
    description: 'Exploring sustainable and innovative approaches to textile coloring and finishing.',
    icon: 'Palette',
    color: '#f59e0b',
    keywords: ['Dyes', 'Finishes', 'Color-fast'],
  },
  {
    id: '10',
    title: 'Biodiversity',
    description: 'Researching natural fiber alternatives and sustainable sourcing practices.',
    icon: 'TreePine',
    color: '#14b8a6',
    keywords: ['Natural Fibers', 'Sourcing', 'Biodiversity'],
  },
  {
    id: '11',
    title: 'Quality Control',
    description: 'Developing advanced testing and quality assurance methodologies.',
    icon: 'CheckCircle',
    color: '#6366f1',
    keywords: ['Testing', 'Standards', 'Compliance'],
  },
  {
    id: '12',
    title: 'Future Applications',
    description: 'Exploring emerging use cases and applications for next-generation textiles.',
    icon: 'Rocket',
    color: '#ec4899',
    keywords: ['Innovation', 'Applications', 'Emerging'],
  },
]
