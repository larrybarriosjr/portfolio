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
        subheading="This is a description of the technical skills list. What can usually be found here."
      />
      {professional.length ? (
        <Section>
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
        <Section>
          <Row>
            <Text type={TextType.SUMMARY_HEADING}>Already Used on Professional Projects</Text>
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
        <Section>
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
        <Section>
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
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<SkillsPropsType> = async () => {
  return { props: { skills } }
}

export default TechnicalSkills
