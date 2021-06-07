import formik from "public/images/formik.svg"
import nextjs from "public/images/nextjs.svg"
import nodejs from "public/images/nodejs.svg"
import postgresql from "public/images/postgresql.svg"
import react from "public/images/react.svg"
import recoil from "public/images/recoil.svg"
import redux from "public/images/redux.svg"
import sass from "public/images/sass.svg"
import tailwind from "public/images/tailwind.svg"
import typescript from "public/images/typescript.svg"
import { SkillCategory } from "types/enum"
import { SkillType } from "types/items"

const { PROFESSIONAL, PERSONAL, EXPLORE } = SkillCategory

export default <SkillType[]>[
  {
    logo: react,
    name: "React",
    category: PROFESSIONAL
  },
  {
    logo: typescript,
    name: "TypeScript",
    category: PROFESSIONAL
  },
  {
    logo: nextjs,
    name: "Next JS",
    category: PERSONAL
  },
  {
    logo: tailwind,
    name: "Tailwind CSS",
    category: PERSONAL
  },
  {
    logo: redux,
    name: "Redux",
    category: PROFESSIONAL
  },
  {
    logo: sass,
    name: "Sass",
    category: PROFESSIONAL
  },
  {
    logo: formik,
    name: "Formik",
    category: PROFESSIONAL
  },
  {
    logo: nodejs,
    name: "Node JS",
    category: PROFESSIONAL
  },
  {
    logo: postgresql,
    name: "PostgreSQL",
    category: PROFESSIONAL
  },
  {
    logo: recoil,
    name: "Recoil",
    category: PERSONAL
  }
]
