import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Nav from "./components/Nav"
import CursorTrail from "./components/CursorTrail"
import Particles from "./components/Particles"
import BackgroundGrid from "./components/BackgroundGrid"
import IntroLoader from "./components/IntroLoader"

const team = [
  {name:"Edwin Benny",role:"Captain",img:"/team/edwin.jpg",bio:"Edwin is a focused Computer Science student known for leadership and structured thinking."},
  {name:"Meera Baburaj",role:"Vice Captain",img:"/team/meera.jpg",bio:"Meera is recognized for her coordination skills and emotional intelligence."},
  {name:"Alen John Varghese",role:"Member",img:"/team/alen.jpg",bio:"Alen is a curious learner driven by growth and collaboration."},
  {name:"Allen Francis",role:"Member",img:"/team/allen.jpg",bio:"Allen transforms ideas into influence using communication and confidence."},
  {name:"Delna K Paul",role:"Member",img:"/team/delna.jpg",bio:"Delna is an observant problem solver with a passion for teamwork."},
  {name:"Maria Renil",role:"Member",img:"/team/maria.jpg",bio:"Maria blends creativity with logic to approach challenges calmly."},
  {name:"Newel Tom",role:"Member",img:"/team/newel.jpg",bio:"Newel is motivated by continuous improvement and positive influence."},
  {name:"Sidharth P S",role:"Member",img:"/team/sidharth.jpg",bio:"Sidharth is an adaptable thinker who enjoys simplifying ideas."}
]

const facts = [
  "StriveX was formed by Computer Science students.",
  "Soft skills are valued as much as technical skills.",
  "Progress is measured by consistency.",
  "Influence creates opportunity.",
  "Discipline builds identity."
]

const timeline = [
  "Formation of StriveX",
  "Learning and Experimentation",
  "Discipline and Structure",
  "Influence through Soft Skills",
  "Future Innovation"
]

