'use client'

import { motion } from 'framer-motion'
import { Crown, Cpu, Globe } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { fadeUpProps } from '@/lib/animations'
import { Badge } from '@/components/ui/badge'
import { TeamMember } from '@/lib/data/team'

// Simple GitHub and LinkedIn SVG Icons
const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4.5 h-4.5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4.5 h-4.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.896-1.597 2.117 0 3.704 1.38 3.704 4.347v5.603zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.768-1.708 1.959-1.708 1.188 0 1.914.753 1.939 1.708 0 .949-.751 1.707-1.983 1.707zm1.582 11.019H3.771V9.724h3.148v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

export interface ProfileCardProps {
  /** The person to display. See `TeamMember` in `lib/data/team.ts`. */
  member: TeamMember
  /**
   * Renders the hero/lead treatment: larger avatar, horizontal layout on
   * desktop, and a gold/amber accent instead of the standard brand blue.
   * Use for a Managing Director / department head; omit for everyone else.
   */
  featured?: boolean
}

/**
 * A team member's card, used in the homepage Leadership & Engineering
 * section. Color grading is fully theme-aware — it's driven by CSS custom
 * properties (`--chart-4`, `--secondary`, etc. from `app/globals.css`), so
 * the same classes render correctly in both light and dark mode.
 */
export const ProfileCard = ({ member, featured = false }: ProfileCardProps) => {
  const { name, title, bio, responsibilities, social, image } = member
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  // Managing Director gets a gold/amber accent to signal rank; engineers share
  // the brand electric-blue accent. Both tokens are theme-aware (defined per
  // light/dark in globals.css), so the whole card re-grades automatically.
  const accent = featured
    ? {
        text: 'text-chart-4',
        soft: 'bg-chart-4/10',
        border: 'border-chart-4/30',
        from: 'from-chart-4',
        to: 'to-chart-4/50',
        shadow: 'hover:shadow-chart-4/20',
        socialHoverBg: 'hover:bg-chart-4',
        socialHoverText: 'hover:text-neutral-900',
        icon: Crown,
        label: 'Managing Director',
      }
    : {
        text: 'text-secondary',
        soft: 'bg-secondary/10',
        border: 'border-secondary/30',
        from: 'from-secondary',
        to: 'to-secondary/50',
        shadow: 'hover:shadow-secondary/20',
        socialHoverBg: 'hover:bg-secondary',
        socialHoverText: 'hover:text-white',
        icon: Cpu,
        label: 'Engineering Team',
      }

  const CategoryIcon = accent.icon

  return (
    <motion.div
      {...fadeUpProps(0, 0.6)}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative h-full overflow-hidden rounded-3xl border bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-300',
        'hover:shadow-2xl hover:border-transparent',
        accent.border,
        accent.shadow
      )}
    >
      {/* Top accent bar */}
      <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', accent.from, 'to-transparent')} />

      {/* Decorative glow blobs — colored per role, theme-aware via CSS variables */}
      <div className={cn('pointer-events-none absolute -top-14 -right-14 w-40 h-40 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-35', accent.text.replace('text-', 'bg-'))} />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />

      <div
        className={cn(
          'relative flex h-full flex-col p-8 md:p-10',
          featured && 'md:flex-row md:items-center md:gap-10 md:p-12'
        )}
      >
        {/* Avatar */}
        <div className={cn('flex justify-center', featured ? 'md:justify-start md:shrink-0' : 'mb-6')}>
          <div className="relative">
            <div
              className={cn(
                'absolute -inset-2 rounded-full bg-gradient-to-br opacity-40 blur-md',
                accent.from,
                accent.to
              )}
            />
            <div
              className={cn(
                'relative flex items-center justify-center rounded-full bg-gradient-to-br font-bold text-white ring-4 ring-card',
                accent.from,
                accent.to,
                featured ? 'w-28 h-28 md:w-32 md:h-32 text-4xl' : 'w-20 h-20 md:w-24 md:h-24 text-2xl'
              )}
            >
              {image ? (
                <img
                  src={image}
                  alt={`${name} portrait`}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={cn('flex-1 text-center', featured && 'md:text-left')}>
          {/* Role category badge */}
          <div className={cn('mb-3 flex', featured ? 'justify-center md:justify-start' : 'justify-center')}>
            <Badge icon={CategoryIcon} className={cn(accent.soft, accent.text, 'font-bold uppercase tracking-wide')}>
              {accent.label}
            </Badge>
          </div>

          <h3 className={cn('font-bold text-foreground mb-1', featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl')}>
            {name}
          </h3>
          <p className={cn('font-semibold mb-3', accent.text, featured ? 'text-base md:text-lg' : 'text-sm md:text-base')}>
            {title}
          </p>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {bio}
          </p>

          {/* Responsibilities */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Key Responsibilities
            </p>
            <div className={cn('flex flex-wrap gap-2', featured ? 'justify-center md:justify-start' : 'justify-center')}>
              {responsibilities.map((resp) => (
                <Badge key={resp} className={cn('border font-medium', accent.soft, accent.text, accent.border)}>
                  {resp}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className={cn('flex items-center gap-3', featured ? 'justify-center md:justify-start' : 'justify-center')}>
            {social?.portfolio && (
              <Link
                href={social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted/60 text-foreground transition-colors',
                  accent.socialHoverBg,
                  accent.socialHoverText
                )}
                aria-label="Portfolio"
              >
                <Globe className="w-4.5 h-4.5" />
              </Link>
            )}
            {social?.github && (
              <Link
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted/60 text-foreground transition-colors',
                  accent.socialHoverBg,
                  accent.socialHoverText
                )}
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
            )}
            {social?.linkedin && (
              <Link
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted/60 text-foreground transition-colors',
                  accent.socialHoverBg,
                  accent.socialHoverText
                )}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
