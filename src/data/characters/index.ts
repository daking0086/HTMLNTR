import { ayeshaProfile } from './ayesha';
import { richardProfile } from './richard';
import type { CharacterProfile } from '../../types/character';

export const characters: Record<string, CharacterProfile> = {
  ayesha: ayeshaProfile,
  richard: richardProfile,
};

export { ayeshaProfile, richardProfile };