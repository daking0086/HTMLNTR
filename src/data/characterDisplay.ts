import type { StageCharacter } from '../types/characterLayer';

/**
 * Edit these values to change character size and position on stage.
 *
 * heightPercent — height as % of the picture frame (try 90–110)
 * maxWidth      — how wide the sprite can be ('58%', '420px', etc.)
 * left          — horizontal position from the left edge ('68%' = more right)
 * bottom        — anchor from frame bottom: '0%' = feet at edge, '-20px' = move DOWN, '20px' = move UP
 * scale         — extra zoom (1 = normal, 1.15 = 15% bigger)
 * flip          — mirror horizontally (left characters auto-flip in dual mode)
 * slot          — preset when left is omitted: 'left' | 'center' | 'right'
 */

export const OFFICER_1_SPRITE: StageCharacter = {
  id: 'officer-1',
  name: 'Officer 1',
  imageSrc: '/assets/images/test/test.png',
  slot: 'right',
  heightPercent: 100,
  maxWidth: '75%',
  left: '68%',
  bottom: '-45%',
  scale: 1.3,
};

export const OFFICER_2_SPRITE: StageCharacter = {
  id: 'officer-2',
  name: 'Officer 2',
  imageSrc: '/assets/images/test/test.png',
  slot: 'left',
  heightPercent: 100,
  maxWidth: '75%',
  left: '28%',
  bottom: '-45%',
  scale: 1.3,
};

export const CHARACTER_SPRITES: Record<string, StageCharacter> = {
  'officer-1': OFFICER_1_SPRITE,
  'officer-2': OFFICER_2_SPRITE,
};

export function resolveStageCharacters(ids: string[] | undefined): StageCharacter[] {
  if (!ids?.length) return [];
  return ids.map((id) => CHARACTER_SPRITES[id]).filter((c): c is StageCharacter => Boolean(c));
}