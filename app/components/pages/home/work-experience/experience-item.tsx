'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TechBadge } from '../../tech-badge'

import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

interface Experience {
  company: string
  linkCompany: string
  logoCompany: string
  position: string
  startDate: string
  endDate: string
  description: string[]
  techsUsed: string[]
}

export function ExperienceItem({ experience }: { experience: Experience }) {
  const {
    company,
    linkCompany,
    logoCompany,
    position,
    startDate,
    endDate,
    description,
    techsUsed,
  } = experience

  const calculateExperience = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const yearDiff = end.getFullYear() - start.getFullYear()
    const monthDiff = end.getMonth() - start.getMonth()

    let result = ''
    if (yearDiff === 0) {
      if (monthDiff === 0) {
        result = 'Menos de um mês'
      } else if (monthDiff === 1) {
        result = '1 mês'
      } else {
        result = `${monthDiff} meses`
      }
    } else {
      if (monthDiff === 0) {
        result = `${yearDiff} ${yearDiff === 1 ? 'ano' : 'anos'}`
      } else {
        result = `${yearDiff} ${yearDiff === 1 ? 'ano' : 'anos'} e ${monthDiff} meses`
      }
    }

    return result
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    // Adiciona um zero à esquerda se o dia ou mês for menor que 10
    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    return `${formattedDay}/${formattedMonth}/${year}`
  }

  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = formatDate(endDate)
  const experienceTime = calculateExperience(startDate, endDate)

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={logoCompany}
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
            href={linkCompany}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ {company}
          </a>
          <h4 className="text-gray-300">{position}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • {experienceTime}
          </span>
          <div className="text-gray-400 flex flex-col gap-2">
            {description.map((item, index) => (
              <p key={index}>
                {/* Iniciando cada item com um marcador */}
                {item}
              </p>
            ))}
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            {techsUsed.map((tech: string, index: number) => (
              <TechBadge
                name={tech}
                key={index}
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
