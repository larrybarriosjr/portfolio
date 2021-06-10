import NavItem from "components/items/NavItem"
import Logo from "components/layout/Logo"
import List from "containers/List"
import Row from "containers/Row"
import { IconContext } from "react-icons"
import { RiDownloadFill, RiMailFill } from "react-icons/ri"
import Drawer from "./Drawer"
import Nav from "./Nav"

const Header = () => {
  return (
    <IconContext.Provider value={{ size: "24", className: "text-onyx-black" }}>
      <Row className="items-center">
        <Logo className="mr-auto" />
        <Nav className="hidden lg:flex lg:static" />
        <Row className="m-0">
          <List className="lg:w-full lg:gap-x-8 lg:mr-4">
            <NavItem
              icon={<RiDownloadFill />}
              name="Resume"
              link="Larry_Barrios_Jr_Resume.pdf"
              download="Larry Barrios Jr Resume.pdf"
              className="mx-1 lg:mx-0"
            />
            <NavItem icon={<RiMailFill />} name="Contact" link="/contact" className="mx-1 lg:mx-0" />
          </List>
        </Row>
        <Drawer />
      </Row>
    </IconContext.Provider>
  )
}

export default Header
