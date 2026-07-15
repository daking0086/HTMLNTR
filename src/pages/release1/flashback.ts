import type { Scenes } from '../../types/game';

/** Flashback CGs in public/assets/images/flashback/ */
const BG_TITLE =
  '/assets/images/flashback/grok-image-d6116a17-96f5-466c-a161-75762f7cc2ca.jpg';
const BG_HIJAB_FLOOR =
  '/assets/images/flashback/grok-image-c9b2c7b0-8c05-498e-b523-a1b0b6b5cb32.jpg';
const BG_PLAYFUL = '/assets/images/flashback/playful.jpg';
const BG_POV_DESK_1 = '/assets/images/flashback/BG_POV_DESK_1.jpg';
const BG_POV_DESK_2 = '/assets/images/flashback/BG_POV_DESK_2.jpg';
const BG_HIP_REVEAL = '/assets/images/flashback/hip_reveal.jpg';
const BG_HIP_KISS = '/assets/images/flashback/hip_kiss.jpg';
const BG_HIP_TOUCH = '/assets/images/flashback/hip_touch.jpg';
const BG_NECK_KISS = '/assets/images/flashback/neck_kiss.jpg';
const BG_ASS_GRAB = '/assets/images/flashback/ass_grab.jpg';
const BG_CLOSE_LIPS = '/assets/images/flashback/close_lips.jpg';
const BG_PIN_DOWN =
  '/assets/images/flashback/Gemini_Generated_Image_pingxxpingxxping-clean (1).png';
const BG_CLOSE_LIPS_TEASE =
  '/assets/images/flashback/close_lips_teasing_smile.jpg';
const BG_DEEP_KISS = '/assets/images/flashback/deep_kiss.jpg';
const BG_CLOSE_KISS =
  '/assets/images/flashback/grok-image-dee3d055-8f7c-4ed3-b8b1-a42d00d108bc.jpg';
const BG_UNDRESS = '/assets/images/flashback/output_pm4lx4.png';
const BG_SHADOWS =
  '/assets/images/flashback/Gemini_Generated_Image_udjg9eudjg9eudjg-clean (1).png';
const BG_BUILDING_FAR = '/assets/images/flashback/151pu (1).jpg';
const BG_FINAL_KISS = '/assets/images/flashback/final_kiss_sceneEnd.png';
const BG_FINAL_REST = '/assets/images/flashback/final_kiss_resting.jpg';

