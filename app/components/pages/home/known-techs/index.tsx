'use client'

import { SectionTitle } from '../../../section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import { techBadge } from '@/app/utils/info-page'

export function KnownTechs() {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimento" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techBadge.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <KnownTech
              tech={{
                icon: `${tech.icon}`,
                startDate: `${tech.startDate}`,
                name: `${tech.name}`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
