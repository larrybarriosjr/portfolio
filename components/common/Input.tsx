import clsx from "clsx"
import { ChangeEvent, useState } from "react"

const Input = (props: React.ComponentPropsWithoutRef<"input">) => {
  const [inputValue, setInputValue] = useState("")

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const classes = clsx([
    "w-full px-4 py-2 rounded-md bg-seafoam-green ring ring-forest-green placeholder-steel-grey",
    { "font-bold": inputValue }
  ])

  return <input className={classes} onChange={handleInput} value={inputValue} {...props} />
}

export default Input
