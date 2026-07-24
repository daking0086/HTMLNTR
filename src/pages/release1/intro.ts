import type { Scenes } from "../../types/game";

/** Dialogue portrait (ayesha_profile.png is missing — use Intro face asset). */
const AYESHA =
  "/assets/images/Intro/grok-image-4dce748b-6565-4020-be65-95cb727a957b.jpg";

/**
 * Intro CGs — files live under public/assets/images/
 * Paths keep original folder names; assetUrl encodes spaces for production.
 */

// ── Private jet / arrival ──
const CG_JET_LANDING =
  "/assets/images/Intro/1783714485999_edit_78169999456064.png";
const CG_JET_TARMAC =
  "/assets/images/Intro/1783715858051_edit_78197347557459.png";
const CG_JET_CABIN =
  "/assets/images/Intro/1783715864794_edit_78222431311669.png";
const CG_JET_CABIN_DOCS =
  "/assets/images/Intro/1783715870351_edit_78304028976377.png";
const CG_STAIRS_SHOES =
  "/assets/images/Intro/1784761048532_edit_1809318044361.png";

// ── Terminal: stares at Richard → cut to Ayesha ──
const CG_STARE_AT_RICHARD_1 = "/assets/images/Intro/stareAtRichard1.jpg";
const CG_STARE_AT_RICHARD_2 = "/assets/images/Intro/stareAtRichard2.jpg";
const CG_AYESHA_BACK_SHOT = "/assets/images/Intro/AyeshaBackShot.jpg";
const CG_AYESHA_LOW_SHOT = "/assets/images/Intro/AyeshaLowShot.jpg";
const CG_AYESHA_CHEST_SHOT = "/assets/images/Intro/AyeshaChestShot.png";
const CG_AYESHA_FACE_REVEAL = "/assets/images/Intro/AyeshaFaceReveal.jpg";
const CG_ONE_AND_ONLY = "/assets/images/Intro/oneAndOnly.jpg";
const CG_COMPLAIN_1 = "/assets/images/Intro/Complain1.jpg";
const CG_COMPLAIN_2 = "/assets/images/Intro/Complain2.jpg";
const CG_COMPLAIN_3 = "/assets/images/Intro/Complain3.jpg";
const CG_COMPLAIN_4 = "/assets/images/Intro/Complain4.png";

// ── Couple (post-flashback / spare) ──
const CG_COUPLE_ARM_IN_ARM =
  "/assets/images/Intro/grok-image-036bcd68-a103-464c-bb87-089f5b480f6c.jpg";

// ── Strangers staring (close-up leers — bigshot build) ──
const CG_STRANGERS_STARING = "/assets/images/Intro/strangersStaring.png";
const CG_STRANGERS_STARING_1 = "/assets/images/Intro/strangersStaring1.png";
const CG_STRANGERS_STARING_2 = "/assets/images/Intro/strangersStaring2.png";

// ── Ayesha focus / bigshot ──
/** Luxury collage — yacht, red carpet, penthouse, closet + main pose. */
const CG_AYESHA_BIGSHOT = "/assets/images/Intro/AYESHA.png";
const CG_AYESHA_BIGSHOT2 = "/assets/images/Intro/AYESHA2.png";
const CG_AYESHA_BIGSHOT3 = "/assets/images/Intro/AYESHA3.png";
const CG_AYESHA_ALONE_TERMINAL =
  "/assets/images/Intro/grok-image-c5f02bbf-fe2d-4add-aa90-fed78bf87eb4.jpg";
const CG_AYESHA_FACE_CLOSE =
  "/assets/images/Intro/grok-image-4dce748b-6565-4020-be65-95cb727a957b.jpg";

// ── Pure backgrounds (crowd → empty) ──
const BG_TERMINAL_BUSY =
  "/assets/images/backgrounds/airport/1784761056772_edit_1976982005495.png";
const BG_QUIET_AIRPORT = "/assets/images/backgrounds/airport/quietAirport.jpg";
const BG_AIDNI_EMPTY =
  "/assets/images/backgrounds/airport/1784762906907_edit_2421285684231.png";
const BG_TERMINAL_NIGHT_SPARSE =
  "/assets/images/backgrounds/airport/1784762901982_edit_2382471721225.png";
const BG_TERMINAL_NIGHT_EMPTY =
  "/assets/images/backgrounds/airport/1784762897390_edit_2365791017690.png";
const BG_SKYBRIDGE =
  "/assets/images/backgrounds/airport/IMG_20260723_053255.jpg";

