import type { Scenes } from '../../types/game';

const AYESHA = '';

/** Scene backgrounds — paths are relative to the public/ folder. */
const BG_AIRPORT_OUTSIDE = '/assets/images/backgrounds/airport/airport.png';
const BG_EMPTY_OFFICE = '/assets/images/backgrounds/airport/emptyOffice.png';

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
    image: BG_AIRPORT_OUTSIDE,
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

  // Airport check — officers pull Ayesha for a "routine" body search

  airport_guards_approach: {
    page: 'airport',
    type: 'narration',
    text: [
      'The same two officers close in — unhurried, like they have all night.',
      'Officer 1 is enormous: bald, thick-necked, belly straining his uniform. Officer 2 is half his height, skinny, bald, with small clever eyes behind wire glasses.',
    ],
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_officer1_one',
  },

  airport_guards_officer1_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Madam. Airport security. You come with us now — full passenger check.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_officer2_one',
  },

  airport_guards_officer2_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'Standard procedure for spouses of detained travelers. Nothing personal. Unless you make it personal.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_ayesha_one',
  },

  airport_guards_ayesha_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'No. I am not going anywhere with you.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_ayesha_two',
  },

  airport_guards_ayesha_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "My husband is Richard Hayes. He has people. You do not lay a finger on me.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_ayesha_thought',
  },

  airport_guards_ayesha_thought: {
    page: 'airport',
    type: 'narration',
    text: [
      'She has said those words a hundred times back home. Here, the humid air swallows them.',
      'Richard is still live on her screen. She cannot let these animals know.',
    ],
    next: 'airport_guards_officer1_two',
  },

  airport_guards_officer1_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Big name. Small woman. Walk, or I carry you through that door myself.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_officer2_two',
  },

  airport_guards_officer2_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: "Your Mr. Hayes's file is on my desk. One stamp — he stays another week. Two stamps — he disappears into paperwork.",
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_ayesha_three',
  },

  airport_guards_ayesha_three: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'You would not dare. He is an American citizen.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_ayesha_four',
  },

  airport_guards_ayesha_four: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'This is beneath me. I have never been spoken to like this in my life.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_guards_jaw',
  },

  airport_guards_jaw: {
    page: 'airport',
    type: 'narration',
    text: [
      "Ayesha's jaw tightens until it aches. Officer 1 watches her face like he enjoys the crack forming in it.",
    ],
    next: 'airport_guards_ayesha_thought_two',
  },

  airport_guards_ayesha_thought_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'She has never been grabbed, threatened, or ignored by men who smelled like sweat and cheap tobacco.',
      'Back home, someone always stepped in. Here, there is only Richard — and he is locked in a room she cannot reach.',
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
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: '…Fine. Lead the way. But this is the last time you address me without respect.',
    location: 'Outside the Airport - Night',
    image: BG_AIRPORT_OUTSIDE,
    next: 'airport_pull_start',
  },

  airport_pull_start: {
    page: 'airport',
    type: 'narration',
    text: [
      'Officer 1 does not wait. His meaty hand clamps her upper arm — too hard, too high.',
      'Officer 2 falls in on her other side, close enough that his shoulder brushes hers with every step.',
    ],
    next: 'airport_pull_ayesha',
  },

  airport_pull_ayesha: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Unhand me. I said I would walk.',
    location: 'Airport Corridor - Night',
    next: 'airport_pull_officer1',
  },

  airport_pull_officer1: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Then walk faster, madam. My arm gets tired holding up princesses.',
    location: 'Airport Corridor - Night',
    next: 'airport_pull_officer2',
  },

  airport_pull_officer2: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'Smile for the cameras you cannot see. Your husband is watching, yes? Good. Let him see you cooperate.',
    location: 'Airport Corridor - Night',
    next: 'airport_pull_narration',
  },

  airport_pull_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'They steer her past shuttered kiosks and a row of empty chairs.',
      "Her heels click too loud. Officer 1's grip never loosens.",
    ],
    next: 'airport_hide_phone_three',
  },

  airport_hide_phone_three: {
    page: 'airport',
    type: 'narration',
    text: ['From the office, Richard watches the feed tilt and sway as they drag her through the terminal.'],
    next: 'airport_pull_ayesha_thought',
  },

  airport_pull_ayesha_thought: {
    page: 'airport',
    type: 'narration',
    text: [
      'Ayesha thinks: this is a mistake. A misunderstanding. Men like this do not touch women like her.',
      'The thought feels thinner with every corridor they turn down.',
    ],
    next: 'airport_pull_officer2_threat',
  },

  airport_pull_officer2_threat: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'Refuse the check and Richard Hayes sits in that cell until his lawyers find him — if they ever do.',
    location: 'Airport Corridor - Night',
    next: 'airport_pull_officer2_threat_two',
  },

  airport_pull_officer2_threat_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'Comply, and I put a note in his file: cooperative family. He walks sooner. Your choice, Mrs. Hayes.',
    location: 'Airport Corridor - Night',
    next: 'airport_pull_ayesha_break',
  },

  airport_pull_ayesha_break: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: '…You are lying.',
    location: 'Airport Corridor - Night',
    next: 'airport_pull_ayesha_break_two',
  },

  airport_pull_ayesha_break_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'Her voice wavers on the last word. She has never had to call a bluff she could not buy her way out of.',
      'Officer 2 smiles — small, pleased, like he heard exactly what he needed.',
    ],
    next: 'airport_scanner_room',
  },

  airport_scanner_room: {
    page: 'airport',
    type: 'narration',
    text: [
      'A side room with scanners and metal tables. No passengers. No staff. No cameras.',
      'Officer 1 shuts the door. The lock clicks like a period at the end of a sentence.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_scanner_officer1',
  },

  airport_scanner_officer1: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Body check. Full routine. Stand still and keep your hands where I can see them.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_scanner_officer2',
  },

  airport_scanner_officer2: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'We already explained the consequences. Do not make your husband wait because his wife has pride.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-1'],
    next: 'airport_scanner_officer1_officer2',
  },

  airport_scanner_officer1_officer2: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'Besides, if you really enjoy our company, we can make this a lot more… personal. You know what I mean.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-2', 'officer-1'],
    next: 'airport_scanner_officer1_response',
  },

  airport_scanner_officer1_response: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Keep still, madam. We are not done with you yet.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    characters: ['officer-2', 'officer-1'],
    next: 'airport_refusal',
  },

  airport_refusal: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Absolutely not. You do not put your hands on me.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_refusal_two',
  },

  airport_refusal_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "My husband has lawyers who will bury this airport. I am not one of your local women.",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_threat',
  },

  airport_threat: {
    page: 'airport',
    type: 'narration',
    text: [
      'Officer 1 steps into her space — belly first, breath hot against her hijab.',
      "Officer 2 opens a folder with Richard's name on the tab and taps it twice.",
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_threat_officer1',
  },

  airport_threat_officer1: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 1',
    text: 'Your Mr. Hayes stays in that room until we say otherwise. Be a good wife. Comply.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_threat_officer2',
  },

  airport_threat_officer2: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Officer 2',
    text: 'I can add thirty days with one signature. Or I can add "family assisted security." Which do you want for him?',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_threat_belief',
  },

  airport_threat_belief: {
    page: 'airport',
    type: 'narration',
    text: [
      'She has never met men who ignore money or names. Sheltered her whole life, she believes them.',
      'For the first time, arrogance has no door to slam. Only Richard — somewhere she cannot reach.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_ayesha_thought_comply',
  },

  airport_ayesha_thought_comply: {
    page: 'airport',
    type: 'narration',
    text: [
      'Ayesha thinks: if I refuse, they hurt him. If I obey, they hurt me — but he might walk free.',
      'She does not know which horror is worse. She has never had to choose before.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_compliance',
  },

  airport_compliance: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: '…Fine. Do it. But if you hurt my husband because of this, I swear—',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_compliance_two',
  },

  airport_compliance_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: '…I will remember your faces. Every single one.',
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness',
  },

  airport_richard_witness: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha—? I can see you but I can barely hear you.",
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_two',
  },

  airport_richard_witness_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: 'What are they doing? Answer me!',
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_narration',
  },

  airport_richard_witness_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'Her volume is down. She cannot answer without alerting the guards.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_narration_two',
  },

  airport_richard_witness_narration_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'Richard is left with a silent, shaking feed. On screen, the officers close in.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_witness_narration_three',
  },

  airport_richard_witness_narration_three: {
    page: 'airport',
    type: 'narration',
    text: ['One grips her wrist. The other reaches for the hem of her blouse.'],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_one',
  },

  airport_violation_one: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Don't— hands inside my— stop.",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_one_two',
  },

  airport_violation_one_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "This isn't a check, you filthy—",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_narration',
  },

  airport_violation_narration: {
    page: 'airport',
    type: 'narration',
    text: [
      'They ignore her. Rough fingers slide beneath fabric — waist, hips, searching where no inspection should go.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_narration_two',
  },

  airport_violation_narration_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'One guard cups and squeezes while the other holds her still. Ayesha bites her lip to stay silent.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_narration_three',
  },

  airport_violation_narration_three: {
    page: 'airport',
    type: 'narration',
    text: ['Richard watches every second, fists clenched, unable to reach her.'],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_two',
  },

  airport_violation_two: {
    page: 'airport',
    type: 'narration',
    text: [
      'She clamps a hand over her mouth. A muffled sound escapes anyway. They smirk and search slower.',
    ],
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_whisper',
  },

  airport_violation_whisper: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… if you can still see… they're inside my clothes…",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_violation_whisper_two',
  },

  airport_violation_whisper_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I can't speak loud… I believed them about you… God, I was so stupid…",
    location: 'Security Scanner Area - Empty',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_helpless',
  },

  airport_richard_helpless: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm here. I'm watching. Don't let them—",
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
    next: 'airport_richard_helpless_two',
  },

  airport_richard_helpless_two: {
    page: 'airport',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Ayesha, fight— I can't— I'm locked in—",
    location: 'Empty Office - Detention',
    image: BG_EMPTY_OFFICE,
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
    image: BG_EMPTY_OFFICE,
    next: 'airport_worker_rescue',
  },

  airport_worker_rescue: {
    page: 'airport',
    type: 'narration',
    text: [
      'The guards curse, release her, and slip out a side door. The worker catches Ayesha before her knees give out.',
    ],
    image: BG_EMPTY_OFFICE,
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