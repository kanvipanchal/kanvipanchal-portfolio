import { forwardRef } from 'react'
import { cn } from '@utils/cn.js'

const variants = {
  primary:
    'bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 shadow-[var(--shadow-soft)]',
  secondary:
    'bg-[var(--bg-surface-2)] text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)]',
  ghost: 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface-2)]',
  outline: 'bg-transparent border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent)]',
}

const sizes = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-6 py-3.5 gap-2.5',
}

/**
 * Button — the single source of truth for every clickable CTA in the app.
 * Renders as <button> by default, or as="a" href="..." for links.
 */
const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className, as: Tag = 'button', icon: Icon, iconPosition = 'right', ...props },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium',
        'transition-all duration-200 ease-[var(--ease-out-quart)]',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2} />}
    </Tag>
  )
})

export default Button
