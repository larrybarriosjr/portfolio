import Text from "components/common/Text"
import ExperienceItem from "components/items/ExperienceItem"
import ProjectItem from "components/items/ProjectItem"
import SkillItem from "components/items/SkillItem"
import Title from "components/layout/Title"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import experiences from "data/experiences"
import projects from "data/projects"
import skills from "data/skills"
import { GetStaticProps } from "next"
import Link from "next/link"
import { Fragment } from "react"
import { SkillCategory, TextType } from "types/enum"
import { HomePropsType } from "types/pages"

const Home = ({ skills, projects, experiences }: HomePropsType) => {
  return (
    <Fragment>
      <Title
        alt="Larry Barrios Jr."
        avatar="/images/Larry.jpg"
        heading="Larry Barrios Jr."
        label="Featured"
        subheading="Web App Developer"
        description="I'm Larry, a web app developer, and this is my personal portfolio called Koala. The
          featured page includes details about me and summaries of my skills, projects and experiences."
      />
      <Row className="flex-wrap gap-2 m-0 md:flex-nowrap">
        <Section className="w-full my-0 md:w-1/2 md:mb-2">
          <Row>
            <Text type={TextType.SUMMARY_HEADING}>About Me</Text>
          </Row>
          <Row className="flex-col gap-y-4">
            <Text>
              I had a degree in Marketing Management, but I became a web developer because I realized
              I&apos;m not a fan of marketing vs selling, sales pitches, and pretentious Business English.{" "}
              <em>I find coding to be direct and precise, which is exactly what I love about it.</em> I had
              no choice but to jump ship in my previous career.
            </Text>
            <Text>
              I want to help a company that has this kind of mindset at its core. Not as words to fill the
              Mission statement, but as the driving factor for any decision-making involved. Companies, big
              or small, who help in promoting transparency through how they manage their workforce and how
              they deal with their customers are the companies I would be delighted to work with proactively
              to further their endeavors.
            </Text>
            <Text>
              Just two words, <strong>open</strong> and <strong>transparent</strong>. That&apos;s the world
              I want to live in and the future I want to pursue.
            </Text>
          </Row>
        </Section>
        <Section className="w-full my-0 mb-2 md:w-1/2">
          <Row className="justify-between">
            <Text type={TextType.SUMMARY_HEADING}>Skills Summary</Text>
            <Link href="/skills/technical">
              <Text type={TextType.SUMMARY_HEADING} link>
                View All
              </Text>
            </Link>
          </Row>
          <Row>
            <List>
              {skills
                .filter(s => s.category === SkillCategory.PROFESSIONAL)
                .slice(0, 9)
                .map((s, idx) => (
                  <SkillItem key={idx} logo={s.logo} name={s.name} className="md:w-1/3" />
                ))}
            </List>
          </Row>
        </Section>
      </Row>
      <Row className="flex-wrap gap-2 m-0 md:flex-nowrap">
        <Section className="w-full my-0 md:w-1/2 md:mb-2">
          <Row className="justify-between">
            <Text type={TextType.SUMMARY_HEADING}>Projects Summary</Text>
            <Link href="/projects">
              <Text type={TextType.SUMMARY_HEADING} link>
                View Details
              </Text>
            </Link>
          </Row>
          <Row>
            <List className="lg:mr-32">
              {projects.map((p, idx) => (
                <ProjectItem
                  description={p.description}
                  key={idx}
                  link={p.link}
                  logo={p.logo}
                  name={p.name}
                  pills={p.stack}
                />
              ))}
            </List>
          </Row>
        </Section>
        <Section className="w-full my-0 mb-2 md:w-1/2">
          <Row className="justify-between">
            <Text type={TextType.SUMMARY_HEADING}>Experiences Summary</Text>
            <Link href="/experiences">
              <Text type={TextType.SUMMARY_HEADING} link>
                View Details
              </Text>
            </Link>
          </Row>
          <Row>
            <List className="flex-col">
              {experiences.map((e, idx) => (
                <ExperienceItem
                  key={idx}
                  link={e.link}
                  logo={e.logo}
                  name={e.name}
                  pills={e.stack}
                  title={e.title}
                />
              ))}
            </List>
          </Row>
        </Section>
      </Row>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<HomePropsType> = async () => {
  return { props: { skills, projects, experiences } }
}

export default Home
