import { ExperienceType, ProjectType, SkillType } from "./items"

export type HomePropsType = {
  experiences: ExperienceType[]
  projects: ProjectType[]
  skills: SkillType[]
}

export type SkillsPropsType = {
  skills: SkillType[]
}
