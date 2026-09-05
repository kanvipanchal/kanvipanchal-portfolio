import { cn } from '@utils/cn.js'

/**
 * Card — base surface for projects, client work, blog posts, testimonials.
 * Shared surface with a subtle border and optional hover emphasis.
 */
export default function Card({ children, className, hoverable = false, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={cn(
        'portfolio-card block min-w-0 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]',
        'p-6 transition-all duration-300 ease-[var(--ease-out-quart)]',
        hoverable && 'hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] hover:border-[var(--accent)] cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
