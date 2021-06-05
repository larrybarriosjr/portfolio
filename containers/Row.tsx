import clsx from "clsx"

type RowProps = React.ComponentPropsWithRef<"div">

const Row = ({ className, children, ...props }: RowProps) => {
  const classes = clsx([
    "flex",
    { "m-4": !className?.includes(" m-") && !className?.startsWith("m-") },
    className
  ])

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Row
