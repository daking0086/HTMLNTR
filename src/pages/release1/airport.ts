import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

/** Empty night terminal — officers vs Ayesha (character layer on top). */
const BG_AIRPORT_OUTSIDE =
  '/assets/images/backgrounds/airport/1784762897390_edit_2365791017690.png';
/** Long empty skybridge — drag / haul beat. */
const BG_SKYBRIDGE = '/assets/images/backgrounds/airport/IMG_20260723_053255.jpg';

export const airportScenes = {
  // ── Outside: officers vs Ayesha (character layer) ──

  airport_officer_greeting: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: "Is everything alright, ma'am…?",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_ayesha_brush_off',
  },

  airport_ayesha_brush_off: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Yes. Perfectly. You can go bother someone else.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_officer_screening',
  },

  airport_officer_screening: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: "Actually, ma'am — please follow us. Secondary security screening is required for your travel group.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_ayesha_refuse_1',
  },

  airport_ayesha_refuse_1: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm not going anywhere. My husband is still inside. I wait here.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_officer1_join',
  },

  airport_officer1_join: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: "You wait where we say. Screening room. Now.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_ayesha_refuse_2',
  },

  airport_ayesha_refuse_2: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Do you know who I am? I am Mrs. Richard Hayes. I do not follow strangers into empty rooms.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_officer2_procedure',
  },

  airport_officer2_procedure: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: "It is not a request, Mrs. Hayes. Full passenger security inspection — standard when a spouse is under hold.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_ayesha_refuse_3',
  },

  airport_ayesha_refuse_3: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I said no. Find another tourist to harass. I'm staying right here.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_officer_fraud',
  },

  airport_officer_fraud: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: "As you wish… of course, non-compliance makes Mr. Hayes's file harder. There are already questions — irregularities. Fraud flags. Delays stack quickly here.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_officer_fraud_two',
  },

  airport_officer_fraud_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: "Cooperate, and tonight stays simple. Fight us, and his night gets long. Your call, princess.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-1'],
    next: 'airport_ayesha_reluctant',
  },

  airport_ayesha_reluctant: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "…Fine. One inspection. Then you leave us alone.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    characters: ['ayesha', 'officer-2'],
    next: 'airport_drag',
  },

  airport_drag: {
    page: 'airport',
    type: 'narration',
    text: [
      'Before she can take a step of her own, they take her arms.',
      'The terminal is half-dead — empty chairs, shuttered kiosks, no one close enough to help.',
    ],
    image: BG_SKYBRIDGE,
    characters: ['ayesha', 'officer-1', 'officer-2'],
    next: 'airport_drag_ayesha',
  },

  airport_drag_ayesha: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Hey— wait! Let me go! I said I would walk!',
    location: 'Outside the Airport - Night',
    image: BG_SKYBRIDGE,
    characters: ['ayesha', 'officer-1', 'officer-2'],
    next: 'airport_silenced',
  },

  airport_silenced: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: "Woman, I prefer you stay quiet. It's just a quick procedure. Comply — and this will be over soon.",
    location: 'Outside the Airport - Night',
    image: BG_SKYBRIDGE,
    characters: ['ayesha', 'officer-1', 'officer-2'],
    next: 'airport_drag_backshot',
  },

  /**
   * ART — dedicated drag backshot still missing:
   * two officers haul Ayesha away; they smile at each other behind her.
   * Until then: empty skybridge BG + narration.
   */
  airport_drag_backshot: {
    page: 'airport',
    type: 'narration',
    text: [
      'They haul her toward a side corridor.',
      'Behind her back — where she cannot see — the two officers look at each other and smile.',
    ],
    image: BG_SKYBRIDGE,
    next: 'interrogation_enter',
  },
} satisfies Scenes;
