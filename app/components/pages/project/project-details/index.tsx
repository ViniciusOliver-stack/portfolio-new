'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { SectionTitle } from '@/app/components/section-title'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'
import { TechBadge } from '../../tech-badge'
import { TbBrandGithub, TbWorld } from 'react-icons/tb'
import { Button } from '@/app/components/button'

export function ProjectDetails() {
  return (
    <section className="w-full sm:min-h-[700px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-0"
        // style={{
        //   background: `url(/images/hero-bg.png) no-repeat center/cover, url(https://illlustrations.co/preview.jpg) no-repeat center/cover opacity-50`,
        // }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Título do projeto"
        className="text-center items-center sm:[&>h3]:text-4xl z-10"
      />
      <motion.div
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base z-10"
        {...fadeUpAnimation}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque
          sint incidunt, eligendi amet at itaque id, quos ipsum, voluptas
          laborum aspernatur ipsam? Suscipit at odio delectus laboriosam beatae
          odit.
        </p>
      </motion.div>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center z-10">
        <TechBadge name="NextJS" {...techBadgeAnimation} />
      </div>

      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row z-10"
        {...fadeUpAnimation}
      >
        <a href="#" target="_blank" rel="noreferrer">
          <Button className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] w-max border-neutral-700 px-4 py-3 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-emerald-400 before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:border-neutral-50 hover:text-white hover:before:translate-y-[0%] active:scale-100'>
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <Button className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] w-max border-neutral-700 px-4 py-3 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-emerald-400 before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:border-neutral-50 hover:text-white hover:before:translate-y-[0%] active:scale-100'>
            <TbWorld size={20} />
            Projeto Online
          </Button>
        </a>
      </motion.div>

      <Link
        className="flex z-10 items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors"
        href="/projects"
      >
        <HiArrowNarrowLeft size={20} />
        Voltar para Projetos
      </Link>
    </section>
  )
}
