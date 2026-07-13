import type { Scenes } from "../../types/game";

const AYESHA = "/assets/images/ayesha/ayesha_profile.png";
const BG_AIRPORT = "/assets/images/backgrounds/airport/airport.png";
const BG_AIRPORT_CROWD = "/assets/images/backgrounds/airport/airportPeople.png";
/** Add when rendered: '/assets/images/backgrounds/airport/toilet.png' */
const BG_TOILET = "";

export const introScenes = {
  intro: {
    page: "intro",
    type: "narration",
    text: [
      "Prologue",
      "The private jet touched down smoothly on the foreign runway.",
    ],
    next: "intro_richard_window",
  },

  intro_richard_window: {
    page: "intro",
    type: "narration",
    text: ["Richard Hayes stared out the window, jaw set."],
    next: "intro_richard_empire",
  },

  intro_richard_empire: {
    page: "intro",
    type: "narration",
    text: [
      "A self-made American millionaire, he had risen from nothing through discipline, sharp deals, and an iron will.",
    ],
    next: "intro_deal",
  },

  intro_deal: {
    page: "intro",
    type: "narration",
    text: [
      "This trip was supposed to be his greatest victory — he was here to steal a massive distribution contract from his biggest competitor.",
      "The deal was worth tens of millions.",
    ],
    next: "walking_through_airport",
  },

  walking_through_airport: {
    page: "intro",
    type: "narration",
    text: [
      "Terminal lights reflected off the polished floor as he walked through the airport",
    ],
    next: "intro_terminal",
  },

  intro_terminal: {
    page: "intro",
    type: "narration",
    text: ["the terminal was crowded and heads turned."],
    image: BG_AIRPORT_CROWD,
    next: "intro_richard_ignored",
  },

  intro_richard_ignored: {
    page: "intro",
    type: "narration",
    text: [
      "But their eyes did not stay on him for even a second.",
      "Glanced past him like he was nothing more than a shadow.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_backshot",
  },

  intro_backshot: {
    page: "intro",
    type: "narration",
    text: [
      "A curvy woman in a dark blue hijab and fitted modest clothes walked confidently through the crowd.",
      "The leering followed her with every step.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_men_stare",
  },

  intro_men_stare: {
    page: "intro",
    type: "narration",
    text: [
      "Every stare slid lower and settled on the woman at his side — hungry, shameless, openly perverted.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_men_stare_2",
  },

  intro_men_stare_2: {
    page: "intro",
    type: "narration",
    text: [
      "They looked at her the way men look at something they believe they have a right to consume.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_reveal",
  },

  intro_reveal: {
    page: "intro",
    type: "narration",
    text: [
      "The woman at his side was not just any woman.",
      "She is his one and only.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_reveal_2",
  },

  intro_reveal_2: {
    page: "intro",
    type: "narration",
    text: [" Ayesha Khan."],
    image: BG_AIRPORT_CROWD,
    next: "intro_ayesha_proud",
  },

  intro_ayesha_proud: {
    page: "intro",
    type: "narration",
    text: [
      "Raised in American luxury, she was proud and arrogant.",
      "She looked down on most people — especially here.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_ayesha_clings",
  },

  intro_ayesha_clings: {
    page: "intro",
    type: "narration",
    text: [
      "Ayesha hooked her arm through Richard's and drew herself closer — chin high, spine straight.",
      "Her face stayed pure arrogance, as if the stares were beneath her notice.",
      "Only the tight grip on his arm betrayed how much she needed him between her and them.",
    ],
    image: BG_AIRPORT_CROWD,
    next: "intro_ayesha_whisper",
  },

  intro_ayesha_whisper: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "Everyone is staring at me like I'm some kind of exhibit. These low-class people have no shame.",
    location: "Foreign Airport - Terminal",
    image: BG_AIRPORT_CROWD,
    next: "intro_richard_stay",
  },

  intro_richard_stay: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard",
    text: "I told you to stay back home, Ayesha. This isn't a vacation.",
    location: "Foreign Airport - Terminal",
    image: BG_AIRPORT_CROWD,
    next: "intro_ayesha_secretary",
  },

  intro_ayesha_secretary: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "And allowing that hoe secretary to go with you? Not a chance. Besides… I can make your nights here extra special.",
    location: "Foreign Airport - Terminal",
    image: BG_AIRPORT_CROWD,
    next: "flashback_title",
  },

  intro_snap_back: {
    page: "intro",
    type: "narration",
    text: [
      "Present again — the terminal hum, the exit signs, Richard at her side.",
    ],
    image: BG_AIRPORT,
    next: "intro_checking",
  },

  intro_checking: {
    page: "intro",
    type: "narration",
    text: [
      "Border checks dragged on longer than they should.",
      "Ayesha slipped away to the ladies' toilet to freshen up before the wait grew worse.",
    ],
    image: BG_AIRPORT,
    next: "intro_toilet_enter",
  },

  // Toilet — short scene

  intro_toilet_enter: {
    page: "intro",
    type: "narration",
    text: [
      "The toilet was cramped, fluorescent, and stale.",
      "She stood at the mirror adjusting her hijab. Her phone lit up.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_text_one",
  },

  intro_toilet_text_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "They pulled me aside for some extra checks. Wait for me outside. Shouldn't take long.",
    location: "Airport Toilet",
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_texting",
  },

  intro_toilet_texting: {
    page: "intro",
    type: "narration",
    text: [
      "She typed back with one hand, eyes fixed on the screen — annoyed, impatient, completely absorbed.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_peeker",
  },

  intro_toilet_peeker: {
    page: "intro",
    type: "narration",
    text: [
      "Behind her, in the gap of the stall door, a shadow shifted.",
      "A man was peeking — just a sliver of face and filthy grin in the mirror's edge.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_glance",
  },

  intro_toilet_glance: {
    page: "intro",
    type: "narration",
    text: ["Ayesha's eyes snapped up from the phone."],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_gone",
  },

  intro_toilet_gone: {
    page: "intro",
    type: "narration",
    text: [
      "Nothing.",
      "The gap was empty — only cracked tile and the buzz of a dead fluorescent light.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_continue",
  },

  intro_toilet_continue: {
    page: "intro",
    type: "narration",
    text: [
      "She told herself she imagined it. Chin lifted, she went back to the screen and kept typing.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_exit",
  },

  intro_toilet_exit: {
    page: "intro",
    type: "narration",
    text: [
      "She washed her hands, straightened her hijab, and stepped back out to wait near the exit.",
    ],
    image: BG_AIRPORT,
    next: "intro_twenty_min",
  },

  intro_twenty_min: {
    page: "intro",
    type: "narration",
    text: [
      "Twenty minutes passed. Then thirty.",
      "The airport grew quieter.",
      "Another message came in.",
    ],
    image: BG_AIRPORT,
    next: "intro_text_two",
  },

  intro_text_two: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Baby, this is taking longer than expected. They're asking a lot of questions. Just stay near the exit. I'll sort this out soon.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_ayesha_text_one",
  },

  intro_ayesha_text_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha (Text)",
    portrait: AYESHA,
    text: "How much longer? I'm already tired and these people keep staring at me.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_text_three",
  },

  intro_text_three: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "I don't know. Just wait for me. Don't go anywhere alone.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_two_hours",
  },

  intro_two_hours: {
    page: "intro",
    type: "narration",
    text: ["Two hours passed."],
    image: BG_AIRPORT,
    next: "intro_text_four",
  },

  intro_text_four: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Something's wrong. They're not letting me go. Stay right there, Ayesha. I'm handling it. Don't move.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_end",
  },

  intro_end: {
    page: "intro",
    type: "narration",
    text: [
      "Night had settled over the airport. Somewhere inside, they still had her husband.",
      "Airport Scene.",
    ],
    image: BG_AIRPORT,
    next: "airport_richard_office",
  },
} satisfies Scenes;
