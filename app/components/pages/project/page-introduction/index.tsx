import { SectionTitle } from '@/app/components/section-title'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { motion } from 'framer-motion'

export function PageIntroduction() {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          distinctio nesciunt illo autem architecto ipsum corporis doloribus
          facere, voluptatem quisquam impedit explicabo provident inventore
          quaerat saepe velit ut dolore eligendi.
        </p>

        <Link
          className="flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors"
          href="/"
        >
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}
