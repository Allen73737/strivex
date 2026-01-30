import { motion } from "framer-motion"

export default function Transition({ children }) {
  return (
    <>
      <motion.div
        className="slice"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      {children}
    </>
  )
}
