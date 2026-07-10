/**
 * Release 2 — Taxi Scene
 * Not loaded in Release 1. Re-enable in release1/index.ts when shipping Release 2.
 */
import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

export const taxiScenes = {
  taxi_intro: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Waiting Outside — The Long, Uncomfortable Night',
      'The young airport worker escorts Ayesha to a quieter side exit. Half past midnight. The terminal behind her is nearly empty.',
    ],
    next: 'taxi_intro_rain',
  },

  taxi_intro_rain: {
    page: 'taxi',
    type: 'narration',
    text: ['Light rain. Streetlights stretch long shadows across the curb.'],
    next: 'taxi_intro_alone',
  },

  taxi_intro_alone: {
    page: 'taxi',
    type: 'narration',
    text: [
      'He leaves her with the bags once they are outside. Ayesha wraps her arms around herself and scans the dark street.',
    ],
    next: 'taxi_muttering',
  },

  taxi_muttering: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "This place is so sketchy at night…",
    location: 'Airport Side Exit - Rain',
    next: 'taxi_first_message',
  },

  taxi_first_message: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard, where's the ride? I'm outside now.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_first_message_two',
  },

  taxi_first_message_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "It's really late. I don't like the way some of these people are looking at me.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_richard_reply_one',
  },

  taxi_richard_reply_one: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm on it. Driver says twenty minutes max. Stay on the line with me.",
    location: 'Empty Office - Detention',
    next: 'taxi_stares',
  },

  taxi_stares: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Rickshaw drivers and beggars linger by the curb. A few workers smoke and watch her openly.',
    ],
    next: 'taxi_stares_two',
  },

  taxi_stares_two: {
    page: 'taxi',
    type: 'narration',
    text: ['Hungry glances slide over her — slow, shameless, impossible to ignore.'],
    next: 'taxi_second_message',
  },

  taxi_second_message: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Creepy rickshaw drivers and beggars are staring at me like I'm a meal.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_second_message_two',
  },

  taxi_second_message_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "One old beggar won't take his eyes off my chest. Where is this damn driver?",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_second_message_three',
  },

  taxi_second_message_three: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I shouldn't have to wait around people like this.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_richard_reply_two',
  },

  taxi_richard_reply_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I know. Keep your back to them. Talk to me.",
    location: 'Empty Office - Detention',
    next: 'taxi_wait',
  },

  taxi_wait: {
    page: 'taxi',
    type: 'narration',
    text: ['Twenty minutes crawl by. The stares grow bolder.'],
    next: 'taxi_beggar_mutters',
  },

  taxi_beggar_mutters: {
    page: 'taxi',
    type: 'narration',
    text: [
      'A beggar mutters something in the local language and grins. A rickshaw driver licks his lips while staring at her hips.',
    ],
    next: 'taxi_third_message',
  },

  taxi_third_message: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard, they're still staring. One of them looked at me like he wanted to rip my clothes off.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_third_message_two',
  },

  taxi_third_message_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm not safe here. Get me out of this nightmare.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_flat_tire',
  },

  taxi_flat_tire: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Driver had a flat tire. He's sending a friend — should be there any minute.",
    location: 'Empty Office - Detention',
    next: 'taxi_frustrated_read',
  },

  taxi_frustrated_read: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Flat tire?! Now some random friend is coming?",
    location: 'Airport Side Exit - Rain',
    next: 'taxi_frustrated_read_two',
  },

  taxi_frustrated_read_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm alone out here while beggars stare and you're locked in that cell. I grew up with drivers who actually show up.",
    location: 'Airport Side Exit - Rain',
    next: 'taxi_bolder',
  },

  taxi_bolder: {
    page: 'taxi',
    type: 'narration',
    text: ['A beggar takes a few steps closer. His friend grabs his arm and pulls him back.'],
    next: 'taxi_voice_crack',
  },

  taxi_voice_crack: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "They're getting bolder. Tell me this friend is close.",
    location: 'Airport Side Exit - Voice Note',
    next: 'taxi_voice_crack_two',
  },

  taxi_voice_crack_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I don't know how much longer I can pretend I'm not scared.",
    location: 'Airport Side Exit - Voice Note',
    next: 'taxi_richard_reply_three',
  },

  taxi_richard_reply_three: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Headlights just turned in. That's them. Stay with me.",
    location: 'Empty Office - Detention',
    next: 'taxi_substitute_arrives',
  },

  taxi_substitute_arrives: {
    page: 'taxi',
    type: 'narration',
    text: [
      'An old battered taxi pulls up. A thick-set man with a greasy beard steps out and smiles at her.',
    ],
    next: 'taxi_substitute_stare',
  },

  taxi_substitute_stare: {
    page: 'taxi',
    type: 'narration',
    text: ['His eyes roam over her before he says a word.'],
    next: 'taxi_driver_greeting',
  },

  taxi_driver_greeting: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Older Driver',
    text: "Madam? I am friend of driver. Sorry for delay. I take you to hotel. Very safe.",
    location: 'Airport Side Exit - Taxi',
    next: 'taxi_disgust',
  },

  taxi_disgust: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… this is the friend? He looks worse than I imagined.",
    location: 'Airport Side Exit - Whisper',
    next: 'taxi_disgust_two',
  },

  taxi_disgust_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "He's already staring. I don't have a choice now.",
    location: 'Airport Side Exit - Whisper',
    next: 'taxi_loading',
  },

  taxi_loading: {
    page: 'taxi',
    type: 'narration',
    text: [
      'He loads her bags slowly, glancing at her chest and hips between each piece.',
    ],
    next: 'taxi_getting_in',
  },

  taxi_getting_in: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm getting in. Stay on the phone the entire ride.",
    location: 'Airport Side Exit - Taxi',
    next: 'taxi_getting_in_two',
  },

  taxi_getting_in_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I don't trust him. Please don't leave me alone, even for a second.",
    location: 'Airport Side Exit - Taxi',
    next: 'taxi_enter_car',
  },

  taxi_enter_car: {
    page: 'taxi',
    type: 'narration',
    text: ['She slides into the back seat. Old leather creaks under her.'],
    next: 'taxi_enter_car_two',
  },

  taxi_enter_car_two: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The driver shuts the door and takes the wheel, already finding her in the rearview mirror.',
    ],
    next: 'taxi_moving',
  },

  taxi_moving: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "We're moving… God, this car smells awful.",
    location: 'Taxi - Back Seat',
    next: 'taxi_moving_two',
  },

  taxi_moving_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Talk to me, Richard. Please. I just want to feel safe again.',
    location: 'Taxi - Back Seat',
    next: 'taxi_richard_ride',
  },

  taxi_richard_ride: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm here. I'm not hanging up.",
    location: 'Empty Office - Detention',
    next: 'taxi_ride_start',
  },

  taxi_ride_start: {
    page: 'taxi',
    type: 'narration',
    text: ['The Creepy Taxi Ride'],
    next: 'taxi_ride_start_two',
  },

  taxi_ride_start_two: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Rain streaks the windows. Ayesha sits stiff in the back seat, phone pressed to her ear.',
    ],
    next: 'taxi_driver_care',
  },

  taxi_driver_care: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Older Driver',
    text: "Long night, madam? Don't worry… I take good care of you.",
    location: 'Taxi - Rainy Streets',
    next: 'taxi_mirror_stare',
  },

  taxi_mirror_stare: {
    page: 'taxi',
    type: 'narration',
    text: [
      'His eyes linger in the rearview mirror, dragging over her chest before returning to the road.',
    ],
    next: 'taxi_mirror_disgust',
  },

  taxi_mirror_disgust: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… he's checking me out in the mirror like I'm meat.",
    location: 'Taxi - Back Seat',
    next: 'taxi_mirror_disgust_two',
  },

  taxi_mirror_disgust_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: 'Gross.',
    location: 'Taxi - Back Seat',
    next: 'taxi_city_view',
  },

  taxi_city_view: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She turns to the window. Dirty alleys, broken sidewalks, and garbage pass in the dark.',
    ],
    next: 'taxi_city_view_two',
  },

  taxi_city_view_two: {
    page: 'taxi',
    type: 'narration',
    text: ['Nothing like the clean cities she grew up in back home.'],
    next: 'taxi_city_voice',
  },

  taxi_city_voice: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Everything looks broken. I can't believe I'm actually here.",
    location: 'Taxi - Back Seat',
    next: 'taxi_burp',
  },

  taxi_burp: {
    page: 'taxi',
    type: 'narration',
    text: ['The driver lets out a loud, wet burp. Alcohol and cheap tobacco fill the car.'],
    next: 'taxi_burp_two',
  },

  taxi_burp_two: {
    page: 'taxi',
    type: 'narration',
    text: ['Bloodshot eyes find her again in the mirror — no shame at all.'],
    next: 'taxi_burp_disgust',
  },

  taxi_burp_disgust: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "He smells like alcohol. Zero standards. He's disgusting, Richard.",
    location: 'Taxi - Back Seat',
    next: 'taxi_ugly_outside',
  },

  taxi_ugly_outside: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She presses against the door. Stray dogs and shady men slide past the glass.',
    ],
    next: 'taxi_raised_better',
  },

  taxi_raised_better: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm not supposed to be in a place like this. I was raised better than this.",
    location: 'Taxi - Back Seat',
    next: 'taxi_red_light',
  },

  taxi_red_light: {
    page: 'taxi',
    type: 'narration',
    text: ['The taxi stops at a red light on an empty street. Silence turns heavy.'],
    next: 'taxi_red_light_two',
  },

  taxi_red_light_two: {
    page: 'taxi',
    type: 'narration',
    text: [
      'In the mirror he stares openly — chest, hips, thighs — then licks his lips and shifts in his seat.',
    ],
    next: 'taxi_red_light_fear',
  },

  taxi_red_light_fear: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… he's staring. Really staring. I can see him in the mirror.",
    location: 'Taxi - Red Light',
    next: 'taxi_red_light_fear_two',
  },

  taxi_red_light_fear_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "He looks drunk. I feel so exposed.",
    location: 'Taxi - Red Light',
    next: 'taxi_richard_red_light',
  },

  taxi_richard_red_light: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Talk to me. Look at the phone, not him.",
    location: 'Empty Office - Detention',
    next: 'taxi_green_light',
  },

  taxi_green_light: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The light turns green. He drives, but his eyes flick to the mirror every few seconds.',
    ],
    next: 'taxi_journey_drags',
  },

  taxi_journey_drags: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The ride drags on — his stares, the filthy streets, her voice cracking on the phone.',
    ],
    next: 'taxi_hotel_sight',
  },

  taxi_hotel_sight: {
    page: 'taxi',
    type: 'narration',
    text: ['Bright hotel lights appear ahead. The taxi rolls up to a grand entrance.'],
    next: 'taxi_hotel_sight_two',
  },

  taxi_hotel_sight_two: {
    page: 'taxi',
    type: 'narration',
    text: ['Luxury after a filthy ride. The contrast is almost cruel.'],
    next: 'taxi_hotel_relief',
  },

  taxi_hotel_relief: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "We're here… hotel looks okay. I'm getting out now.",
    location: 'Hotel Entrance - Taxi',
    next: 'taxi_hotel_relief_two',
  },

  taxi_hotel_relief_two: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "That ride was horrible. Stay on the phone until I'm in the room.",
    location: 'Hotel Entrance - Taxi',
    next: 'taxi_pay_exit',
  },

  taxi_pay_exit: {
    page: 'taxi',
    type: 'narration',
    text: ['She pays without meeting his eyes and steps out with her bags.'],
    next: 'taxi_pay_exit_two',
  },

  taxi_pay_exit_two: {
    page: 'taxi',
    type: 'narration',
    text: ['The driver watches her walk away with hungry eyes.'],
    next: 'hotel_arrival',
  },
} satisfies Scenes;