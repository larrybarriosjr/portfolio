import clsx from "clsx"

type GridProps = React.ComponentPropsWithRef<"div">

const Grid = ({ className, children, ...props }: GridProps) => {
  const classes = clsx(["grid", className])

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Grid
