import type { KeyBinding, KeyBindings, KeyActionId } from '../types/app';
import { DEFAULT_KEY_BINDINGS } from '../types/app';

const MODIFIER_CODES = new Set([
  'Control',
  'ControlLeft',
  'ControlRight',
  'Alt',
  'AltLeft',
  'AltRight',
  'Shift',
  'ShiftLeft',
  'ShiftRight',
  'Meta',
  'MetaLeft',
  'MetaRight',
]);

function isControlCode(code: string): boolean {
  return code === 'ControlLeft' || code === 'ControlRight';
}

function isAltCode(code: string): boolean {
  return code === 'AltLeft' || code === 'AltRight';
}

function isShiftCode(code: string): boolean {
  return code === 'ShiftLeft' || code === 'ShiftRight';
}

export function normalizeBindingCode(code: string): string {
  if (isControlCode(code)) return 'Control';
  if (isAltCode(code)) return 'Alt';
  if (isShiftCode(code)) return 'Shift';
  if (code === 'MetaLeft' || code === 'MetaRight') return 'Meta';
  return code;
}

export function isModifierBindingCode(code: string): boolean {
  return MODIFIER_CODES.has(code) || ['Control', 'Alt', 'Shift', 'Meta'].includes(code);
}

export function formatKeyLabel(code: string, key = ''): string {
  const normalized = normalizeBindingCode(code);

  if (normalized === 'Control') return 'Ctrl';
  if (normalized === 'Alt') return 'Alt';
  if (normalized === 'Shift') return 'Shift';
  if (normalized === 'Meta') return 'Meta';
  if (normalized.startsWith('Key')) return normalized.slice(3);
  if (normalized.startsWith('Digit')) return normalized.slice(5);

  const labels: Record<string, string> = {
    Enter: 'Enter',
    Escape: 'Esc',
    Space: 'Space',
    Backspace: 'Backspace',
    Tab: 'Tab',
    ArrowUp: '↑',
    ArrowDown: '↓',
    ArrowLeft: '←',
    ArrowRight: '→',
  };

  return labels[normalized] || key || normalized;
}

export function formatBindingLabel(binding: KeyBinding): string {
  const base = formatKeyLabel(binding.code);
  return binding.hold ? `Hold ${base}` : base;
}

export function matchesKeyBinding(event: KeyboardEvent, binding: KeyBinding): boolean {
  const { code } = binding;

  if (code === 'Control') {
    return isControlCode(event.code);
  }

  if (code === 'Alt') {
    return event.key === 'Alt' || isAltCode(event.code);
  }

  if (code === 'Shift') {
    return event.key === 'Shift' || isShiftCode(event.code);
  }

  if (code === 'Meta') {
    return event.key === 'Meta' || event.code === 'MetaLeft' || event.code === 'MetaRight';
  }

  return event.code === code;
}

export function bindingIsModifierTap(binding: KeyBinding): boolean {
  return isModifierBindingCode(binding.code) && !binding.hold;
}

export function eventToKeyBinding(event: KeyboardEvent, action: KeyActionId): KeyBinding | null {
  if (event.repeat) return null;
  if (event.code === 'Escape') return null;

  const normalized = normalizeBindingCode(event.code);

  if (action === 'skip') {
    if (!isModifierBindingCode(normalized)) return null;
    return {
      code: normalized,
      hold: true,
      label: `Hold ${formatKeyLabel(normalized)}`,
    };
  }

  if (isModifierShortcut(event) && !MODIFIER_CODES.has(event.code)) {
    return null;
  }

  if (action !== 'back' && isModifierBindingCode(normalized)) {
    return null;
  }

  const hold = false;
  const code = action === 'back' && isModifierBindingCode(normalized) ? normalized : event.code;

  return {
    code,
    hold,
    label: formatKeyLabel(code, event.key),
  };
}

export function findDuplicateBinding(
  bindings: KeyBindings,
  action: KeyActionId,
  candidate: KeyBinding,
): KeyActionId | null {
  for (const id of Object.keys(bindings) as KeyActionId[]) {
    if (id === action) continue;
    const existing = bindings[id];
    if (existing.code === candidate.code && Boolean(existing.hold) === Boolean(candidate.hold)) {
      return id;
    }
  }
  return null;
}

export function cloneDefaultKeyBindings(): KeyBindings {
  return mergeKeyBindings(undefined);
}

export function isModifierShortcut(event: KeyboardEvent): boolean {
  return event.ctrlKey || event.metaKey || event.altKey;
}

export function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}

export function mergeKeyBindings(stored: Partial<KeyBindings> | undefined): KeyBindings {
  const merged = {} as KeyBindings;

  for (const action of Object.keys(DEFAULT_KEY_BINDINGS) as KeyActionId[]) {
    const defaults = DEFAULT_KEY_BINDINGS[action];
    const entry = stored?.[action];
    merged[action] = entry?.code
      ? {
          ...defaults,
          ...entry,
          label: entry.label || formatBindingLabel({ ...defaults, ...entry }),
        }
      : { ...defaults };
  }

  return merged;
}

export const KEY_ACTION_LABELS: Record<KeyActionId, string> = {
  continue: 'Continue',
  skip: 'Skip (hold)',
  back: 'Back',
  save: 'Save',
  load: 'Load',
  gallery: 'Gallery',
  options: 'Options',
  menu: 'Menu',
  exit: 'Exit',
  toggleLog: 'Story Log',
};