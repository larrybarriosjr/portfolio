import { SkillCategory } from "types/enum"
import { SkillType } from "types/items"

const { PROFESSIONAL, PERSONAL, EXPLORE } = SkillCategory

export default <SkillType[]>[
  {
    logo: "/images/skills/react.svg",
    name: "React",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/typescript.svg",
    name: "TypeScript",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/nextjs.svg",
    name: "Next JS",
    category: PERSONAL
  },
  {
    logo: "/images/skills/tailwind.svg",
    name: "Tailwind CSS",
    category: PERSONAL
  },
  {
    logo: "/images/skills/redux.svg",
    name: "Redux",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/sass.svg",
    name: "Sass",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/formik.svg",
    name: "Formik",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/nodejs.svg",
    name: "Node JS",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/postgresql.svg",
    name: "PostgreSQL",
    category: PROFESSIONAL
  },
  {
    logo: "/images/skills/recoil.svg",
    name: "Recoil",
    category: PERSONAL
  }
]
