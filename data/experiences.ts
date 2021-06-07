import codevelopr from "public/images/codevelopr.png"
import tmjp from "public/images/tmjp.png"
import { ExperienceType } from "types/items"

export default <ExperienceType[]>[
  {
    key: 1,
    logo: tmjp,
    name: "TMJP BPO Services Inc.",
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
    ],
    title: "Web Developer (Full Stack)"
  },
  {
    key: 2,
    logo: codevelopr,
    name: "Codevelopr",
    pills: ["React", "Redux", "Redux Saga", "TypeScript", "Formik", "Sass", "Material UI"],
    title: "Software Engineer (Front End)"
  }
]
