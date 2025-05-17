// Orion, Cassiopeia, Ursa Major as normalized templates
export const CONSTELLATION_TEMPLATES = [
  {
    name: "Orion",
    points: [
      [0.1, 0.7],
      [0.3, 0.5],
      [0.5, 0.6],
      [0.7, 0.5],
      [0.9, 0.7], // Belt and shoulders
      [0.5, 0.3],
      [0.5, 0.9], // Head and foot
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4], // Belt/shoulders
      [2, 5],
      [2, 6], // Head and foot
    ],
  },
  {
    name: "Cassiopeia",
    points: [
      [0.1, 0.5],
      [0.3, 0.7],
      [0.5, 0.3],
      [0.7, 0.7],
      [0.9, 0.5],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    name: "Ursa Major",
    points: [
      [0.1, 0.6],
      [0.2, 0.7],
      [0.3, 0.8],
      [0.5, 0.7],
      [0.7, 0.6],
      [0.8, 0.5],
      [0.9, 0.4],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
  },
];
