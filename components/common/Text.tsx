import clsx from "clsx"
import { TextType } from "types/enum"

type TextProps = React.ComponentPropsWithoutRef<"p"> & {
  type?: TextType
  link?: boolean
}

const Text = ({ type, link, children, className, ...props }: TextProps) => {
  const typeClassName = (type?: TextType) => {
    switch (type) {
      case TextType.DRAWER_DESCRIPTION:
        return "text-xs font-bold text-fern-green"
      case TextType.DRAWER_HEADING:
        return "font-extrabold tracking-wide text-forest-green"
      case TextType.ITEM_NAME:
        return link ? "font-bold text-forest-green cursor-pointer" : "font-bold text-onyx-black"
      case TextType.PAGE_DESCRIPTION:
        return "font-bold text-fern-green"
      case TextType.PAGE_HEADING:
        return "text-2xl font-extrabold tracking-wide text-forest-green"
      case TextType.PILL_NAME:
        return "text-2xs font-extrabold text-seafoam-green"
      case TextType.SUMMARY_HEADING:
        return link
          ? "text-xs font-semibold text-forest-green cursor-pointer"
          : "text-xs font-semibold text-seafoam-green"
      default:
        return "text-xs font-medium text-onyx-black"
    }
  }

  const classes = clsx([typeClassName(type), className])

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

export default Text
