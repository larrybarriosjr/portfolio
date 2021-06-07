import { SkillCategory } from "./enum"

export type ExperienceType = {
  logo: string
  name: string
  pills: string[]
  title: string
}

export type ProjectType = {
  description: string
  link: string
  logo: string
  name: string
  pills: string[]
}

export type RecommendedType = {
  category: string
  link?: string
  text: string
}

export type SkillType = {
  category: SkillCategory
  logo: string
  name: string
}
