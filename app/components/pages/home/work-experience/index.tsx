import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export function WorkExperience() {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiência" title="Experiência Profissional" />
        <p className="text-gray-400 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          temporibus eligendi alias quidem, delectus laudantium nobis possimus
          quibusdam nostrum optio soluta, voluptatibus ea quia odio in aut illo
          itaque officia?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
