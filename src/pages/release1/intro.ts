import type { Scenes } from '../../types/game';

export const introScenes = {
  intro: {
    page: 'intro',
    type: 'narration',
    text: ['My name is Richard Hayes.'],
    next: 'intro_empire',
  },

  intro_empire: {
    page: 'intro',
    type: 'narration',
    text: [
      "I'm a self-made millionaire. I built a huge import-export empire in the USA from nothing.",
    ],
    next: 'intro_rules',
  },

  intro_rules: {
    page: 'intro',
    type: 'narration',
    text: ["I've always lived by the rules — strict, honest, and always in control."],
    next: 'intro_wife',
  },

  intro_wife: {
    page: 'intro',
    type: 'narration',
    text: ['But none of that matters as much as my wife…'],
    next: 'intro_ayesha',
  },

  intro_ayesha: {
    page: 'intro',
    type: 'narration',
    text: ['Ayesha Khan.'],
    next: 'airport_richard_office',
  },
} satisfies Scenes;