export const flashbackScenes = {
  flashback_title: {
    page: 'flashback',
    type: 'narration',
    text: ['Flashback — Previous Night (Hotel Suite)'],
    image: BG_TITLE,
    next: 'flashback_establishing',
  },

  flashback_establishing: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Silk on the marble floor. Everything else in the suite belonged to the heat behind it.',
    ],
    image: BG_HIJAB_FLOOR,
    next: 'flashback_suite_mood',
  },

  // —— Act 1: light teasing, Ayesha sets the tone ——
  flashback_suite_mood: {
    page: 'flashback',
    type: 'narration',
    text: [
      'The suite was quiet except for the city humming below.',
      'Ayesha had poured the night her way — slow, amused, certain he would wait for her.',
    ],
    image: BG_PLAYFUL,
    next: 'flashback_ayesha_tease',
  },

  flashback_ayesha_tease: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "Relax, Richard. I'm not going anywhere. Neither are you.",
    location: 'Hotel Suite - Flashback',
    image: BG_PLAYFUL,
    next: 'flashback_richard_reach',
  },

  flashback_richard_reach: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Richard',
    text: 'You always make a man work for it.',
    location: 'Hotel Suite - Flashback',
    image: BG_POV_DESK_1,
    next: 'flashback_ayesha_not_yet',
  },

  flashback_ayesha_not_yet: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: 'Shhh… not yet, big boy.',
    location: 'Hotel Suite - Flashback',
    image: BG_POV_DESK_2,
    next: 'flashback_richard_unbuttons',
  },

  // —— Act 2: Richard takes over — sensitive Ayesha ——
  flashback_richard_unbuttons: {
    page: 'flashback',
    type: 'narration',
    text: [
      'He moved before she could tease him again — swift fingers unbuttoning the lower half of her top.',
      'Skin met air. Her breath hitched before she could hide it.',
    ],
    image: BG_HIP_REVEAL,
    next: 'flashback_stomach_kiss',
  },

  flashback_stomach_kiss: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Richard kissed her stomach like it was the only place he had ever wanted to be.',
      'Slow. Deliberate. Worshiping every inch she had denied him.',
    ],
    image: BG_HIP_KISS,
    next: 'flashback_hip_touch',
  },

  flashback_hip_touch: {
    page: 'flashback',
    type: 'narration',
    text: [
      'His hands slid to her hips and pulled her closer — greedy, reverent.',
      'The arrogant queen melted under his mouth, one soft sound at a time.',
    ],
    image: BG_HIP_TOUCH,
    next: 'flashback_ayesha_moan',
  },

  flashback_ayesha_moan: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: 'Hnngh… h-hey…',
    location: 'Hotel Suite - Flashback',
    image: BG_HIP_TOUCH,
    next: 'flashback_neck_kiss',
  },

  flashback_neck_kiss: {
    page: 'flashback',
    type: 'narration',
    text: [
      'He worked his way up — lips tracing her hip, her ribs, the curve of her neck.',
      'Her fingers knotted in his hair. She was still in charge on paper. Her body disagreed.',
    ],
    image: BG_NECK_KISS,
    next: 'flashback_ass_grab',
  },

  flashback_ass_grab: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Both hands found her ass and pulled her down hard into his lap.',
      'A sharper moan escaped her — surprised, furious, honest.',
    ],
    image: BG_ASS_GRAB,
    next: 'flashback_almost_kiss',
  },

  flashback_almost_kiss: {
    page: 'flashback',
    type: 'narration',
    text: [
      'He rose to meet her mouth — so close she felt his breath.',
      'For one heartbeat, the dominant woman looked like she might let him have the kiss.',
    ],
    image: BG_CLOSE_LIPS,
    next: 'flashback_pins_him',
  },

  // —— Act 3: Ayesha regains control (jealousy + grind) ——
  flashback_pins_him: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Then she moved — fast, fluid, merciless.',
      'Richard was on his back before he understood what happened, wrists pinned where she wanted them.',
    ],
    image: BG_PIN_DOWN,
    next: 'flashback_grinding',
  },

  flashback_grinding: {
    page: 'flashback',
    type: 'narration',
    text: [
      'She settled over his lap and rolled her hips slow against the shape of him.',
      'Close enough to ruin him. Slow enough to make him beg.',
    ],
    image: BG_PLAYFUL,
    next: 'flashback_close_tease_narr',
  },

  flashback_close_tease_narr: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Her lips hovered a breath from his — close enough to ache — then she drew back just enough to watch him want it.',
      'A teasing smile. Cruel. Satisfied.',
    ],
    image: BG_CLOSE_LIPS_TEASE,
    next: 'flashback_close_tease',
  },

  flashback_close_tease: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: 'Two weeks without this… or her in your cabin. You tell me which one you chose.',
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_LIPS_TEASE,
    next: 'flashback_close_tease_richard',
  },

  flashback_close_tease_richard: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Richard',
    text: "She's not—",
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_LIPS,
    next: 'flashback_close_tease_ayesha',
  },

  flashback_close_tease_ayesha: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "Shhhh...I don't want her name in your mouth tonight.",
    location: 'Hotel Suite - Flashback',
    image: BG_DEEP_KISS,
    next: 'flashback_close_whisper',
  },

  flashback_close_whisper: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "Those people downstairs could never have what I have. I'm the only one who deserves to be here with you.",
    location: 'Hotel Suite - Flashback',
    image: BG_CLOSE_KISS,
    next: 'flashback_undress',
  },

  // —— Act 4: undress, shadows, surrender ——
  flashback_undress: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Clothes came off in his hands — her top, her pants, every barrier she had worn for show.',
      'She let him look. She always did when it pleased her.',
    ],
    image: BG_UNDRESS,
    next: 'flashback_shadows',
  },

  flashback_shadows: {
    page: 'flashback',
    type: 'narration',
    text: [
      'The lamp died. Only their shadows moved on the wall — tangled, urgent, unmistakable.',
      'The city kept watching through the glass and could not look away.',
    ],
    image: BG_SHADOWS,
    next: 'flashback_building_far',
  },

  // —— Act 5: closure ——
  flashback_building_far: {
    page: 'flashback',
    type: 'narration',
    text: [
      'From far below, the tower was just another lit window in the rain.',
      'Inside that dark room, they were still tangled together — private, finished, spent.',
    ],
    image: BG_BUILDING_FAR,
    next: 'flashback_final_kiss',
  },

  flashback_final_kiss: {
    page: 'flashback',
    type: 'narration',
    text: [
      'Then, softer — a kiss that was not a weapon anymore.',
      'Slower. Like a promise she intended to hold him to.',
    ],
    image: BG_FINAL_KISS,
    next: 'flashback_snuggle',
  },

  flashback_snuggle: {
    page: 'flashback',
    type: 'narration',
    text: [
      'The suite went quiet. She pulled the covers over them both, still possessive even in rest.',
    ],
    image: BG_FINAL_REST,
    next: 'flashback_snuggle_ayesha',
  },

  flashback_snuggle_ayesha: {
    page: 'flashback',
    type: 'dialogue',
    speaker: 'Ayesha',
    text: "Don't you dare let her take my place tomorrow...\nYou belong to me...",
    location: 'Hotel Suite - Flashback',
    image: BG_FINAL_REST,
    next: 'flashback_snuggle_end',
  },

  flashback_snuggle_end: {
    page: 'flashback',
    type: 'narration',
    text: ['She believed him. She always did — when it suited her.'],
    image: BG_FINAL_REST,
    next: 'intro_snap_back',
  },
} satisfies Scenes;