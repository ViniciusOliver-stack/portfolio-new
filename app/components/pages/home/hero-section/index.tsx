import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { TechBadge } from '../../tech-badge'
import Link from 'next/link'
import { ButtonModalContact } from '@/app/components/button-modal-contact'
import { techName } from '@/app/utils/info-page'

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
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row mt-32">
        <div className="w-full lg:max-w-[530px] relative z-10">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Vinicius Oliveira</h2>
          <p>Desenvolvedor Front-end</p>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Meu interesse pelo desenvolvimento começou há 2 anos, vendo a
            possibilidade de utilizar a tecnologia para facilitar a vida das
            pessoas, logo percebi que tinha encontrado a minha paixão e decidi
            investi em cursos para aprimorar minhas habilidades. Atualmente
            estou focado em crescer profissionalmente e aprender continuamente
            criando projetos que me permitam buscar constantemente desafios que
            me faça explorar e expandir minhas habilidades nessa área. Estou
            ansioso para me juntar à sua equipe e colaborar nos projetos, estou
            pronto para fazer acontecer! Vamos trabalhar juntos e criar algo
            incrível.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {techName.map((tech, index) => (
              <TechBadge name={tech.name} key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <ButtonModalContact />

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
      </div>
    </section>
  )
}
