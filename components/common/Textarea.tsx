import clsx from "clsx"
import { ChangeEvent, useState } from "react"

const Textarea = (props: React.ComponentPropsWithoutRef<"textarea">) => {
  const [inputValue, setInputValue] = useState("")

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const classes = clsx([
    "w-full px-4 py-2 rounded-md bg-seafoam-green ring ring-forest-green placeholder-steel-grey",
    { "font-bold": inputValue }
  ])

  return <textarea rows={6} className={classes} onChange={handleInput} {...props} />
}

export default Textarea
