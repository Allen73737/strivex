import { useState, useEffect } from "react"

export default function TypingText({ text }) {
  const [display, setDisplay] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i))
      i++
      if (i > text.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [text])

  return <span>{display}</span>
}
