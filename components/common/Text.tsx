import clsx from "clsx"
import { TextType } from "types/enum"

type TextProps = React.ComponentPropsWithoutRef<"p"> & {
  type?: TextType
}

const Text = ({ type, children, className, ...props }: TextProps) => {
  const typeClassName = (type?: TextType) => {
    switch (type) {
      case TextType.PAGE_HEADING:
        return "text-2xl font-extrabold tracking-wide text-forest-green"
      case TextType.PAGE_DESCRIPTION:
        return "font-bold text-fern-green"
      case TextType.SUMMARY_HEADING:
        return "text-xs font-semibold text-seafoam-green"
      case TextType.ITEM_NAME:
        return "font-bold text-onyx-black"
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
