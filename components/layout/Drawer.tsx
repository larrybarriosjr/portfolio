import clsx from "clsx"
import Button from "components/common/Button"
import Image from "components/common/Image"
import Text from "components/common/Text"
import DrawerItem from "components/items/DrawerItem"
import List from "containers/List"
import Row from "containers/Row"
import Section from "containers/Section"
import recommended from "data/recommended"
import { Fragment, useEffect, useState } from "react"
import { ImCross } from "react-icons/im"
import { RiDownloadFill } from "react-icons/ri"
import { TextType } from "types/enum"

const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const classes = clsx([
    "fixed z-10 w-full h-screen max-w-5xl -ml-4 transition-all",
    "delay-700 divide-y bg-snow-white divide-steel-grey lg:-ml-6",
    open ? "top-0" : "-top-full"
  ])

  const handleOpenDrawer = () => {
    setOpen(true)
  }

  const handleCloseDrawer = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <Button
        icon={
          <Image
            alt="Cipher Koala image"
            bordered
            className="p-1 h-14 w-14"
            height={44}
            src="/images/koala.svg"
            width={44}
          />
        }
        className="ml-3"
        onClick={handleOpenDrawer}
      />
      <aside className={classes}>
        <Section className="my-0 bg-seafoam-green">
          <Row className="items-center justify-start p-4 m-0 gap-x-4">
            <Image
              alt="Cipher Koala image"
              bordered
              className="p-1 h-14 w-14"
              height={44}
              src="/images/koala.svg"
              width={44}
            />
            <Row className="flex-col items-start m-0 mr-auto">
              <Text type={TextType.DRAWER_HEADING} className="text-left">
                Larry Barrios Jr.
              </Text>
              <Text type={TextType.DRAWER_DESCRIPTION}>Web App Developer</Text>
            </Row>
            <Button icon={<ImCross size="16px" />} onClick={handleCloseDrawer} />
          </Row>
        </Section>
        <Section className="my-0 bg-seafoam-green">
          <Row className="px-4 py-2 m-0">
            <a
              href="Larry_Barrios_Jr_Resume.pdf"
              download="Larry Barrios Jr Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<RiDownloadFill className="h-6 my-0 ml-2 mr-4" />} text="Download my resume" />
            </a>
          </Row>
        </Section>
        <Section className="my-0">
          <Row>
            <Text type={TextType.SUMMARY_HEADING}>Recommended List</Text>
          </Row>
          <List className="flex-col m-4 gap-y-2">
            {recommended.map((r, idx) => (
              <DrawerItem key={idx} category={r.category} link={r.link} text={r.text} />
            ))}
          </List>
        </Section>
      </aside>
    </Fragment>
  )
}

export default Drawer
