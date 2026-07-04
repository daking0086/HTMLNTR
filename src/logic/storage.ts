import type { GameSettings, SaveSlot } from '../types/app';
import { DEFAULT_SETTINGS } from '../types/app';
import { mergeKeyBindings } from './keyBindings';

const KEYS = {
  saves: 'htmlntr_saves',
  settings: 'htmlntr_settings',
  gallery: 'htmlntr_gallery_unlocks',
} as const;

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadSettings(): GameSettings {
  const stored = readJson<Partial<GameSettings> & { autoAdvance?: boolean }>(KEYS.settings, {});
  const { autoAdvance, ...rest } = stored;

  return {
    ...DEFAULT_SETTINGS,
    ...rest,
    autoPlay: rest.autoPlay ?? autoAdvance ?? DEFAULT_SETTINGS.autoPlay,
    showStoryLog: rest.showStoryLog ?? DEFAULT_SETTINGS.showStoryLog,
    keyBindings: mergeKeyBindings(rest.keyBindings),
  };
}

export function saveSettings(settings: GameSettings): void {
  writeJson(KEYS.settings, settings);
}

export function loadAllSaves(): SaveSlot[] {
  return readJson<SaveSlot[]>(KEYS.saves, []);
}

export function getSaveSlot(slot: number): SaveSlot | null {
  return loadAllSaves().find((save) => save.slot === slot) ?? null;
}

export function writeSaveSlot(save: SaveSlot): void {
  const saves = loadAllSaves().filter((entry) => entry.slot !== save.slot);
  saves.push(save);
  saves.sort((a, b) => a.slot - b.slot);
  writeJson(KEYS.saves, saves);
}

export function deleteSaveSlot(slot: number): void {
  writeJson(
    KEYS.saves,
    loadAllSaves().filter((entry) => entry.slot !== slot),
  );
}

export function getMostRecentSave(): SaveSlot | null {
  const saves = loadAllSaves();
  if (!saves.length) return null;
  return saves.reduce((latest, current) =>
    new Date(current.savedAt) > new Date(latest.savedAt) ? current : latest,
  );
}

export function hasAnySave(): boolean {
  return loadAllSaves().length > 0;
}

export function loadGalleryUnlocks(): string[] {
  return readJson<string[]>(KEYS.gallery, []);
}

export function saveGalleryUnlocks(ids: string[]): void {
  writeJson(KEYS.gallery, ids);
}

export function unlockGalleryEntry(id: string): string[] {
  const unlocked = loadGalleryUnlocks();
  if (unlocked.includes(id)) return unlocked;
  const next = [...unlocked, id];
  saveGalleryUnlocks(next);
  return next;
}

export function unlockGalleryForScene(entryIds: string[]): string[] {
  let unlocked = loadGalleryUnlocks();
  let changed = false;

  for (const id of entryIds) {
    if (!unlocked.includes(id)) {
      unlocked = [...unlocked, id];
      changed = true;
    }
  }

  if (changed) saveGalleryUnlocks(unlocked);
  return unlocked;
}