import { useMemo } from 'react';
import ScreenShell from './ScreenShell';
import { getSaveSlot } from '../../logic/storage';
import { MAX_SAVE_SLOTS } from '../../types/app';
import type { SaveSlot } from '../../types/app';

interface SaveLoadScreenProps {
  mode: 'save' | 'load';
  onBack: () => void;
  onSelectSlot: (slot: number) => void;
  onDeleteSlot?: (slot: number) => void;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function SaveLoadScreen({
  mode,
  onBack,
  onSelectSlot,
  onDeleteSlot,
}: SaveLoadScreenProps) {
  const slots = useMemo(
    () => Array.from({ length: MAX_SAVE_SLOTS }, (_, i) => getSaveSlot(i + 1)),
    [mode],
  );

  return (
    <ScreenShell
      title={mode === 'save' ? 'Save Game' : 'Load Game'}
      subtitle={mode === 'save' ? 'Choose a slot to save your progress' : 'Choose a slot to continue'}
      onBack={onBack}
      backLabel={mode === 'save' ? 'Back to Game' : 'Back'}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {slots.map((save, index) => {
          const slot = index + 1;
          return (
            <SlotCard
              key={slot}
              slot={slot}
              save={save}
              mode={mode}
              onSelect={() => onSelectSlot(slot)}
              onDelete={save && onDeleteSlot ? () => onDeleteSlot(slot) : undefined}
            />
          );
        })}
      </div>
    </ScreenShell>
  );
}

interface SlotCardProps {
  slot: number;
  save: SaveSlot | null;
  mode: 'save' | 'load';
  onSelect: () => void;
  onDelete?: () => void;
}

function SlotCard({ slot, save, mode, onSelect, onDelete }: SlotCardProps) {
  const isEmpty = !save;
  const canLoad = mode === 'load' && !isEmpty;
  const canSave = mode === 'save';

  return (
    <div className="border border-zinc-800 rounded-2xl bg-zinc-950 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-zinc-500">Slot {slot}</span>
        {save && (
          <span className="text-[10px] text-zinc-600">{formatDate(save.savedAt)}</span>
        )}
      </div>

      {isEmpty ? (
        <p className="text-sm text-zinc-600 py-4">Empty</p>
      ) : (
        <div className="space-y-1">
          <p className="text-sm font-medium text-zinc-200">{save.sceneLabel}</p>
          <p className="text-xs text-zinc-500">
            Affection {save.gameState.affection} · Corruption {save.gameState.corruption}
          </p>
        </div>
      )}

      <div className="flex gap-2 mt-auto">
        <button
          type="button"
          onClick={onSelect}
          disabled={mode === 'load' && isEmpty}
          className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {canSave ? (isEmpty ? 'Save Here' : 'Overwrite') : canLoad ? 'Load' : 'Empty'}
        </button>
        {onDelete && !isEmpty && (
          <button
            type="button"
            onClick={onDelete}
            className="px-3 py-2.5 rounded-xl text-sm bg-zinc-900 hover:bg-red-950 text-red-400 border border-zinc-800 transition-colors"
            aria-label={`Delete slot ${slot}`}
          >
            <i className="fa-solid fa-trash text-xs" />
          </button>
        )}
      </div>
    </div>
  );
}