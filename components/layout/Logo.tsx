import clsx from "clsx"

type BrandProps = React.ComponentPropsWithoutRef<"h1">

const Brand = ({ className }: BrandProps) => {
  const classes = clsx(["inline text-3xl font-black text-forest-green", className])

  return (
    <div aria-labelledby="logo" aria-describedby="logo-info" className={classes}>
      <p id="logo">koala</p>
      <p id="logo-info" hidden>
        Logo for Koala site created by Larry Barrios Jr.
      </p>
    </div>
  )
}

export default Brand
