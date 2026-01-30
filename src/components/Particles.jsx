import { useRef, useEffect } from "react"

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    let particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6
    }))

    function draw() {
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = "silver"
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if(p.x<0||p.x>w) p.vx*=-1
        if(p.y<0||p.y>h) p.vy*=-1
        ctx.beginPath()
        ctx.arc(p.x,p.y,1.2,0,Math.PI*2)
        ctx.fill()
      })
      requestAnimationFrame(draw)
    }
    draw()

    window.onresize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
  }, [])

  return <canvas ref={canvasRef} className="particles" />
}
