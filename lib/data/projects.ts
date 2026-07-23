/**
 * Active/completed R&D projects shown on the Projects page.
 *
 * ## How to add a new project
 *
 * Append an object matching `Project` to the array below.
 *
 * ```ts
 * {
 *   id: '7',
 *   title: 'Project name',
 *   description: 'One to two sentences describing the project.',
 *   status: 'planning',       // 'active' | 'planning' | 'completed'
 *   progress: 10,             // 0-100, drives the progress bar
 *   technologies: ['Chemistry', 'AI/ML'],
 *   startDate: '2024-01-15',  // ISO date string
 *   category: 'Smart Textiles',
 * }
 * ```
 */
export interface Project {
  /** Unique identifier — used as the React list key. */
  id: string
  title: string
  description: string
  /** Drives the status badge's color. */
  status: 'active' | 'planning' | 'completed'
  /** Completion percentage (0-100), drives the animated progress bar. */
  progress: number
  /** Short tags describing the tech/disciplines involved. */
  technologies: string[]
  /** ISO date string. */
  startDate: string
  /** ISO date string. Only set once the project has actually concluded. */
  endDate?: string
  /** Optional image path. */
  image?: string
  /** Grouping label, shown for future filtering. */
  category: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Temperature-Regulating Fabric',
    description: 'Developing phase-change material-infused textiles that automatically adjust to body temperature for enhanced comfort.',
    status: 'active',
    progress: 78,
    technologies: ['PCM Technology', 'Nanotechnology', 'Polymer Science'],
    startDate: '2023-06-01',
    category: 'Smart Textiles',
  },
  {
    id: '2',
    title: 'Sustainable Biodegradable Fibers',
    description: 'Creating eco-friendly alternative fibers from agricultural waste that meet industry durability standards.',
    status: 'active',
    progress: 85,
    technologies: ['Biomaterials', 'Chemical Engineering', 'Sustainability'],
    startDate: '2023-03-15',
    category: 'Sustainability',
  },
  {
    id: '3',
    title: 'Conductive Textile Integration',
    description: 'Integrating conductive threads and sensors into standard fabrics for wearable electronics applications.',
    status: 'active',
    progress: 62,
    technologies: ['Electronics', 'Material Science', 'IoT'],
    startDate: '2023-09-01',
    category: 'Wearable Tech',
  },
  {
    id: '4',
    title: 'Water-Resistant Nano-Coating',
    description: 'Applying nano-scale hydrophobic coatings to textiles for superior water and stain resistance without chemical toxins.',
    status: 'active',
    progress: 92,
    technologies: ['Nanotechnology', 'Chemistry', 'Surface Treatment'],
    startDate: '2023-01-10',
    category: 'Performance Coatings',
  },
  {
    id: '5',
    title: 'Recycled Polyester Blends',
    description: 'Developing high-performance blends using 100% recycled polyester with properties matching virgin fibers.',
    status: 'completed',
    progress: 100,
    technologies: ['Recycling', 'Polymer Science', 'Quality Control'],
    startDate: '2022-06-01',
    endDate: '2024-03-30',
    category: 'Sustainability',
  },
  {
    id: '6',
    title: 'Antimicrobial Fabric Treatment',
    description: 'Non-toxic antimicrobial treatments for medical and athletic wear that maintain durability through multiple washes.',
    status: 'active',
    progress: 71,
    technologies: ['Medical Science', 'Chemistry', 'Textile Treatment'],
    startDate: '2023-07-20',
    category: 'Health & Wellness',
  },
]
