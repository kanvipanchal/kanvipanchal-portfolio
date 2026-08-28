import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@components/ui/icons/BrandIcons.jsx'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Button from '@components/ui/Button.jsx'
import Badge from '@components/ui/Badge.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import StatsBar from '@components/sections/StatsBar.jsx'
import CTASection from '@components/sections/CTASection.jsx'
import { personalInfo } from '@data/personalInfo.js'
import { projects } from '@data/projects.js'
import { experience } from '@data/experience.js'
import { clientWork } from '@data/clientWork.js'

export default function Home() {
  return (
    <>
      {/* HERO - signature terminal-style intro */}
      <Section className="pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Badge tone="accent" dot className="mb-6">Available for Freelance Projects</Badge>

            <div className="mb-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3 font-mono text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--accent)]">const</span> developer = {'{'}
              <br />
              &nbsp;&nbsp;name: <span className="text-amber-400">"{personalInfo.name}"</span>,
              <br />
              &nbsp;&nbsp;stack: <span className="text-amber-400">"MERN"</span>
              <span className="terminal-caret">|</span>
              <br />
              {'}'}
            </div>

            <Heading as="h1" size="display" className="max-w-xl">
              Full Stack Developer building fast, scalable web products.
            </Heading>

            <p className="mt-5 max-w-lg text-base text-[var(--text-secondary)] sm:text-lg">
              {personalInfo.summary}
            </p>
            <p className="mt-3 max-w-lg text-sm font-medium text-[var(--accent)] sm:text-base">
              Trusted across 10+ live website launches for businesses, brands, and e-commerce teams.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as="a" href="/projects" icon={ArrowRight}>
                View Projects
              </Button>
              <Button as="a" href="/contact" variant="secondary">
                Hire Me
              </Button>
              <Button
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                icon={GithubIcon}
                iconPosition="left"
              >
                GitHub
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 rounded-[var(--radius-xl)] bg-[var(--accent)]/10 blur-2xl" />
            <Card className="relative">
              <p className="mb-4 font-mono text-xs text-[var(--text-muted)]">// currently building</p>
              <div className="space-y-3">
                {experience.slice(0, 1).map((job) => (
                  <div key={job.id}>
                    <p className="font-medium text-[var(--text-primary)]">{job.role}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{job.company}</p>
                    <p className="mt-1 font-mono text-xs text-[var(--accent)]">{job.period}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16">
          <StatsBar stats={personalInfo.stats} />
        </div>
      </Section>

      <Section tone="surface">
        <Heading eyebrow="Selected Work" size="h1" className="mb-10">
          Featured Projects
        </Heading>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} hoverable as="a" href={`/projects/${project.id}`}>
              <p className="font-mono text-xs text-[var(--accent)]">{project.subtitle}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Production Websites" size="h1" className="mb-10">
          Client Work
        </Heading>
        <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
          A growing body of real client work across 10+ live websites, from business showcases to e-commerce builds.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientWork.slice(0, 6).map((site) => (
            <Card key={site.id} hoverable as="a" href={`/client-work/${site.id}`} className="p-5">
              <h4 className="font-medium text-[var(--text-primary)]">{site.name}</h4>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{site.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
