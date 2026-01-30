import { useEffect } from "react"

export default function CursorTrail() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow")

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    })
  }, [])

  return <div className="cursor-glow"></div>
}
