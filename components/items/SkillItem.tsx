import clsx from "clsx"
import Image from "components/common/Image"
import Text from "components/common/Text"
import Row from "containers/Row"
import { TextType } from "types/enum"

type SkillItemProps = React.ComponentPropsWithoutRef<"li"> & {
  logo: string
  name: string
}

const SkillItem = ({ className, logo, name, ...props }: SkillItemProps) => {
  const classes = clsx(["w-1/3 text-center", { "md:w-1/5": !className?.includes("md:w-") }, className])

  return (
    <li className={classes} {...props}>
      <Row className="m-0 mb-1">
        <Image src={logo} alt={name} layout="fill" objectFit="contain" className="w-full h-12" />
      </Row>
      <Text type={TextType.ITEM_NAME}>{name}</Text>
    </li>
  )
}

export default SkillItem
