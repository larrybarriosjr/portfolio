import Image from "components/common/Image"
import Pill from "components/common/Pill"
import Text from "components/common/Text"
import Row from "containers/Row"
import { RiExternalLinkLine } from "react-icons/ri"
import { TextType } from "types/enum"

type ProjectItemProps = React.ComponentPropsWithoutRef<"li"> & {
  description: string
  link: string
  logo: string
  name: string
  pills: string[]
}

const ProjectItem = ({ logo, name, description, link, pills, ...props }: ProjectItemProps) => {
  return (
    <li {...props}>
      <Row className="m-0">
        <Row className="m-0">
          <Image src={logo} layout="fill" objectFit="contain" className="w-16 h-auto" link={link} />
        </Row>
        <Row className="flex-col m-0 ml-6 items-left">
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-max">
            <Text type={TextType.ITEM_NAME} className="flex items-center gap-1 mb-1" title={link} link>
              {name} <RiExternalLinkLine />
            </Text>
          </a>
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
