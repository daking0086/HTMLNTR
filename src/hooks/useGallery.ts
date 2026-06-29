import { useCallback, useState } from 'react';
import { galleryEntries } from '../data/gallery';
import { loadGalleryUnlocks, unlockGalleryForScene } from '../logic/storage';
import type { GalleryEntry } from '../types/app';
import type { SceneKey } from '../types/game';

export function useGallery() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>(() => loadGalleryUnlocks());

  const unlockForScene = useCallback((sceneKey: SceneKey) => {
    const toUnlock = galleryEntries
      .filter((entry) => entry.unlockScene === sceneKey)
      .map((entry) => entry.id);

    if (!toUnlock.length) return;
    setUnlockedIds(unlockGalleryForScene(toUnlock));
  }, []);

  const isUnlocked = useCallback(
    (entry: GalleryEntry) => unlockedIds.includes(entry.id),
    [unlockedIds],
  );

  const unlockedCount = galleryEntries.filter((entry) => unlockedIds.includes(entry.id)).length;

  return {
    entries: galleryEntries,
    unlockedIds,
    unlockedCount,
    isUnlocked,
    unlockForScene,
  };
}