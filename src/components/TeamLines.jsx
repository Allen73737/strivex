import { useEffect, useRef } from "react"

export default function TeamLines() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    let points = Array.from({ length: 8 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h
    }))

    function draw() {
      ctx.clearRect(0,0,w,h)
      ctx.strokeStyle = "rgba(192,192,192,0.3)"

      for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
          ctx.beginPath()
          ctx.moveTo(points[i].x, points[i].y)
          ctx.lineTo(points[j].x, points[j].y)
          ctx.stroke()
        }
      }

      requestAnimationFrame(draw)
    }
    draw()
  }, [])

  return <canvas ref={canvasRef} className="team-lines" />
}
