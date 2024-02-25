'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'
import { TechBadge } from '../../../tech-badge'

// type ProjectCardProps = {
//   project: Project
// }

export function ProjectCard() {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          src="https://i.imgur.com/UieUlMQ.jpeg"
          alt={`Thumbnail do projeto `}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      <div className="flex-1 lg:py-18">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          <p>Título do Projeto</p>
        </motion.h3>
        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis
            deleniti iure quisquam quia! Officia corporis ea et aperiam
            consequatur tenetur similique dignissimos dicta praesentium, dolorem
            excepturi corrupti aut odit.
          </p>
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <TechBadge
              key={`NomeProjeto-tech-NextJs`}
              name="NextJs"
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
            />
          ))}
        </div>

        <Link
          className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 flex items-center gap-5 w-fit "
          //   href={`/projects/${project.slug}`}
          href="#"
        >
          <span>Ver projeto</span>
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
