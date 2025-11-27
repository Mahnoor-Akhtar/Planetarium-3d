'use client';

import React from 'react';
import { usePlanetStore } from '@/stores/usePlanetStore';
import { Play, Pause, FastForward, Rewind } from 'lucide-react';

export const Controls: React.FC = () => {
  const { timeScale, paused, setPaused, setTimeScale } = usePlanetStore();

  return (
    <div className="fixed top-4 left-4 bg-black/80 border border-cyan-500 rounded-lg p-4 flex gap-2">
      <button
        onClick={() => setPaused(!paused)}
        className="p-2 hover:bg-cyan-500/20 rounded"
        title={paused ? 'Play' : 'Pause'}
      >
        {paused ? <Play size={20} /> : <Pause size={20} />}
      </button>

      <button
        onClick={() => setTimeScale(Math.max(0.1, timeScale - 0.1))}
        className="p-2 hover:bg-cyan-500/20 rounded"
        title="Slow Down"
      >
        <Rewind size={20} />
      </button>

      <span className="px-4 py-2 text-cyan-400">×{timeScale.toFixed(1)}</span>

      <button
        onClick={() => setTimeScale(timeScale + 0.1)}
        className="p-2 hover:bg-cyan-500/20 rounded"
        title="Speed Up"
      >
        <FastForward size={20} />
      </button>
    </div>
  );
};

export default Controls;
