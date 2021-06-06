import Image from "components/common/Image"
import Pill from "components/common/Pill"
import Text from "components/common/Text"
import Row from "containers/Row"
import { TextType } from "types/enum"

type ProjectItemProps = React.ComponentPropsWithoutRef<"li"> & {
  logo: string
  name: string
  description: string
  pills: string[]
}

const ProjectItem = ({ logo, name, description, pills, ...props }: ProjectItemProps) => {
  return (
    <li {...props}>
      <Row className="m-0">
        <Row className="m-0">
          <Image src={logo} layout="fill" objectFit="contain" className="w-16 h-auto" />
        </Row>
        <Row className="flex-col m-0 ml-6 items-left">
          <Text type={TextType.ITEM_NAME} className="mb-1">
            {name}
          </Text>
          <Text className="mb-1">{description}</Text>
          <Row className="flex-wrap m-0 gap-x-1 gap-y-2">
            {pills.map((pill, idx) => (
              <Pill key={idx} name={pill} />
            ))}
          </Row>
        </Row>
      </Row>
    </li>
  )
}

export default ProjectItem
