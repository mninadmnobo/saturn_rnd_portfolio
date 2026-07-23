import type { IconName } from '@/lib/icons'

/**
 * Achievement stats shown on the Achievements page as a grid of stat cards.
 *
 * ## How to add a new achievement
 *
 * Append an object matching `Achievement` to the array below.
 *
 * ```ts
 * {
 *   id: '9',
 *   metric: 'Countries Served',
 *   value: '22+',
 *   description: 'Markets reached with Saturn Textiles products.',
 *   icon: 'Globe', // must be a name registered in lib/icons.ts
 * }
 * ```
 */
export interface Achievement {
  /** Unique identifier — used as the React list key. */
  id: string
  /** Short label for the stat, e.g. "Patents Filed". */
  metric: string
  /** The headline number/figure, e.g. "150+" or "$50M+". Kept as a string so units/suffixes can be embedded. */
  value: number | string
  /** One sentence of supporting context. */
  description: string
  /** Icon name from the shared registry — see `lib/icons.ts` for available names. */
  icon: IconName
}

export const achievements: Achievement[] = [
  {
    id: '1',
    metric: 'Active Research Projects',
    value: '24',
    description: 'Cutting-edge projects advancing textile innovation',
    icon: 'Beaker',
  },
  {
    id: '2',
    metric: 'Patents Filed',
    value: '150+',
    description: 'Intellectual property protecting our innovations',
    icon: 'Award',
  },
  {
    id: '3',
    metric: 'Research Engineers',
    value: '85+',
    description: 'Dedicated professionals driving innovation',
    icon: 'Users',
  },
  {
    id: '4',
    metric: 'Years of Excellence',
    value: '35+',
    description: 'Decades of commitment to textile advancement',
    icon: 'Calendar',
  },
  {
    id: '5',
    metric: 'International Partnerships',
    value: '40+',
    description: 'Collaborations with leading institutions worldwide',
    icon: 'Globe',
  },
  {
    id: '6',
    metric: 'Publications',
    value: '250+',
    description: 'Peer-reviewed research papers and findings',
    icon: 'BookOpen',
  },
  {
    id: '7',
    metric: 'Industry Awards',
    value: '18',
    description: 'Recognition for innovation and sustainability',
    icon: 'Trophy',
  },
  {
    id: '8',
    metric: 'R&D Investment',
    value: '$50M+',
    description: 'Annual commitment to research and development',
    icon: 'TrendingUp',
  },
]
