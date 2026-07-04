import type { Scenes } from '../../types/game';

export const endingScenes = {
  ending: {
    page: 'ending',
    type: 'narration',
    text: ['The line goes quiet for a long moment.'],
    next: 'ending_phone',
  },

  ending_phone: {
    page: 'ending',
    type: 'narration',
    text: ['You stare at your phone in the detention cell.'],
    next: 'ending_beginning',
  },

  ending_beginning: {
    page: 'ending',
    type: 'narration',
    text: ['Whatever happened to Ayesha tonight… it was only the beginning.'],
    next: 'ending_trust',
  },

  ending_trust: {
    page: 'ending',
    type: 'narration',
    text: [
      'Your choices will shape how much she still trusts you… and how much she starts to break.',
    ],
    end: true,
  },
} satisfies Scenes;