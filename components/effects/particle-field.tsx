"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Points as PointsType } from "three";

function CloudPoints() {
  const ref = useRef<PointsType>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(1800);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 9;
      arr[i + 1] = (Math.random() - 0.5) * 5;
      arr[i + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.045;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#7dd3fc" size={0.03} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <CloudPoints />
      </Canvas>
    </div>
  );
}


