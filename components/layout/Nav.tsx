import clsx from "clsx"
import NavItem from "components/items/NavItem"
import List from "containers/List"
import Row from "containers/Row"
import { IconContext } from "react-icons"
import {
  RiBriefcase4Fill,
  RiHomeHeartFill,
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
    <IconContext.Provider value={{ size: "24", className: "text-onyx-black" }}>
      <nav className={classes} {...props}>
        <Row className="m-0">
          <List className="lg:w-full lg:gap-x-8 lg:mr-8">
            <NavItem icon={<RiHomeHeartFill />} name="Featured" link="/" />
            <NavItem icon={<RiSwordFill />} name="Skills" link="/skills/technical" />
            <NavItem icon={<RiUser2Fill />} name="Profile" link="/profile" />
            <NavItem icon={<RiPencilRuler2Fill />} name="Projects" link="/projects" />
            <NavItem icon={<RiBriefcase4Fill />} name="Experiences" link="/experiences" />
          </List>
        </Row>
      </nav>
    </IconContext.Provider>
  )
}

export default Nav
