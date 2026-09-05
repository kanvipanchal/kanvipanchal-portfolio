import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@components/ui/Container.jsx'
import Button from '@components/ui/Button.jsx'
import { NAV_LINKS } from '@constants/navigation.js'
import { cn } from '@utils/cn.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="font-display text-lg font-semibold text-[var(--text-primary)]">
          Kanvi<span className="text-[var(--accent)]">.</span>dev
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
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
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
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-[var(--radius-xs)] px-3 py-2.5 text-sm font-medium',
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
