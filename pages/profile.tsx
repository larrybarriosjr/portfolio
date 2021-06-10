import Title from "components/layout/Title"
import Grid from "containers/Grid"
import { Fragment } from "react"

const Profile = () => {
  return (
    <Fragment>
      <Title label="Profile" heading="Profile" subheading="" />
      <Grid className="grid-cols-1 gap-2 my-2 sm:grid-cols-2"></Grid>
    </Fragment>
  )
}

export default Profile
