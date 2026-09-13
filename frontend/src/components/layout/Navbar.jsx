import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight, House, UserRound, BriefcaseBusiness, Handshake, FolderCode, Code2, BookOpen, Layers, Mail } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@components/ui/Container.jsx'
import Button from '@components/ui/Button.jsx'
import { NAV_LINKS } from '@constants/navigation.js'
import { cn } from '@utils/cn.js'

const mobileIcons = {
  '/': House,
  '/about': UserRound,
  '/experience': BriefcaseBusiness,
  '/client-work': Handshake,
  '/projects': FolderCode,
  '/skills': Code2,
  '/blog': BookOpen,
  '/services': Layers,
  '/contact': Mail,
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onBreakpoint = () => { if (desktop.matches) setOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-[var(--bg-canvas)]/95 backdrop-blur-md transition-shadow duration-300',
        scrolled
          ? 'border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/85 backdrop-blur-md'
          : 'border-b border-[var(--border-subtle)]',
      )}
    >
      <Container className="flex h-18 items-center justify-between sm:h-20">
        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-display text-lg font-semibold text-[var(--text-primary)]">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-xl font-extrabold text-white shadow-[var(--shadow-glow)] lg:hidden">K</span>
          <span>Kanvi<span className="text-[var(--accent)]">.</span>dev</span>
        </NavLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-0 xl:gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'rounded-[var(--radius-xs)] px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as="a" href="/contact" size="sm">
            Let's Talk
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            ref={menuButton}
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className={cn('flex h-11 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-semibold transition-colors', open ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]' : 'border-[var(--border-subtle)] bg-[var(--bg-surface-2)] text-[var(--text-primary)] hover:border-[var(--accent)]')}
          >
            {open ? 'Close' : 'Menu'}
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] lg:hidden"
          >
            <Container className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain pb-5 pt-4">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Explore my portfolio</p>
              <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = mobileIcons[link.path] || ArrowUpRight
                return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'group flex min-h-12 items-center gap-2.5 rounded-xl border px-3 py-3 text-[13px] font-medium transition-colors',
                      link.path === '/contact' && 'col-span-2',
                      isActive ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]' : 'border-[var(--border-subtle)] bg-[var(--bg-surface-2)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
                    )
                  }
                >
                  <Icon size={17} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="ml-auto shrink-0 opacity-40 group-aria-[current=page]:opacity-100" aria-hidden="true" />
                </NavLink>
                )
              })}
              </div>
              <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
                <Button as={NavLink} to="/contact" size="md" icon={ArrowUpRight} className="min-h-12 w-full !rounded-xl" onClick={() => setOpen(false)}>
                  Let's Talk
                </Button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
