import Image from "components/common/Image"
import Text from "components/common/Text"
import Title from "components/layout/Title"
import Grid from "containers/Grid"
import Row from "containers/Row"
import Section from "containers/Section"
import { Fragment } from "react"
import { TextType } from "types/enum"

const Profile = () => {
  return (
    <Fragment>
      <Title
        label="Profile"
        heading="Profile"
        subheading="All the things about me that could not be added in the
          other pages of this portfolio. Yup, as simple as that."
      />
      <Section>
        <Grid className="grid-cols-1 gap-2 my-2 md:grid-cols-2">
          <Row className="flex-col items-center my-auto text-center">
            <Image
              src="/images/Larry.jpg"
              alt="Larry Barrios Jr."
              layout="fill"
              objectFit="cover"
              className="grid m-4 w-60 h-60 sm:w-80 sm:h-80"
              bordered
            />
            <Text type={TextType.PAGE_HEADING}>Larry Barrios Jr.</Text>
            <Text type={TextType.PAGE_DESCRIPTION} className="w-5/6 lg:w-2/3">
              Web App Developer
            </Text>
          </Row>
          <Row className="flex-col gap-y-2">
            <Text type={TextType.SUMMARY_HEADING}>Let Me Introduce Myself</Text>
            <Text>
              I&apos;m Larry. I consider myself a &quot;Web App&quot; developer rather than a
              &quot;Website&quot; developer because in my career, I have been creating platforms and
              applications for clients that just happens to be accessible on the web, either internal or
              external. But, I&apos;m not too hung up on the term. You can call me a coder, for all I care.
            </Text>
            <Text>
              My goal is to be a powerhouse in web development. This is evident through the achievements I
              gained throughout my newfound career. Due to my educational background (which is non-IT
              related), I enrolled in a coding bootcamp and graduated as the top student despite having no
              programming knowledge. I was also the interim senior developer on our team in my first job
              where I handled the frontend, backend, database, server and architecture of our application
              and was awarded the employee of the year because of my contributions. On my second job, I was
              appointed to be in charge of the Front-End team as a team lead and Scrum master. I also took
              care of the technical interviews with the local or foreign applicants and helped the new
              recruits understand the current codebase. And that&apos;s just 2 years as a web developer.
              Imagine how much more I could achieve if I continue to grow at my current pace.
            </Text>
            <Text>
              Maybe I can thank my passion for teaching others that I can grow as much. I&apos;m always
              eager to share what I&apos;ve learned and discuss together with the other members as to
              what&apos;s wrong. Even in my academic years, I was always being approached by my schoolmates
              (not just classmates) to teach them about a lesson they couldn&apos;t understand on their own.
              Maybe when I&apos;m 40, 50 or so, I&apos;ll apply as a university professor or bootcamp
              instructor because of this desire to teach. But, right now, I need to focus more on my web
              development skills so I can offer more knowledge and wisdom to my future students.
            </Text>
          </Row>
        </Grid>
      </Section>
    </Fragment>
  )
}

export default Profile
