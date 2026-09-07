import Section from '@components/ui/Section.jsx'
import Button from '@components/ui/Button.jsx'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection() {
  return (
    <Section>
      <div className="flex flex-col justify-between gap-8 border-l-2 border-[var(--accent)] pl-6 sm:pl-10 lg:flex-row lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Have a project in mind?</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Let's make it happen.</h2>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            Available for freelance projects, contract work, and full-time opportunities.
          </p>
        </div>
        <Button as="a" href="/contact" size="lg" icon={ArrowUpRight} className="shrink-0 self-start lg:self-center">
          Get in Touch
        </Button>
      </div>
    </Section>
  )
}
