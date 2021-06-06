import Button from "components/common/Button"
import Image from "components/common/Image"
import koala from "public/images/koala.svg"

const Drawer = () => {
  return (
    <Button
      icon={
        <Image
          src={koala}
          alt="Cipher Koala image"
          className="p-1 h-14 w-14"
          width={44}
          height={44}
          bordered
        />
      }
      className="ml-3"
    />
  )
}

export default Drawer
