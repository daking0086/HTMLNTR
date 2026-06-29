import type { Scenes } from '../../types/game';

export const introScenes = {
  intro: {
    page: 'intro',
    type: 'narration',
    text: [
      'My name is Richard Hayes.',
      "I'm a self-made millionaire. I built a huge import-export empire back in the USA from nothing.",
      "I've always lived by the rules — strict, honest, and always in control.",
      'But none of that matters as much as my wife…',
      'Ayesha Khan.',
    ],
    next: 'airport_richard_office',
  },
} satisfies Scenes;