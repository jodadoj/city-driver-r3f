import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Canvas, Euler } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Suspense } from 'react'
import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Physics } from "@react-three/rapier";
import { Float } from "@react-three/drei";


function App(): JSX.Element {

  return (
    <div className="canvas-container">

      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        <Suspense> { /* Allows async operations in React */}
          <Physics>
            <RigidBody colliders="trimesh" type="fixed">

              <Plane
                position={[0, -20, 0]}
                args={[60, 60]}
                rotation={[ Math.PI*-0.5,0,0 ]}
                receiveShadow>
                <shadowMaterial opacity={0.2} />
                <meshStandardMaterial color={0x75e6da} />
              </Plane>
              
            </RigidBody>
          </Physics>
        </Suspense>
      </Canvas>
    </ div>
  );
}

export default App
