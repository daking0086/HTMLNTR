import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

export const hotelScenes = {
  hotel_arrival: {
    page: 'hotel',
    type: 'narration',
    text: [
      'The grand lobby is polished marble and soft light — a world away from the curb outside. Ayesha keeps the phone pressed to her ear as a porter takes her bags and the front desk waves her through with a practiced smile.',
      'She does not relax until the elevator doors close and she is alone in the hallway on her floor.',
    ],
    next: 'hotel_room_door',
  },

  hotel_room_door: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… I'm at the door. Key card works. Give me a second — I need to see that the room is actually safe before I can breathe again.",
    location: 'Hotel Hallway',
    next: 'hotel_inside_room',
  },

  hotel_inside_room: {
    page: 'hotel',
    type: 'narration',
    text: [
      'The lock clicks. She steps inside, kicks the door shut, and drags the deadbolt across. Clean sheets. Mini bar. A wide window overlooking the city lights. For the first time tonight, the air feels like something she recognizes.',
    ],
    next: 'hotel_room_relief',
  },

  hotel_room_relief: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm inside. Door's locked. It actually looks fine in here… God, Richard, tonight was a nightmare. The airport, those guards, waiting in the rain, that filthy taxi driver — I don't know how I'm still standing. Don't you dare hang up on me.",
    location: 'Hotel Room',
    next: 'hotel_richard_stay',
  },

  hotel_richard_stay: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm not going anywhere. You made it. Lock every lock they've got. Take your shower. I'll be right here on the line until you tell me you're okay.",
    location: 'Empty Office - Detention',
    next: 'hotel_window',
  },

  hotel_window: {
    page: 'hotel',
    type: 'narration',
    text: [
      'Ayesha sets the phone on the nightstand with the speaker on and moves to the window. Rain streaks the glass. Somewhere below, the city she hated an hour ago glitters like a different country entirely.',
      'She pulls the curtains halfway — not all the way. Not yet.',
    ],
    next: 'ending',
  },
} satisfies Scenes;