import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

function Slash() {
  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.rotation.z = Math.sin(clock.elapsedTime) * 0.6
    ref.current.scale.x = 1 + Math.sin(clock.elapsedTime) * 0.2
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[4, 0.3, 0.3]} />
      <meshStandardMaterial color="white" emissive="silver" />
    </mesh>
  )
}

export default function XSlash3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 3]} />
      <Slash />
      <Slash rotation={[0, 0, Math.PI / 2]} />
    </Canvas>
  )
}
