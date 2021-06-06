import Button from "components/common/Button"
import Logo from "components/layout/Logo"
import Row from "containers/Row"
import { IconContext } from "react-icons"
import { BiEnvelope, BiSearchAlt } from "react-icons/bi"
import Drawer from "./Drawer"

const Header = () => {
  return (
    <IconContext.Provider value={{ className: "text-4xl text-forest-green" }}>
      <Row className="items-center">
        <Logo className="mr-auto" />
        <Button icon={<BiSearchAlt />} className="mx-3" />
        <Button icon={<BiEnvelope />} className="mx-3" />
        <Drawer />
      </Row>
    </IconContext.Provider>
  )
}

export default Header
