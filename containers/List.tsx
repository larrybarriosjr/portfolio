import clsx from "clsx"

type ListProps = React.ComponentPropsWithoutRef<"ul">

const List = ({ className, children, ...props }: ListProps) => {
  const classes = clsx(["flex flex-wrap gap-y-4 w-full m-0", className])

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

export default List
