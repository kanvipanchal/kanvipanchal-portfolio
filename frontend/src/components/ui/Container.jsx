import { cn } from '@utils/cn.js'

/**
 * Container — centers content and applies consistent responsive gutters.
 * size: 'default' (1200px) | 'narrow' (820px) | 'wide' (1440px)
 */
export default function Container({ children, className, size = 'default', as: Tag = 'div' }) {
  const widths = {
    default: 'max-w-6xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-7xl',
  }
  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', widths[size], className)}>
      {children}
    </Tag>
  )
}
