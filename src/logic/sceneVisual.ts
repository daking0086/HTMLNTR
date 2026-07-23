import { DEV_HIDE_IMAGES } from '../config/dev';
import { assetUrl } from '../utils/assetUrl';
import type { Scene } from '../types/game';

/** Whether scene backgrounds, CGs, and portraits should render. Always on in production. */
export function isImagesEnabled(): boolean {
  if (import.meta.env.PROD) return true;
  return !DEV_HIDE_IMAGES;
}

function resolveSceneImage(path: string | undefined): string | null {
  if (!path) return null;
  return assetUrl(path);
}

export function getScenePicture(scene: Scene | undefined): string | null {
  if (!isImagesEnabled()) return null;
  if (!scene) return null;

  if (scene.type === 'looper') {
    return resolveSceneImage(scene.background);
  }

  if (scene.type === 'video') {
    return resolveSceneImage(scene.poster);
  }

  if (scene.imageLoop?.length) {
    return resolveSceneImage(scene.image ?? scene.imageLoop[0]);
  }

  if (scene.characters?.length) {
    return resolveSceneImage(scene.image);
  }

  if (scene.type === 'dialogue') {
    return resolveSceneImage(scene.image ?? scene.portrait);
  }

  return resolveSceneImage(scene.image);
}

/** Resolved absolute URLs for a looping CG sequence, or null. */
export function getSceneImageLoop(scene: Scene | undefined): string[] | null {
  if (!isImagesEnabled() || !scene?.imageLoop?.length) return null;
  return scene.imageLoop.map((path) => assetUrl(path)).filter(Boolean);
}

export function getSceneImageLoopMs(scene: Scene | undefined): number {
  return scene?.imageLoopMs ?? 110;
}