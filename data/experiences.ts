import codevelopr from "public/images/codevelopr.png"
import tmjp from "public/images/tmjp.png"
import { ExperienceType } from "types/items"

export default <ExperienceType[]>[
  {
    key: 1,
    logo: codevelopr,
    name: "Codevelopr",
    title: "Software Engineer (Front End)",
    pills: ["React", "Redux", "Redux Saga", "TypeScript", "Formik", "Sass", "Material UI"]
  },
  {
    key: 2,
    logo: tmjp,
    name: "TMJP BPO Services Inc.",
    title: "Web Developer (Full Stack)",
    pills: [
      "React",
      "Node JS",
      "Express",
      "Passport JS",
      "Bootstrap",
      "Sass",
      "MySQL",
      "PostgreSQL",
      "DynamoDB",
      "AWS Lambda",
      "S3",
      "EC2"
    ]
  }
]
