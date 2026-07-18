import type { Release, Scene, SceneKey, Scenes } from '../types/game';
import { assetUrl } from '../utils/assetUrl';
import { preloadImages } from '../utils/preloadImages';
import { isImagesEnabled } from './sceneVisual';

function pushSceneUrls(scene: Scene | undefined, out: string[]): void {
  if (!scene) return;

  if (scene.image) out.push(assetUrl(scene.image));
  if (scene.imageLoop?.length) {
    for (const path of scene.imageLoop) out.push(assetUrl(path));
  }
  if (scene.type === 'dialogue' && scene.portrait) {
    out.push(assetUrl(scene.portrait));
  }
}

/** All image URLs used by scenes on a given story page (e.g. entire flashback). */
export function collectPageImageUrls(scenes: Scenes, pageId: string): string[] {
  const out: string[] = [];
  for (const scene of Object.values(scenes)) {
    if (scene.page === pageId) pushSceneUrls(scene, out);
  }
  return out;
}

/**
 * Walk `next` (and choice branches one level) from startKey and collect CG URLs.
 * Covers rapid click-through sequences like suck / grind beats.
 */
export function collectUpcomingSceneImages(
  scenes: Scenes,
  startKey: SceneKey,
  maxDepth = 24,
): string[] {
  const out: string[] = [];
  const seen = new Set<SceneKey>();
  let key: SceneKey | undefined = startKey;
  let depth = 0;

  while (key && depth < maxDepth && !seen.has(key)) {
    seen.add(key);
    const scene = scenes[key];
    if (!scene) break;

    pushSceneUrls(scene, out);

    if (scene.type === 'dialogue' && scene.choices?.length) {
      for (const choice of scene.choices) {
        const branch = scenes[choice.next];
        pushSceneUrls(branch, out);
      }
    }

    key = scene.next;
    depth += 1;
  }

  return out;
}

/** Prefetch current page + upcoming chain. Safe to call every scene change. */
export function prefetchSceneImages(
  release: Release,
  sceneKey: SceneKey,
  scene: Scene | undefined,
): void {
  if (!isImagesEnabled() || !scene) return;

  const urls = [
    ...collectUpcomingSceneImages(release.scenes, sceneKey, 28),
    ...collectPageImageUrls(release.scenes, scene.page),
  ];

  preloadImages(urls);
}
