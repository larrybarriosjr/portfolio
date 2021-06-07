import Image from "components/common/Image"
import Text from "components/common/Text"
import Row from "containers/Row"
import Section from "containers/Section"
import Head from "next/head"
import { TextType } from "types/enum"

type TitleProps = React.ComponentPropsWithoutRef<"section"> & {
  avatar?: string
  alt?: string
  heading: string
  subheading?: string
  label: string
}

const Title = ({ avatar, alt, heading, subheading, label }: TitleProps) => {
  return (
    <Section className="bg-none">
      <Head>
        <title>Koala | {label}</title>
      </Head>
      <Row
        aria-describedby={"page-info-" + label.toLowerCase()}
        aria-labelledby={"page-title-" + label.toLowerCase()}
        className="flex-col items-center mt-0 mb-2 text-center lg:mb-6 lg:mt-2"
      >
        {avatar ? (
          <Image
            src={avatar}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="w-40 h-40 sm:w-60 sm:h-60 sm:my-4"
            bordered
          />
        ) : null}
        <h1 id={"page-title-" + label.toLowerCase()} hidden>
          {label}
        </h1>
        <p id={"page-info-" + label.toLowerCase()} hidden>
          {label + " page"}
        </p>
        <Text type={TextType.PAGE_HEADING}>{heading}</Text>
        {subheading ? <Text type={TextType.PAGE_DESCRIPTION}>{subheading}</Text> : null}
      </Row>
    </Section>
  )
}

export default Title
