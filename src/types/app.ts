import type { GameState, ReleaseId, SceneKey } from './game';

export type AppView = 'menu' | 'game' | 'save' | 'load' | 'options' | 'gallery' | 'exit';

export type TextSpeed = 'slow' | 'normal' | 'fast';
export type TextSize = 'small' | 'medium' | 'large';

export interface GameSettings {
  textSpeed: TextSpeed;
  textSize: TextSize;
  autoPlay: boolean;
  sfxVolume: number;
  musicVolume: number;
}

export interface SaveSlot {
  slot: number;
  gameState: GameState;
  releaseId: ReleaseId;
  sceneKey: SceneKey;
  sceneLabel: string;
  savedAt: string;
}

export interface GalleryEntry {
  id: string;
  title: string;
  description: string;
  image: string;
  unlockScene: SceneKey;
  thumbnail?: string;
}

export const DEFAULT_SETTINGS: GameSettings = {
  textSpeed: 'normal',
  textSize: 'medium',
  autoPlay: false,
  sfxVolume: 80,
  musicVolume: 70,
};

export const MAX_SAVE_SLOTS = 6;

export const TEXT_SPEED_MS: Record<TextSpeed, { choice: number; autoPlay: number }> = {
  slow: { choice: 400, autoPlay: 4500 },
  normal: { choice: 180, autoPlay: 3200 },
  fast: { choice: 80, autoPlay: 1600 },
};

export const TEXT_SIZE_CLASS: Record<TextSize, string> = {
  small: 'text-[15px]',
  medium: 'text-[17px]',
  large: 'text-[19px]',
};