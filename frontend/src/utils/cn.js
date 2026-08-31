/**
 * Lightweight className combiner — merges truthy class strings.
 * Avoids pulling in clsx/tailwind-merge as a dependency for a simple portfolio.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
