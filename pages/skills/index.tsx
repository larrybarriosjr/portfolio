import Text from "components/common/Text"
import Title from "components/layout/Title"
import Row from "containers/Row"
import Section from "containers/Section"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { TextType } from "types/enum"

const Skills = () => {
  return (
    <Fragment>
      <Title
        label="Skills"
        heading="Skills"
        subheading="This is a description of the skills list. What can usually be found here."
      />
      <Section className="pb-4">
        <Row className="flex-col text-center">
          <Row className="relative h-60 lg:h-80">
            <Image src="/images/personal-skills.svg" layout="fill" objectFit="contain" />
          </Row>
          <Link href="/skills/technical">
            <Text type={TextType.ITEM_NAME} link>
              Technical Skills
            </Text>
          </Link>
        </Row>
        <Row className="flex-col text-center">
          <Row className="relative h-60 lg:h-80">
            <Image src="/images/technical-skills.svg" layout="fill" objectFit="contain" />
          </Row>
          <Link href="/skills/personal">
            <Text type={TextType.ITEM_NAME} link>
              Personal Skills
            </Text>
          </Link>
        </Row>
      </Section>
    </Fragment>
  )
}

export default Skills
