/**
 * Central icon registry.
 *
 * Content data (research areas, achievements, etc.) references icons by
 * name so the data files stay plain, serializable objects instead of
 * importing React components directly. This registry is the single place
 * that maps those names to actual `lucide-react` components.
 *
 * ## How to use a new icon in a data entry
 *
 * 1. Import it below and add it to `iconRegistry`.
 * 2. Reference it by name in the data file — TypeScript will only accept
 *    names that exist in this registry (`IconName`), so a typo is a
 *    compile error instead of a silently-missing icon at runtime.
 *
 * @example
 * // lib/data/research.ts
 * { ..., icon: 'Leaf' } // 'Leaf' must be a key of iconRegistry
 *
 * // in a page component
 * import { getIcon } from '@/lib/icons'
 * const Icon = getIcon(area.icon)
 * <Icon className="w-6 h-6" />
 */
import {
  Award,
  Beaker,
  BookOpen,
  Calendar,
  CheckCircle,
  Droplets,
  Flame,
  Globe,
  Hammer,
  Heart,
  Leaf,
  Microscope,
  Palette,
  Rocket,
  TreePine,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

/** Every icon a data entry is allowed to reference by name. */
export const iconRegistry = {
  Award,
  Beaker,
  BookOpen,
  Calendar,
  CheckCircle,
  Droplets,
  Flame,
  Globe,
  Hammer,
  Heart,
  Leaf,
  Microscope,
  Palette,
  Rocket,
  TreePine,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} satisfies Record<string, LucideIcon>

/** Union of valid icon names — use this as the type for any data field that names an icon. */
export type IconName = keyof typeof iconRegistry

/** Resolve a registered icon name to its component. */
export function getIcon(name: IconName): LucideIcon {
  return iconRegistry[name]
}
