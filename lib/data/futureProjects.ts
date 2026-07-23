/**
 * Roadmap items shown on the Future Projects page, grouped by target phase.
 *
 * ## How to add a new future project
 *
 * Append an object matching `FutureProject` to the array below.
 *
 * ```ts
 * {
 *   id: '7',
 *   title: 'Recyclable Smart Fibers',
 *   description: 'One or two sentences on what this project does.',
 *   phase: '2025',           // one of the FutureProject['phase'] options
 *   priority: 'medium',      // 'critical' | 'high' | 'medium'
 *   technologies: ['Recycling', 'IoT'],
 *   expectedImpact: 'A one-line statement of the outcome this unlocks.',
 * }
 * ```
 *
 * To introduce a new phase (e.g. `'2027'`), add it to the `phase` union
 * below — the Future Projects page's phase tabs are currently a fixed list
 * declared in `app/future-projects/page.tsx` and should be updated to match.
 */
export interface FutureProject {
  /** Unique identifier — used as the React list key. */
  id: string
  title: string
  description: string
  /** Target timeframe, shown in the "Target" chip and phase filter tabs. */
  phase: 'Q3-2024' | 'Q4-2024' | '2025' | '2026'
  /** Drives the priority badge's color and icon. */
  priority: 'critical' | 'high' | 'medium'
  /** Short tags describing the tech/disciplines involved. */
  technologies: string[]
  /** One sentence describing the outcome this project is expected to unlock. */
  expectedImpact: string
}

export const futureProjects: FutureProject[] = [
  {
    id: '1',
    title: 'AI-Optimized Fabric Design',
    description: 'Using machine learning to optimize fabric properties and predict material performance.',
    phase: 'Q3-2024',
    priority: 'high',
    technologies: ['AI/ML', 'Data Science', 'Material Simulation'],
    expectedImpact: 'Reduce product development time by 40%',
  },
  {
    id: '2',
    title: 'Zero-Waste Manufacturing',
    description: 'Implementing production processes that eliminate textile waste through innovative recycling.',
    phase: 'Q3-2024',
    priority: 'critical',
    technologies: ['Circular Economy', 'Process Engineering', 'Sustainability'],
    expectedImpact: 'Achieve carbon-neutral production',
  },
  {
    id: '3',
    title: 'Bio-Engineered Fibers',
    description: 'Developing genetically modified organisms to produce high-performance natural fibers.',
    phase: 'Q4-2024',
    priority: 'high',
    technologies: ['Biotechnology', 'Genetic Engineering', 'Biology'],
    expectedImpact: 'Create fibers with superior properties from renewable sources',
  },
  {
    id: '4',
    title: 'Self-Healing Textiles',
    description: 'Creating fabrics capable of automatically repairing damage through advanced materials.',
    phase: '2025',
    priority: 'high',
    technologies: ['Polymer Science', 'Self-Healing Materials', 'Nanotechnology'],
    expectedImpact: 'Extend textile lifespan by 5x',
  },
  {
    id: '5',
    title: 'Climate-Adaptive Clothing',
    description: 'Developing textiles that respond to climate patterns for optimal comfort and protection.',
    phase: '2025',
    priority: 'medium',
    technologies: ['IoT', 'Weather Integration', 'Smart Textiles'],
    expectedImpact: 'Revolutionize adaptive clothing market',
  },
  {
    id: '6',
    title: 'Quantum-Enhanced Material Testing',
    description: 'Leveraging quantum computing for unprecedented material property analysis.',
    phase: '2026',
    priority: 'medium',
    technologies: ['Quantum Computing', 'Advanced Analytics', 'Physics'],
    expectedImpact: 'Accelerate discovery of novel materials',
  },
]
