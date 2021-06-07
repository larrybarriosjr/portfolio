import Button from "components/common/Button"
import Logo from "components/layout/Logo"
import Row from "containers/Row"
import Link from "next/link"
import { IconContext } from "react-icons"
import { BiDownload, BiEnvelope } from "react-icons/bi"
import Drawer from "./Drawer"
import Nav from "./Nav"

const Header = () => {
  return (
    <IconContext.Provider value={{ className: "text-4xl text-forest-green" }}>
      <Row className="items-center">
        <Logo className="mr-auto" />
        <Nav className="hidden lg:flex" />
        <a
          href="resume.pdf"
          download="Larry Barrios Jr Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<BiDownload />} className="mx-3 lg:hidden" />
        </a>
        <Link href="/">
          <Button icon={<BiEnvelope />} className="mx-3 lg:hidden" />
        </Link>
        <Drawer />
      </Row>
    </IconContext.Provider>
  )
}

export default Header
