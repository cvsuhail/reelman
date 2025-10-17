// @ts-nocheck
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Using your existing GLB model
export const SphereModel = () => {
  const { scene } = useGLTF("/models/kinimaticslogo3d.glb");
  const modelRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={modelRef} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the model
useGLTF.preload("/models/kinimaticslogo3d.glb");
