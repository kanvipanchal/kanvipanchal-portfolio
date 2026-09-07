import { ArrowUpRight, Mail, UserRound } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@components/ui/icons/BrandIcons.jsx'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Button from '@components/ui/Button.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import CTASection from '@components/sections/CTASection.jsx'
import { personalInfo } from '@data/personalInfo.js'
import { projects } from '@data/projects.js'
import { clientWork } from '@data/clientWork.js'

export default function Home() {
  const socialLinks = [
    { label: 'GitHub', href: personalInfo.github, icon: GithubIcon },
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: LinkedinIcon },
    { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
  ]

  return (
    <>
      <Section className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="max-w-xl">
            {personalInfo.availability.freelance && (
              <p className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                Available for freelance projects
              </p>
            )}
            <p className="mt-9 text-base text-[var(--text-secondary)]">Hello, I'm</p>
            <h1 className="mt-2 text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {personalInfo.name}
            </h1>
            <p className="mt-5 font-display text-2xl font-medium text-[var(--accent)] sm:text-3xl">
              {personalInfo.role}
            </p>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--text-secondary)]">
              I build thoughtful, reliable web applications.
              From responsive interfaces to scalable backends, I help turn ideas into products people enjoy using.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="/projects" size="lg" icon={ArrowUpRight}>
                View My Work
              </Button>
              <Button as="a" href="/resume" size="lg" variant="outline">
                View Resume
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <p className="text-sm text-[var(--text-secondary)]">{personalInfo.location}</p>
              <div className="flex items-center gap-1">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-2)] hover:text-[var(--accent)]"
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[400px] lg:ml-auto lg:mr-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--bg-surface-2)]">
              {personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  width={400}
                  height={500}
                  fetchPriority="high"
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-[var(--text-muted)]">
                  <UserRound size={56} strokeWidth={1} aria-hidden="true" />
                  <p className="text-sm">Portrait coming soon</p>
                </div>
              )}
            </div>
          </div>
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
