import { cn } from '@utils/cn.js'

/**
 * TechTag — the portfolio's signature element: a monospace, code-styled
 * pill used everywhere a technology name appears (hero, cards, filters).
 * Renders like an inline tag, e.g. <React /> or #MongoDB, to visually tie
 * the whole site back to "this is written by a developer."
 */
export default function TechTag({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-xs)] border border-[var(--border-subtle)]',
        'bg-[var(--bg-surface-2)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
