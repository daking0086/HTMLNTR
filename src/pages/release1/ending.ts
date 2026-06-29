import type { Scenes } from '../../types/game';

export const endingScenes = {
  ending: {
    page: 'ending',
    type: 'narration',
    text: [
      'The line goes quiet for a long moment.',
      'You stare at your phone in the detention cell.',
      'Whatever happened to Ayesha tonight... it was only the beginning.',
      'Your choices will shape how much she still trusts you... and how much she starts to break.',
    ],
    end: true,
  },
} satisfies Scenes;