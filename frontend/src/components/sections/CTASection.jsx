import { motion } from 'framer-motion'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Button from '@components/ui/Button.jsx'
import Badge from '@components/ui/Badge.jsx'
import { ArrowRight } from 'lucide-react'

/** CTASection — the recurring "Let's Build Something Amazing" contact prompt. */
export default function CTASection() {
  return (
    <Section tone="surface">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="flex flex-col items-center gap-5 rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-6 py-16 text-center"
      >
        <Badge tone="accent" dot>Available for Freelance Projects</Badge>
        <Heading size="display" as="h2">Let's build something amazing.</Heading>
        <p className="max-w-xl text-[var(--text-secondary)]">
          Open to freelance, contract, and full-time opportunities. Usually replies within 24 hours.
        </p>
        <Button as="a" href="/contact" size="lg" icon={ArrowRight}>
          Start a Project
        </Button>
      </motion.div>
    </Section>
  )
}
