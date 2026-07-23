export interface PageHeaderProps {
  title: string
  description: string
}

/**
 * The centered title + description banner shown at the top of every
 * content page (Research, Projects, News, etc.), directly under the navbar.
 * Pair with `PageShell`.
 */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-secondary/10 to-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-foreground/70">{description}</p>
      </div>
    </div>
  )
}
