import clsx from "clsx"
import Button from "components/common/Button"
import Link from "next/link"

type NavItemProps = React.ComponentPropsWithoutRef<"li"> & {
  icon: React.ReactNode
  name: string
}

const NavItem = ({ icon, name, className, ...props }: NavItemProps) => {
  const classes = clsx(["flex justify-center flex-1 h-full py-0.5", className])

  return (
    <li className={classes} {...props}>
      <Link href="/">
        <Button
          icon={icon}
          text={name}
          className="flex-col items-center w-full h-full gap-1 p-1 font-bold uppercase text-forest-green text-2xs"
        />
      </Link>
    </li>
  )
}

export default NavItem
