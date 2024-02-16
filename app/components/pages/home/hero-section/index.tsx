import { FaArrowRight } from 'react-icons/fa'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'

import { Button } from '@/app/components/button'
import { TechBadge } from '../../tech-badge'
import Link from 'next/link'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com.br/',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://github.com.br/',
    icon: <TbBrandLinkedin />,
  },
]

export function HeroSection() {
  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px] relative">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px] relative z-10">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Vinicius Oliveira</h2>
          <p>Desenvolvedor Front-end</p>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
            quam quo perferendis excepturi, veritatis corporis doloribus
            obcaecati possimus! Modi repudiandae, eos sint laborum sit quos quas
            hic cumque dignissimos.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="NextJS" key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button
              className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px]
              w-max
            border-neutral-700 px-4 py-3 font-medium
            text-neutral-300 transition-all duration-300
              before:absolute before:inset-0
              before:-z-10 before:translate-y-[200%]
              before:scale-[2.5]
              before:rounded-[100%] before:bg-neutral-50
              before:transition-transform before:duration-1000
              before:content-[""]
              hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
              hover:before:translate-y-[0%]
              active:scale-100'
            >
              Entre em contato
              <FaArrowRight />
            </Button>

            <div className="text-gray-600 text-3xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.url}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p>[Image]</p>
        </div>
      </div>
    </section>
  )
}
