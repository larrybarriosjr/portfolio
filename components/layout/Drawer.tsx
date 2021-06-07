import Button from "components/common/Button"
import Image from "components/common/Image"
import koala from "public/images/koala.svg"

const Drawer = () => {
  return (
    <Button
      icon={
        <Image
          alt="Cipher Koala image"
          bordered
          className="p-1 h-14 w-14"
          height={44}
          src={koala}
          width={44}
        />
      }
      className="ml-3"
    />
  )
}

export default Drawer
