import koala from "assets/koala.svg"
import Button from "./common/Button"
import Image from "./common/Image"

const Drawer = () => {
  return (
    <Button
      icon={<Image src={koala} alt="Cipher Koala image" className="p-1" width={44} height={44} bordered />}
      className="ml-3"
    />
  )
}

export default Drawer
