// Orbital mechanics calculations based on Kepler's laws

export interface OrbitalPosition {
  x: number;
  y: number;
  z: number;
}

export const calculateOrbitalPosition = (
  distance: number,
  speed: number,
  time: number,
  tilt: number = 0
): OrbitalPosition => {
  const angle = speed * time;
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const cosTilt = Math.cos((tilt * Math.PI) / 180);
  const sinTilt = Math.sin((tilt * Math.PI) / 180);

  return {
    x: distance * cosAngle,
    y: distance * sinTilt * sinAngle,
    z: distance * cosTilt * sinAngle,
  };
};

export const calculateOrbitalVelocity = (
  distance: number,
  speed: number,
  time: number
): number => {
  // Simplified orbital velocity
  return Math.sqrt(speed / distance);
};

export const calculateEscapeVelocity = (mass: number, radius: number): number => {
  const G = 6.674e-11; // Gravitational constant
  return Math.sqrt((2 * G * mass) / radius);
};

export const calculateOrbitalPeriod = (distance: number): number => {
  // Kepler's third law: T^2 ∝ a^3
  return 2 * Math.PI * Math.sqrt((distance * distance * distance) / 398600.4418);
};
