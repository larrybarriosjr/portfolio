import Title from "components/layout/Title"
import avatar from "public/images/larry.jpg"
import { Fragment } from "react"

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
    </Fragment>
  )
}

export default Home
