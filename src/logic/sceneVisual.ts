import type { Scene } from '../types/game';

/** Enable scene CGs and other image-based scenes. */
export const SCENE_PICTURES_ENABLED = true;

export function getScenePicture(scene: Scene | undefined): string | null {
  if (!SCENE_PICTURES_ENABLED) return null;
  if (!scene) return null;

  if (scene.type === 'dialogue') {
    return scene.image ?? scene.portrait ?? null;
  }

  return scene.image ?? null;
}