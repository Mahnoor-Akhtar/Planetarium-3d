'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import Planet from '@/components/planets/Planet';
import { PLANETS, TIME_SCALE, SCALE_FACTOR } from '@/lib/utils/constants';
import { calculateOrbitalPosition } from '@/lib/physics/orbital';
import { usePlanetStore } from '@/stores/usePlanetStore';

const SolarSystemContent = () => {
  const timeRef = useRef(0);
  const { timeScale, paused } = usePlanetStore();

  useFrame(() => {
    if (!paused) {
      timeRef.current += TIME_SCALE * timeScale;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 50, 100]} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
        minDistance={20}
        maxDistance={300}
      />

      <Stars radius={500} depth={50} count={10000} factor={4} saturation={0} fade={true} />

      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Planets */}
      {PLANETS.map((planet) => (
        <group key={planet.name}>
          <Planet
            planet={planet}
            time={timeRef.current}
            scale={SCALE_FACTOR}
          />

          {/* Orbital path */}
          <OrbitPath distance={planet.distance} />
        </group>
      ))}
    </>
  );
};

const OrbitPath = ({ distance }: { distance: number }) => {
  const lineRef = useRef<THREE.Line>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(angle) * distance, 0, Math.sin(angle) * distance)
      );
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    lineRef.current.geometry = geometry;
  }, [distance]);

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color="#888888" transparent opacity={0.3} />
    </line>
  );
};

interface SolarSystemProps {
  cameraPosition?: [number, number, number];
}

export const SolarSystem: React.FC<SolarSystemProps> = ({
  cameraPosition = [0, 50, 100],
}) => {
  return (
    <Canvas>
      <SolarSystemContent />
    </Canvas>
  );
};

export default SolarSystem;
