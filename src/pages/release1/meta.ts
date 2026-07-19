import type { ReleaseMeta } from '../../types/game';

export const release1Meta: ReleaseMeta = {
  id: 'release1',
  title: 'Release 1',
  subtitle: 'The Night She Was Alone',
  description:
    'Richard is detained at a foreign airport. Ayesha waits outside — until two officers pull her into the dark.',
  startScene: 'intro',
  endScene: 'ending_trust',
  pages: [
    { id: 'intro', title: 'Prologue' },
    { id: 'flashback', title: 'Hotel Suite — Flashback' },
    { id: 'airport', title: 'Airport Scene' },
    { id: 'interrogation', title: 'Security Inspection' },
    { id: 'ending', title: 'End of Release 1' },
  ],
};