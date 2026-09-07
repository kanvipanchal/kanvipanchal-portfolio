import { cn } from '@utils/cn.js'
import Container from './Container.jsx'

/**
 * Section — enforces consistent vertical rhythm and background across pages.
 * tone: 'canvas' (default page bg) | 'surface' (subtle contrast panel)
 */
export default function Section({
  children,
  className,
  containerClassName,
  size,
  tone = 'canvas',
  id,
}) {
  const tones = {
    canvas: 'bg-transparent',
    surface: 'bg-[var(--bg-surface)]',
  }
  return (
    <section id={id} className={cn('portfolio-section py-16 sm:py-20', tones[tone], className)}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
