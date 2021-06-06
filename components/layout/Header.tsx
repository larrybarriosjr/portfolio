import Button from "components/common/Button"
import Logo from "components/layout/Logo"
import Row from "containers/Row"
import { BiEnvelope, BiSearchAlt } from "react-icons/bi"
import Drawer from "./Drawer"

const Header = () => {
  return (
    <Row className="items-center">
      <Logo className="mr-auto" />
      <Button icon={<BiSearchAlt />} className="mx-3 text-4xl text-forest-green" />
      <Button icon={<BiEnvelope />} className="mx-3 text-4xl text-forest-green" />
      <Drawer />
    </Row>
  )
}

export default Header
