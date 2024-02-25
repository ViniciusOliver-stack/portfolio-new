import { KnownTech } from './projects'
import { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  social: Social[]
  KnowTechs: KnownTech[]
}

export type HomePageData = {
  page: HomePageInfo
}
