import { Download, ExternalLink, FileText } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Button from '@components/ui/Button.jsx'

const resumeUrl = '/resume.pdf?v=af953baa'

export default function Resume() {
  return (
    <Section className="pt-16 text-center">
      <Heading eyebrow="CV" size="display" as="h1" className="mx-auto max-w-xl">Resume</Heading>
      <p className="mx-auto mt-4 max-w-md text-[var(--text-secondary)]">
        Read my latest resume below or download a copy. Explore my experience at Atharva University and PTCGRAM, technical skills, projects, and education.
      </p>
      <Button as="a" href={resumeUrl} download="Kanvi Panchal.pdf" className="mt-6 w-full sm:w-auto" icon={Download}>
        Download Resume
      </Button>

      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] text-left shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] px-4 py-3 sm:px-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
            <FileText size={18} className="text-[var(--accent)]" aria-hidden="true" />
            Resume preview
          </h2>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline">
            Open in new tab <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
        <object
          data={`${resumeUrl}#view=FitH`}
          type="application/pdf"
          title="Kanvi Panchal resume preview"
          aria-label="Kanvi Panchal resume PDF"
          className="block h-[75dvh] min-h-[480px] w-full bg-white sm:min-h-[640px]"
        >
          <div className="px-6 py-12 text-center">
            <p className="text-sm text-[var(--text-secondary)]">Your browser cannot display the PDF here. Open the resume in a new tab to read it.</p>
            <Button as="a" href={resumeUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-5" icon={ExternalLink}>
              Open Resume
            </Button>
          </div>
        </object>
      </div>
    </Section>
  )
}
