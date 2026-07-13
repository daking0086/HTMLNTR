import { release1Meta } from './meta';
import { introScenes } from './intro';
import { flashbackScenes } from './flashback';
import { airportScenes } from './airport';
import { endingScenes } from './ending';
import type { Release } from '../../types/game';

// Release 2 — re-enable when taxi & hotel ship
// import { taxiScenes } from './taxi';
// import { hotelScenes } from './hotel';

export const release1: Release = {
  meta: release1Meta,
  scenes: {
    ...introScenes,
    ...flashbackScenes,
    ...airportScenes,
    ...endingScenes,
    // ...taxiScenes,
    // ...hotelScenes,
  },
};