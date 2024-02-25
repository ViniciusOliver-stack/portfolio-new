import { cn } from '@/app/lib/utils'

interface HorizontalDividerProps {
  className?: string
}

export function HorizontalDivider({ className }: HorizontalDividerProps) {
  return (
    <div
      className={cn('w-full my-8 border-b border-b-neutral-800', className)}
    ></div>
  )
}
