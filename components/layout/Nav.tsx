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
    "sticky bottom-0 left-0 w-full h-max ring-1 ring-steel-grey bg-snow-white",
    className
  ])
  return (
    <IconContext.Provider value={{ className: "h-6 w-6 text-onyx-black" }}>
      <nav className={classes} {...props}>
        <Row className="m-0">
          <List>
            <NavItem icon={<RiHomeHeartFill />} name="Featured" />
            <NavItem icon={<RiSwordFill />} name="Skills" />
            <NavItem icon={<RiUser2Fill />} name="Profile" />
            <NavItem icon={<RiPencilRuler2Fill />} name="Projects" />
            <NavItem icon={<RiBriefcase4Fill />} name="Experiences" />
          </List>
        </Row>
      </nav>
    </IconContext.Provider>
  )
}

export default Nav
