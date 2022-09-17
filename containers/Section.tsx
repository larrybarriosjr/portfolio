import clsx from "clsx"

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  bordered?: boolean
}

const Section = ({ bordered, className, children, ...props }: SectionProps) => {
  const classes = clsx([
    "py-px",
    { "my-2": !className?.includes("my-") },
    { "bg-snow-white": !className?.includes("bg-") },
    { "border-2 shadow-2xl border-seafoam-green": bordered },
    className
  ])

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}

export default Section
