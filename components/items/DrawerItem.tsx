import clsx from "clsx"
import Text from "components/common/Text"
import { BsXDiamondFill } from "react-icons/bs"
import { IconContext } from "react-icons/lib"
import { RiExternalLinkLine } from "react-icons/ri"
import { TextType } from "types/enum"

type DrawerItemProps = React.ComponentPropsWithoutRef<"li"> & {
  category: string
  icon?: React.ReactNode
  link?: string
  text: string
}

const DrawerItem = ({ category, icon, link, text, className, ...props }: DrawerItemProps) => {
  const classes = clsx(["flex items-center mx-4", className])

  return (
    <IconContext.Provider value={{ size: "16" }}>
      <li className={classes} {...props}>
        {icon ? icon : <BsXDiamondFill className="self-start mt-1 text-onyx-black" />}
        <Text type={TextType.ITEM_NAME} className="self-start mt-px ml-2 mr-1 whitespace-nowrap">
          {category}:
        </Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Text type={TextType.ITEM_NAME} link={Boolean(link)}>
            {text} <RiExternalLinkLine className="inline" />
          </Text>
        </a>
      </li>
    </IconContext.Provider>
  )
}

export default DrawerItem
