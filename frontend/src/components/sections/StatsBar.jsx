import { motion } from 'framer-motion'

/** StatsBar — grid of key numbers, reused on Home and About. */
export default function StatsBar({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
          className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5"
        >
          <p className="font-display text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
