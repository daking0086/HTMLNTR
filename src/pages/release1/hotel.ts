/**
 * Release 2 — Hotel Scene
 * Not loaded in Release 1. Re-enable in release1/index.ts when shipping Release 2.
 */
import type { Scenes } from '../../types/game';

const AYESHA = '/assets/images/ayesha/ayesha_profile.png';

export const hotelScenes = {
  hotel_arrival: {
    page: 'hotel',
    type: 'narration',
    text: [
      'The lobby is polished marble and soft light — a world away from the curb outside.',
    ],
    next: 'hotel_arrival_two',
  },

  hotel_arrival_two: {
    page: 'hotel',
    type: 'narration',
    text: [
      'A porter takes her bags. The front desk waves her through with a practiced smile.',
    ],
    next: 'hotel_elevator',
  },

  hotel_elevator: {
    page: 'hotel',
    type: 'narration',
    text: [
      'She does not relax until the elevator doors close and the hallway on her floor is quiet.',
    ],
    next: 'hotel_room_door',
  },

  hotel_room_door: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Richard… I'm at the door. Key card works.",
    location: 'Hotel Hallway',
    next: 'hotel_room_door_two',
  },

  hotel_room_door_two: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Give me a second. I need to know the room is safe before I can breathe.",
    location: 'Hotel Hallway',
    next: 'hotel_inside_room',
  },

  hotel_inside_room: {
    page: 'hotel',
    type: 'narration',
    text: ['The lock clicks. She steps inside and kicks the door shut.'],
    next: 'hotel_deadbolt',
  },

  hotel_deadbolt: {
    page: 'hotel',
    type: 'narration',
    text: [
      'Deadbolt across. Clean sheets. Mini bar. A wide window over the city lights.',
    ],
    next: 'hotel_room_relief',
  },

  hotel_room_relief: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "I'm inside. Door's locked. It actually looks fine in here…",
    location: 'Hotel Room',
    next: 'hotel_room_relief_two',
  },

  hotel_room_relief_two: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "God, Richard, tonight was a nightmare. I don't know how I'm still standing.",
    location: 'Hotel Room',
    next: 'hotel_room_relief_three',
  },

  hotel_room_relief_three: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Ayesha',
    portrait: AYESHA,
    text: "Don't you dare hang up on me.",
    location: 'Hotel Room',
    next: 'hotel_richard_stay',
  },

  hotel_richard_stay: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Richard',
    text: "I'm not going anywhere. Lock every lock they've got.",
    location: 'Empty Office - Detention',
    next: 'hotel_richard_stay_two',
  },

  hotel_richard_stay_two: {
    page: 'hotel',
    type: 'dialogue',
    speaker: 'Richard',
    text: "Take your shower. I'll stay on the line until you tell me you're okay.",
    location: 'Empty Office - Detention',
    next: 'hotel_window',
  },

  hotel_window: {
    page: 'hotel',
    type: 'narration',
    text: [
      'She sets the phone on speaker and moves to the window. Rain streaks the glass.',
    ],
    // image: '/assets/images/ayesha/ayesha_cg_window.jpg',
    next: 'hotel_window_two',
  },

  hotel_window_two: {
    page: 'hotel',
    type: 'narration',
    text: [
      'Below, the city she hated an hour ago glitters like a different country.',
      'She pulls the curtains halfway — not all the way. Not yet.',
    ],
    next: 'ending',
  },
} satisfies Scenes;