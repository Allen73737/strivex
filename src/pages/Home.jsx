import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const quotes = [
  "Progress is the Goal.",
  "Soft skills create legends.",
  "Code builds systems. Influence builds futures.",
  "StriveX is not a team, it is a movement."
]

export default function Home() {
  return (
    <motion.section className="page" initial={{opacity:0}} animate={{opacity:1}}>
      <motion.h1 animate={{y:[80,0]}}>STRIVEX</motion.h1>

      <Swiper autoplay={{delay:2500}}>
        {quotes.map((q,i)=>(
          <SwiperSlide key={i}><h3>{q}</h3></SwiperSlide>
        ))}
      </Swiper>

      <div className="content-block">
        <h2>Our Vision</h2>
        <p>
          StriveX represents a generation that believes growth is continuous.
          We merge technology, mindset, and soft skills to create influence
          beyond code.
        </p>
      </div>

      <div className="content-block">
        <h2>Philosophy</h2>
        <p>
          Progress is not about speed. It is about direction.
          Every small effort compounds into a larger future.
        </p>
      </div>

      <span>↓ Scroll</span>
    </motion.section>
  )
}
