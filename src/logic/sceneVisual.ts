import type { Scene } from '../types/game';

/** Temporarily off — set to true when scene CGs are added. */
export const SCENE_PICTURES_ENABLED = false;

export function getScenePicture(scene: Scene | undefined): string | null {
  if (!SCENE_PICTURES_ENABLED) return null;
  if (!scene) return null;

  if (scene.type === 'dialogue') {
    return scene.image ?? scene.portrait ?? null;
  }

  return scene.image ?? null;
}