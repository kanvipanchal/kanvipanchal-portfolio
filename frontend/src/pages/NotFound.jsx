import { Link } from 'react-router-dom'
import Section from '@components/ui/Section.jsx'
import Button from '@components/ui/Button.jsx'

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-[var(--accent)]">404</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-sm text-[var(--text-secondary)]">The page you're looking for doesn't exist or has moved.</p>
      <Button as={Link} to="/" className="mt-8">Back to Home</Button>
    </Section>
  )
}
