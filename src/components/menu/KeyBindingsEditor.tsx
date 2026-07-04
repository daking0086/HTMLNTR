import { useCallback, useEffect, useState } from 'react';
import type { GameSettings, KeyActionId, KeyBinding } from '../../types/app';
import {
  KEY_ACTION_LABELS,
  cloneDefaultKeyBindings,
  eventToKeyBinding,
  findDuplicateBinding,
  formatBindingLabel,
} from '../../logic/keyBindings';

interface KeyBindingsEditorProps {
  keyBindings: GameSettings['keyBindings'];
  onChange: (keyBindings: GameSettings['keyBindings']) => void;
}

export default function KeyBindingsEditor({ keyBindings, onChange }: KeyBindingsEditorProps) {
  const [listeningFor, setListeningFor] = useState<KeyActionId | null>(null);
  const [error, setError] = useState<string | null>(null);

  const applyBinding = useCallback(
    (action: KeyActionId, binding: KeyBinding) => {
      const duplicate = findDuplicateBinding(keyBindings, action, binding);
      if (duplicate) {
        setError(`Already assigned to ${KEY_ACTION_LABELS[duplicate]}.`);
        return;
      }

      onChange({
        ...keyBindings,
        [action]: binding,
      });
      setError(null);
      setListeningFor(null);
    },
    [keyBindings, onChange],
  );

  useEffect(() => {
    if (!listeningFor) return;

    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (event.code === 'Escape') {
        setListeningFor(null);
        setError(null);
        return;
      }

      const binding = eventToKeyBinding(event, listeningFor);
      if (!binding) {
        setError(
          listeningFor === 'skip'
            ? 'Skip must use a hold key: Ctrl, Alt, or Shift.'
            : 'That key cannot be assigned. Try another.',
        );
        return;
      }

      applyBinding(listeningFor, binding);
    };

    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [listeningFor, applyBinding]);

  const startListening = (action: KeyActionId) => {
    setError(null);
    setListeningFor(action);
  };

  const resetBindings = () => {
    onChange(cloneDefaultKeyBindings());
    setListeningFor(null);
    setError(null);
  };

  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-zinc-800 overflow-hidden">
        {(Object.keys(KEY_ACTION_LABELS) as KeyActionId[]).map((action) => {
          const binding = keyBindings[action];
          const isListening = listeningFor === action;

          return (
            <div
              key={action}
              className={`flex items-center justify-between gap-4 px-4 py-2.5 border-b border-zinc-800 last:border-b-0 ${
                isListening ? 'bg-blue-500/10' : 'bg-zinc-900/50'
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm text-zinc-300">{KEY_ACTION_LABELS[action]}</p>
                {action === 'skip' && (
                  <p className="text-[10px] text-zinc-600">Must be held (Ctrl, Alt, or Shift)</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => startListening(action)}
                className={`shrink-0 text-xs px-3 py-1.5 rounded-md border font-mono transition-colors ${
                  isListening
                    ? 'border-blue-500 bg-blue-500/20 text-blue-200 animate-pulse'
                    : 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600'
                }`}
              >
                {isListening ? 'Press a key…' : formatBindingLabel(binding)}
              </button>
            </div>
          );
        })}
      </div>

      {error && (
        <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">
          {error}
        </p>
      )}

      {listeningFor && !error && (
        <p className="text-xs text-zinc-500">
          Listening for <span className="text-zinc-300">{KEY_ACTION_LABELS[listeningFor]}</span>.
          Press Esc to cancel.
        </p>
      )}

      <button
        type="button"
        onClick={resetBindings}
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        Reset keyboard shortcuts
      </button>
    </div>
  );
}