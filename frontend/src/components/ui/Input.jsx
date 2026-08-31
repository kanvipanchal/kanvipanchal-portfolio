import { forwardRef } from 'react'
import { cn } from '@utils/cn.js'

/**
 * Input — text input / textarea / select, wired for React Hook Form via
 * ref forwarding + {...register('field')} spread from the parent form.
 */
const Input = forwardRef(function Input(
  { label, error, as: Tag = 'input', className, id, ...props },
  ref,
) {
  const inputId = id || props.name

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]">
          {label}
        </label>
      )}
      <Tag
        id={inputId}
        ref={ref}
        className={cn(
          'w-full rounded-[var(--radius-sm)] border bg-[var(--bg-surface)] px-4 py-2.5 text-sm',
          'text-[var(--text-primary)] placeholder:text-[var(--text-muted)]',
          'transition-colors duration-200 outline-none',
          error ? 'border-red-500' : 'border-[var(--border-subtle)] focus:border-[var(--accent)]',
          Tag === 'textarea' && 'min-h-32 resize-y',
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
})

export default Input
