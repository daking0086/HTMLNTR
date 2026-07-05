export type CharacterSlotPosition = 'left' | 'center' | 'right';

/** Per-character layout overrides (all optional — fall back to slot presets). */
export interface CharacterPlacement {
  /** Height as % of the stage frame */
  heightPercent?: number;
  /** Max width, e.g. '58%' or '320px' */
  maxWidth?: string;
  /** Horizontal anchor from the left edge, e.g. '76%' */
  left?: string;
  /** Distance from the bottom of the stage, e.g. '0%' or '12px' */
  bottom?: string;
  /** Extra scale multiplier applied on top of speaker/idle zoom */
  scale?: number;
  /** Force horizontal flip (overrides auto left-slot flip) */
  flip?: boolean;
}

export interface StageCharacter extends CharacterPlacement {
  id: string;
  imageSrc: string;
  name?: string;
  /** Horizontal slot; auto-assigned from count when omitted */
  slot?: CharacterSlotPosition;
}

export interface CharacterLayerConfig {
  /** Default character height as % of the stage frame */
  heightPercent?: number;
  /** Scale multiplier for the active speaker */
  speakerScale?: number;
  /** Scale multiplier for non-speaking characters */
  idleScale?: number;
  /** Background blur in px when characters are visible */
  backgroundBlurPx?: number;
}

/** Default anchors used when `left` is not set on a character */
export const CHARACTER_SLOT_ANCHORS: Record<CharacterSlotPosition, string> = {
  left: '24%',
  center: '50%',
  right: '76%',
};

/** Default size presets by character count */
export const CHARACTER_SIZE_PRESETS: Record<number, { height: number; maxWidth: string }> = {
  1: { height: 94, maxWidth: '58%' },
  2: { height: 90, maxWidth: '50%' },
  3: { height: 86, maxWidth: '36%' },
};