import { Canvas, useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import { useRef } from "react"

function RotatingText() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y += 0.01
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <Text
      ref={ref}
      fontSize={2}
      color="silver"
      position={[0, 0, 0]}
      anchorX="center"
      anchorY="middle"
    >
      STRIVE X
    </Text>
  )
}

export default function Logo3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingText />
    </Canvas>
  )
}
