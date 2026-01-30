import { motion } from "framer-motion"

export default function FullscreenTransition({ children }) {
  return (
    <>
      <motion.div
        className="fullscreen-wipe"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1 }}
      />
      {children}
    </>
  )
}
