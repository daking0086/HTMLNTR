import type { Scenes } from '../../types/game';

/** Dialogue portrait (ayesha_profile.png is missing — use Intro face asset). */
const AYESHA = '/assets/images/Intro/grok-image-4dce748b-6565-4020-be65-95cb727a957b.jpg';

/**
 * Intro CGs — files live under public/assets/images/
 * Paths keep original folder names; assetUrl encodes spaces for production.
 */

// ── Private jet / arrival ──
const CG_JET_LANDING =
  '/assets/images/Intro/1783714485999_edit_78169999456064.png';
const CG_JET_TARMAC =
  '/assets/images/Intro/1783715858051_edit_78197347557459.png';
const CG_JET_CABIN =
  '/assets/images/Intro/1783715864794_edit_78222431311669.png';
const CG_JET_CABIN_DOCS =
  '/assets/images/Intro/1783715870351_edit_78304028976377.png';
const CG_STAIRS_SHOES =
  '/assets/images/Intro/1784761048532_edit_1809318044361.png';

// ── Terminal walk (Richard alone) ──
const CG_RICHARD_WALK_NIGHT = '/assets/images/Intro/image-13.jpg';
const CG_RICHARD_WALK_EMPTY = '/assets/images/Intro/image-53.jpg';

// ── Couple ──
const CG_COUPLE_ARM_IN_ARM =
  '/assets/images/Intro/grok-image-036bcd68-a103-464c-bb87-089f5b480f6c.jpg';
const CG_COUPLE_CLOSE =
  '/assets/images/Intro/grok-image-63192cd7-7525-430e-b449-e7e52bdf3413.jpg';
const CG_COUPLE_WALK_CONCERN = '/assets/images/Intro/vJaY1.jpg';
/** Wide: couple + men looking back (secondary stare beat). */
const CG_COUPLE_MEN_STARE =
  '/assets/images/Intro/grok-image-b37f237d-be18-4ef0-8286-fddd1a1bf424.jpg';

// ── Strangers staring (close-up leers — bigshot build) ──
const CG_STRANGERS_STARING = '/assets/images/Intro/strangersStaring.png';
const CG_STRANGERS_STARING_1 = '/assets/images/Intro/strangersStaring1.png';
const CG_STRANGERS_STARING_2 = '/assets/images/Intro/strangersStaring2.png';

// ── Ayesha focus / bigshot ──
/** Luxury collage — yacht, red carpet, penthouse, closet + main pose. */
const CG_AYESHA_BIGSHOT = '/assets/images/Intro/AYESHA.png';
const CG_AYESHA_BACKSHOT =
  '/assets/images/Intro/grok-image-5917a9c8-3e64-4cd3-88f3-07f0b508e5c0.jpg';
const CG_AYESHA_PROFILE =
  '/assets/images/Intro/grok-image-527467af-2627-404b-a02b-86deeb8c95ce.jpg';
const CG_AYESHA_PROFILE_SIDE =
  '/assets/images/Intro/grok-image-7940b2fb-a261-48a4-8f93-3525cfdd4cb2.jpg';
const CG_AYESHA_ALONE_TERMINAL =
  '/assets/images/Intro/grok-image-c5f02bbf-fe2d-4add-aa90-fed78bf87eb4.jpg';
const CG_AYESHA_FACE_CLOSE =
  '/assets/images/Intro/grok-image-4dce748b-6565-4020-be65-95cb727a957b.jpg';

// ── Pure backgrounds (crowd → empty) ──
const BG_TERMINAL_CROWD =
  '/assets/images/backgrounds/airport/1784761053432_edit_1881080589802.png';
const BG_TERMINAL_BUSY =
  '/assets/images/backgrounds/airport/1784761056772_edit_1976982005495.png';
const BG_AIDNI_EMPTY =
  '/assets/images/backgrounds/airport/1784762906907_edit_2421285684231.png';
const BG_TERMINAL_NIGHT_SPARSE =
  '/assets/images/backgrounds/airport/1784762901982_edit_2382471721225.png';
