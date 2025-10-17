// @ts-nocheck
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Example GLTF model loader
export const GLTFModel = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={modelRef} scale={1}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the model (call this in your main component)
useGLTF.preload("/models/your-model.glb");
