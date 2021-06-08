import ExperienceItem from "components/items/ExperienceItem"
import Title from "components/layout/Title"
import Grid from "containers/Grid"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import experiences from "data/experiences"
import { GetStaticProps } from "next"
import { Fragment } from "react"
import { ExperiencesPropsType } from "types/pages"

const Experiences = ({ experiences }: ExperiencesPropsType) => {
  return (
    <Fragment>
      <Title
        label="Experiences"
        heading="Experiences"
        subheading="List of companies I have worked in. I am a career shifter
          so this list only includes the one related to programming and IT
          industries. Maybe I should also list my previous non-related jobs?
          What do you think?"
      />
      <Grid className="grid-cols-1 gap-2 my-2 sm:grid-cols-2">
        {experiences.length
          ? experiences.map((e, idx) => (
              <Section key={idx} className="my-0">
                <Row>
                  <List>
                    <ExperienceItem
                      date={e.employment_date}
                      functions={e.job_description}
                      link={e.link}
                      location={e.location}
                      logo={e.logo}
                      name={e.name}
                      pills={e.stack}
                      title={e.title}
                    />
                  </List>
                </Row>
              </Section>
            ))
          : null}
      </Grid>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<ExperiencesPropsType> = async () => {
  return { props: { experiences } }
}

export default Experiences
