import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Html } from "@react-three/drei"

function Orbit({ members }) {
  const group = useRef()

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.2
  })

  return (
    <group ref={group}>
      {members.map((m, i) => {
        const angle = (i / members.length) * Math.PI * 2
        const radius = 4
        return (
          <group key={i} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
            <mesh>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="silver" />
            </mesh>
            <Html center>
              <div className="orbit-label">{m.name}</div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

export default function OrbitTeam({ captain, vice, members }) {
  return (
    <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      {/* CAPTAIN */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="white" emissive="silver" />
      </mesh>
      <Html position={[0, 1.7, 0]} center>
        <div className="leader-label">{captain.name} (Captain)</div>
      </Html>

      {/* VICE CAPTAIN */}
      <mesh position={[0, -0.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="white" emissive="gray" />
      </mesh>
      <Html position={[0, -1.5, 0]} center>
        <div className="leader-label">{vice.name} (Vice)</div>
      </Html>

      {/* ORBIT MEMBERS */}
      <Orbit members={members} />
    </Canvas>
  )
}
