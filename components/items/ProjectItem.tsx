import clsx from "clsx"
import Image from "components/common/Image"
import Pill from "components/common/Pill"
import Text from "components/common/Text"
import List from "containers/List"
import Row from "containers/Row"
import { RiExternalLinkLine } from "react-icons/ri"
import { TextType } from "types/enum"

type ProjectItemProps = React.ComponentPropsWithoutRef<"li"> & {
  description: string
  features?: string[]
  link: string
  logo: string
  name: string
  pills: string[]
  platform?: string
  source?: string
}

const ProjectItem = ({
  description,
  features,
  link,
  logo,
  name,
  pills,
  platform,
  source,
  ...props
}: ProjectItemProps) => {
  return (
    <li {...props}>
      <Row className="m-0">
        <Row className="m-0">
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            className={clsx(["w-16", features ? "h-28" : "h-auto"])}
            link={link}
          />
        </Row>
        <Row className="flex-col m-0 ml-6 items-left">
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-max">
            <Text type={TextType.ITEM_NAME} className="flex items-center gap-1 mb-1" title={link} link>
              {name} <RiExternalLinkLine />
            </Text>
          </a>
          <Text className="mb-1">{description}</Text>
          {platform && source ? (
            <Row className="m-0 mb-4 gap-x-1">
              <Text className="font-bold">Source Code:</Text>
              <a href={source} target="_blank" rel="noopener noreferrer" className="w-max">
                <Text className="flex items-center gap-1 mb-1 italic" title={source} link>
                  {platform} <RiExternalLinkLine />
                </Text>
              </a>
            </Row>
          ) : null}
          {features && features.length ? (
            <Row className="flex-col m-0 mb-2">
              <Text className="text-sm italic font-extrabold">Features:</Text>
              <List className="flex-col mt-1 gap-y-1">
                {features.map((f, idx) => (
                  <Text key={idx}>&bull; {f}</Text>
                ))}
              </List>
            </Row>
          ) : null}
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
