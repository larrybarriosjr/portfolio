import Text from "components/common/Text"
import ProjectItem from "components/items/ProjectItem"
import SkillItem from "components/items/SkillItem"
import Title from "components/layout/Title"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import projects from "data/projects"
import skills from "data/skills"
import { GetStaticProps } from "next"
import Link from "next/link"
import avatar from "public/images/larry.jpg"
import { Fragment } from "react"
import { TextType } from "types/enum"
import { HomePropsType } from "types/pages"

const Home = ({ skills, projects }: HomePropsType) => {
  return (
    <Fragment>
      <Title
        avatar={avatar}
        alt="Larry Barrios Jr."
        heading="Larry Barrios Jr."
        subheading="Web App Developer"
        label="Profile"
      />
      <Section>
        <Row>
          <Text type={TextType.SUMMARY_HEADING}>About Me</Text>
        </Row>
        <Row></Row>
      </Section>
      <Section>
        <Row className="justify-between">
          <Text type={TextType.SUMMARY_HEADING}>Skills Summary</Text>
          <Link href="/">
            <Text type={TextType.SUMMARY_HEADING}>View Details</Text>
          </Link>
        </Row>
        <Row>
          <List>
            {skills.map(s => (
              <SkillItem key={s.key} logo={s.logo} name={s.name} />
            ))}
          </List>
        </Row>
      </Section>
      <Section>
        <Row className="justify-between">
          <Text type={TextType.SUMMARY_HEADING}>Projects Summary</Text>
          <Link href="/">
            <Text type={TextType.SUMMARY_HEADING}>View Details</Text>
          </Link>
        </Row>
        <Row>
          <List>
            {projects.map(p => (
              <ProjectItem
                key={p.key}
                logo={p.logo}
                name={p.name}
                description={p.description}
                pills={p.pills}
              />
            ))}
          </List>
        </Row>
      </Section>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<HomePropsType> = async () => {
  return { props: { skills, projects } }
}

export default Home
