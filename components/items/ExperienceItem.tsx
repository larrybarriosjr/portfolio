import Image from "components/common/Image"
import Pill from "components/common/Pill"
import Text from "components/common/Text"
import Row from "containers/Row"
import { RiExternalLinkLine } from "react-icons/ri"
import { TextType } from "types/enum"

type ExperienceItemProps = React.ComponentPropsWithoutRef<"li"> & {
  date?: string
  functions?: string[]
  link: string
  location?: string
  logo: string
  name: string
  title: string
  pills: string[]
}

const ExperienceItem = ({
  date,
  functions,
  link,
  location,
  logo,
  name,
  title,
  pills,
  ...props
}: ExperienceItemProps) => {
  return (
    <li {...props}>
      <Row className="flex-col m-0 text-center">
        <Row className="m-0">
          <Image
            alt={name + " logo"}
            src={logo}
            layout="fill"
            objectFit="contain"
            className="w-full h-16"
          />
        </Row>
        <Text
          type={TextType.ITEM_NAME}
          link={Boolean(link)}
          className="flex items-center self-center gap-1 my-1"
        >
          {name} <RiExternalLinkLine />
        </Text>
        <Text>{title}</Text>
        <Row className="flex-wrap self-center justify-center w-3/4 m-0 mt-2 gap-x-1 gap-y-2">
          {pills.map((pill, idx) => (
            <Pill key={idx} name={pill} />
          ))}
        </Row>
        <Row className="flex-col m-0 my-2 gap-y-1">
          {location ? (
            <Row className="m-0 gap-x-1">
              <Text className="font-bold">Office Location:</Text>
              <Text className="italic">{location}</Text>
            </Row>
          ) : null}
          {date ? (
            <Row className="m-0 gap-x-1">
              <Text className="font-bold">Employment Date:</Text>
              <Text className="italic">{date}</Text>
            </Row>
          ) : null}
          {functions && functions.length ? (
            <Row className="flex-col m-0 text-left gap-y-1">
              <Text className="font-bold">Job Description:</Text>
              {functions.map((f, idx) => (
                <Text key={idx} className="italic">
                  &bull; {f}
                </Text>
              ))}
            </Row>
          ) : null}
        </Row>
      </Row>
    </li>
  )
}

export default ExperienceItem