export default function App() {
  const [activeMember, setActiveMember] = useState(null)
  const [factIndex, setFactIndex] = useState(0)
  const [typedFact, setTypedFact] = useState("")
  const [loading, setLoading] = useState(true)

  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0,1], ["0%", "-20%"])

  useEffect(() => {
    document.body.style.scrollSnapType = "none"
    window.scrollTo(0,0)

    const t = setTimeout(() => {
      setLoading(false)
      setTimeout(() => {
        document.getElementById("hero")?.scrollIntoView({behavior:"auto"})
        document.body.style.scrollSnapType = "y mandatory"
      }, 50)
    }, 2000)

    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    let i=0
    setTypedFact("")
    const typer=setInterval(()=>{
      setTypedFact(facts[factIndex].slice(0,i))
      i++
      if(i>facts[factIndex].length) clearInterval(typer)
    },40)

    const timer=setTimeout(()=>setFactIndex((p)=>(p+1)%facts.length),3000)
    return()=>{clearInterval(typer);clearTimeout(timer)}
  },[factIndex])

  return (
    <>
      {/* Loader overlay */}
      <AnimatePresence>
        {loading && <IntroLoader />}
      </AnimatePresence>

      {/* Site always rendered */}
      <CursorTrail />
      <Particles />
      <BackgroundGrid />
      <Nav />
      <div className="starfield"></div>

      {/* HERO */}
      <motion.section id="hero" className="section hero" style={{y:parallaxY}}>
        <motion.h1
          className="logo-word rotate3d glitch"
          initial={{ scale: 4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          STRIVE<span className="logo-x">X</span>
        </motion.h1>
        <p className="tagline">Progress is the Goal</p>
      </motion.section>

      {/* VISION */}
      <motion.section id="vision" className="section"
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}>
        <div className="vision-box hover-box">
          <h2>Our Vision</h2>
          <p>
            StriveX is a futuristic student collective driven by mindset,
            discipline and influence. We build identity through consistency.
          </p>
        </div>
      </motion.section>

      {/* FACTS */}
      <motion.section id="facts" className="section"
        initial={{opacity:0,scale:0.8}}
        whileInView={{opacity:1,scale:1}}>
        <h2>StriveX Facts</h2>
        <div className="fact-box hover-box">{typedFact}</div>
      </motion.section>

      {/* TEAM */}
      <section id="team" className="section">
        <h2>The Minds of StriveX</h2>

        <div className="leaders">
          {[team[0],team[1]].map((m,i)=>(
            <motion.div 
              key={i} 
              className="leader-card hover-box leader-special"
              initial={{opacity:0,y:-80}}
              whileInView={{opacity:1,y:0}}
              whileHover={{scale:1.1,rotateY:15}}
              onClick={()=>setActiveMember(m)}>

              <div className="avatar-wrap">
                <div className="avatar-bg"></div>
                <img src={m.img} className="face-glow"/>
              </div>

              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="team-grid">
          {team.slice(2).map((m,i)=>(
            <motion.div key={i} className="team-card hover-box"
              initial={{opacity:0,x:i%2===0?-120:120,y:i%3===0?-80:80}}
              whileInView={{opacity:1,x:0,y:0}}
              whileHover={{scale:1.08,rotateX:10}}
              transition={{duration:0.8}}
              onClick={()=>setActiveMember(m)}>

              <div className="avatar-wrap">
                <div className="avatar-bg"></div>
                <img src={m.img} className="face-glow"/>
              </div>

              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <motion.section id="timeline" className="section"
        initial={{opacity:0}}
        whileInView={{opacity:1}}>
        <h2>Evolution Timeline</h2>
        <div className="timeline-track">
          {timeline.map((t,i)=>(
            <motion.div key={i} className="timeline-item hover-box"
              initial={{opacity:0,x:-120}}
              whileInView={{opacity:1,x:0}}
              transition={{delay:i*0.2}}>
              {t}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer id="about" className="footer"
        initial={{opacity:0,y:120}}
        whileInView={{opacity:1,y:0}}>
        <div className="footer-wave"></div>
        <iframe className="footer-map"
          src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed">
        </iframe>

        <h2>ABOUT STRIVEX</h2>
        <p>Progress is the Goal</p>

        <div className="footer-grid">
          <div className="hover-box">
            <h4>About</h4>
            <p>Futuristic student team driven by growth and influence.</p>
          </div>
          <div className="hover-box">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={()=>document.getElementById("hero").scrollIntoView({behavior:"smooth"})}>Home</li>
              <li onClick={()=>document.getElementById("vision").scrollIntoView({behavior:"smooth"})}>Vision</li>
              <li onClick={()=>document.getElementById("team").scrollIntoView({behavior:"smooth"})}>Team</li>
              <li onClick={()=>document.getElementById("timeline").scrollIntoView({behavior:"smooth"})}>Timeline</li>
            </ul>
          </div>
          <div className="hover-box">
            <h4>Contact</h4>
            <form className="contact-form">
              <input placeholder="Name"/>
              <input placeholder="Email"/>
              <textarea placeholder="Message"/>
              <button>Send</button>
            </form>
          </div>
        </div>

        <div className="socials">
          <a>in</a><a>ig</a><a>fb</a><a>✉</a>
        </div>

        <p className="footer-copy">© 2026 STRIVEX</p>
      </motion.footer>

      {/* BIO POPUP */}
      <AnimatePresence>
        {activeMember && (
          <motion.div 
            className="bio-overlay"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={()=>setActiveMember(null)}
          >
            <motion.div 
              className="bio-card"
              initial={{scale:0.6, opacity:0}}
              animate={{scale:1, opacity:1}}
              exit={{scale:0.6, opacity:0}}
              transition={{type:"spring", stiffness:120}}
              onClick={(e)=>e.stopPropagation()}
            >
              <div className="avatar-wrap big">
                <div className="avatar-bg"></div>
                <img src={activeMember.img} className="face-glow"/>
              </div>

              <h2>{activeMember.name}</h2>
              <h4>{activeMember.role}</h4>
              <p>{activeMember.bio}</p>

              <button onClick={()=>setActiveMember(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
