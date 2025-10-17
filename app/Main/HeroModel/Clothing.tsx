// @ts-nocheck
import { Center, Instance, Instances } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";
import React from "react";

const radius = 3;
const count = 6;

// Individual clothing item component
function ClothingItem(props: GroupProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.01;
      ref.current.rotation.z += 0.003;
    }
  });

  return (
    <group {...props}>
      <group ref={ref}>
        <Instance />
      </group>
    </group>
  );
}

// Main clothing display component
export const ClothingDisplay = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= 0.005;
    }
  });

  return (
    <Center>
      <group>
        <group scale={0.8} ref={groupRef}>
          <Instances>
            {/* T-shirt geometry - using a combination of shapes to create a t-shirt-like form */}
            <group>
              {/* Main body of the shirt */}
              <boxGeometry args={[1.2, 1.8, 0.3]} />
              {/* Sleeves */}
              <boxGeometry args={[0.8, 0.4, 0.3]} />
              {/* Collar */}
              <boxGeometry args={[0.6, 0.2, 0.3]} />
            </group>
            <CustomMaterial />
            {Array.from({ length: count }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / count;
              return (
                <ClothingItem
                  position={[
                    radius * Math.cos(angle + Math.PI / 6),
                    radius * Math.sin(angle + Math.PI / 6),
                    0,
                  ]}
                  rotation={[0, 0, angle]}
                  key={index}
                />
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

// Alternative: Simple hanger with uniform
export const UniformHanger = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        {/* Hanger hook */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
          <CustomMaterial />
        </mesh>
        
        {/* Hanger body */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.1]} />
          <CustomMaterial />
        </mesh>
        
        {/* Uniform shirt hanging */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[0.7, 1.2, 0.2]} />
          <CustomMaterial />
        </mesh>
        
        {/* Uniform pants */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.6, 0.8, 0.2]} />
          <CustomMaterial />
        </mesh>
      </group>
    </Center>
  );
};

// Needle and thread model
export const NeedleAndThread = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.005;
    }
  });

  return (
    <Center>
      <group ref={groupRef} scale={1.5}>
        {/* Needle body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.2, 8]} />
          <CustomMaterial />
        </mesh>
        
        {/* Needle eye */}
        <mesh position={[0, 0.6, 0]}>
          <torusGeometry args={[0.08, 0.02, 4, 8]} />
          <CustomMaterial />
        </mesh>
        
        {/* Needle point */}
        <mesh position={[0, -0.6, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.03, 0.2, 6]} />
          <CustomMaterial />
        </mesh>
        
        {/* Thread spool */}
        <mesh position={[0.8, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 8]} />
          <CustomMaterial />
        </mesh>
        
        {/* Thread spool center hole */}
        <mesh position={[0.8, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        
        {/* Thread line connecting needle to spool */}
        <mesh position={[0.4, 0, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.8, 4]} />
          <meshBasicMaterial color="#ff6b6b" />
        </mesh>
        
        {/* Additional thread spools for variety */}
        <mesh position={[-0.6, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.3, 8]} />
          <CustomMaterial />
        </mesh>
        
        <mesh position={[-0.6, 0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.4, 8]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        
        <mesh position={[-0.3, 0.5, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.6, 4]} />
          <meshBasicMaterial color="#4ecdc4" />
        </mesh>
      </group>
    </Center>
  );
};
