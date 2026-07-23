/**
 * Team & leadership content.
 *
 * This is the single source of truth for everyone shown in the
 * "Leadership & Engineering Excellence" section on the homepage
 * (`components/sections/LeadershipTeam.tsx`).
 *
 * ## How to add a new team member
 *
 * Append an object matching `TeamMember` to the relevant department's
 * `members` array below. The **first member of the first department is
 * always treated as the featured lead** (e.g. the Managing Director) —
 * `LeadershipTeam.tsx` renders `members[0]` as a hero card and everyone
 * else in a grid beneath it. Put your leaddirector/manager first.
 *
 * ```ts
 * {
 *   id: 'jane-doe',              // unique, kebab-case, used as the React key
 *   name: 'Dr. Jane Doe',
 *   title: 'Senior Materials Scientist',
 *   bio: 'One or two sentences on background and focus area.',
 *   responsibilities: ['Area of ownership 1', 'Area of ownership 2'],
 *   social: { linkedin: 'https://linkedin.com/in/janedoe' }, // all optional
 * }
 * ```
 *
 * ## How to add a new department
 *
 * Append a new `Department` object to `teamDepartments`. `LeadershipTeam.tsx`
 * currently renders only `teamDepartments[0]`; if you introduce a second
 * department, extend that component to render it too.
 */

/** A single person's public profile. */
export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  responsibilities: string[]
  extendedBio?: string[]
  email?: string
  image?: string
  social?: {
    github?: string
    linkedin?: string
    portfolio?: string
    scholar?: string
    orcid?: string
  }
}

export interface Department {
  id: string
  name: string
  description: string
  members: TeamMember[]
}

export const teamDepartments: Department[] = [
  {
    id: 'leadership',
    name: 'Leadership & Research Team',
    description:
      'World-class innovators driving textile technology into the future through AI, materials science, and engineering excellence.',
    members: [
      {
        id: 'chagla',
        name: 'Chagla Amanullah',
        title: 'Managing Director',
        bio: 'Providing strategic direction for Saturn Textiles and guiding the company\'s innovation-led future.',
        responsibilities: [
          'Strategic direction and innovation roadmap',
          'Research team leadership and mentorship',
          'Industry partnerships and collaborations',
          'Grant acquisition and funding strategy',
          'Vision for future textile technologies',
        ],
      },
      {
        id: 'rahin',
        name: 'Md Rahinur Rahman',
        title: 'Lead AI Systems Engineer',
        bio: 'Leads the design and development of reliable AI systems for Saturn Textiles.',
        responsibilities: [
          'AI architecture and system design',
          'Neural network model optimization',
          'Smart textile AI integration',
          'Performance benchmarking and testing',
          'Research publication and patents',
        ],
        image: '/rahin-photo.png',
      },
      {
        id: 'ninad',
        name: 'Mohammad Ninad Mahmud Nobo',
        title: 'Lead AI Software Engineer',
        bio: 'Leads AI software engineering and full-stack development for Saturn R&D platforms.',
        extendedBio: [
          'Ninad leads the development of FABINS, an AI-powered Fabric Inspection System, along with the department\'s web ecosystem.',
          'He graduated in Computer Science and Engineering from Bangladesh University of Engineering and Technology (BUET), one of Bangladesh\'s top engineering schools. There, he explored how AI could tackle real, messy problems, from automated software testing to medical image analysis to Bangla speech processing. That mix of research and hands-on building led him to industrial AI, where the challenges are just as complex, but the impact is immediate and visible on the factory floor.',
          'His research includes AutoTestGenX, a multi-agent system that writes and runs software tests on its own, and MedCAR, which makes sense of conflicting AI readings of chest X-rays. He has also built practical AI apps beyond FABINS. MindTrace gives caregivers simple tools to support people with dementia. GemmaVetCare gives farmers quick AI advice on animal health, even with weak internet access.'
        ],
        email: 'mninadmnobo@gmail.com',
        responsibilities: [
          'Full-stack development of R&D Department Portfolio & FABINS web applications',
          'Image processing, computer vision model training for FABINS',
          'ML pipeline architecture & production deployment',
          'API design, software quality standards, & DevOps automation'
        ],
        social: {
          portfolio: 'https://mninadmnobo.github.io',
          github: 'https://github.com/mninadmnobo',
          linkedin: 'https://www.linkedin.com/in/mninadmnobo',
          scholar: 'https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao',
          orcid: 'https://orcid.org/0009-0006-2781-6693'
        },
        image: '/ninad-photo.png',
      },
    ],
  },
]
