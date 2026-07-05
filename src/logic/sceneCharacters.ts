import { resolveStageCharacters } from '../data/characterDisplay';
import type { Scene } from '../types/game';

export function getSceneStageCharacters(scene: Scene | undefined) {
  return resolveStageCharacters(scene?.characters);
}

export function getActiveSpeakerId(scene: Scene | undefined): string | null {
  if (!scene || scene.type !== 'dialogue') return null;

  const characters = getSceneStageCharacters(scene);
  if (characters.length === 0) return null;

  const speakerId = scene.speaker.toLowerCase().replace(/\s+/g, '-');
  const match = characters.find(
    (character) => character.id === speakerId || character.name === scene.speaker,
  );

  return match?.id ?? characters[0].id;
}