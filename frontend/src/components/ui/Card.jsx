import { cn } from '@utils/cn.js'

/**
 * Card — base surface for projects, client work, blog posts, testimonials.
 * hoverable adds the lift + glow interaction used on clickable cards.
 */
export default function Card({ children, className, hoverable = false, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={cn(
        'rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]',
        'p-6 transition-all duration-300 ease-[var(--ease-out-quart)]',
        hoverable && 'hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] hover:border-[var(--accent)]/40 cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
