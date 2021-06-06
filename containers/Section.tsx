import clsx from "clsx"

type SectionProps = React.ComponentPropsWithoutRef<"section">

const Section = ({ className, children, ...props }: SectionProps) => {
  const classes = clsx(["py-px my-2", { "bg-snow-white": !className?.includes("bg-") }, className])

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}

export default Section
