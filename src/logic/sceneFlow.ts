import type { Scene } from '../types/game';

export function sceneSupportsAutoAdvance(scene: Scene | undefined): boolean {
  if (!scene) return false;

  if (scene.type === 'narration') {
    return Boolean(scene.next || scene.end);
  }

  if (scene.type === 'dialogue') {
    return Boolean(scene.next && !scene.choices?.length);
  }

  // Looper handles its own Continue / Finish UI
  if (scene.type === 'looper') {
    return false;
  }

  return false;
}