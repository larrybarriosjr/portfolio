import Image from "components/common/Image"
import Text from "components/common/Text"
import Row from "containers/Row"
import Section from "containers/Section"
import Head from "next/head"
import { TextType } from "types/enum"

type TitleProps = React.ComponentPropsWithoutRef<"section"> & {
  avatar?: string
  alt?: string
  description?: string
  heading: string
  subheading: string
  label: string
}

const Title = ({ avatar, alt, heading, subheading, description = subheading, label }: TitleProps) => {
  return (
    <Section className="bg-none">
      <Head>
        <title>Koala | {label}</title>
        <meta name="description" content={description} />
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
            className="grid w-40 h-40 m-4 shadow-2xl sm:w-60 sm:h-60 sm:my-4"
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
        {subheading ? (
          <Text type={TextType.PAGE_DESCRIPTION} className="w-5/6 lg:w-2/3">
            {subheading}
          </Text>
        ) : null}
      </Row>
    </Section>
  )
}

export default Title
