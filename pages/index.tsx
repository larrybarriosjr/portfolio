import Text from "components/common/Text"
import SkillItem from "components/items/SkillItem"
import Title from "components/layout/Title"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import Link from "next/link"
import avatar from "public/images/larry.jpg"
import nodejs from "public/images/nodejs.svg"
import postgresql from "public/images/postgresql.svg"
import react from "public/images/react.svg"
import redux from "public/images/redux.svg"
import sass from "public/images/sass.svg"
import typescript from "public/images/typescript.svg"
import { Fragment } from "react"
import { TextType } from "types/enum"

const Home = () => {
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
            <SkillItem logo={react} name="React" />
            <SkillItem logo={nodejs} name="Node JS" />
            <SkillItem logo={redux} name="Redux" />
            <SkillItem logo={postgresql} name="PostgreSQL" />
            <SkillItem logo={sass} name="Sass" />
            <SkillItem logo={typescript} name="TypeScript" />
          </List>
        </Row>
      </Section>
    </Fragment>
  )
}

export default Home
