import Image from "components/common/Image"
import Text from "components/common/Text"
import Row from "containers/Row"
import Head from "next/head"

type TitleProps = React.ComponentPropsWithoutRef<"section"> & {
  avatar?: string
  alt?: string
  heading: string
  subheading?: string
  label: string
}

const Title = ({ avatar, alt, heading, subheading, label }: TitleProps) => {
  return (
    <section>
      <Head>
        <title>Koala | {label}</title>
      </Head>
      <Row
        aria-labelledby={"page-title-" + label.toLowerCase()}
        aria-describedby={"page-info-" + label.toLowerCase()}
        className="flex-col items-center mt-0 mb-2"
      >
        {avatar ? (
          <Image src={avatar} alt={alt} width={162} height={162} className="w-40 h-40" bordered />
        ) : null}
        <h1 id={"page-title-" + label.toLowerCase()} hidden>
          {label}
        </h1>
        <p id={"page-info-" + label.toLowerCase()} hidden>
          {label + " page"}
        </p>
        <Text type="page-heading">{heading}</Text>
        {subheading ? <Text type="page-description">{subheading}</Text> : null}
      </Row>
    </section>
  )
}

export default Title
