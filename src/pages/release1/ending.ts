import type { Scenes } from '../../types/game';

export const endingScenes = {
  ending: {
    page: 'ending',
    type: 'narration',
    text: [
      'The worker\'s hands are the only thing holding her up.',
      'Richard\'s feed shakes — he saw everything — and he is still locked in that room.',
    ],
    next: 'ending_phone',
  },

  ending_phone: {
    page: 'ending',
    type: 'narration',
    text: [
      'Somewhere in the terminal, a door clicks shut.',
      'Officer 2\'s words hang in the air like a promise.',
    ],
    next: 'ending_beginning',
  },

  ending_beginning: {
    page: 'ending',
    type: 'narration',
    text: [
      'Release 1 ends here.',
      'The night is not over. The taxi. The hotel. Whatever comes next.',
    ],
    next: 'ending_trust',
  },

  ending_trust: {
    page: 'ending',
    type: 'narration',
    text: [
      'This was only the beginning.',
      'Release 2 continues her story.',
    ],
    end: true,
  },
} satisfies Scenes;