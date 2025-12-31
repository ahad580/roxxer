"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Bounds } from "@react-three/drei";

const MODEL_PATH = "/models/model/source/scene.glb";

function CarModel() {
  const { scene } = useGLTF(MODEL_PATH);
  return <primitive object={scene} />;
}

export default function ModelViewerScene() {
  const controlsRef = useRef(null);

  useEffect(() => {
    if (!controlsRef.current) return;
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.setAzimuthalAngle(10);
    controlsRef.current.setPolarAngle(Math.PI / 2);
    controlsRef.current.update();
  }, []);

  return (
    <Canvas
      camera={{ position: [4, 0.8, 7], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 6, 6]} intensity={1.1} />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <Bounds fit clip observe margin={1.3}>
          <CarModel />
        </Bounds>
      </Suspense>

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
