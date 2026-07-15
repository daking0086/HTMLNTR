import type { Scenes } from "../../types/game";

/** Flashback CGs in public/assets/images/flashback/ */
const BG_TITLE =
  "/assets/images/flashback/grok-image-d6116a17-96f5-466c-a161-75762f7cc2ca.jpg";
const BG_HIJAB_FLOOR =
  "/assets/images/flashback/grok-image-c9b2c7b0-8c05-498e-b523-a1b0b6b5cb32.jpg";
const BG_WIDE_01 =
  "/assets/images/flashback/grok-image-4734fc19-c171-4d2c-a357-463ed764d8d1.jpg";
const BG_WIDE_02 =
  "/assets/images/flashback/grok-image-31d4d9d4-57a4-4a27-bbbc-395bc5bc9f0b.jpg";
const BG_POV_CEILING =
  "/assets/images/flashback/grok-image-58109519-44e1-41b9-a169-8128016d5ed5.jpg";
const BG_POV_DESK_1 = "/assets/images/flashback/BG_POV_DESK_1.jpg";
const BG_POV_DESK_2 = "/assets/images/flashback/BG_POV_DESK_2.jpg";
const BG_HIP_REVEAL = "/assets/images/flashback/hip_reveal.jpg";
const BG_HIP_TOUCH = "/assets/images/flashback/hip_touch.jpg";
const BG_HIP_KISS = "/assets/images/flashback/hip_kiss.jpg";
const BG_NECK_KISS = "/assets/images/flashback/neck_kiss.jpg";
const BG_ASS_GRAB = "/assets/images/flashback/ass_grab.jpg";
const BG_BOOB_SUCK = "/assets/images/flashback/boob_suck.jpg";
const BG_CLOSE_LIPS = "/assets/images/flashback/close_lips.jpg";
const BG_CLOSE_LIPS_TEASE =
  "/assets/images/flashback/close_lips_teasing_smile.jpg";
const BG_DEEP_KISS = "/assets/images/flashback/deep_kiss.jpg";
const BG_CLOSE_KISS =
  "/assets/images/flashback/grok-image-dee3d055-8f7c-4ed3-b8b1-a42d00d108bc.jpg";
const BG_BLACK =
  "/assets/images/flashback/grok-image-0fe105b2-3c8c-4265-9959-9ffd774dac1d.jpg";
const BG_FINAL_KISS = "/assets/images/flashback/final_kiss.jpg";
const BG_FINAL_REST = "/assets/images/flashback/final_kiss_resting.jpg";

