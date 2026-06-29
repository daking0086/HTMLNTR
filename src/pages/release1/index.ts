import { release1Meta } from './meta';
import { introScenes } from './intro';
import { airportScenes } from './airport';
import { taxiScenes } from './taxi';
import { hotelScenes } from './hotel';
import { endingScenes } from './ending';
import type { Release } from '../../types/game';

export const release1: Release = {
  meta: release1Meta,
  scenes: {
    ...introScenes,
    ...airportScenes,
    ...taxiScenes,
    ...hotelScenes,
    ...endingScenes,
  },
};