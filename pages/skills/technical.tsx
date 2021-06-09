import Text from "components/common/Text"
import SkillItem from "components/items/SkillItem"
import Title from "components/layout/Title"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import skills from "data/skills"
import { GetStaticProps } from "next"
import { Fragment } from "react"
import { SkillCategory, TextType } from "types/enum"
import { SkillsPropsType } from "types/pages"

const TechnicalSkills = ({ skills }: SkillsPropsType) => {
  const professional = skills.filter(s => s.category === SkillCategory.PROFESSIONAL)
  const personal = skills.filter(s => s.category === SkillCategory.PERSONAL)
  const explore = skills.filter(s => s.category === SkillCategory.EXPLORE)
  const program = skills.filter(s => s.category === SkillCategory.PROGRAM)

  return (
    <Fragment>
      <Title
        label="Technical Skills"
        heading="Technical Skills"
        subheading="List of technical skills divided depending on whether I've used them
          at work or just for personal projects. Some of them I've tinkered with, but no
          projects with them yet. The last list is programs and platforms I've used. I
          also plan on explaining what I've learnt with each skills in a blog so some of
          them will be a link to it in the future."
      />
      <Row className="flex-col gap-2 m-0 my-2">
        {professional.length ? (
          <Section className="w-full my-0">
            <Row>
              <Text type={TextType.SUMMARY_HEADING}>Already Used on Professional Projects</Text>
            </Row>
            <Row>
              <List>
                {professional.map((s, idx) => (
                  <SkillItem key={idx} logo={s.logo} name={s.name} />
                ))}
              </List>
            </Row>
          </Section>
        ) : null}
        {personal.length ? (
          <Section className="w-full my-0">
            <Row>
              <Text type={TextType.SUMMARY_HEADING}>Already Used on Personal Projects</Text>
            </Row>
            <Row>
              <List>
                {personal.map((s, idx) => (
                  <SkillItem key={idx} logo={s.logo} name={s.name} />
                ))}
              </List>
            </Row>
          </Section>
        ) : null}
        {explore.length ? (
          <Section className="w-full my-0">
            <Row>
              <Text type={TextType.SUMMARY_HEADING}>Exploring Slightly as of the Moment</Text>
            </Row>
            <Row>
              <List>
                {explore.map((s, idx) => (
                  <SkillItem key={idx} logo={s.logo} name={s.name} />
                ))}
              </List>
            </Row>
          </Section>
        ) : null}
        {program.length ? (
          <Section className="w-full my-0">
            <Row>
              <Text type={TextType.SUMMARY_HEADING}>Other Programs and Platforms Used</Text>
            </Row>
            <Row>
              <List>
                {program.map((s, idx) => (
                  <SkillItem key={idx} logo={s.logo} name={s.name} />
                ))}
              </List>
            </Row>
          </Section>
        ) : null}
      </Row>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<SkillsPropsType> = async () => {
  return { props: { skills } }
}

export default TechnicalSkills
