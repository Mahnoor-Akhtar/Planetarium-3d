'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { calculateOrbitalPosition } from '@/lib/physics/orbital';
import { usePlanetStore } from '@/stores/usePlanetStore';

interface PlanetProps {
  planet: {
    name: string;
    radius: number;
    distance: number;
    speed: number;
    color: string;
    tilt: number;
  };
  time: number;
  scale: number;
}

const Planet: React.FC<PlanetProps> = ({ planet, time, scale }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { setSelectedPlanet } = usePlanetStore();

  const position = calculateOrbitalPosition(
    planet.distance,
    planet.speed,
    time,
    planet.tilt
  );

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  const handleClick = () => {
    setSelectedPlanet(planet.name);
  };

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      onClick={handleClick}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[planet.radius * 2, 64, 64]} />
      <meshStandardMaterial
        color={planet.color}
        emissive={planet.color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default Planet;
