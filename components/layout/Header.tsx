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
    <IconContext.Provider value={{ size: "36", className: "text-forest-green" }}>
      <Row className="items-center">
        <Logo className="mr-auto" />
        <Nav className="hidden lg:flex lg:static" />
        <a
          href="Larry_Barrios_Jr_Resume.pdf"
          download="Larry Barrios Jr Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="download resume"
        >
          <Button aria-label="download resume" icon={<BiDownload />} className="mx-3 lg:hidden" />
        </a>
        <Link href="/contact">
          <Button aria-label="open contact form" icon={<BiEnvelope />} className="mx-3 lg:hidden" />
        </Link>
        <Drawer />
      </Row>
    </IconContext.Provider>
  )
}

export default Header
