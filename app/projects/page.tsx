'use client'

import { PageIntroduction } from '../components/pages/project/page-introduction'
import { ProjectList } from '../components/pages/project/project-list'

export default function Projects() {
  return (
    <section className="container py-32">
      <PageIntroduction />
      <ProjectList />
    </section>
  )
}
