import { StrictMode, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience.jsx";
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

function App() {
  return (
    <StrictMode>
      <VRButton /> 
      
    <Canvas
      // flat
      // orthographic
      shadows
      gl={
        {antialias: false}
      }
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 2, 6],
      }}
    >
      <XR>
      <Experience />
      <Controllers />
      </XR>
    </Canvas>
    
    </StrictMode>
  );
}

export default App;
