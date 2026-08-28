import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'

// Placeholder posts — replaced by a CMS-driven fetch (services/blogService.js) in the full build.
const PLACEHOLDER_POSTS = [
  { id: 'building-scalable-mern-apps', title: 'Building Scalable MERN Apps', excerpt: 'Patterns I use to keep React + Express + MongoDB projects maintainable as they grow.', date: 'Coming soon' },
  { id: 'firebase-auth-in-production', title: 'Firebase Auth in Production', excerpt: 'Lessons from wiring Firebase authentication into real e-commerce platforms.', date: 'Coming soon' },
]

export default function Blog() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Writing" size="display" as="h1" className="mb-12 max-w-xl">Blog</Heading>
      <div className="grid gap-6 sm:grid-cols-2">
        {PLACEHOLDER_POSTS.map((post) => (
          <Card key={post.id} hoverable as="a" href={`/blog/${post.id}`}>
            <p className="font-mono text-xs text-[var(--text-muted)]">{post.date}</p>
            <h3 className="mt-2 font-display text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{post.excerpt}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
