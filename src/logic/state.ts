import type { GameState } from '../types/game';

export const INITIAL_STATE: GameState = {
  affection: 60,
  corruption: 0,
  day: 1,
  currentScene: 'intro',
  isEnded: false,
};

export function clampStat(value: number): number {
  return Math.max(0, Math.min(100, value));
}