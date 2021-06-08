import { SkillCategory } from "./enum"

export type ExperienceType = {
  employment_date: string
  job_description: string[]
  link: string
  location: string
  logo: string
  name: string
  stack: string[]
  title: string
}

export type ProjectType = {
  description: string
  features: string[]
  link: string
  logo: string
  name: string
  platform: string
  source: string
  stack: string[]
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
