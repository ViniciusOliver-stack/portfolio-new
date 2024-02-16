'use client'

import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        {...animationProps}
        transition={{ duration: 0.5 }}
        className="flex flex-col text-sm text-emerald-400"
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        {...animationProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-medium"
      >
        {title}
      </motion.h3>
    </div>
  )
}
