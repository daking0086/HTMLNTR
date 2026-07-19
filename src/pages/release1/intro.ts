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
    next: "intro_toilet_thought",
  },

  // Toilet — already inside (peeker only in BG art, never named)

  intro_toilet_thought: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "Of course. Even their toilets feel like a downgrade.",
    location: "Airport Toilet",
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_text_one",
  },

  intro_toilet_text_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Extra checks. Wait outside. Won't be long.",
    location: "Airport Toilet",
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_texting",
  },

  intro_toilet_texting: {
    page: "intro",
    type: "narration",
    text: [
      "She answered with one hand still on her hijab — thumbs sharp, eyes locked on the only voice she trusted in this building.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_peeker",
  },

  intro_toilet_peeker: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha (Text)",
    portrait: AYESHA,
    text: "Hurry. I'm not wasting my night in this place.",
    location: "Airport Toilet",
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_glance",
  },

  intro_toilet_glance: {
    page: "intro",
    type: "narration",
    text: ["Her eyes lifted from the screen — a reflex, gone as soon as it came."],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_gone",
  },

  intro_toilet_gone: {
    page: "intro",
    type: "narration",
    text: [
      "Cracked tile. A sick fluorescent buzz. Her reflection, flawless and unimpressed.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_continue",
  },

  intro_toilet_continue: {
    page: "intro",
    type: "narration",
    text: [
      "Chin high. Phone first. Richard was the delay — everything else was noise.",
    ],
    ...(BG_TOILET ? { image: BG_TOILET } : {}),
    next: "intro_toilet_exit",
  },

  intro_toilet_exit: {
    page: "intro",
    type: "narration",
    text: [
      "She left the sink like it had insulted her, fixed her hijab once, and walked back out to the exit.",
    ],
    image: BG_AIRPORT,
    next: "intro_twenty_min",
  },

  // Waiting outside — isolation + this country

  intro_twenty_min: {
    page: "intro",
    type: "narration",
    text: [
      "Twenty minutes. Then thirty.",
      "The crowd thinned. The foreign lights kept humming, indifferent.",
    ],
    image: BG_AIRPORT,
    next: "intro_wait_thought_one",
  },

  intro_wait_thought_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "This country is already testing me. Stares. Queues. Rules that only bend one way.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_phone_notif",
  },

  /**
   * ART — generate: ayeshaPhoneNotif.png
   * Outside airport exit, night. Ayesha reaching for phone; screen glow on face/hand;
   * notif banner (Richard/message icon). Emptier terminal, optional distant stares.
   * public/assets/images/backgrounds/airport/ayeshaPhoneNotif.png
   */
  intro_phone_notif: {
    page: "intro",
    type: "narration",
    text: [
      "A buzz cut through the quiet — sharp against her palm.",
      "She reached for the phone before pride could pretend she wasn't waiting for it.",
    ],
    image: BG_AIRPORT,
    next: "intro_text_two",
  },

  intro_text_two: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Taking longer than I thought. Lots of questions. Stay by the exit. I'll handle it.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_ayesha_text_one",
  },

  intro_ayesha_text_one: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha (Text)",
    portrait: AYESHA,
    text: "How long? I'm tired and these men won't stop staring.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_text_three",
  },

  intro_text_three: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "I don't know. Wait for me. Don't go anywhere alone.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
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
    image: BG_AIRPORT,
    next: "intro_two_hours",
  },

  intro_two_hours: {
    page: "intro",
    type: "narration",
    text: [
      "Two hours.",
      "The airport emptied. The stares got quieter — and worse.",
    ],
    image: BG_AIRPORT,
    next: "intro_wait_thought_three",
  },

  intro_wait_thought_three: {
    page: "intro",
    type: "dialogue",
    speaker: "Ayesha",
    portrait: AYESHA,
    text: "I hate this place. Without Richard in front of me, it feels like it could swallow me whole.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_text_four",
  },

  intro_text_four: {
    page: "intro",
    type: "dialogue",
    speaker: "Richard (Text)",
    text: "Something's wrong. They're not letting me go. Stay put, Ayesha. Don't move.",
    location: "Outside the Airport - Present",
    image: BG_AIRPORT,
    next: "intro_end_reading",
  },

  /**
   * ART — intro_end_reading / ayeshaReadMessageTop.png
   * Close-up TOP-DOWN shot of Ayesha reading Richard's last message.
   * Phone screen bright on her face/hands; hijab and shoulders in frame;
   * night airport exit floor beneath. She's focused on the text, alone.
   * public/assets/images/backgrounds/airport/ayeshaReadMessageTop.png
   */
  intro_end_reading: {
    page: "intro",
    type: "narration",
    text: [
      "She read it twice.",
      "Don't move. Stay put. As if the phone could hold her the way he did.",
    ],
    image: BG_AIRPORT,
    next: "intro_end_shadows",
  },

  /**
   * ART — intro_end_shadows / ayeshaTwoShadows.png
   * Same top-down (or slightly wider) framing: Ayesha still on her phone.
   * Two large male shadows stretch across her back/shoulders from behind —
   * officers closing in, faces not needed yet. Threat without words.
   * Leads into airport check / body search.
   * public/assets/images/backgrounds/airport/ayeshaTwoShadows.png
   */
  intro_end_shadows: {
    page: "intro",
    type: "narration",
    text: [
      "Two shadows slid over her — long, heavy, wrong.",
      "They stretched across her shoulders before she even looked up.",
    ],
    image: BG_AIRPORT,
    next: "airport_officer_greeting",
  },
} satisfies Scenes;
