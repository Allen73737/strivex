import { useEffect } from "react"

export default function Cursor() {
  useEffect(() => {
    const c = document.querySelector(".cursor")

    window.addEventListener("mousemove", e => {
      c.style.left = e.clientX + "px"
      c.style.top = e.clientY + "px"
    })

    window.addEventListener("click", () => {
      c.classList.add("shock")
      setTimeout(()=>c.classList.remove("shock"),200)
    })
  }, [])

  return <div className="cursor" />
}
