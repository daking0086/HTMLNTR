import { release1 } from './release1';
import type { Release, ReleaseId, SceneKey, StoryPage } from '../types/game';

export const ACTIVE_RELEASE_ID: ReleaseId = 'release1';

const releaseMap: Record<ReleaseId, Release> = {
  release1,
};

export function getActiveRelease(): Release {
  return releaseMap[ACTIVE_RELEASE_ID];
}

export const scenes = getActiveRelease().scenes;

export function getPageForScene(sceneKey: SceneKey): StoryPage | null {
  const scene = scenes[sceneKey];
  if (!scene?.page) return null;
  return getActiveRelease().meta.pages.find((page) => page.id === scene.page) ?? null;
}