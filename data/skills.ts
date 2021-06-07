import formik from "public/images/formik.svg"
import nextjs from "public/images/nextjs.svg"
import nodejs from "public/images/nodejs.svg"
import postgresql from "public/images/postgresql.svg"
import react from "public/images/react.svg"
import redux from "public/images/redux.svg"
import sass from "public/images/sass.svg"
import tailwind from "public/images/tailwind.svg"
import typescript from "public/images/typescript.svg"
import { SkillType } from "types/items"

export default <SkillType[]>[
  {
    key: 1,
    logo: react,
    name: "React"
  },
  {
    key: 2,
    logo: typescript,
    name: "TypeScript"
  },
  {
    key: 3,
    logo: nextjs,
    name: "Next JS"
  },
  {
    key: 4,
    logo: tailwind,
    name: "Tailwind CSS"
  },
  {
    key: 5,
    logo: redux,
    name: "Redux"
  },
  {
    key: 6,
    logo: sass,
    name: "Sass"
  },
  {
    key: 7,
    logo: formik,
    name: "Formik"
  },
  {
    key: 8,
    logo: nodejs,
    name: "Node JS"
  },
  {
    key: 9,
    logo: postgresql,
    name: "PostgreSQL"
  }
]
