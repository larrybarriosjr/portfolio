import clsx from "clsx"
import NextImage from "next/image"

type ImageProps = {
  alt: string
  src: string
  width: number
  height: number
  bordered?: boolean
  className?: string
}

const Image = ({ bordered = false, className, ...props }: ImageProps) => {
  const classes = clsx([
    "bg-snow-white h-14 w-14",
    { "rounded-full shadow-md border-3 border-forest-green border-solid": bordered },
    className
  ])

  return (
    <span className={classes}>
      <NextImage {...props} />
    </span>
  )
}

export default Image
