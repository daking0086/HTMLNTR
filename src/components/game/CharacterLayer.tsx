import { useMemo } from 'react';
import {
  CHARACTER_SIZE_PRESETS,
  CHARACTER_SLOT_ANCHORS,
  type CharacterLayerConfig,
  type CharacterSlotPosition,
  type StageCharacter,
} from '../../types/characterLayer';

const SLOT_SINGLE: CharacterSlotPosition[] = ['right'];
const SLOT_PAIR: CharacterSlotPosition[] = ['left', 'right'];
const SLOT_TRIO: CharacterSlotPosition[] = ['left', 'center', 'right'];

interface CharacterLayerProps extends CharacterLayerConfig {
  characters: StageCharacter[];
  activeSpeakerId?: string | null;
  /** Mirror the left-slot sprite when two or more characters are visible */
  flipLeftCharacter?: boolean;
}

function assignSlots(characters: StageCharacter[]): Array<StageCharacter & { resolvedSlot: CharacterSlotPosition }> {
  const layout =
    characters.length >= 3 ? SLOT_TRIO : characters.length === 2 ? SLOT_PAIR : SLOT_SINGLE;

  return characters.map((character, index) => ({
    ...character,
    resolvedSlot: character.slot ?? layout[index] ?? 'center',
  }));
}

export default function CharacterLayer({
  characters,
  activeSpeakerId = null,
  heightPercent,
  speakerScale = 1.08,
  idleScale = 0.94,
  flipLeftCharacter = true,
}: CharacterLayerProps) {
  const layeredCharacters = useMemo(() => assignSlots(characters), [characters]);

  if (layeredCharacters.length === 0) return null;

  const hasMultiple = layeredCharacters.length > 1;
  const countKey = Math.min(layeredCharacters.length, 3);
  const sizePreset = CHARACTER_SIZE_PRESETS[countKey];
  const defaultHeight = heightPercent ?? sizePreset.height;

  return (
    <div className="vn-character-layer" aria-hidden={false}>
      {layeredCharacters.map((character) => {
        const isSpeaking = activeSpeakerId === character.id;
        const speakerZoom = hasMultiple ? (isSpeaking ? speakerScale : idleScale) : 1;
        const extraScale = character.scale ?? 1;
        const finalScale = speakerZoom * extraScale;

        const autoFlip =
          flipLeftCharacter && hasMultiple && character.resolvedSlot === 'left';
        const shouldFlip = character.flip ?? autoFlip;
        const scaleX = shouldFlip ? -finalScale : finalScale;

        return (
          <img
            key={character.id}
            src={character.imageSrc}
            alt={character.name ?? character.id}
            className={`vn-character-sprite ${isSpeaking ? 'vn-character-sprite--speaking' : 'vn-character-sprite--idle'}`}
            data-slot={character.resolvedSlot}
            style={{
              height: `${character.heightPercent ?? defaultHeight}%`,
              maxWidth: character.maxWidth ?? sizePreset.maxWidth,
              left: character.left ?? CHARACTER_SLOT_ANCHORS[character.resolvedSlot],
              bottom: character.bottom ?? '0',
              transform: `translateX(-50%) scale(${scaleX}, ${finalScale})`,
              zIndex: isSpeaking ? 3 : 2,
            }}
            draggable={false}
          />
        );
      })}
    </div>
  );
}