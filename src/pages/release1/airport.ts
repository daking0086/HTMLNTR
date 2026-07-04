import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

export const airportScenes = {
  airport_richard_office: {
    page: 'airport',
    type: 'narration',
    text: [
      'Airport Night — Hidden Camera',
      'Richard sits alone in a bare detention office. Empty desk. Locked door. One chair.',
    ],
    next: 'airport_richard_phone',
  },

  airport_richard_phone: {
    page: 'airport',
    type: 'narration',
    text: [
      'He keeps his voice low and angles the phone beneath the table. If they catch this call, they take the phone too.',
    ],
    next: 'airport_richard_call',
  },

  airport_richard_call: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha? Baby, can you hear me?",
    location: 'Empty Office - Detention',
    next: 'airport_richard_call_two',
  },

  airport_richard_call_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Keep the camera on. I need to see that you're safe.",
    location: 'Empty Office - Detention',
    next: 'airport_ayesha_pickup',
  },

  airport_ayesha_pickup: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard? Finally. Do you know how long I've been standing out here?",
    location: 'Outside the Airport - Night',
    next: 'airport_ayesha_pickup_two',
  },

  airport_ayesha_pickup_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "It's humid, it's filthy, and people keep staring like I've done something wrong.",
    location: 'Outside the Airport - Night',
    next: 'airport_ayesha_pickup_three',
  },

  airport_ayesha_pickup_three: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'When are you walking out?',
    location: 'Outside the Airport - Night',
    next: 'airport_ayesha_status',
  },

  airport_ayesha_status: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "After they dragged you away, two officers kept circling me about a 'checking routine.'",
    location: 'Outside the Airport - Night',
    next: 'airport_ayesha_status_two',
  },

  airport_ayesha_status_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I told them my husband is Richard Hayes. They looked at me like I was speaking another language.",
    location: 'Outside the Airport - Night',
    next: 'airport_ayesha_status_three',
  },

  airport_ayesha_status_three: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "These men are beneath me, Richard. I hate this place already.",
    location: 'Outside the Airport - Night',
    next: 'airport_guards_approach',
  },

  airport_guards_approach: {
    page: 'airport',
    type: 'narration',
    text: ['The same two officers step in close — cunning, unhurried.'],
    next: 'airport_guards_speak',
  },

  airport_guards_speak: {
    page: 'airport',
    type: 'narration',
    text: [
      'Guard 1: "Madam. Follow us. Standard checking routine."',
      'Guard 2: "Nothing to worry about. Unless you make it something."',
    ],
    next: 'airport_guards_jaw',
  },

  airport_guards_jaw: {
    page: 'airport',
    type: 'narration',
    text: [
      "Ayesha's jaw tightens. Richard is still live on her screen. She cannot let them know.",
    ],
    next: 'airport_hide_phone',
  },

  airport_hide_phone: {
    page: 'airport',
    type: 'narration',
    text: [
      'She lowers the volume and slides the phone into her handbag, camera peeking through the clasp.',
    ],
    next: 'airport_hide_phone_two',
  },

  airport_hide_phone_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'She lifts her chin, forces a cold smile, and follows them like a woman who has never been told no.',
    ],
    next: 'airport_hide_phone_three',
  },

  airport_hide_phone_three: {
    page: 'airport',
    type: 'narration',
    text: ['From the office, Richard watches the feed tilt and sway as she walks.'],
    next: 'airport_scanner_room',
  },

  airport_scanner_room: {
    page: 'airport',
    type: 'narration',
    text: [
      'A side room with scanners and metal tables. No passengers. No staff. No cameras.',
    ],
    next: 'airport_scanner_room_two',
  },

  airport_scanner_room_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'Guard 1: "Body check. Full routine. Stand still and cooperate."',
      'Guard 2: "We can make your husband\'s release very difficult."',
    ],
    next: 'airport_refusal',
  },

  airport_refusal: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Absolutely not. You do not put your hands on me.",
    location: 'Security Scanner Area - Empty',
    next: 'airport_refusal_two',
  },

  airport_refusal_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "My husband has lawyers who will bury this airport. I am not one of your local women.",
    location: 'Security Scanner Area - Empty',
    next: 'airport_threat',
  },

  airport_threat: {
    page: 'airport',
    type: 'narration',
    text: ['The taller guard leans in, voice soft and cruel.'],
    next: 'airport_threat_speak',
  },

  airport_threat_speak: {
    page: 'airport',
    type: 'narration',
    text: [
      'Guard 1: "Your Mr. Hayes stays in that room until we say otherwise. Be a good wife. Comply."',
    ],
    next: 'airport_threat_belief',
  },

  airport_threat_belief: {
    page: 'airport',
    type: 'narration',
    text: [
      'She has never met men who ignore money or names. Sheltered her whole life, she believes them.',
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
    text: "Ayesha—? I can see you but I can barely hear you.",
    location: 'Empty Office - Detention',
    next: 'airport_richard_witness_two',
  },

  airport_richard_witness_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: 'What are they doing? Answer me!',
    location: 'Empty Office - Detention',
    next: 'airport_richard_witness_narration',
  },

  airport_richard_witness_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'Her volume is down. She cannot answer without alerting the guards.',
    ],
    next: 'airport_richard_witness_narration_two',
  },

  airport_richard_witness_narration_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'Richard is left with a silent, shaking feed. On screen, the officers close in.',
    ],
    next: 'airport_richard_witness_narration_three',
  },

  airport_richard_witness_narration_three: {
    page: 'airport',
    type: 'narration',
    text: ['One grips her wrist. The other reaches for the hem of her blouse.'],
    next: 'airport_violation_one',
  },

  airport_violation_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Don't— hands inside my— stop.",
    location: 'Security Scanner Area - Empty',
    // image: '/assets/images/ayesha/ayesha_cg_shower.jpg',
    next: 'airport_violation_one_two',
  },

  airport_violation_one_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "This isn't a check, you filthy—",
    location: 'Security Scanner Area - Empty',
    // image: '/assets/images/ayesha/ayesha_cg_shower.jpg',
    next: 'airport_violation_narration',
  },

  airport_violation_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'They ignore her. Rough fingers slide beneath fabric — waist, hips, searching where no inspection should go.',
    ],
    next: 'airport_violation_narration_two',
  },

  airport_violation_narration_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'One guard cups and squeezes while the other holds her still. Ayesha bites her lip to stay silent.',
    ],
    next: 'airport_violation_narration_three',
  },

  airport_violation_narration_three: {
    page: 'airport',
    type: 'narration',
    text: ['Richard watches every second, fists clenched, unable to reach her.'],
    next: 'airport_violation_two',
  },

  airport_violation_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'She clamps a hand over her mouth. A muffled sound escapes anyway. They smirk and search slower.',
    ],
    next: 'airport_violation_whisper',
  },

  airport_violation_whisper: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… if you can still see… they're inside my clothes…",
    location: 'Security Scanner Area - Empty',
    next: 'airport_violation_whisper_two',
  },

  airport_violation_whisper_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I can't speak loud… I believed them about you… God, I was so stupid…",
    location: 'Security Scanner Area - Empty',
    next: 'airport_richard_helpless',
  },

  airport_richard_helpless: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm here. I'm watching. Don't let them—",
    location: 'Empty Office - Detention',
    next: 'airport_richard_helpless_two',
  },

  airport_richard_helpless_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha, fight— I can't— I'm locked in—",
    location: 'Empty Office - Detention',
    next: 'airport_worker_enters',
  },

  airport_worker_enters: {
    page: 'airport',
    type: 'narration',
    text: ['Footsteps sprint down the corridor.'],
    next: 'airport_worker_shouts',
  },

  airport_worker_shouts: {
    page: 'airport',
    type: 'narration',
    text: [
      'Airport Worker: "Hey! Step away from her now! What the hell is this?!"',
    ],
    next: 'airport_worker_rescue',
  },

  airport_worker_rescue: {
    page: 'airport',
    type: 'narration',
    text: [
      'The guards curse, release her, and slip out a side door. The worker catches Ayesha before her knees give out.',
    ],
    next: 'airport_worker_escort',
  },

  airport_worker_escort: {
    page: 'airport',
    type: 'narration',
    text: [
      "Richard's feed blurs — handbag swinging — then steadies on terminal lights again.",
    ],
    next: 'airport_escorted_out',
  },

  airport_escorted_out: {
    page: 'airport',
    type: 'narration',
    text: [
      'The worker does not let go until they are back in the open air by the curb.',
    ],
    next: 'airport_escorted_out_two',
  },

  airport_escorted_out_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'Ayesha fishes the phone out with trembling fingers and raises the volume.',
    ],
    next: 'airport_aftermath',
  },

  airport_aftermath: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… did you see what they did?",
    location: 'Airport Curb - Night',
    next: 'airport_aftermath_one',
  },

  airport_aftermath_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I still feel their hands under my clothes. I believed those animals about your release.",
    location: 'Airport Curb - Night',
    next: 'airport_aftermath_two',
  },

  airport_aftermath_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I acted confident. I thought I could handle men like that. I was wrong.",
    location: 'Airport Curb - Night',
    next: 'airport_aftermath_three',
  },

  airport_aftermath_three: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Don't hang up. I'm not ready to be alone with this yet.",
    location: 'Airport Curb - Night',
    next: 'taxi_intro',
  },
} satisfies Scenes;