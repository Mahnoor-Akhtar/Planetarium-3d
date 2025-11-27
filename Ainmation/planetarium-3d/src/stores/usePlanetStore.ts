import { create } from 'zustand';

interface PlanetStore {
  selectedPlanet: string | null;
  showInfo: boolean;
  timeScale: number;
  paused: boolean;
  setSelectedPlanet: (planet: string | null) => void;
  setShowInfo: (show: boolean) => void;
  setTimeScale: (scale: number) => void;
  setPaused: (paused: boolean) => void;
}

export const usePlanetStore = create<PlanetStore>((set) => ({
  selectedPlanet: null,
  showInfo: false,
  timeScale: 1,
  paused: false,
  setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
  setShowInfo: (show) => set({ showInfo: show }),
  setTimeScale: (scale) => set({ timeScale: scale }),
  setPaused: (paused) => set({ paused }),
}));
