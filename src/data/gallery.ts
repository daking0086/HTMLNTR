import type { GalleryEntry } from '../types/app';

export const galleryEntries: GalleryEntry[] = [
  {
    id: 'ayesha_profile',
    title: 'Ayesha',
    description: 'The call that started the longest night of their lives.',
    image: '/assets/images/ayesha/ayesha_profile.png',
    unlockScene: 'airport_ayesha_pickup',
  },
  {
    id: 'ayesha_shower',
    title: 'What Richard Saw',
    description: 'A frame from the hidden camera — the moment they slid their hands inside her clothes.',
    image: '/assets/images/ayesha/ayesha_cg_shower.jpg',
    unlockScene: 'airport_violation_one',
  },
  {
    id: 'ayesha_window',
    title: 'Hotel Window',
    description: 'A glimpse from the hotel — something felt wrong.',
    image: '/assets/images/ayesha/ayesha_cg_window.jpg',
    unlockScene: 'hotel_arrival',
  },
];