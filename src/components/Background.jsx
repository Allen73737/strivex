import { motion, useScroll, useTransform } from "framer-motion"

export default function Background() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <motion.div
      className="animated-bg"
      style={{ scale, rotate }}
    />
  )
}
