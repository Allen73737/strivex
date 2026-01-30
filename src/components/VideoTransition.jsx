import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function VideoTransition({ to }) {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to)
    }, 8000) // EXACT video duration (8s)

    return () => clearTimeout(timer)
  }, [to])

  return (
    <motion.div
      className="video-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <video
        src="/logo-animation.mp4"
        autoPlay
        muted
        playsInline
        className="transition-video"
      />
    </motion.div>
  )
}
