import { useEffect, useRef } from 'react';
import {
  bindingIsModifierTap,
  isEditableTarget,
  isModifierShortcut,
  matchesKeyBinding,
} from '../logic/keyBindings';
import type { KeyActionId, KeyBindings } from '../types/app';

export interface KeyboardShortcutHandlers {
  onContinue?: () => void;
  onSkipHoldStart?: () => void;
  onSkipHoldEnd?: () => void;
  onBack?: () => void;
  onSave?: () => void;
  onLoad?: () => void;
  onGallery?: () => void;
  onOptions?: () => void;
  onMenu?: () => void;
  onExit?: () => void;
  onToggleLog?: () => void;
}

const TAP_ACTIONS: KeyActionId[] = [
  'continue',
  'back',
  'save',
  'load',
  'gallery',
  'options',
  'menu',
  'exit',
  'toggleLog',
];

const HANDLER_MAP: Record<KeyActionId, keyof KeyboardShortcutHandlers> = {
  continue: 'onContinue',
  skip: 'onSkipHoldStart',
  back: 'onBack',
  save: 'onSave',
  load: 'onLoad',
  gallery: 'onGallery',
  options: 'onOptions',
  menu: 'onMenu',
  exit: 'onExit',
  toggleLog: 'onToggleLog',
};

export function useKeyboardShortcuts(
  enabled: boolean,
  bindings: KeyBindings,
  handlers: KeyboardShortcutHandlers,
  options?: { blockInput?: boolean },
) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  const bindingsRef = useRef(bindings);
  bindingsRef.current = bindings;

  useEffect(() => {
    if (!enabled) return;

    const invoke = (action: KeyActionId) => {
      const key = HANDLER_MAP[action];
      handlersRef.current[key]?.();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (options?.blockInput) return;
      if (isEditableTarget(event.target)) return;

      const currentBindings = bindingsRef.current;
      const skipBinding = currentBindings.skip;

      if (skipBinding.hold && matchesKeyBinding(event, skipBinding)) {
        event.preventDefault();
        handlersRef.current.onSkipHoldStart?.();
        return;
      }

      if (isModifierShortcut(event)) {
        const backBinding = currentBindings.back;
        if (
          bindingIsModifierTap(backBinding) &&
          matchesKeyBinding(event, backBinding) &&
          !event.repeat
        ) {
          event.preventDefault();
          invoke('back');
        }
        return;
      }

      if (event.repeat) return;

      for (const action of TAP_ACTIONS) {
        const binding = currentBindings[action];
        if (matchesKeyBinding(event, binding)) {
          event.preventDefault();
          invoke(action);
          return;
        }
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const skipBinding = bindingsRef.current.skip;
      if (skipBinding.hold && matchesKeyBinding(event, skipBinding)) {
        handlersRef.current.onSkipHoldEnd?.();
      }
    };

    const onBlur = () => {
      handlersRef.current.onSkipHoldEnd?.();
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
    };
  }, [enabled, options?.blockInput]);
}