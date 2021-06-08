import { ExperienceType, ProjectType, SkillType } from "./items"

export type HomePropsType = {
  experiences: ExperienceType[]
  projects: ProjectType[]
  skills: SkillType[]
}

export type ExperiencesPropsType = {
  experiences: ExperienceType[]
}

export type ProjectsPropsType = {
  projects: ProjectType[]
}

export type SkillsPropsType = {
  skills: SkillType[]
}
