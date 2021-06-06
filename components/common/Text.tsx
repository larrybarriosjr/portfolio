import clsx from "clsx"

type TextProps = React.ComponentPropsWithoutRef<"p"> & {
  type?: "page-heading" | "page-description"
}

const Text = ({ type, children, className, ...props }: TextProps) => {
  const typeClassName = (type?: "page-heading" | "page-description") => {
    switch (type) {
      case "page-heading":
        return "text-2xl font-extrabold tracking-wide text-forest-green"
      case "page-description":
        return "font-bold text-fern-green"
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
