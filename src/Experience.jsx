import {
  SoftShadows,
  TransformControls,
  Center,
  OrbitControls,
  MeshReflectorMaterial
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useController } from '@react-three/xr'
import { Ground } from "./Ground";


export function Experience() {
  const cubeRef = useRef();
  const leftController = useController('left')
  const rightController = useController('right')

  useFrame((state, delta, XRFrame) => {
    console.log('testing')
    if (XRFrame) {
      if (rightController) {
        const rightGamePad = rightController.inputSource.gamepad

       /* right joystick values are stored in rightGamePad.axes */
      }
      if (leftController) {
        const leftGamePad = leftController.inputSource.gamepad
        /* left joystick values are stored in leftGamePad.axes */
      }
    }
  })
  // useFrame((state, delta) => {

  // });

  return (
    <>
      <SoftShadows />
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <mesh castShadow position-x={-2} position-y={1}>
          <sphereGeometry />
          <meshStandardMaterial
            args={[
              {
                color: "red",
                wireframe: false,
              },
            ]}
          />
        </mesh>

          <mesh castShadow ref={cubeRef} position-x={2} position-y={1}>
            <boxGeometry />
            <meshStandardMaterial
              args={[
                {
                  color: "blue",
                  wireframe: false,
                },
              ]}
            />
          </mesh>
        <TransformControls object={cubeRef} />
      </group>

      <mesh
        receiveShadow={true}
        position-y={0}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />

        <meshStandardMaterial color="yellow" />
        {/* <MeshReflectorMaterial resolution={ 512} color="green"/> */}
      </mesh>
      <Ground />
    </>
  );
}
