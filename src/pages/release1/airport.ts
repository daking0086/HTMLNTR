import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

export const airportScenes = {
  airport_richard_office: {
    page: 'airport',
    type: 'narration',
    text: [
      'Airport Night — Hidden Camera',
      'Richard sits alone in a bare detention office — empty desk, locked door, a single chair. No lawyer. No supervisor. Just waiting.',
      'He keeps his voice low and angles his phone beneath the table. If they catch him calling out, they will take this too. He switches to a video call and prays she answers.',
    ],
    next: 'airport_richard_call',
  },

  airport_richard_call: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha? Baby, can you hear me? Keep the camera on. I need to see that you're safe.",
    location: 'Empty Office - Detention',
    next: 'airport_ayesha_pickup',
  },

  airport_ayesha_pickup: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard? Finally. Do you know how long I've been standing out here? It's humid, it's filthy, and these people keep staring at me like I've done something wrong. When are you walking out?",
    location: 'Outside the Airport - Night',
    next: 'airport_ayesha_status',
  },

  airport_ayesha_status: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "After they dragged you away, two security officers kept circling me talking about a 'checking routine.' I told them my husband is Richard Hayes and they looked at me like I was speaking another language. These men are beneath me, Richard. I hate this place already.",
    location: 'Outside the Airport - Night',
    next: 'airport_guards_approach',
  },

  airport_guards_approach: {
    page: 'airport',
    type: 'narration',
    text: [
      'The same two officers step in close — cunning, unhurried.',
      'Guard 1: "Madam. Follow us. Standard checking routine."',
      'Guard 2 (smirking): "Nothing to worry about. Unless you make it something."',
      'Ayesha\'s jaw tightens. Richard is still live on her screen. She cannot let them know.',
    ],
    next: 'airport_hide_phone',
  },

  airport_hide_phone: {
    page: 'airport',
    type: 'narration',
    text: [
      'Ayesha lowers the volume with a quick thumb swipe and slides the phone into her handbag, camera lens peeking through the open clasp — still recording.',
      'She lifts her chin, forces a cold smile, and follows them with the practiced confidence of a woman who has never once been told no in America.',
      'From the empty office, Richard watches the feed tilt and sway as she walks.',
    ],
    next: 'airport_scanner_room',
  },

  airport_scanner_room: {
    page: 'airport',
    type: 'narration',
    text: [
      'They lead her to a side area with scanners and metal tables — no passengers, no staff, no cameras. The lights are too bright. The corridor sounds disappear.',
      'Guard 1: "Body check. Full routine. Stand still and cooperate."',
      'Guard 2: "We can make this easy… or we can make your husband\'s release very difficult."',
    ],
    next: 'airport_refusal',
  },

  airport_refusal: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Absolutely not. You do not put your hands on me. My husband has lawyers who will bury this airport. I am not one of your local women you can intimidate.",
    location: 'Security Scanner Area - Empty',
    next: 'airport_threat',
  },

  airport_threat: {
    page: 'airport',
    type: 'narration',
    text: [
      'The taller guard leans in, voice soft and cruel.',
      'Guard 1: "Your Mr. Hayes stays in that room until we say otherwise. One phone call from us and his release becomes… complicated. You want him out? Be a good wife. Comply."',
      'Ayesha has never dealt with men who do not care about money or names. Sheltered her whole life, she believes them.',
    ],
    next: 'airport_compliance',
  },

  airport_compliance: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "…Fine. Do it. But if you hurt my husband because of this, I swear—",
    location: 'Security Scanner Area - Empty',
    next: 'airport_richard_witness',
  },

  airport_richard_witness: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha—? I can see you but I can barely hear you. What are they doing? Answer me!",
    location: 'Empty Office - Detention',
    next: 'airport_richard_witness_narration',
  },

  airport_richard_witness_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'Her volume is down. She cannot answer without alerting the guards. Richard is left with a silent, shaking video feed and the sound of his own pulse in an empty room.',
      'On screen, the officers close in. One grips her wrist. The other reaches for the hem of her blouse.',
    ],
    next: 'airport_violation_one',
  },

  airport_violation_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Don't— hands inside my— stop. This isn't a check, you filthy—",
    location: 'Security Scanner Area - Empty',
    image: '/assets/images/ayesha/ayesha_cg_shower.jpg',
    next: 'airport_violation_narration',
  },

  airport_violation_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'They ignore her. Rough fingers slide beneath fabric — waist, hips, searching slowly where a real inspection would never go. One guard cups and squeezes while the other holds her still, thumb digging into her ribs through the cloth.',
      'Ayesha bites her lip to keep from crying out. Richard watches every second, fists clenched, unable to cross the distance between them.',
    ],
    next: 'airport_violation_two',
  },

  airport_violation_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'Ayesha clamps a hand over her mouth so the guards do not hear Richard on the line. A muffled sound escapes anyway. They smirk and search slower — enjoying that she cannot scream.',
    ],
    next: 'airport_violation_whisper',
  },

  airport_violation_whisper: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… if you can still see… they're inside my clothes… I can't speak loud… I believed them about you… God, I was so stupid…",
    location: 'Security Scanner Area - Empty',
    next: 'airport_richard_helpless',
  },

  airport_richard_helpless: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm here. I'm watching. Don't let them— Ayesha, fight— I can't— I'm locked in—",
    location: 'Empty Office - Detention',
    next: 'airport_worker_enters',
  },

  airport_worker_enters: {
    page: 'airport',
    type: 'narration',
    text: [
      'Footsteps sprint down the corridor.',
      'Airport Worker (shouting): "Hey! Step away from her now! What the hell is this?!"',
      'The guards curse, release her, and slip out through a side door. The worker catches Ayesha before her knees give out and guides her firmly toward the public exit.',
      'Richard\'s feed blurs — handbag swinging — then steadies on fluorescent terminal lights again.',
    ],
    next: 'airport_escorted_out',
  },

  airport_escorted_out: {
    page: 'airport',
    type: 'narration',
    text: [
      'The worker does not let go until they are back in the open air by the curb. He stays close, shielding her from another approach.',
      'Ayesha fishes the phone out with trembling fingers and raises the volume.',
    ],
    next: 'airport_aftermath',
  },

  airport_aftermath: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… did you see what they did? That worker pulled me out. I still feel their hands under my clothes. I believed those animals about your release like some idiot who has never been outside her own bubble.",
    location: 'Airport Curb - Night',
    next: 'airport_aftermath_two',
  },

  airport_aftermath_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I acted confident. I followed them. I thought I could handle men like that. I was wrong. Don't hang up. I'm not ready to be alone with this yet.",
    location: 'Airport Curb - Night',
    next: 'taxi_intro',
  },
} satisfies Scenes;