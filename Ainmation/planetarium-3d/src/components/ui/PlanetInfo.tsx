'use client';

import React from 'react';
import { usePlanetStore } from '@/stores/usePlanetStore';
import { PLANETS } from '@/lib/utils/constants';

export const PlanetInfo: React.FC = () => {
  const { selectedPlanet } = usePlanetStore();

  if (!selectedPlanet) return null;

  const planet = PLANETS.find((p) => p.name === selectedPlanet);

  if (!planet) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 border border-cyan-500 rounded-lg p-6 max-w-sm text-white">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">{planet.name}</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="text-cyan-300">Radius:</span> {planet.radius}x Earth
        </p>
        <p>
          <span className="text-cyan-300">Distance:</span> {planet.distance} AU
        </p>
        <p>
          <span className="text-cyan-300">Orbital Speed:</span> {planet.speed}x Earth
        </p>
        <p>
          <span className="text-cyan-300">Temperature:</span> {planet.temperature}°C
        </p>
        <p>
          <span className="text-cyan-300">Type:</span> {planet.type}
        </p>
      </div>
    </div>
  );
};

export default PlanetInfo;
