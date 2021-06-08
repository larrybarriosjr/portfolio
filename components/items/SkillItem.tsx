import Image from "components/common/Image"
import Text from "components/common/Text"
import Row from "containers/Row"
import { TextType } from "types/enum"

type SkillItemProps = React.ComponentPropsWithoutRef<"li"> & {
  logo: string
  name: string
}

const SkillItem = ({ logo, name, ...props }: SkillItemProps) => {
  return (
    <li className="w-1/3 text-center" {...props}>
      <Row className="m-0 mb-1">
        <Image src={logo} alt={name} layout="fill" objectFit="contain" className="w-full h-12" />
      </Row>
      <Text type={TextType.ITEM_NAME}>{name}</Text>
    </li>
  )
}

export default SkillItem