const BG_TERMINAL_NIGHT_EMPTY =
  '/assets/images/backgrounds/airport/1784762897390_edit_2365791017690.png';
const BG_SKYBRIDGE =
  '/assets/images/backgrounds/airport/IMG_20260723_053255.jpg';

// ── Toilet sequence ──
const CG_ARRIVALS_TOILET_SIGN =
  '/assets/images/toilet scene/grok-image-580d4252-64c5-4939-b90e-0d05e1d81677.jpg';
const CG_TOILET_ENTER =
  '/assets/images/toilet scene/grok_1784758045212.jpg';
const CG_TOILET_PEEKER_HALL =
  '/assets/images/toilet scene/grok_1784761499350.jpg';
const CG_TOILET_MIRROR =
  '/assets/images/toilet scene/grok_1784761827378.jpg';
const CG_TOILET_MIRROR_CALM =
  '/assets/images/toilet scene/grok_1784761909612.jpg';
/** Stall POV + phone + peeker over door (visual only — never named in text) */
const CG_TOILET_STALL_PEEKER =
  '/assets/images/toilet scene/image-33.jpg';
/** Stall POV + phone, no peeker */
const CG_TOILET_STALL_PHONE =
  '/assets/images/toilet scene/IMG_20260723_062439.jpg';
/** Stall POV alone */
const CG_TOILET_STALL_EMPTY =
  '/assets/images/toilet scene/IMG_20260723_062642.jpg';

// ── Intro videos (public/assets/images/Intro/vids/) ──
const VID_TERMINAL_WALK =
  '/assets/images/Intro/vids/download.mp4';
const VID_COUPLE_WALK_A =
  '/assets/images/Intro/vids/grok-video-019f8ba2-0f60-79d3-9249-cf1b7d8340ff.mp4';
const VID_COUPLE_WALK_B =
  '/assets/images/Intro/vids/grok-video-019f8ba2-0f60-79d3-9249-cf1b7d8340ff (1).mp4';
const VID_COUPLE_WALK_C =
  '/assets/images/Intro/vids/grok-video-019f8ba2-0f60-79d3-9249-cf1b7d8340ff (2).mp4';
const VID_COUPLE_WALK_D =
  '/assets/images/Intro/vids/grok-video-019f8ba2-0f60-79d3-9249-cf1b7d8340ff (3).mp4';
const VID_COUPLE_WALK_E =
  '/assets/images/Intro/vids/grok-video-019f8ba2-0f60-79d3-9249-cf1b7d8340ff (4).mp4';
const VID_COUPLE_CLOSE_A =
  '/assets/images/Intro/vids/grok-video-cb934393-b07b-4aef-97ff-87b0ba55b178.mp4';
const VID_COUPLE_CLOSE_B =
  '/assets/images/Intro/vids/grok-video-cb934393-b07b-4aef-97ff-87b0ba55b178 (1).mp4';

