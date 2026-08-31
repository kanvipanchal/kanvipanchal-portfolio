import { NavLink } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@components/ui/icons/BrandIcons.jsx'
import Container from '@components/ui/Container.jsx'
import { FOOTER_LINKS } from '@constants/navigation.js'
import { personalInfo } from '@data/personalInfo.js'

function LinkColumn({ title, links }) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-semibold text-[var(--text-primary)]">
            Kanvi<span className="text-[var(--accent)]">.</span>dev
          </p>
          <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">{personalInfo.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <LinkColumn title="Explore" links={FOOTER_LINKS.explore} />
        <LinkColumn title="Resources" links={FOOTER_LINKS.resources} />
        <LinkColumn title="Connect" links={FOOTER_LINKS.connect} />
      </Container>

      <div className="border-t border-[var(--border-subtle)] py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono">Built with React · Node.js · MongoDB</p>
        </Container>
      </div>
    </footer>
  )
}
