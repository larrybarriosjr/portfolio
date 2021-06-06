import nodejs from "public/images/nodejs.svg"
import postgresql from "public/images/postgresql.svg"
import react from "public/images/react.svg"
import redux from "public/images/redux.svg"
import sass from "public/images/sass.svg"
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
    logo: nodejs,
    name: "Node JS"
  },
  {
    key: 3,
    logo: redux,
    name: "Redux"
  },
  {
    key: 4,
    logo: postgresql,
    name: "PostgreSQL"
  },
  {
    key: 5,
    logo: sass,
    name: "Sass"
  },
  {
    key: 6,
    logo: typescript,
    name: "TypeScript"
  }
]
