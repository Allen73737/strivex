import { motion, useScroll, useTransform } from "framer-motion"

export default function WaveBackground() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <motion.div className="wave-bg" style={{ y }} />
  )
}
