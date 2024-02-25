import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 hover:cursor-pointer opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          alt={`Thumbnail do projeto `}
          src="https://illlustrations.co/preview.jpg"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-xl text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Título do projeto
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Descrição dos projetos
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Tecnologias utilizadas
        </span>
      </div>
    </div>
  )
}
