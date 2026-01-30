import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Intro() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => {
      navigate("/home")
    }, 8000)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <video
        src="/logo-animation.mp4"
        autoPlay
        muted
        loop={false}
        playsInline
        style={{
          width: "300px",
          maxWidth: "80%"
        }}
      />
    </div>
  )
}
