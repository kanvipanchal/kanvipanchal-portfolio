import Card from '@components/ui/Card.jsx'

const SUMMARY = [
  { label: 'Projects', value: '2' },
  { label: 'Client Sites', value: '7' },
  { label: 'New Inquiries', value: '0' },
  { label: 'Blog Posts', value: '0' },
]

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-[var(--text-primary)]">Dashboard</h1>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">Overview of your portfolio content and inquiries.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {SUMMARY.map((s) => (
          <Card key={s.label}>
            <p className="text-2xl font-semibold text-[var(--text-primary)]">{s.value}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">{s.label}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
