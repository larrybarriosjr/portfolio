import clsx from "clsx"
import NavItem from "components/items/NavItem"
import List from "containers/List"
import Row from "containers/Row"
import { IconContext } from "react-icons"
import {
  RiBriefcase4Fill,
  RiDownloadFill,
  RiHomeHeartFill,
  RiMailFill,
  RiPencilRuler2Fill,
  RiSwordFill,
  RiUser2Fill
} from "react-icons/ri"

type NavProps = React.ComponentPropsWithoutRef<"nav">

const Nav = ({ className, ...props }: NavProps) => {
  const classes = clsx([
    "fixed bottom-0 left-0 w-full h-max ring-1 ring-steel-grey bg-snow-white",
    "lg:w-max lg:ring-0 lg:bg-transparent",
    className
  ])

  return (
    <IconContext.Provider value={{ className: "h-6 w-6 text-onyx-black" }}>
      <nav className={classes} {...props}>
        <Row className="m-0">
          <List className="lg:w-full lg:gap-x-8 lg:mr-4">
            <NavItem icon={<RiHomeHeartFill />} name="Featured" link="/" />
            <NavItem icon={<RiSwordFill />} name="Skills" link="/skills" />
            <NavItem icon={<RiUser2Fill />} name="Profile" link="/" />
            <NavItem icon={<RiPencilRuler2Fill />} name="Projects" link="/" />
            <NavItem icon={<RiBriefcase4Fill />} name="Experiences" link="/" />
            <NavItem
              icon={<RiDownloadFill />}
              name="Resume"
              link="Larry_Barrios_Jr_Resume.pdf"
              download="Larry Barrios Jr Resume.pdf"
              className="hidden lg:flex"
            />
            <NavItem icon={<RiMailFill />} name="Contact" link="/" className="hidden lg:flex" />
          </List>
        </Row>
      </nav>
    </IconContext.Provider>
  )
}

export default Nav
