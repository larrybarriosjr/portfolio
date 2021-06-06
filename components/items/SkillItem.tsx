import clsx from "clsx"
import Image from "components/common/Image"
import Text from "components/common/Text"
import { TextType } from "types/enum"

type SkillItemProps = React.ComponentPropsWithoutRef<"li"> & {
  logo: string
  name: string
}

const SkillItem = ({ logo, name, className, ...props }: SkillItemProps) => {
  const classes = clsx(["w-1/3 text-center", className])

  return (
    <li className={classes} {...props}>
      <Image src={logo} alt={name} width="full" height={48} className="mx-auto" />
      <Text type={TextType.ITEM_NAME}>{name}</Text>
    </li>
  )
}

export default SkillItem
