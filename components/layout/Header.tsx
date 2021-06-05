import Button from "components/common/Button"
import Brand from "components/layout/Brand"
import Row from "containers/Row"
import { BiEnvelope, BiSearchAlt } from "react-icons/bi"
import Drawer from "./Drawer"

const Header = () => {
  return (
    <Row className="items-center">
      <Brand className="mr-auto" />
      <Button icon={<BiSearchAlt />} className="mx-3 text-4xl text-forest-green" />
      <Button icon={<BiEnvelope />} className="mx-3 text-4xl text-forest-green" />
      <Drawer />
    </Row>
  )
}

export default Header
