import ProjectItem from "components/items/ProjectItem"
import Title from "components/layout/Title"
import Grid from "containers/Grid"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import projects from "data/projects"
import { GetStaticProps } from "next"
import { Fragment } from "react"
import { ProjectsPropsType } from "types/pages"

const Projects = ({ projects }: ProjectsPropsType) => {
  return (
    <Fragment>
      <Title label="Projects" heading="Projects" subheading="" />
      <Grid className="grid-cols-1 gap-2 my-2 sm:grid-cols-2">
        {projects.length
          ? projects.map((p, idx) => (
              <Section key={idx} className="my-0">
                <Row>
                  <List>
                    <ProjectItem
                      description={p.description}
                      features={p.features}
                      link={p.link}
                      logo={p.logo}
                      name={p.name}
                      pills={p.stack}
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

export const getStaticProps: GetStaticProps<ProjectsPropsType> = async () => {
  return { props: { projects } }
}

export default Projects
