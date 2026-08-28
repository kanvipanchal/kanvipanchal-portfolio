import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, FolderKanban, Newspaper, MessageSquare, Settings } from 'lucide-react'
import { cn } from '@utils/cn.js'

const ADMIN_NAV = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Projects & Client Work', path: '/admin/projects', icon: FolderKanban },
  { label: 'Blog', path: '/admin/blog', icon: Newspaper },
  { label: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare },
  { label: 'Site Settings', path: '/admin/settings', icon: Settings },
]

/**
 * AdminLayout — shell for the CMS. Route guarding (JWT check) is wired
 * in routes/AppRoutes.jsx via a ProtectedRoute wrapper, not here.
 */
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--bg-canvas)]">
      <aside className="hidden w-60 shrink-0 border-r border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:block">
        <p className="mb-6 px-2 font-display text-lg font-semibold">Admin</p>
        <nav className="flex flex-col gap-1">
          {ADMIN_NAV.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/admin'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2.5 rounded-[var(--radius-xs)] px-3 py-2 text-sm font-medium',
                  isActive
                    ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-2)]',
                )
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
