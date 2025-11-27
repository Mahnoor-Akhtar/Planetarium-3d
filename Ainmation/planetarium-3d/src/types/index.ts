export interface Planet {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  color: string;
  texture?: string;
  tilt: number;
  moons?: Moon[];
  description?: string;
}

export interface Moon {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  color: string;
  parentPlanet: string;
}

export interface Star {
  x: number;
  y: number;
  z: number;
  brightness: number;
  size: number;
  color: string;
}

export interface CelestialObject {
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

export interface SceneConfig {
  fogColor: string;
  fogNear: number;
  fogFar: number;
  backgroundColor: string;
  ambientLightIntensity: number;
}
