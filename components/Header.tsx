import Row from "containers/Row"
import { BiEnvelope, BiSearchAlt } from "react-icons/bi"
import Button from "./common/Button"
import Drawer from "./Drawer"
import Brand from "./layout/Brand"

const Header = () => {
  return (
    <Row className="items-center">
      <Brand className="mr-auto" />
      <Button icon={<BiSearchAlt strokeWidth="0.5px" />} className="mx-3 text-3xl text-forest-green" />
      <Button icon={<BiEnvelope strokeWidth="0.5px" />} className="mx-3 text-3xl text-forest-green" />
      <Drawer />
    </Row>
  )
}

export default Header
