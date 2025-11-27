'use client';

import React from 'react';
import Link from 'next/link';
import { SolarSystem } from '@/components/universe/SolarSystem';
import { Controls } from '@/components/layout/Controls';

export default function ExplorerPage() {
  return (
    <main className="w-full h-screen bg-black relative">
      <SolarSystem cameraPosition={[0, 100, 200]} />

      <Controls />

      <Link
        href="/"
        className="fixed top-4 left-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-500/30"
      >
        ← Back
      </Link>

      <div className="fixed top-20 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Solar System Explorer</h1>
        <p className="text-cyan-300 text-sm">Interactive exploration of our solar system</p>
      </div>

      <div className="fixed bottom-4 right-4 bg-black/80 border border-cyan-500 rounded-lg p-4 max-w-sm text-white text-sm">
        <h3 className="text-cyan-400 font-bold mb-2">Explorer Features</h3>
        <ul className="space-y-1 text-xs">
          <li>• Click planets for detailed information</li>
          <li>• Use mouse to rotate and zoom</li>
          <li>• Adjust simulation speed with controls</li>
          <li>• Orbital paths shown for each planet</li>
        </ul>
      </div>
    </main>
  );
}
