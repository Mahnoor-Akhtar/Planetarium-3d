'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import * as THREE from 'three';

const CONSTELLATIONS = [
  { name: 'Orion', stars: [[0, 0], [2, 1], [3, 2], [1, 3], [2, 4], [0, 5]] },
  { name: 'Ursa Major', stars: [[0, 0], [1, 1], [2, 1], [3, 0], [2.5, 2], [1.5, 2]] },
  { name: 'Cassiopeia', stars: [[0, 0], [1, 1], [2, 0.5], [3, 1.5], [4, 0]] },
  { name: 'Lyra', stars: [[0, 0], [1, 1], [2, 0.5], [1.5, 2]] },
];

export default function ConstellationsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw starfield
    ctx.fillStyle = '#000814';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 1.5;
      ctx.fillRect(x, y, size, size);
    }

    // Draw constellations
    CONSTELLATIONS.forEach((constellation, idx) => {
      const offsetX = (idx % 2) * 400 + 100;
      const offsetY = Math.floor(idx / 2) * 300 + 100;

      ctx.strokeStyle = '#00D9FF';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;

      // Draw lines between stars
      for (let i = 0; i < constellation.stars.length - 1; i++) {
        const [x1, y1] = constellation.stars[i];
        const [x2, y2] = constellation.stars[i + 1];
        ctx.beginPath();
        ctx.moveTo(offsetX + x1 * 30, offsetY + y1 * 30);
        ctx.lineTo(offsetX + x2 * 30, offsetY + y2 * 30);
        ctx.stroke();
      }

      // Draw stars
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#00D9FF';
      constellation.stars.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(offsetX + x * 30, offsetY + y * 30, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '12px Arial';
      ctx.fillText(constellation.name, offsetX, offsetY + 150);
    });
  }, []);

  return (
    <main className="w-full h-screen bg-black relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />

      <Link
        href="/"
        className="fixed top-4 left-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-500/30"
      >
        ← Back
      </Link>

      <div className="fixed top-20 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Constellations</h1>
        <p className="text-cyan-300 text-sm">Explore famous star patterns and their mythology</p>
      </div>

      <div className="fixed bottom-4 right-4 bg-black/80 border border-cyan-500 rounded-lg p-4 max-w-sm text-white text-sm">
        <h3 className="text-cyan-400 font-bold mb-2">Featured Constellations</h3>
        <ul className="space-y-1 text-xs">
          {CONSTELLATIONS.map((c) => (
            <li key={c.name}>• {c.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
