import type { GameState, ReleaseId, SceneKey } from './game';

export type AppView = 'menu' | 'game' | 'save' | 'load' | 'options' | 'gallery' | 'exit';

export type TextSpeed = 'slow' | 'normal' | 'fast';
export type TextSize = 'small' | 'medium' | 'large';

export type KeyActionId =
  | 'continue'
  | 'skip'
  | 'back'
  | 'save'
  | 'load'
  | 'gallery'
  | 'options'
  | 'menu'
  | 'exit'
  | 'toggleLog';

export interface KeyBinding {
  /** KeyboardEvent.code, or Control / Alt for either side */
  code: string;
  /** Hold to activate (e.g. skip while Ctrl is held) */
  hold?: boolean;
  /** Display label for options UI */
  label: string;
}

export type KeyBindings = Record<KeyActionId, KeyBinding>;

export interface GameSettings {
  textSpeed: TextSpeed;
  textSize: TextSize;
  autoPlay: boolean;
  showStoryLog: boolean;
  keyBindings: KeyBindings;
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

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
  continue: { code: 'Enter', label: 'Enter' },
  skip: { code: 'Control', hold: true, label: 'Hold Ctrl' },
  back: { code: 'Alt', label: 'Alt' },
  save: { code: 'KeyS', label: 'S' },
  load: { code: 'KeyL', label: 'L' },
  gallery: { code: 'KeyG', label: 'G' },
  options: { code: 'KeyO', label: 'O' },
  menu: { code: 'KeyM', label: 'M' },
  exit: { code: 'Escape', label: 'Esc' },
  toggleLog: { code: 'KeyP', label: 'P' },
};

export const DEFAULT_SETTINGS: GameSettings = {
  textSpeed: 'normal',
  textSize: 'medium',
  autoPlay: false,
  showStoryLog: true,
  keyBindings: { ...DEFAULT_KEY_BINDINGS },
  sfxVolume: 80,
  musicVolume: 70,
};

export const MAX_SAVE_SLOTS = 6;

export const TEXT_SPEED_MS: Record<
  TextSpeed,
  { choice: number; autoPlay: number; skip: number; typewriter: number }
> = {
  slow: { choice: 400, autoPlay: 4500, skip: 650, typewriter: 42 },
  normal: { choice: 180, autoPlay: 3200, skip: 380, typewriter: 26 },
  fast: { choice: 80, autoPlay: 1600, skip: 180, typewriter: 12 },
};

export const MAX_STORY_HISTORY = 500;

export const TEXT_SIZE_CLASS: Record<TextSize, string> = {
  small: 'text-[15px]',
  medium: 'text-[17px]',
  large: 'text-[19px]',
};