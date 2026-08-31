import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  Mail,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@components/ui/icons/BrandIcons.jsx'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Button from '@components/ui/Button.jsx'
import Badge from '@components/ui/Badge.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import CTASection from '@components/sections/CTASection.jsx'
import { personalInfo } from '@data/personalInfo.js'
import { projects } from '@data/projects.js'
import { clientWork } from '@data/clientWork.js'

export default function Home() {
  const heroStats = [
    { icon: CalendarDays, value: '2+', label: 'Years of Experience' },
    { icon: BriefcaseBusiness, value: '15+', label: 'Projects Completed' },
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: Star, value: '5.0', label: 'Average Rating' },
  ]

  const socialLinks = [
    { label: 'GitHub', href: personalInfo.github, icon: GithubIcon },
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: LinkedinIcon },
    { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
    { label: 'Projects', href: '/projects', icon: ArrowUpRight },
  ]

  const focusPoints = [
    'Responsive frontends',
    'Scalable APIs',
    'Production-ready UI',
    'Clean handoff',
  ]

  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12" containerClassName="max-w-[1220px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#06070b] text-left shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(120,74,255,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_68%_62%,rgba(124,58,237,0.4),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
          <div className="absolute inset-0 rounded-[34px] border border-white/5" />

          <div className="relative grid items-center gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="max-w-2xl"
            >
              <Badge tone="accent" dot className="border-white/10 bg-white/5 text-white/75">
                Available for Freelance Projects
              </Badge>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
                Hello, I&apos;m
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                {personalInfo.name}
              </h1>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-2xl font-medium text-white/90 sm:text-3xl lg:text-[2.35rem]">
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-200 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <span>Developer</span>
                <span className="terminal-caret text-violet-300">|</span>
              </p>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                I build responsive, user-friendly, and high-performance web applications that solve real-world problems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  as="a"
                  href="/projects"
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500 text-white shadow-[0_18px_45px_rgba(124,58,237,0.35)] hover:opacity-95"
                  icon={ArrowUpRight}
                >
                  View My Work
                </Button>
                <Button
                  as="a"
                  href="/resume"
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
                  icon={Download}
                >
                  Download CV
                </Button>
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                  Follow me
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {socialLinks.map(({ label, href, icon: Icon }) => {
                    const external = href.startsWith('http')
                    return (
                      <a
                        key={label}
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
                      >
                        <Icon size={18} strokeWidth={1.9} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="relative min-h-[380px] lg:min-h-[540px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[28rem] w-[28rem] rounded-full bg-violet-500/18 blur-3xl" />
                <div className="absolute h-[20rem] w-[20rem] rounded-full border border-white/10" />
                <div className="absolute h-[31rem] w-[31rem] rounded-full border border-white/8" />
                <div className="absolute h-[40rem] w-[40rem] rounded-full border border-white/[0.05]" />
                <div className="absolute left-[12%] top-[12%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
                <div className="absolute right-[14%] top-[10%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
                <div className="absolute right-[8%] bottom-[28%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
                <div className="absolute left-[4%] bottom-[20%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
              </div>

              <div className="absolute inset-x-10 bottom-2 top-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_34%,rgba(133,79,255,0.95),rgba(63,29,145,0.72)_26%,rgba(10,10,15,0.25)_58%,rgba(10,10,15,0)_76%)] opacity-95 blur-[1px]" />
              <div className="absolute inset-x-12 bottom-2 top-12 rounded-[2rem] border border-white/6 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_35%)]" />

              <div className="absolute inset-x-12 bottom-10 top-8 flex items-center justify-center">
                <div className="relative w-full max-w-[430px]">
                  <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full border border-white/15 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),rgba(14,15,21,0.95)_70%,rgba(6,7,10,0.98)_100%)] shadow-[0_0_0_18px_rgba(107,70,193,0.06)]" />
                  <div className="absolute left-1/2 top-7 h-14 w-14 -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.25),rgba(255,255,255,0.08)_55%,rgba(10,10,15,0.95)_100%)]" />
                  <div className="absolute left-1/2 top-10 h-56 w-[19rem] -translate-x-1/2 rounded-[38%_38%_24%_24%/18%_18%_12%_12%] bg-[linear-gradient(180deg,#171821_0%,#0e1016_42%,#090a0f_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />
                  <div className="absolute left-1/2 top-24 h-24 w-[17rem] -translate-x-1/2 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(134,84,255,0.6),transparent_68%)] blur-2xl" />
                  <div className="absolute left-1/2 top-24 h-28 w-28 -translate-x-1/2 rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.12),rgba(19,20,28,0.95)_72%,rgba(6,7,10,0.98)_100%)]" />
                  <div className="absolute left-1/2 top-[5.25rem] h-10 w-28 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_72%)] blur-xl" />
                  <div className="absolute left-1/2 top-[6.1rem] h-40 w-[16.5rem] -translate-x-1/2 rounded-[42%_42%_28%_28%/20%_20%_12%_12%] bg-[linear-gradient(180deg,#11131a_0%,#090a10_100%)]" />
                  <div className="absolute left-1/2 top-[7rem] h-24 w-16 -translate-x-1/2 rounded-[44%] border border-white/8 bg-[linear-gradient(180deg,#171923,#0d0e14)]" />
                  <div className="absolute left-1/2 top-[7.65rem] h-4 w-20 -translate-x-1/2 rounded-full bg-black/80" />
                  <div className="absolute left-1/2 top-[9.5rem] h-20 w-[14rem] -translate-x-1/2 rounded-[48%_48%_32%_32%/24%_24%_18%_18%] bg-[linear-gradient(180deg,#111219_0%,#090a10_100%)]" />
                  <div className="absolute bottom-0 left-1/2 h-24 w-[20rem] -translate-x-1/2 rounded-t-[48%] bg-[linear-gradient(180deg,#15161d,#0b0c10)]" />
                  <div className="absolute bottom-8 left-1/2 h-20 w-[17rem] -translate-x-1/2 rounded-[35%_35%_16%_16%/28%_28%_12%_12%] bg-[linear-gradient(180deg,#191b24,#0c0d12)] shadow-[0_24px_50px_rgba(0,0,0,0.45)]" />
                  <div className="absolute bottom-12 left-1/2 h-12 w-[19rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(145,92,255,0.22),transparent_70%)] blur-xl" />

                  <div className="absolute left-1/2 top-[12.25rem] flex w-[22rem] -translate-x-1/2 items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.35)]">
                        KP
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Kanvi Panchal</p>
                        <p className="text-xs text-white/55">Full Stack Web Developer</p>
                      </div>
                    </div>
                    <Sparkles className="text-violet-300" size={18} />
                  </div>

                  <div className="absolute left-1/2 top-[15.8rem] w-[20rem] -translate-x-1/2 rounded-[22px] border border-white/10 bg-[#0a0b10]/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/45">
                      <Code2 size={14} />
                      Built for production
                    </div>
                    <pre className="mt-3 overflow-hidden text-left font-mono text-[11px] leading-5 text-white/72">
                      {`const profile = {
  focus: 'Responsive UI + APIs',
  location: 'Mumbai, India',
  stack: ['React', 'Node', 'MongoDB']
}`}
                    </pre>
                  </div>

                  <div className="absolute left-1/2 bottom-[1.05rem] flex w-[24rem] -translate-x-1/2 flex-wrap justify-center gap-2">
                    {focusPoints.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 mx-5 -mb-6 rounded-[26px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:mx-8 sm:p-6 lg:mx-12"
          >
            <div className="grid gap-4 divide-y divide-white/8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {heroStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-center gap-4 px-2 py-3 sm:px-5 sm:py-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-400/10 text-violet-300">
                      <Icon size={19} strokeWidth={1.9} />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/55">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
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
