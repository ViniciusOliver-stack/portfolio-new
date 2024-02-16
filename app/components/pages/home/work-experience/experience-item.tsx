'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TechBadge } from '../../tech-badge'

import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

export function ExperienceItem() {
  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src=""
            width={40}
            height={40}
            alt={`Logo da empresa`}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="#"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ Symplus
          </a>
          <h4 className="text-gray-300">Frontend Developer</h4>
          <span className="text-gray-500">01/01/24 • 01/01/25 • 1 Ano</span>
          <div className="text-gray-400">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              accusantium ducimus ea nesciunt, deleniti sequi mollitia non, unde
              perspiciatis porro, eaque provident voluptatibus inventore itaque.
              Nemo nostrum asperiores similique eius!
            </p>
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge
                name="NextJS"
                key="NextJS"
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
