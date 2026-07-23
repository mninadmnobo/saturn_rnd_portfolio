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
    id: 'fabins',
    title: 'FABINS - Fabric Inspection Automation',
    description: 'An intelligent real-time fabric fault detection system utilizing computer vision models, high-resolution camera integration, and automated industrial defect classification.',
    status: 'active',
    progress: 90,
    technologies: ['Machine Learning', 'Computer Vision (YOLOv8)', 'Spring Boot & Java', 'Hikrobot SDK', 'React & Next.js', 'FastAPI & Node.js'],
    startDate: '2023-08-01',
    category: 'Industrial AI',
  },
]
