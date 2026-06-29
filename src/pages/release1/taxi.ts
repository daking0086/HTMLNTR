import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

export const taxiScenes = {
  taxi_intro: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Waiting Outside — The Long, Uncomfortable Night',
      'The young airport worker escorts Ayesha out of the main terminal to a quieter side exit. It is already half an hour past midnight. The airport feels strangely empty — much fewer people than usual. A light rain is falling, and the streetlights cast long, eerie shadows.',
      'Ayesha stands near the curb with her luggage, arms wrapped around herself. She glances around nervously.',
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
    text: "Richard, where's the ride? I'm outside now. It's really late and I don't like the way some of these people are looking at me.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_richard_reply_one',
  },

  taxi_richard_reply_one: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm on it. I already contacted the driver. He says he's on the way, should be 20 minutes max. Just stay safe, baby.",
    location: 'Empty Office - Detention',
    next: 'taxi_stares',
  },

  taxi_stares: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Ayesha sighs and looks around again. A small group of rickshaw drivers and a few beggars linger nearby, waiting for late-night passengers. A couple of casual workers smoke and chat. Almost all of them keep stealing glances at her — hungry, lustful stares that make her skin crawl.',
    ],
    next: 'taxi_second_message',
  },

  taxi_second_message: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "There are these creepy rickshaw drivers and beggars staring at me like I'm some kind of meal. One old beggar hasn't taken his eyes off my chest. This is disgusting. I feel so uncomfortable. Where is this damn driver? I shouldn't have to wait around these low-class people.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_wait',
  },

  taxi_wait: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Twenty minutes drag by slowly. The stares get bolder. One of the beggars mutters something in the local language while grinning. A rickshaw driver licks his lips openly while looking at her hips.',
    ],
    next: 'taxi_third_message',
  },

  taxi_third_message: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard, they're still staring. This one guy just looked at my body like he wants to rip my clothes off. I hate this. I'm not safe here. Hurry up and get me out of this nightmare.",
    location: 'Airport Side Exit - Texting',
    next: 'taxi_flat_tire',
  },

  taxi_flat_tire: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Richard',
    text: "The driver just messaged me. He had a flat tire and can't make it. He's really sorry. He's sending his friend instead — he should be there any minute now. Just hold on a little longer.",
    location: 'Empty Office - Detention',
    next: 'taxi_frustrated_read',
  },

  taxi_frustrated_read: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Flat tire?! Are you kidding me? Now some random friend is coming? This is ridiculous. I'm standing here alone getting eye-fucked by beggars and dirty rickshaw drivers while you're stuck in that cell. I grew up with drivers who actually show up on time, not this kind of bullshit.",
    location: 'Airport Side Exit - Rain',
    next: 'taxi_bolder',
  },

  taxi_bolder: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She keeps shifting her weight, clearly uncomfortable. The group of men continues staring with open lust. One beggar even takes a few steps closer before his friend pulls him back.',
    ],
    next: 'taxi_voice_crack',
  },

  taxi_voice_crack: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "They're getting bolder. I feel so exposed. Please tell me this friend is coming soon. I don't know how much longer I can stand here pretending I'm not scared.",
    location: 'Airport Side Exit - Voice Note',
    next: 'taxi_substitute_arrives',
  },

  taxi_substitute_arrives: {
    page: 'taxi',
    type: 'narration',
    text: [
      'An old battered taxi pulls up. The driver — the same older, thick-set man with the greasy beard — steps out. He looks at Ayesha and smiles widely, his eyes immediately roaming over her body.',
    ],
    next: 'taxi_driver_greeting',
  },

  taxi_driver_greeting: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Older Driver',
    text: "Madam? I am friend of driver. He sent me. Sorry for delay. I take you to hotel. Very safe.",
    location: 'Airport Side Exit - Taxi',
    next: 'taxi_disgust',
  },

  taxi_disgust: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… this is the friend? He looks even worse. Old, dirty… and he's already staring at me the same way the others were. But I guess I have no choice now.",
    location: 'Airport Side Exit - Whisper',
    next: 'taxi_loading',
  },

  taxi_loading: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The driver starts loading her bags, taking his time and stealing glances at her chest and hips the whole time.',
    ],
    next: 'taxi_getting_in',
  },

  taxi_getting_in: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Okay… I'm getting in. Just stay on the phone with me the entire ride. I don't trust this guy at all. After everything that's happened tonight, I feel so unsafe. Please don't leave me alone, even for a second.",
    location: 'Airport Side Exit - Taxi',
    next: 'taxi_enter_car',
  },

  taxi_enter_car: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She slides into the back seat. The old leather creaks under her. The driver closes the door and gets behind the wheel, already watching her in the rearview mirror.',
    ],
    next: 'taxi_moving',
  },

  taxi_moving: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "We're moving… God, this car smells awful. Everything about this night is wrong. I just want to get to the hotel and feel safe again. Talk to me, Richard. Please.",
    location: 'Taxi - Back Seat',
    next: 'taxi_ride_start',
  },

  taxi_ride_start: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The Creepy Taxi Ride',
      'The old battered taxi pulls away from the airport into the dark, rainy night. Ayesha sits stiffly in the back seat, phone clutched tightly to her ear. The young worker\'s kindness already feels like a distant memory.',
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
      'His eyes linger too long in the rearview mirror, slowly dragging over her chest and lap before returning to the road. Ayesha feels a chill run down her spine.',
    ],
    next: 'taxi_mirror_disgust',
  },

  taxi_mirror_disgust: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… this guy is already checking me out. He keeps looking at me in the mirror like I'm a piece of meat. Gross.",
    location: 'Taxi - Back Seat',
    next: 'taxi_city_view',
  },

  taxi_city_view: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She turns her head toward the window, trying to ignore him. The streets outside look nothing like the clean, luxurious cities she grew up in back in the USA. Dirty alleys, broken sidewalks, overflowing garbage, and dimly lit shops with faded signs pass by. Everything feels rundown and unsafe.',
    ],
    next: 'taxi_city_voice',
  },

  taxi_city_voice: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "God, this city looks so bad… everything is dirty and broken. Nothing like back home. I can't believe I'm actually here right now.",
    location: 'Taxi - Back Seat',
    next: 'taxi_burp',
  },

  taxi_burp: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The driver shifts in his seat and lets out a loud, wet burp. The smell of alcohol and cheap tobacco fills the car. He looks slightly drunk, his eyes bloodshot as he stares at her again through the mirror — no shame, no manners at all.',
    ],
    next: 'taxi_burp_disgust',
  },

  taxi_burp_disgust: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Ugh, he just burped. He smells like alcohol. This guy has zero standards. He's disgusting, Richard. I feel so uncomfortable.",
    location: 'Taxi - Back Seat',
    next: 'taxi_ugly_outside',
  },

  taxi_ugly_outside: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She presses herself closer to the door and stares hard out the window, trying to block him out. But the view outside is not any better — dimly lit streets with stray dogs, a few shady-looking men loitering, and puddles of dirty water. The contrast to her privileged life back home hits her hard.',
    ],
    next: 'taxi_raised_better',
  },

  taxi_raised_better: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Everything outside looks so ugly and dirty. I hate this. I'm not supposed to be in a place like this… I was raised better than this crap.",
    location: 'Taxi - Back Seat',
    next: 'taxi_red_light',
  },

  taxi_red_light: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The taxi slows down and stops at a red light on an almost empty street. The silence feels heavy. In the rearview mirror, the driver is openly glaring at her now. His eyes roam slowly over her body — her chest, her hips, her thighs — with zero attempt to hide it. He licks his lips and adjusts himself in the seat.',
    ],
    next: 'taxi_red_light_fear',
  },

  taxi_red_light_fear: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… the light is red and he's just staring at me. Like really staring. I can see him in the mirror. He looks drunk and he's not even trying to hide it. I feel so exposed right now.",
    location: 'Taxi - Red Light',
    next: 'taxi_burp_again',
  },

  taxi_burp_again: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She quickly looks away again, heart beating faster, but the street outside offers no comfort — just dark, empty sidewalks and a couple of shadowy figures in the distance. The driver burps again, louder this time, and chuckles to himself.',
    ],
    next: 'taxi_urgent_whisper',
  },

  taxi_urgent_whisper: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "He burped again… this guy is revolting. No morals at all. I just want to get to the hotel and lock myself in the room. Please keep talking to me. Don't let me be alone with my thoughts right now.",
    location: 'Taxi - Red Light',
    next: 'taxi_journey_drags',
  },

  taxi_journey_drags: {
    page: 'taxi',
    type: 'narration',
    text: [
      'The light finally turns green. The driver reluctantly looks back at the road and starts moving again, but his eyes keep flicking back to the mirror every few seconds, checking her out shamelessly the entire ride.',
      'The journey drags on like this — uncomfortable silence mixed with the driver\'s disgusting behavior and the depressing view of the city outside. Ayesha stays glued to the phone, her usual arrogance slowly crumbling under the weight of fear and disgust.',
    ],
    next: 'taxi_hotel_sight',
  },

  taxi_hotel_sight: {
    page: 'taxi',
    type: 'narration',
    text: [
      'Finally, the bright lights of a 5-star hotel appear ahead. The taxi pulls up to the grand entrance. The contrast is jarring — luxury waiting just a few steps away after such a filthy ride.',
    ],
    next: 'taxi_hotel_relief',
  },

  taxi_hotel_relief: {
    page: 'taxi',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "We're finally here… the hotel looks okay at least. I'm getting out now. But that whole ride was horrible. That disgusting man wouldn't stop staring at me. I need a long shower after all of this. Stay on the phone with me until I'm inside the room, okay?",
    location: 'Hotel Entrance - Taxi',
    next: 'taxi_pay_exit',
  },

  taxi_pay_exit: {
    page: 'taxi',
    type: 'narration',
    text: [
      'She pays quickly, avoiding eye contact, and steps out with her bags. The old driver still watches her walk away with hungry eyes.',
    ],
    next: 'hotel_arrival',
  },
} satisfies Scenes;