import { useEffect, useState } from "react"

export default function Nav() {
  const [active, setActive] = useState("hero")

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section, footer")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => sections.forEach((sec) => observer.unobserve(sec))
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => scrollTo("hero")}>STRIVEX</div>

      <div className="nav-links">
        {["hero","vision","facts","team","timeline","about"].map((id) => (
          <span
            key={id}
            className={active === id ? "active" : ""}
            onClick={() => scrollTo(id)}
          >
            {id.toUpperCase()}
          </span>
        ))}
      </div>
    </nav>
  )
}
