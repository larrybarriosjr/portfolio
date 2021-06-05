import clsx from "clsx"

type BrandProps = React.ComponentPropsWithoutRef<"h1">

const Brand = ({ className = "" }: BrandProps) => {
  const classes = clsx(["inline text-3xl font-black text-forest-green", className])

  return <h1 className={classes}>koala</h1>
}

export default Brand
