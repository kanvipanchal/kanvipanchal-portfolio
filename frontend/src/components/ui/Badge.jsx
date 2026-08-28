import { cn } from '@utils/cn.js'

const tones = {
  neutral: 'bg-[var(--bg-surface-2)] text-[var(--text-secondary)] border-[var(--border-subtle)]',
  accent: 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/25',
  success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/25',
}

/** Badge — small status/label chip (e.g. "Available for Freelance", "Live"). */
export default function Badge({ children, tone = 'neutral', className, dot = false }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />}
      {children}
    </span>
  )
}
