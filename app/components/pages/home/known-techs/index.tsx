'use client'

import { TbBrandNextjs } from 'react-icons/tb'
import { SectionTitle } from '../../../section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'

export function KnownTechs() {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimento" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <KnownTech
              tech={{
                icon: <TbBrandNextjs />,
                startDate: '2021-01-01',
                name: 'Next.JS',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
