import Button from "components/common/Button"
import Input from "components/common/Input"
import Textarea from "components/common/Textarea"
import Title from "components/layout/Title"
import Row from "containers/Row"
import Section from "containers/Section"
import { Fragment } from "react"
import { RiSendPlaneFill } from "react-icons/ri"

const Contact = () => {
  const FORM_ACTION = `${process.env.NEXT_PUBLIC_FORM_URL}/${process.env.NEXT_PUBLIC_FORM}`

  return (
    <Fragment>
      <Title
        label="Contact Form"
        heading="Contact Form"
        subheading="Need anything? You want to hire me? Great! Use the form below.
          You want to ask something? Great! Just use the form below. You want help
          with your homework? You want to chat about nonsense? You want to treat me
          to a coffee? Great! All of them are great! Just use the form below. Don't
          be shy."
      />
      <Row className="flex-col max-w-md gap-2 m-0 mx-auto my-2">
        <Section bordered className="w-full my-0">
          <Row>
            <form action={FORM_ACTION} name="Portfolio Contact Form" method="POST" className="w-full">
              <Row>
                <Input name="name" placeholder="Your name (What should I call you?)" required />
              </Row>
              <Row>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email (Where can I reach you?)"
                  required
                />
              </Row>
              <Row>
                <Textarea name="message" placeholder="Your message (How can I help you?)" required />
              </Row>
              <Row className="justify-end">
                <Button
                  icon={<RiSendPlaneFill />}
                  text="Submit"
                  type="submit"
                  className="flex items-center py-1 pl-2 pr-3 font-bold uppercase rounded-md ring-forest-green ring gap-x-2 bg-forest-green text-snow-white"
                />
              </Row>
            </form>
          </Row>
        </Section>
      </Row>
    </Fragment>
  )
}

export default Contact
