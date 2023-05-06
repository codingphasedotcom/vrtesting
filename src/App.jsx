import { StrictMode, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience.jsx";

function App() {
  return (
    <StrictMode>
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
      <Experience />
    </Canvas>
    </StrictMode>
  );
}

export default App;