export const introScenes = {
  intro: {
    page: 'intro',
    type: 'narration',
    text: [
      'Prologue',
      'The private jet touched down smoothly on the foreign runway.',
    ],
    image: CG_JET_LANDING,
    next: 'intro_richard_window',
  },

  intro_richard_window: {
    page: 'intro',
    type: 'narration',
    text: ['Richard Hayes stared out the window, jaw set.'],
    image: CG_JET_CABIN,
    next: 'intro_richard_empire',
  },

  intro_richard_empire: {
    page: 'intro',
    type: 'narration',
    text: [
      'A self-made American millionaire, he had risen from nothing through discipline, sharp deals, and an iron will.',
    ],
    image: CG_JET_CABIN_DOCS,
    next: 'intro_deal',
  },

  intro_deal: {
    page: 'intro',
    type: 'narration',
    text: [
      'This trip was supposed to be his greatest victory — he was here to steal a massive distribution contract from his biggest competitor.',
      'The deal was worth tens of millions.',
    ],
    image: CG_JET_TARMAC,
    next: 'intro_disembark',
  },

  intro_disembark: {
    page: 'intro',
    type: 'narration',
    text: ['Boarding stairs. Warm air. The foreign night waiting below.'],
    image: CG_STAIRS_SHOES,
    next: 'walking_through_airport',
  },

  walking_through_airport: {
    page: 'intro',
    type: 'video',
    video: VID_TERMINAL_WALK,
    poster: CG_RICHARD_WALK_NIGHT,
    location: 'Foreign Airport - Terminal',
    lines: [
      'Terminal lights reflected off the polished floor as he walked through the airport.',
    ],
    next: 'intro_terminal',
  },

  intro_terminal: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_WALK_A,
    poster: BG_TERMINAL_CROWD,
    location: 'Foreign Airport - Terminal',
    lines: ['The terminal was crowded and heads turned.'],
    next: 'intro_richard_ignored',
  },

  intro_richard_ignored: {
    page: 'intro',
    type: 'narration',
    text: [
      'But their eyes did not stay on him for even a second.',
      'Glanced past him like he was nothing more than a shadow.',
    ],
    image: CG_RICHARD_WALK_EMPTY,
    next: 'intro_backshot',
  },

  intro_backshot: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_WALK_B,
    poster: CG_AYESHA_BACKSHOT,
    location: 'Foreign Airport - Terminal',
    lines: [
      'A curvy woman in a dark blue hijab and fitted modest clothes walked confidently through the crowd.',
      'The leering followed her with every step.',
    ],
    next: 'intro_men_stare',
  },

  intro_men_stare: {
    page: 'intro',
    type: 'narration',
    text: [
      'Every stare slid lower and settled on the woman at his side — hungry, shameless, openly perverted.',
    ],
    image: CG_STRANGERS_STARING,
    next: 'intro_men_stare_1',
  },

  intro_men_stare_1: {
    page: 'intro',
    type: 'narration',
    text: ['Eyes locked. Sweat. No shame. No looking away.'],
    image: CG_STRANGERS_STARING_1,
    next: 'intro_men_stare_2',
  },

  intro_men_stare_2: {
    page: 'intro',
    type: 'narration',
    text: [
      'They looked at her the way men look at something they believe they have a right to consume.',
    ],
    image: CG_STRANGERS_STARING_2,
    next: 'intro_men_stare_wide',
  },

  intro_men_stare_wide: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_WALK_C,
    poster: CG_COUPLE_MEN_STARE,
    location: 'Foreign Airport - Terminal',
    lines: [
      'Behind them, more heads turned. The whole terminal seemed to lean her way.',
    ],
    next: 'intro_reveal',
  },

  intro_reveal: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_WALK_D,
    poster: CG_COUPLE_ARM_IN_ARM,
    location: 'Foreign Airport - Terminal',
    lines: [
      'The woman at his side was not just any woman.',
      'She is his one and only.',
    ],
    next: 'intro_reveal_2',
  },

  intro_reveal_2: {
    page: 'intro',
    type: 'narration',
    text: ['Ayesha Khan.'],
    image: CG_AYESHA_BIGSHOT,
    next: 'intro_ayesha_proud',
  },

  intro_ayesha_proud: {
    page: 'intro',
    type: 'narration',
    text: [
      'Raised in American luxury, she was proud and arrogant.',
      'She looked down on most people — especially here.',
    ],
    image: CG_AYESHA_BIGSHOT,
    next: 'intro_ayesha_clings',
  },

  intro_ayesha_clings: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_CLOSE_A,
    poster: CG_COUPLE_CLOSE,
    location: 'Foreign Airport - Terminal',
    lines: [
      "Ayesha hooked her arm through Richard's and drew herself closer — chin high, spine straight.",
      'Her face stayed pure arrogance, as if the stares were beneath her notice.',
      'Only the tight grip on his arm betrayed how much she needed him between her and them.',
    ],
    next: 'intro_ayesha_whisper',
  },

  intro_ayesha_whisper: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_WALK_E,
    poster: CG_AYESHA_PROFILE_SIDE,
    location: 'Foreign Airport - Terminal',
    lines: [
      {
        speaker: 'Ayesha',
        text: "Everyone is staring at me like I'm some kind of exhibit. These low-class people have no shame.",
      },
    ],
    next: 'intro_richard_stay',
  },

  intro_richard_stay: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_CLOSE_B,
    poster: CG_COUPLE_WALK_CONCERN,
    location: 'Foreign Airport - Terminal',
    lines: [
      {
        speaker: 'Richard',
        text: "I told you to stay back home, Ayesha. This isn't a vacation.",
      },
      {
        speaker: 'Ayesha',
        text: 'And allowing that hoe secretary to go with you? Not a chance. Besides… I can make your nights here extra special.',
      },
    ],
    next: 'flashback_title',
  },

  intro_snap_back: {
    page: 'intro',
    type: 'video',
    video: VID_COUPLE_WALK_A,
    poster: CG_COUPLE_ARM_IN_ARM,
    location: 'Foreign Airport - Terminal',
    lines: [
      'Present again — the terminal hum, the exit signs, Richard at her side.',
    ],
    next: 'intro_checking',
  },

  intro_checking: {
    page: 'intro',
    type: 'narration',
    text: [
      'Border checks dragged on longer than they should.',
      "Ayesha slipped away to the ladies' toilet to freshen up before the wait grew worse.",
    ],
    image: BG_TERMINAL_BUSY,
    next: 'intro_toilet_sign',
  },

  // ── Toilet (peeker only in art — never named in dialogue) ──

  intro_toilet_sign: {
    page: 'intro',
    type: 'narration',
    text: ['Arrivals. Toilets. She followed the signs without looking back.'],
    image: CG_ARRIVALS_TOILET_SIGN,
    next: 'intro_toilet_enter',
  },

  intro_toilet_enter: {
    page: 'intro',
    type: 'narration',
    text: ['The ladies\' room door stood open. She walked in like she owned the hallway.'],
    image: CG_TOILET_ENTER,
    next: 'intro_toilet_thought',
  },

  intro_toilet_thought: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Of course. Even their toilets feel like a downgrade.',
    location: 'Airport Toilet',
    image: CG_TOILET_MIRROR,
    next: 'intro_toilet_text_one',
  },

  intro_toilet_text_one: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Richard (Text)',
    text: "Extra checks. Wait outside. Won't be long.",
    location: 'Airport Toilet',
    image: CG_TOILET_STALL_PHONE,
    next: 'intro_toilet_texting',
  },

  intro_toilet_texting: {
    page: 'intro',
    type: 'narration',
    text: [
      'She answered with one hand still on her hijab — thumbs sharp, eyes locked on the only voice she trusted in this building.',
    ],
    image: CG_TOILET_STALL_PHONE,
    next: 'intro_toilet_peeker',
  },

  intro_toilet_peeker: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Ayesha (Text)',
    portrait: AYESHA,
    text: "Hurry. I'm not wasting my night in this place.",
    location: 'Airport Toilet',
    image: CG_TOILET_STALL_PEEKER,
    next: 'intro_toilet_glance',
  },

  intro_toilet_glance: {
    page: 'intro',
    type: 'narration',
    text: ['Her eyes lifted from the screen — a reflex, gone as soon as it came.'],
    image: CG_TOILET_PEEKER_HALL,
    next: 'intro_toilet_gone',
  },

  intro_toilet_gone: {
    page: 'intro',
    type: 'narration',
    text: [
      'Cracked tile. A sick fluorescent buzz. Her reflection, flawless and unimpressed.',
    ],
    image: CG_TOILET_STALL_EMPTY,
    next: 'intro_toilet_continue',
  },

  intro_toilet_continue: {
    page: 'intro',
    type: 'narration',
    text: [
      'Chin high. Phone first. Richard was the delay — everything else was noise.',
    ],
    image: CG_TOILET_MIRROR_CALM,
    next: 'intro_toilet_exit',
  },

  intro_toilet_exit: {
    page: 'intro',
    type: 'narration',
    text: [
      'She left the sink like it had insulted her, fixed her hijab once, and walked back out to the exit.',
    ],
    image: CG_TOILET_ENTER,
    next: 'intro_twenty_min',
  },

  // ── Waiting outside — isolation + this country ──

  intro_twenty_min: {
    page: 'intro',
    type: 'narration',
    text: [
      'Twenty minutes. Then thirty.',
      'The crowd thinned. The foreign lights kept humming, indifferent.',
    ],
    image: BG_AIDNI_EMPTY,
    next: 'intro_wait_thought_one',
  },

  intro_wait_thought_one: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'This country is already testing me. Stares. Queues. Rules that only bend one way.',
    location: 'Outside the Airport - Present',
    image: BG_SKYBRIDGE,
    next: 'intro_phone_notif',
  },

  intro_phone_notif: {
    page: 'intro',
    type: 'narration',
    text: [
      'A buzz cut through the quiet — sharp against her palm.',
      "She reached for the phone before pride could pretend she wasn't waiting for it.",
    ],
    image: CG_AYESHA_ALONE_TERMINAL,
    next: 'intro_text_two',
  },

  intro_text_two: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Richard (Text)',
    text: "Taking longer than I thought. Lots of questions. Stay by the exit. I'll handle it.",
    location: 'Outside the Airport - Present',
    image: BG_TERMINAL_NIGHT_SPARSE,
    next: 'intro_ayesha_text_one',
  },

  intro_ayesha_text_one: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Ayesha (Text)',
    portrait: AYESHA,
    text: "How long? I'm tired and these men won't stop staring.",
    location: 'Outside the Airport - Present',
    image: CG_AYESHA_ALONE_TERMINAL,
    next: 'intro_text_three',
  },

  intro_text_three: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Richard (Text)',
    text: "I don't know. Wait for me. Don't go anywhere alone.",
    location: 'Outside the Airport - Present',
    image: BG_TERMINAL_NIGHT_SPARSE,
    next: 'intro_wait_thought_two',
  },

  intro_wait_thought_two: {
    page: 'intro',
    type: 'narration',
    text: [
      "Don't go anywhere alone.",
      'Easy words from the other side of glass and uniforms.',
      'Out here the night air was thick — jet fuel, heat, and eyes that never quite looked away.',
    ],
    image: BG_SKYBRIDGE,
    next: 'intro_two_hours',
  },

  intro_two_hours: {
    page: 'intro',
    type: 'narration',
    text: [
      'Two hours.',
      'The airport emptied. The stares got quieter — and worse.',
    ],
    image: BG_TERMINAL_NIGHT_EMPTY,
    next: 'intro_wait_thought_three',
  },

  intro_wait_thought_three: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'I hate this place. Without Richard in front of me, it feels like it could swallow me whole.',
    location: 'Outside the Airport - Present',
    image: BG_AIDNI_EMPTY,
    next: 'intro_text_four',
  },

  intro_text_four: {
    page: 'intro',
    type: 'dialogue',
    speaker: 'Richard (Text)',
    text: "Something's wrong. They're not letting me go. Stay put, Ayesha. Don't move.",
    location: 'Outside the Airport - Present',
    image: BG_TERMINAL_NIGHT_EMPTY,
    next: 'intro_end_reading',
  },

  intro_end_reading: {
    page: 'intro',
    type: 'narration',
    text: [
      'She read it twice.',
      "Don't move. Stay put. As if the phone could hold her the way he did.",
    ],
    image: CG_AYESHA_FACE_CLOSE,
    next: 'intro_end_shadows',
  },

  intro_end_shadows: {
    page: 'intro',
    type: 'narration',
    text: [
      'Two shadows slid over her — long, heavy, wrong.',
      'They stretched across her shoulders before she even looked up.',
    ],
    image: BG_SKYBRIDGE,
    next: 'airport_officer_greeting',
  },
} satisfies Scenes;
