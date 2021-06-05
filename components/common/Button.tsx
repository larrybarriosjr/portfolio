import clsx from "clsx"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  icon?: React.ReactNode
  text?: string
}

const Button = ({ icon, text, className, type = "button", ...props }: ButtonProps) => {
  const classes = clsx(["flex p-0 border-none bg-none", className])

  return (
    <button type={type} className={classes} {...props}>
      {icon} {text}
    </button>
  )
}

export default Button
