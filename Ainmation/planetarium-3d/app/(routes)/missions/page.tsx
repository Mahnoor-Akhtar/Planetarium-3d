'use client';

import React from 'react';
import Link from 'next/link';

const MISSIONS = [
  {
    name: 'Apollo 11',
    date: '1969',
    description: 'First human moon landing',
    details: 'Neil Armstrong and Buzz Aldrin landed on the Moon',
  },
  {
    name: 'Mars Rover Perseverance',
    date: '2021',
    description: 'Currently exploring Mars',
    details: 'Searching for signs of ancient microbial life',
  },
  {
    name: 'James Webb Space Telescope',
    date: '2021',
    description: 'Observing the early universe',
    details: 'Most powerful space telescope ever built',
  },
  {
    name: 'Voyager 1',
    date: '1977',
    description: 'Interstellar explorer',
    details: 'Now in interstellar space, still transmitting data',
  },
  {
    name: 'International Space Station',
    date: '1998',
    description: 'Continuously crewed orbital station',
    details: 'Conducts scientific research in microgravity',
  },
];

export default function MissionsPage() {
  return (
    <main className="w-full h-screen bg-black text-white overflow-auto">
      <Link
        href="/"
        className="fixed top-4 left-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-500/30 z-10"
      >
        ← Back
      </Link>

      <div className="pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">Space Missions</h1>
          <p className="text-cyan-300">Historic and current space exploration achievements</p>
        </div>

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {MISSIONS.map((mission) => (
            <div
              key={mission.name}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/50 rounded-lg p-6 hover:border-cyan-400 transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-cyan-400">{mission.name}</h2>
                <span className="text-cyan-300 font-semibold">{mission.date}</span>
              </div>
              <p className="text-white font-semibold mb-2">{mission.description}</p>
              <p className="text-gray-300">{mission.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background stars */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
    </main>
  );
}
