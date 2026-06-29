import type { ReleaseMeta } from '../../types/game';

export const release1Meta: ReleaseMeta = {
  id: 'release1',
  title: 'Release 1',
  subtitle: 'The Night She Was Alone',
  description: 'Richard is detained. Ayesha waits at the airport, takes a taxi, and heads to the hotel.',
  startScene: 'intro',
  endScene: 'ending',
  pages: [
    { id: 'intro', title: 'Prologue' },
    { id: 'airport', title: 'Airport Scene' },
    { id: 'taxi', title: 'Taxi Scene' },
    { id: 'hotel', title: 'Hotel Scene' },
    { id: 'ending', title: 'End of Release 1' },
  ],
};