// ── Toilet sequence ──
const CG_ARRIVALS_TOILET_SIGN =
  "/assets/images/toilet scene/grok-image-580d4252-64c5-4939-b90e-0d05e1d81677.jpg";
const CG_TOILET_ENTER = "/assets/images/toilet scene/grok_1784758045212.jpg";
const CG_TOILET_PEEKER_HALL =
  "/assets/images/toilet scene/grok_1784761499350.jpg";
const CG_TOILET_MIRROR = "/assets/images/toilet scene/grok_1784761827378.jpg";
const CG_TOILET_MIRROR_CALM =
  "/assets/images/toilet scene/grok_1784761909612.jpg";
/** Stall POV + phone + peeker over door (visual only — never named in text) */
const CG_TOILET_STALL_PEEKER = "/assets/images/toilet scene/image-33.jpg";
/** Stall POV + phone, no peeker */
const CG_TOILET_STALL_PHONE =
  "/assets/images/toilet scene/IMG_20260723_062439.jpg";
/** Stall POV alone */
const CG_TOILET_STALL_EMPTY =
  "/assets/images/toilet scene/IMG_20260723_062642.jpg";

export const introScenes = {
  intro: {
    page: "intro",
    type: "narration",
    text: [
      "Prologue",
      "The private jet touched down smoothly on the foreign runway.",
    ],
    image: CG_JET_LANDING,
    next: "intro_richard_window",
  },

  intro_richard_window: {
    page: "intro",
    type: "narration",
    text: ["Richard Hayes stared out the window, jaw set."],
    image: CG_JET_CABIN_DOCS,
    next: "intro_richard_empire",
  },

  intro_richard_empire: {
    page: "intro",
    type: "narration",
    text: [
      "A self-made American millionaire, he had risen from nothing through discipline, sharp deals, and an iron will.",
    ],
    image: CG_JET_CABIN,
    next: "intro_deal",
  },

  intro_deal: {
    page: "intro",
    type: "narration",
    text: [
      "This trip was supposed to be his greatest victory — he was here to steal a massive distribution contract from his biggest competitor.",
      "The deal was worth tens of millions.",
    ],
    image: CG_JET_TARMAC,
    next: "intro_disembark",
  },

  intro_disembark: {
    page: "intro",
    type: "narration",
    text: ["Boarding stairs. Warm air. The foreign night waiting below."],
    image: CG_STAIRS_SHOES,
    next: "walking_through_airport",
  },

  walking_through_airport: {
    page: "intro",
    type: "narration",
    text: [
      "Terminal lights reflected off the polished floor as he walked through the airport.",
    ],
    image: CG_STARE_AT_RICHARD_1,
    next: "intro_terminal",
  },

  intro_terminal: {
    page: "intro",
    type: "narration",
    text: ["The terminal was crowded and heads turned."],
    image: CG_STARE_AT_RICHARD_2,
    next: "intro_richard_ignored",
  },

  intro_richard_ignored: {
    page: "intro",
    type: "narration",
    text: [
      "But their eyes did not stay on him for even a second.",
      "Glanced past him like he was nothing more than a shadow.",
    ],
    image: CG_AYESHA_BACK_SHOT,
    next: "intro_backshot",
  },

  intro_backshot: {
    page: "intro",
    type: "narration",
    text: [
      "A curvy woman in a dark blue hijab and fitted modest clothes walked confidently through the crowd.",
      "The leering followed her with every step.",
    ],
    image: CG_AYESHA_LOW_SHOT,
    next: "intro_men_stare",
  },

  intro_men_stare: {
    page: "intro",
    type: "narration",
    text: [
      "Every stare slid lower and settled on the woman at his side — hungry, shameless, openly perverted.",
    ],
    image: CG_STRANGERS_STARING_1,
    next: "intro_men_stare_chest",
  },

  intro_men_stare_chest: {
    page: "intro",
    type: "narration",
    text: [
      "Full hips. A heavy chest that filled the white shirt with every step.",
      "The kind of body that made strangers forget they were staring in public.",
    ],
    image: CG_AYESHA_CHEST_SHOT,
    next: "intro_men_stare_1",
  },

  intro_men_stare_1: {
    page: "intro",
    type: "narration",
    text: [
      "The predatory stares followed her through the terminal, and she knew it.",
    ],
    image: CG_STRANGERS_STARING_2,
    next: "intro_men_stare_face",
  },

  intro_men_stare_face: {
    page: "intro",
    type: "narration",
    text: [
      "Then her face — beauty sharp enough to cut through the noise of the terminal.",
    ],
    image: CG_AYESHA_FACE_REVEAL,
    next: "intro_men_stare_2",
  },

  intro_men_stare_2: {
    page: "intro",
    type: "narration",
    text: [
      "They looked at her the way men look at something they believe they have a right to consume.",
    ],
    image: CG_STRANGERS_STARING,
    next: "intro_who_is_she",
  },

  intro_who_is_she: {
    page: "intro",
    type: "narration",
    text: ["All these stares… who is she, you ask?", "She is..."],
    image: CG_AYESHA_FACE_REVEAL,
    next: "intro_ayesha_reveal",
  },

  intro_ayesha_reveal: {
    page: "intro",
    type: "narration",
    fadeIn: true,
    text: [
      "Ayesha Khan.",
      "Raised in American luxury — proud, arrogant, used to doors opening before she touched them.",
      "And she is Richard's one and only.",
    ],
    image: CG_AYESHA_BIGSHOT3,
    next: "intro_one_and_only",
  },

  intro_one_and_only: {
    page: "intro",
    type: "narration",
    text: [
      "His wife. His possession. His pride walking through a foreign airport like she owned the air.",
    ],
    image: CG_ONE_AND_ONLY,
    next: "intro_quiet_airport",
  },

  intro_quiet_airport: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "Ugh. Even the air in this place feels cheap. How does anyone live like this?",
    location: "Foreign Airport - Terminal",
    image: BG_QUIET_AIRPORT,
    next: "intro_ayesha_whisper",
  },

  intro_ayesha_whisper: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "Everyone is staring at me like I'm some kind of exhibit. These low-class people have no shame.",
    location: "Foreign Airport - Terminal",
    image: CG_COMPLAIN_1,
    next: "intro_richard_stay",
  },

  intro_richard_stay: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard",
    text: "I told you to stay back home, Ayesha. This isn't a vacation.",
    location: "Foreign Airport - Terminal",
    image: CG_COMPLAIN_2,
    next: "intro_ayesha_secretary",
  },

  intro_ayesha_secretary: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "And allowing that hoe secretary to go with you? Not a chance.",
    location: "Foreign Airport - Terminal",
    image: CG_COMPLAIN_3,
    next: "intro_ayesha_secretary_nights",
  },

  intro_ayesha_secretary_nights: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "Besides… I can make your nights here extra special.",
    location: "Foreign Airport - Terminal",
    image: CG_COMPLAIN_4,
    next: "flashback_title",
  },

  intro_snap_back: {
    page: "intro",
    type: "narration",
    text: [
      "Present again — the terminal hum, the exit signs, Richard at her side.",
    ],
    image: CG_COUPLE_ARM_IN_ARM,
    next: "intro_checking",
  },

  intro_checking: {
    page: "intro",
    type: "narration",
    text: [
      "Border checks dragged on longer than they should.",
      "Ayesha slipped away to the ladies' toilet to freshen up before the wait grew worse.",
    ],
    image: BG_TERMINAL_BUSY,
    next: "intro_toilet_sign",
  },

  // ── Toilet (peeker only in art — never named in dialogue) ──

  intro_toilet_sign: {
    page: "intro",
    type: "narration",
    text: ["Arrivals. Toilets. She followed the signs without looking back."],
    image: CG_ARRIVALS_TOILET_SIGN,
    next: "intro_toilet_enter",
  },

  intro_toilet_enter: {
    page: "intro",
    type: "narration",
    text: [
      "The ladies' room door stood open. She walked in like she owned the hallway.",
    ],
    image: CG_TOILET_ENTER,
    next: "intro_toilet_thought",
  },

  intro_toilet_thought: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "Of course. Even their toilets feel like a downgrade.",
    location: "Airport Toilet",
    image: CG_TOILET_MIRROR,
    next: "intro_toilet_text_one",
  },

  intro_toilet_text_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Extra checks. Wait outside. Won't be long.",
    location: "Airport Toilet",
    image: CG_TOILET_STALL_PHONE,
    next: "intro_toilet_texting",
  },

  intro_toilet_texting: {
    page: "intro",
    type: "narration",
    text: [
      "She answered with one hand still on her hijab — thumbs sharp, eyes locked on the only voice she trusted in this building.",
    ],
    image: CG_TOILET_STALL_PHONE,
    next: "intro_toilet_peeker",
  },

  intro_toilet_peeker: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha (Text)",
    portrait: AYESHA,
    text: "Hurry. I'm not wasting my night in this place.",
    location: "Airport Toilet",
    image: CG_TOILET_STALL_PEEKER,
    next: "intro_toilet_glance",
  },

  intro_toilet_glance: {
    page: "intro",
    type: "narration",
    text: [
      "Her eyes lifted from the screen — a reflex, gone as soon as it came.",
    ],
    image: CG_TOILET_PEEKER_HALL,
    next: "intro_toilet_gone",
  },

  intro_toilet_gone: {
    page: "intro",
    type: "narration",
    text: [
      "Cracked tile. A sick fluorescent buzz. Her reflection, flawless and unimpressed.",
    ],
    image: CG_TOILET_STALL_EMPTY,
    next: "intro_toilet_continue",
  },

  intro_toilet_continue: {
    page: "intro",
    type: "narration",
    text: [
      "Chin high. Phone first. Richard was the delay — everything else was noise.",
    ],
    image: CG_TOILET_MIRROR_CALM,
    next: "intro_toilet_exit",
  },

  intro_toilet_exit: {
    page: "intro",
    type: "narration",
    text: [
      "She left the sink like it had insulted her, fixed her hijab once, and walked back out to the exit.",
    ],
    image: CG_TOILET_ENTER,
    next: "intro_twenty_min",
  },

  // ── Waiting outside — isolation + this country ──

  intro_twenty_min: {
    page: "intro",
    type: "narration",
    text: [
      "Twenty minutes. Then thirty.",
      "The crowd thinned. The foreign lights kept humming, indifferent.",
    ],
    image: BG_AIDNI_EMPTY,
    next: "intro_wait_thought_one",
  },

  intro_wait_thought_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "This country is already testing me. Stares. Queues. Rules that only bend one way.",
    location: "Outside the Airport - Present",
    image: BG_SKYBRIDGE,
    next: "intro_phone_notif",
  },

  intro_phone_notif: {
    page: "intro",
    type: "narration",
    text: [
      "A buzz cut through the quiet — sharp against her palm.",
      "She reached for the phone before pride could pretend she wasn't waiting for it.",
    ],
    image: CG_AYESHA_ALONE_TERMINAL,
    next: "intro_text_two",
  },

  intro_text_two: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Taking longer than I thought. Lots of questions. Stay by the exit. I'll handle it.",
    location: "Outside the Airport - Present",
    image: BG_TERMINAL_NIGHT_SPARSE,
    next: "intro_ayesha_text_one",
  },

  intro_ayesha_text_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha (Text)",
    portrait: AYESHA,
    text: "How long? I'm tired and these men won't stop staring.",
    location: "Outside the Airport - Present",
    image: CG_AYESHA_ALONE_TERMINAL,
    next: "intro_text_three",
  },

  intro_text_three: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "I don't know. Wait for me. Don't go anywhere alone.",
    location: "Outside the Airport - Present",
    image: BG_TERMINAL_NIGHT_SPARSE,
    next: "intro_wait_thought_two",
  },

  intro_wait_thought_two: {
    page: "intro",
    type: "narration",
    text: [
      "Don't go anywhere alone.",
      "Easy words from the other side of glass and uniforms.",
      "Out here the night air was thick — jet fuel, heat, and eyes that never quite looked away.",
    ],
    image: BG_SKYBRIDGE,
    next: "intro_two_hours",
  },

  intro_two_hours: {
    page: "intro",
    type: "narration",
    text: [
      "Two hours.",
      "The airport emptied. The stares got quieter — and worse.",
    ],
    image: BG_TERMINAL_NIGHT_EMPTY,
    next: "intro_wait_thought_three",
  },

  intro_wait_thought_three: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "I hate this place. Without Richard in front of me, it feels like it could swallow me whole.",
    location: "Outside the Airport - Present",
    image: BG_AIDNI_EMPTY,
    next: "intro_text_four",
  },

  intro_text_four: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Something's wrong. They're not letting me go. Stay put, Ayesha. Don't move.",
    location: "Outside the Airport - Present",
    image: BG_TERMINAL_NIGHT_EMPTY,
    next: "intro_end_reading",
  },

  intro_end_reading: {
    page: "intro",
    type: "narration",
    text: [
      "She read it twice.",
      "Don't move. Stay put. As if the phone could hold her the way he did.",
    ],
    image: CG_AYESHA_FACE_CLOSE,
    next: "intro_end_shadows",
  },

  intro_end_shadows: {
    page: "intro",
    type: "narration",
    text: [
      "Two shadows slid over her — long, heavy, wrong.",
      "They stretched across her shoulders before she even looked up.",
    ],
    image: BG_SKYBRIDGE,
    next: "airport_officer_greeting",
  },
} satisfies Scenes;
