import { cn } from '@utils/cn.js'

const sizes = {
  display: 'text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]',
  h1: 'text-3xl sm:text-4xl font-semibold leading-tight',
  h2: 'text-2xl sm:text-3xl font-semibold leading-tight',
  h3: 'text-xl sm:text-2xl font-semibold leading-snug',
  h4: 'text-lg font-medium leading-snug',
}

/** Heading — enforces the site's type scale instead of ad-hoc font sizes. */
export default function Heading({ children, as: Tag = 'h2', size = 'h2', className, eyebrow }) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}
      <Tag className={cn(sizes[size], 'text-[var(--text-primary)]', className)}>{children}</Tag>
    </div>
  )
}