export const flashbackScenes = {
  flashback_title: {
    page: "flashback",
    type: "narration",
    text: ["Flashback — Previous Night (Hotel Suite)"],
    image: BG_TITLE,
    next: "flashback_establishing",
  },

  flashback_establishing: {
    page: "flashback",
    type: "narration",
    text: [
      "Silk on the marble floor. Everything else in the suite belonged to the heat behind it.",
    ],
    image: BG_HIJAB_FLOOR,
    next: "flashback_wide_01",
  },

  flashback_wide_01: {
    page: "flashback",
    type: "narration",
    text: [
      "She moved above him without hurry — hijab loose, chin lifted, every motion deliberate.",
      "Richard lay beneath her like a man who had stopped pretending he was in charge.",
    ],
    image: BG_WIDE_01,
    next: "flashback_wide_02",
  },

  flashback_wide_02: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Look at me. Not the room. Me.",
    location: "Hotel Suite - Flashback",
    image: BG_WIDE_02,
    next: "flashback_pov_ceiling",
  },

  flashback_pov_ceiling: {
    page: "flashback",
    type: "narration",
    text: [
      "From the ceiling fan the bed was a blur of limbs and white sheets.",
      "She had him pinned in place with nothing but her weight and her will.",
    ],
    image: BG_POV_CEILING,
    next: "flashback_pov_ceiling_whisper",
  },

  flashback_pov_ceiling_whisper: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "You're mine tonight. Don't forget that.",
    location: "Hotel Suite - Flashback",
    image: BG_POV_CEILING,
    next: "flashback_pov_desk",
  },

  flashback_pov_desk: {
    page: "flashback",
    type: "narration",
    text: [
      "In the desk mirror: gold light, her grip on his jaw, the arrogant curve of her smile.",
    ],
    image: BG_POV_DESK_1,
    next: "flashback_pov_desk_richard",
  },

  flashback_pov_desk_richard: {
    page: "flashback",
    type: "dialogue",
    speaker: "Richard",
    text: "Ayesha—",
    location: "Hotel Suite - Flashback",
    image: BG_POV_DESK_1,
    next: "flashback_pov_desk_ayesha",
  },

  flashback_pov_desk_ayesha: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Shhh..not yet big boy",
    location: "Hotel Suite - Flashback",
    image: BG_POV_DESK_2,
    next: "flashback_hip_reveal",
  },

  flashback_hip_reveal: {
    page: "flashback",
    type: "narration",
    text: [
      "Unable to contain himself, he unbuttons the lower half of her top and exposes her hip to his lips.",
    ],
    image: BG_HIP_REVEAL,
    next: "flashback_hip_touch",
  },

  flashback_hip_touch: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Hnngh..H..Hey..",
    location: "Hotel Suite - Flashback",
    image: BG_HIP_TOUCH,
    next: "flashback_hip_kiss",
  },


  flashback_hip_kiss: {
    page: "flashback",
    type: "narration",
    text: [
      "She let the silence break only on her terms — lifting the edge of her top, offering skin instead of words.",
      "Richard kissed her hip like a man starved. She watched him worship it.",
    ],
    image: BG_HIP_KISS,
    next: "flashback_neck_kiss",
  },

  flashback_neck_kiss: {
    page: "flashback",
    type: "narration",
    text: [
      "His mouth climbed higher. Her head fell back, gold hoops catching the city light.",
      "His fingers threaded into her hair — hungry, clumsy, desperate to keep her close.",
    ],
    image: BG_NECK_KISS,
    next: "flashback_boob_suck",
  },

  flashback_boob_suck: {
    page: "flashback",
    type: "narration",
    text: [
      "He opened her top and took her breast into his mouth without asking.",
      "Ayesha exhaled through her teeth — pleased, not surrendered.",
    ],
    image: BG_BOOB_SUCK,
    next: "flashback_ass_grab",
  },

  flashback_ass_grab: {
    page: "flashback",
    type: "narration",
    text: [
      "Politeness left him. Both hands found her — gripping hard enough to bruise, pulling her down into his lap.",
      "She did not stop him. She liked feeling how badly he wanted her.",
    ],
    image: BG_ASS_GRAB,
    next: "flashback_close_kiss",
  },

  flashback_close_kiss: {
    page: "flashback",
    type: "narration",
    text: [
      "She brought her mouth close enough that he felt her breath — fingers digging in, hips rolling slow.",
      "He leaned in. She never let their lips meet.",
    ],
    image: BG_CLOSE_LIPS,
    next: "flashback_close_tease_narr",
  },

  flashback_close_tease_narr: {
    page: "flashback",
    type: "narration",
    text: [
      "Her lips hovered a breath from his — close enough to ache — then she drew back just enough to watch him want it.",
      "A teasing smile. Cruel. Satisfied.",
    ],
    image: BG_CLOSE_LIPS_TEASE,
    next: "flashback_close_tease",
  },

  flashback_close_tease: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Two weeks without this… or her in your cabin. You tell me which one you chose.",
    location: "Hotel Suite - Flashback",
    image: BG_CLOSE_LIPS_TEASE,
    next: "flashback_close_tease_richard",
  },

  flashback_close_tease_richard: {
    page: "flashback",
    type: "dialogue",
    speaker: "Richard",
    text: "She's not—",
    location: "Hotel Suite - Flashback",
    image: BG_CLOSE_LIPS,
    next: "flashback_close_tease_ayesha",
  },

  flashback_close_tease_ayesha: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Shhhh...I don't want her name in your mouth tonight.",
    location: "Hotel Suite - Flashback",
    image: BG_DEEP_KISS,
    next: "flashback_close_whisper",
  },

  flashback_close_whisper: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Those people downstairs could never have what I have. I'm the only one who deserves to be here with you.",
    location: "Hotel Suite - Flashback",
    image: BG_CLOSE_KISS,
    next: "flashback_black",
  },

  flashback_black: {
    page: "flashback",
    type: "narration",
    text: ["Darkness.", "Only breathing.", "Then stillness."],
    image: BG_BLACK,
    next: "flashback_final_kiss",
  },

  flashback_final_kiss: {
    page: "flashback",
    type: "narration",
    text: [
      "Then, softer — a kiss that was not a weapon anymore.",
      "Slower. Like a promise she intended to hold him to.",
    ],
    image: BG_FINAL_KISS,
    next: "flashback_snuggle",
  },

  flashback_snuggle: {
    page: "flashback",
    type: "narration",
    text: [
      "The suite went quiet. She pulled the covers over them both, still possessive even in rest.",
    ],
    image: BG_FINAL_REST,
    next: "flashback_snuggle_ayesha",
  },

  flashback_snuggle_ayesha: {
    page: "flashback",
    type: "dialogue",
    speaker: "Ayesha",
    text: "Don't you dare let her take my place tomorrow...\nYou belong to me...",
    location: "Hotel Suite - Flashback",
    image: BG_FINAL_REST,
    next: "flashback_snuggle_end",
  },

  flashback_snuggle_end: {
    page: "flashback",
    type: "narration",
    text: ["She believed him. She always did — when it suited her."],
    image: BG_FINAL_REST,
    next: "intro_snap_back",
  },
} satisfies Scenes;
