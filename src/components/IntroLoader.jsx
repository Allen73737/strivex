import { motion } from "framer-motion"

export default function IntroLoader() {
  return (
    <motion.div
      className="intro-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="loader-logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        STRIVE<span>X</span>
      </motion.h1>
    </motion.div>
  )
}
