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
  /** Unique, kebab-case identifier — used as the React list key. */
  id: string
  /** Full display name, including any title prefix (e.g. "Dr."). */
  name: string
  /** Job title / role, shown directly under the name. */
  title: string
  /** Short bio — background, focus area, credentials. Aim for 1-3 sentences. */
  bio: string
  /** Bullet list of key ownership areas, rendered as pill tags. */
  responsibilities: string[]
  /** Optional avatar image path. Falls back to initials when omitted. */
  image?: string
  /** Optional external profile links. Only the links you provide are rendered. */
  social?: {
    github?: string
    linkedin?: string
    portfolio?: string
  }
}

/** A group of team members shown together under a shared heading. */
export interface Department {
  /** Unique, kebab-case identifier. */
  id: string
  /** Heading shown above this department's members. */
  name: string
  /** One or two sentences describing the department's mission. */
  description: string
  /** Members of this department. See `TeamMember` for the shape. */
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
        id: 'amanullah-chagla',
        name: 'Amanullah Chagla',
        title: 'Managing Director (MD)',
        bio: 'Providing strategic direction for Saturn Textiles and guiding the company\'s innovation-led future.',
        responsibilities: [
          'Strategic direction and innovation roadmap',
          'Research team leadership and mentorship',
          'Industry partnerships and collaborations',
          'Grant acquisition and funding strategy',
          'Vision for future textile technologies',
        ],
        // A portrait has not yet been supplied; use the Saturn mark meanwhile.
        image: '/saturn-logo.png',
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
        name: 'Mohammad Ninad Mahmud',
        title: 'Lead AI Software Engineer',
        bio: 'Leads AI software development and delivers robust, production-ready intelligent applications.',
        responsibilities: [
          'Production ML pipeline development',
          'API and integration layer design',
          'Software quality and testing standards',
          'Deployment and DevOps automation',
          'Technology stack leadership',
        ],
        image: '/ninad-photo.png',
      },
    ],
  },
]
