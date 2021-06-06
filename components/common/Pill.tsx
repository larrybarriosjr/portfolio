import clsx from "clsx"
import { TextType } from "types/enum"
import Text from "./Text"

type PillProp = React.ComponentPropsWithoutRef<"span"> & {
  name: string
}

const Pill = ({ name, className = "", ...props }: PillProp) => {
  const classes = clsx(["px-1.5 py-1 rounded-xl whitespace-nowrap bg-forest-green", className])

  return (
    <span className={classes} {...props}>
      <Text type={TextType.PILL_NAME}>{name}</Text>
    </span>
  )
}

export default Pill
