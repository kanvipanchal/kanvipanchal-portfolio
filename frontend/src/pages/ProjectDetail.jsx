import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import Card from '@components/ui/Card.jsx'
import { projects } from '@data/projects.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <Navigate to="/404" replace />

  return (
    <Section className="pt-16">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]">
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      <p className="font-mono text-xs text-[var(--accent)]">{project.subtitle}</p>
      <Heading as="h1" size="display" className="mt-2 max-w-2xl">{project.title}</Heading>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
      </div>

      <Card className="mt-10">
        <h3 className="mb-4 font-medium text-[var(--text-primary)]">Key Features</h3>
        <ul className="space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              {f}
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  )
}
