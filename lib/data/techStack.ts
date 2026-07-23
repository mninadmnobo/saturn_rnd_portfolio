/**
 * Technology categories shown on the Tech Stack page.
 *
 * ## How to add a new category or technology
 *
 * Append a new `TechStackCategory` object to add a category, or push a
 * string onto an existing category's `technologies` array to add one item.
 *
 * ```ts
 * {
 *   category: 'Data & Analytics',
 *   technologies: ['Time-Series Analysis', 'Predictive Modeling'],
 * }
 * ```
 */
export interface TechStackCategory {
  category: string
  technologies: string[]
}

export const techStackCategories: TechStackCategory[] = [
  {
    category: 'Materials Science',
    technologies: [
      'Polymer Chemistry',
      'Nanotechnology',
      'Material Analysis',
      'Phase-Change Materials',
      'Biodegradable Polymers',
    ],
  },
  {
    category: 'Manufacturing',
    technologies: [
      'Advanced Weaving',
      '3D Textile Printing',
      'Automated Quality Control',
      'Precision Dyeing',
      'Finishing Technologies',
    ],
  },
  {
    category: 'Electronics & IoT',
    technologies: [
      'Conductive Threading',
      'Smart Sensors',
      'IoT Integration',
      'Wireless Communication',
      'Data Analytics',
    ],
  },
  {
    category: 'Sustainability',
    technologies: [
      'Circular Design',
      'Recycling Technology',
      'Carbon Tracking',
      'Waste Reduction',
      'Environmental Impact',
    ],
  },
  {
    category: 'Testing & Analysis',
    technologies: [
      'Durability Testing',
      'Performance Analysis',
      'Fiber Microscopy',
      'Spectroscopy',
      'Statistical Analysis',
    ],
  },
  {
    category: 'Research Tools',
    technologies: [
      'Simulation Software',
      'Data Visualization',
      'Laboratory Equipment',
      'AI/ML Analysis',
      'Research Database',
    ],
  },
]

/**
 * Bullet points for the "Integrated Capabilities" callout at the bottom of
 * the Tech Stack page. Append a string to add another bullet.
 */
export const integratedCapabilities: string[] = [
  'Multi-disciplinary research combining materials science, electronics, and manufacturing',
  'State-of-the-art laboratory facilities and equipment for testing and validation',
  'Advanced data analytics and AI-powered insights for optimization',
  'Sustainable practices embedded throughout all research and manufacturing processes',
]
