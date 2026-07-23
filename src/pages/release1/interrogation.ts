import type { Scenes } from '../../types/game';

const AYESHA =
  '/assets/images/Intro/grok-image-4dce748b-6565-4020-be65-95cb727a957b.jpg';
/** Security / private meeting room (night, airport office). */
const BG_EMPTY_OFFICE =
  '/assets/images/backgrounds/airport/Gemini_Generated_Image_4danq24danq24dan-clean.png';

export const interrogationScenes = {
  interrogation_enter: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'A side room with scanners and metal tables. No passengers. No staff. No cameras.',
      'Officer 1 shuts the door. The lock clicks like a period at the end of a sentence.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_scanner_officer1',
  },

  airport_scanner_officer1: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Security inspection. Full routine. Stand still and keep your hands where I can see them.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-1'],
    next: 'airport_scanner_officer2',
  },

  airport_scanner_officer2: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'We already explained the consequences. Do not make your husband wait because his wife has pride.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-2'],
    next: 'airport_scanner_officer1_officer2',
  },

  airport_scanner_officer1_officer2: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Besides, if you really enjoy our company, we can make this a lot more… personal. You know what I mean.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-1', 'officer-2'],
    next: 'airport_scanner_officer2_oh',
  },

  airport_scanner_officer2_oh: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'Oh she does...',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-1', 'officer-2'],
    next: 'airport_refusal',
  },

  airport_refusal: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Absolutely not. You do not put your hands on me.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_refusal_two',
  },

  airport_refusal_two: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "My husband has lawyers who will bury this airport. I am not one of your local women.",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_threat',
  },

  airport_threat: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'Officer 1 steps into her space — belly first, breath hot against her hijab.',
      "Officer 2 opens a folder with Richard's name on the tab and taps it twice.",
    ],
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-1', 'officer-2'],
    next: 'airport_threat_officer1',
  },

  airport_threat_officer1: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Your Mr. Hayes stays in that room until we say otherwise. Be a good wife. Comply.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_threat_officer2',
  },

  airport_threat_officer2: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'I can add thirty days with one signature. Or I can add "family assisted security." Which do you want for him?',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_threat_belief',
  },

  airport_threat_belief: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'She has never met men who ignore money or names. Sheltered her whole life, she believes them.',
      'For the first time, arrogance has no door to slam. Only Richard — somewhere she cannot reach.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_ayesha_thought_comply',
  },

  airport_ayesha_thought_comply: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'Ayesha thinks: if I refuse, they hurt him. If I obey, they hurt me — but he might walk free.',
      'She does not know which horror is worse. She has never had to choose before.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_compliance',
  },

  airport_compliance: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: '…Fine. Do it. But if you hurt my husband because of this, I swear—',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_compliance_two',
  },

  airport_compliance_two: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: '…I will remember your faces. Every single one.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['ayesha', 'officer-1', 'officer-2'],
    next: 'airport_richard_witness',
  },

  airport_richard_witness: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha—? I can see you but I can barely hear you.",
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_two',
  },

  airport_richard_witness_two: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Richard',
    text: 'What are they doing? Answer me!',
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_narration',
  },

  airport_richard_witness_narration: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'Her volume is down. She cannot answer without alerting the guards.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_narration_two',
  },

  airport_richard_witness_narration_two: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'Richard is left with a silent, shaking feed. On screen, the officers close in.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_narration_three',
  },

  airport_richard_witness_narration_three: {
    page: 'interrogation',
    type: 'narration',
    text: ['One grips her wrist. The other reaches for the hem of her blouse.'],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_one',
  },

  airport_violation_one: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Don't— hands inside my— stop.",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_one_two',
  },

  airport_violation_one_two: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "This isn't a check, you filthy—",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_narration',
  },

  airport_violation_narration: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'They ignore her. Rough fingers slide beneath fabric — waist, hips, searching where no inspection should go.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_narration_two',
  },

  airport_violation_narration_two: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'One guard cups and squeezes while the other holds her still. Ayesha bites her lip to stay silent.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_narration_three',
  },

  airport_violation_narration_three: {
    page: 'interrogation',
    type: 'narration',
    text: ['Richard watches every second, fists clenched, unable to reach her.'],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_two',
  },

  airport_violation_two: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'She clamps a hand over her mouth. A muffled sound escapes anyway. They smirk and search slower.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_whisper',
  },

  airport_violation_whisper: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… if you can still see… they're inside my clothes…",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_whisper_two',
  },

  airport_violation_whisper_two: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I can't speak loud… I believed them about you… God, I was so stupid…",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_helpless',
  },

  airport_richard_helpless: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm here. I'm watching. Don't let them—",
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_helpless_two',
  },

  airport_richard_helpless_two: {
    page: 'interrogation',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha, fight— I can't— I'm locked in—",
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_worker_enters',
  },

  airport_worker_enters: {
    page: 'interrogation',
    type: 'narration',
    text: ['Footsteps sprint down the corridor.'],
    next: 'airport_worker_shouts',
  },

  airport_worker_shouts: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'Airport Worker: "Hey! Step away from her now! What the hell is this?!"',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_worker_rescue',
  },

  airport_worker_rescue: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'The guards curse, release her, and slip toward a side door.',
      'The airport worker catches Ayesha before her knees give out.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_guard_whisper',
  },

  airport_guard_whisper: {
    page: 'interrogation',
    type: 'narration',
    text: [
      'At the threshold, Officer 2 glances back over his shoulder — voice barely a breath:',
      '"Oh… this isn\'t over yet…"',
    ],
    image: BG_EMPTY_OFFICE,
    characters: ['officer-1', 'officer-2'],
    next: 'ending',
  },
} satisfies Scenes;
