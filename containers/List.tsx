import clsx from "clsx"

type ListProps = React.ComponentPropsWithoutRef<"ul">

const List = ({ className, children, ...props }: ListProps) => {
  const classes = clsx([
    "flex flex-wrap w-full m-0",
    { "gap-y-4": !className?.includes("gap-y-") },
    className
  ])

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

export default List
