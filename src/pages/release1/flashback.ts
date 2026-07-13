import type { Scenes } from '../../types/game';

/** Flashback CGs — render into public/assets/images/backgrounds/flashback/ */
const BG_HIJAB_FLOOR = '/assets/images/backgrounds/flashback/hijabFloor.png';
const BG_WIDE_01 = '/assets/images/backgrounds/flashback/wide01.png';
const BG_WIDE_02 = '/assets/images/backgrounds/flashback/wide02.png';
const BG_POV_CEILING = '/assets/images/backgrounds/flashback/povCeilingFan.png';
const BG_POV_DESK = '/assets/images/backgrounds/flashback/povDesk.png';
const BG_CLOSE_KISS = '/assets/images/backgrounds/flashback/closeKiss.png';
const BG_CLOSE_TEASE = '/assets/images/backgrounds/flashback/closeTease.png';
const BG_CLOSE_WHISPER = '/assets/images/backgrounds/flashback/closeWhisper.png';
const BG_BLACK = '/assets/images/backgrounds/flashback/black.png';
const BG_SNUGGLE = '/assets/images/backgrounds/flashback/afterglowSnuggle.png';

export const flashbackScenes = {
  flashback_title: {
    page: 'flashback',
    type: 'narration',
    text: ['Flashback — Previous Night (Hotel Suite)'],
    image: BG_BLACK,
    next: 'flashback_establishing',
  },

  flashback_establishing: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Silk on the marble floor. Everything else in the suite belonged to the heat behind it.',
    ],
    image: BG_HIJAB_FLOOR,
    next: 'flashback_wide_01',
  },

  flashback_wide_01: {
    page: 'flashback',
    type: 'narration',
    text: [
      'She moved above him without hurry — hijab loose, chin lifted, every motion deliberate.',
      'Richard lay beneath her like a man who had stopped pretending he was in charge.',
    ],
    image: BG_WIDE_01,
    next: 'flashback_wide_02',
  },

  flashback_wide_02: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: 'Look at me. Not the room. Me.',
    location: 'Hotel Suite - Flashback',
    image: BG_WIDE_02,
    next: 'flashback_pov_ceiling',
  },

  flashback_pov_ceiling: {
    page: 'flashback',
    type: 'narration',
    text: [
      'From the ceiling fan the bed was a blur of limbs and white sheets.',
      'She had him pinned in place with nothing but her weight and her will.',
    ],
    image: BG_POV_CEILING,
    next: 'flashback_pov_ceiling_whisper',
  },

  flashback_pov_ceiling_whisper: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "You're mine tonight. Don't forget that.",
    location: 'Hotel Suite - Flashback',
    image: BG_POV_CEILING,
    next: 'flashback_pov_desk',
  },

  flashback_pov_desk: {
    page: 'flashback',
    type: 'narration',
    text: [
      'In the desk mirror: gold light, her grip on his jaw, the arrogant curve of her smile.',
    ],
    image: BG_POV_DESK,
    next: 'flashback_pov_desk_richard',
  },

  flashback_pov_desk_richard: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Richard',
    text: 'Ayesha—',
    location: 'Hotel Suite - Flashback',
    image: BG_POV_DESK,
    next: 'flashback_pov_desk_ayesha',
  },

  flashback_pov_desk_ayesha: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: 'Quiet.',
    location: 'Hotel Suite - Flashback',
    image: BG_POV_DESK,
    next: 'flashback_close_kiss',
  },

  flashback_close_kiss: {
    page: 'flashback',
    type: 'narration',
    text: [
      'She kissed him hard enough to steal his breath — fingers digging in, hips rolling slow.',
      'He tried to meet her pace. She never let him.',
    ],
    image: BG_CLOSE_KISS,
    next: 'flashback_close_tease_narr',
  },

  flashback_close_tease_narr: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Her lips hovered a breath from his — close enough to feel — then she drew back just enough to watch him want it.',
      'A teasing smile. Cruel. Satisfied.',
    ],
    image: BG_CLOSE_TEASE,
    next: 'flashback_close_tease',
  },

  flashback_close_tease: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: 'Two weeks without this… or her in your cabin. You tell me which one you chose.',
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_TEASE,
    next: 'flashback_close_tease_richard',
  },

  flashback_close_tease_richard: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Richard',
    text: "She's not—",
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_TEASE,
    next: 'flashback_close_tease_ayesha',
  },

  flashback_close_tease_ayesha: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "Shhhh...I don't want her name in your mouth tonight.",
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_WHISPER,
    next: 'flashback_close_whisper',
  },

  flashback_close_whisper: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "Those people downstairs could never have what I have. I'm the only one who deserves to be here with you.",
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_WHISPER,
    next: 'flashback_black',
  },

  flashback_black: {
    page: 'flashback',
    type: 'narration',
    text: ['Darkness.', 'Only breathing.', 'Then stillness.'],
    image: BG_BLACK,
    next: 'flashback_snuggle',
  },

  flashback_snuggle: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Hours later — or minutes that felt like hours — the suite was quiet again.',
      'She had pulled the covers over them both, still possessive even in rest.',
    ],
    image: BG_SNUGGLE,
    next: 'flashback_snuggle_ayesha',
  },

  flashback_snuggle_ayesha: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "…Don't you dare let that secretary take my place tomorrow.",
    location: 'Hotel Suite - Flashback',
    image: BG_SNUGGLE,
    next: 'flashback_snuggle_end',
  },

  flashback_snuggle_end: {
    page: 'flashback',
    type: 'narration',
    text: ['She believed him. She always did — when it suited her.'],
    image: BG_SNUGGLE,
    next: 'intro_snap_back',
  },
} satisfies Scenes;