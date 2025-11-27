// Solar System Data
export const PLANETS = [
  {
    name: 'Mercury',
    radius: 0.38,
    distance: 3.8,
    speed: 1.6,
    color: '#8C7853',
    tilt: 0.04,
    temperature: 430,
    type: 'terrestrial',
  },
  {
    name: 'Venus',
    radius: 0.95,
    distance: 7.2,
    speed: 1.2,
    color: '#FFC649',
    tilt: 3.39,
    temperature: 464,
    type: 'terrestrial',
  },
  {
    name: 'Earth',
    radius: 1,
    distance: 10,
    speed: 1.0,
    color: '#4A90E2',
    tilt: 23.44,
    temperature: 15,
    type: 'terrestrial',
    hasMoons: true,
  },
  {
    name: 'Mars',
    radius: 0.53,
    distance: 15.2,
    speed: 0.8,
    color: '#E27B58',
    tilt: 25.19,
    temperature: -65,
    type: 'terrestrial',
    hasMoons: true,
  },
  {
    name: 'Jupiter',
    radius: 11.2,
    distance: 52,
    speed: 0.4,
    color: '#C88B3A',
    tilt: 3.13,
    temperature: -110,
    type: 'gas-giant',
    hasMoons: true,
    hasRings: false,
  },
  {
    name: 'Saturn',
    radius: 9.4,
    distance: 95,
    speed: 0.3,
    color: '#F4D47F',
    tilt: 26.73,
    temperature: -140,
    type: 'gas-giant',
    hasMoons: true,
    hasRings: true,
  },
  {
    name: 'Uranus',
    radius: 4,
    distance: 192,
    speed: 0.2,
    color: '#4FD0E7',
    tilt: 97.77,
    temperature: -195,
    type: 'ice-giant',
    hasMoons: true,
    hasRings: true,
  },
  {
    name: 'Neptune',
    radius: 3.88,
    distance: 300,
    speed: 0.15,
    color: '#4166F5',
    tilt: 28.32,
    temperature: -200,
    type: 'ice-giant',
    hasMoons: true,
    hasRings: true,
  },
];

export const SCALE_FACTOR = 0.001;
export const TIME_SCALE = 0.005;

// Camera settings
export const CAMERA_CONFIG = {
  fov: 75,
  near: 0.1,
  far: 100000,
};

// Lighting
export const LIGHTING = {
  ambientIntensity: 0.3,
  sunIntensity: 1.0,
  sunColor: '#FFFFFF',
};

// Colors
export const COLORS = {
  space: '#000814',
  starfield: '#FFFFFF',
  text: '#FFFFFF',
  accent: '#00D9FF',
};
