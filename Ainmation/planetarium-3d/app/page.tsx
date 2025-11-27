'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { SolarSystem } from '@/components/universe/SolarSystem';
import { Controls } from '@/components/layout/Controls';
import { PlanetInfo } from '@/components/ui/PlanetInfo';

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="text-cyan-400 text-2xl">Loading Universe...</div>
  </div>
);

export default function Home() {
  return (
    <main className="w-full h-screen bg-black relative">
      <Suspense fallback={<LoadingFallback />}>
        <SolarSystem cameraPosition={[0, 50, 100]} />
      </Suspense>

      <Controls />
      <PlanetInfo />

      {/* Navigation */}
      <div className="fixed bottom-4 left-4 flex gap-2 flex-wrap max-w-xs">
        <Link
          href="/explorer"
          className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-500/30 text-sm"
        >
          Explorer
        </Link>
        <Link
          href="/constellations"
          className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-500/30 text-sm"
        >
          Constellations
        </Link>
        <Link
          href="/missions"
          className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-500/30 text-sm"
        >
          Missions
        </Link>
      </div>

      {/* Header */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">3D Virtual Planetarium</h1>
        <p className="text-cyan-300 text-sm">Click on planets to learn more • Use mouse to rotate</p>
      </div>
    </main>
  );
}
