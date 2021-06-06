import clsx from "clsx"
import NextImage, { ImageProps as NextImageProps } from "next/image"

type ImageProps = NextImageProps & {
  bordered?: boolean
  className?: string
}

const Image = ({ bordered = false, className, ...props }: ImageProps) => {
  const classes = clsx([
    "relative bg-snow-white overflow-hidden",
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
