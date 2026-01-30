import { motion } from "framer-motion"

const team = [
  {
    name: "Edwin Benny",
    role: "Captain",
    img: "/team/edwin.jpg",
    bio: "A strategic leader with strong technical awareness and discipline. Edwin guides StriveX with vision, balancing logic and motivation to push the team toward continuous progress."
  },
  {
    name: "Meera Baburaj",
    role: "Vice Captain",
    img: "/team/meera.jpg",
    bio: "A structured thinker with exceptional coordination and emotional intelligence. Meera ensures smooth collaboration and keeps the team aligned with its goals."
  },
  {
    name: "Alen John Varghese",
    role: "Member",
    img: "/team/alen.jpg",
    bio: "A focused Computer Science student who believes teamwork multiplies success. His positive mindset helps transform effort into collective momentum."
  },
  {
    name: "Allen Francis",
    role: "Member",
    img: "/team/allen.jpg",
    bio: "A creative and driven learner known for transforming ideas into influence through communication and confidence. Allen represents innovation powered by consistency."
  },
  {
    name: "Delna K Paul",
    role: "Member",
    img: "/team/delna.jpg",
    bio: "A curious innovator motivated by learning and collaboration. Delna’s thoughtful communication style strengthens unity within the team."
  },
  {
    name: "Maria Renil",
    role: "Member",
    img: "/team/maria.jpg",
    bio: "A calm and creative thinker who balances logic with imagination. Maria’s supportive nature plays a key role in maintaining a positive team culture."
  },
  {
    name: "Newel Tom",
    role: "Member",
    img: "/team/newel.jpg",
    bio: "A motivated Computer Science student who believes growth comes from continuous learning. His positivity fuels team spirit and forward movement."
  },
  {
    name: "Sidharth P S",
    role: "Member",
    img: "/team/sidharth.jpg",
    bio: "An adaptable problem solver who thrives in collaborative environments. Sidharth is known for simplifying complexity and supporting collective success."
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 }
}

export default function Team() {
  return (
    <section className="page">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Minds of StriveX
      </motion.h1>

      {/* INTRO TEXT */}
      <motion.p
        style={{ maxWidth: "800px", textAlign: "center", opacity: 0.75 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        StriveX is not just a team — it is a convergence of discipline,
        creativity, and influence. Each member contributes not only through
        technical knowledge, but through mindset, communication, and vision.
      </motion.p>

      {/* MANIFESTO */}
      <motion.div
        className="content-block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>⚡ Team Manifesto</h2>
        <p>
          We believe progress is intentional. We believe consistency builds
          identity. We believe influence is earned through clarity, not noise.
          Technology is our tool — mindset is our weapon.
        </p>
      </motion.div>

      {/* TEAM GRID */}
      <motion.div
        className="team-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {team.map((m, i) => (
          <motion.div
            className="card futuristic-card"
            key={i}
            variants={item}
            whileHover={{
              scale: 1.08,
              rotateY: 10,
              boxShadow: "0 0 25px silver"
            }}
          >
            <motion.img
              src={m.img}
              alt={m.name}
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            <h3>{m.name}</h3>
            <p><strong>{m.role}</strong></p>
            <p className="bio">{m.bio}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* INFLUENCE SECTION */}
      <motion.div
        className="content-block"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>🚀 Influence Protocol</h2>
        <p>
          In StriveX, becoming viral is not about fame — it is about impact.
          A single voice with clarity can shape an entire direction.
          Soft skills turn ideas into movements.
        </p>
      </motion.div>

      {/* FUTURE TEXT */}
      <motion.div
        className="content-block"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>🌌 The Future We Build</h2>
        <p>
          We are not preparing for tomorrow — we are designing it.
          StriveX stands at the intersection of learning and leadership,
          where every experiment becomes evolution.
        </p>
      </motion.div>

    </section>
  )
}
