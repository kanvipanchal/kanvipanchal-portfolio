import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  Mail,
  Star,
  Users,
} from 'lucide-react'
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
  const heroStats = [
    { icon: CalendarDays, value: '2+', label: 'Years of Experience' },
    { icon: BriefcaseBusiness, value: '15+', label: 'Projects Completed' },
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: Star, value: '5+', label: 'Average Rating' },
  ]

  const socialLinks = [
    { label: 'GitHub', href: personalInfo.github, icon: GithubIcon },
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: LinkedinIcon },
    { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
    { label: 'Projects', href: '/projects', icon: ArrowUpRight },
  ]

  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12" containerClassName="max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07080d] px-5 py-8 text-left shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(118,73,255,0.2),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.07),transparent_20%),radial-gradient(circle_at_70%_60%,rgba(106,66,255,0.42),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />
          <div className="absolute inset-0 rounded-[32px] border border-white/5" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                Hello, I&apos;m
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                {personalInfo.name}
              </h1>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-2 text-2xl font-medium text-white/90 sm:text-3xl lg:text-[2.35rem]">
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
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
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="relative min-h-[360px] lg:min-h-[520px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[26rem] w-[26rem] rounded-full bg-violet-500/18 blur-3xl" />
                <div className="absolute h-[20rem] w-[20rem] rounded-full border border-white/10" />
                <div className="absolute h-[31rem] w-[31rem] rounded-full border border-white/8" />
                <div className="absolute h-[38rem] w-[38rem] rounded-full border border-white/[0.05]" />
                <div className="absolute left-[10%] top-[12%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
                <div className="absolute right-[12%] top-[10%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
                <div className="absolute right-[6%] bottom-[26%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
                <div className="absolute left-[2%] bottom-[18%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
              </div>

              <div className="absolute inset-x-8 bottom-0 top-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_35%,rgba(129,72,255,0.9),rgba(65,30,150,0.78)_26%,rgba(10,10,15,0.25)_58%,rgba(10,10,15,0)_72%)] opacity-95 blur-[1px]" />
              <div className="absolute inset-x-10 bottom-0 top-12 rounded-[2rem] border border-white/6 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_35%)]" />

              <div className="absolute inset-x-14 bottom-0 top-8 flex items-end justify-center">
                <div className="relative h-[92%] w-full max-w-[390px]">
                  <div className="absolute left-1/2 top-2 h-28 w-28 -translate-x-1/2 rounded-full border border-white/18 bg-[radial-gradient(circle_at_35%_30%,#2b2b35,#101116_68%,#040507_100%)] shadow-[0_0_0_16px_rgba(107,70,193,0.06)]" />
                  <div className="absolute left-1/2 top-16 h-[23rem] w-[18rem] -translate-x-1/2 rounded-[40%_40%_28%_28%/18%_18%_12%_12%] bg-[linear-gradient(180deg,#1b1a22_0%,#0f1016_38%,#090a0f_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />
                  <div className="absolute left-1/2 top-[4.25rem] h-44 w-44 -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.18),rgba(24,25,35,0.95)_58%,rgba(6,7,10,0.98)_100%)] blur-[0.3px]" />
                  <div className="absolute left-1/2 top-[7.5rem] h-[17rem] w-[14rem] -translate-x-1/2 rounded-[38%_38%_30%_30%/22%_22%_14%_14%] bg-[linear-gradient(180deg,#15161d,#0d0e13)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
                  <div className="absolute left-1/2 top-[6.8rem] h-24 w-[15rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(145,92,255,0.65),transparent_70%)] blur-2xl" />
                  <div className="absolute left-1/2 top-[10.8rem] h-3 w-24 -translate-x-1/2 rounded-full bg-black/80" />
                  <div className="absolute left-1/2 top-[11.8rem] h-48 w-[18rem] -translate-x-1/2 rounded-[46%_46%_25%_25%/16%_16%_12%_12%] bg-[linear-gradient(180deg,#20212a_0%,#11121a_30%,#090a10_100%)] shadow-[0_-18px_48px_rgba(0,0,0,0.45)]" />
                  <div className="absolute left-1/2 top-[13rem] h-8 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_75%)]" />
                  <div className="absolute left-1/2 top-[15.2rem] h-60 w-[15.5rem] -translate-x-1/2 rounded-[44%_44%_10%_10%/16%_16%_8%_8%] bg-[linear-gradient(180deg,#111118_0%,#090a0f_100%)]" />
                  <div className="absolute bottom-0 left-1/2 h-16 w-[20rem] -translate-x-1/2 rounded-t-[48%] bg-[linear-gradient(180deg,#14151b,#0b0c10)]" />
                  <div className="absolute bottom-6 left-1/2 h-24 w-[18rem] -translate-x-1/2 rounded-[35%_35%_14%_14%/28%_28%_10%_10%] bg-[linear-gradient(180deg,#191b23,#0c0d12)] shadow-[0_24px_50px_rgba(0,0,0,0.5)]" />
                  <div className="absolute bottom-8 left-1/2 h-12 w-[20rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(145,92,255,0.24),transparent_70%)] blur-xl" />
                  <div className="absolute inset-x-1/2 top-[9.4rem] h-[12.5rem] w-[8rem] -translate-x-1/2 rounded-[38%] border border-white/8" />
                  <div className="absolute inset-x-1/2 top-[8.7rem] h-2 w-[12rem] -translate-x-1/2 rounded-full bg-white/10 blur-sm" />
                  <div className="absolute inset-x-1/2 top-[6rem] h-10 w-[13rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.22),transparent_68%)] blur-2xl" />
                  <div className="absolute bottom-[5.5rem] left-1/2 h-28 w-[20rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_72%)] blur-2xl" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 mt-10 rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:mt-12 sm:p-6"
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
