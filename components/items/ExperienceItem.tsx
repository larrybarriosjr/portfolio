import Image from "components/common/Image"
import Pill from "components/common/Pill"
import Text from "components/common/Text"
import Row from "containers/Row"
import { TextType } from "types/enum"

type ExperienceItemProps = React.ComponentPropsWithoutRef<"li"> & {
  logo: string
  name: string
  title: string
  pills: string[]
}

const ExperienceItem = ({ logo, name, title, pills, className = "", ...props }: ExperienceItemProps) => {
  return (
    <li className={className} {...props}>
      <Row className="flex-col m-0 text-center">
        <Row className="m-0">
          <Image src={logo} layout="fill" objectFit="contain" className="w-full h-16" />
        </Row>
        <Text type={TextType.ITEM_NAME}>{name}</Text>
        <Text>{title}</Text>
        <Row className="flex-wrap self-center justify-center w-2/3 m-0 mt-2 gap-x-1 gap-y-2">
          {pills.map((pill, idx) => (
            <Pill key={idx} name={pill} />
          ))}
        </Row>
      </Row>
    </li>
  )
}

export default ExperienceItem
