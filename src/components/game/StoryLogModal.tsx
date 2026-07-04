import { useEffect } from 'react';
import StoryLogSectionList from './StoryLogSectionList';
import type { StoryLogEntry } from '../../logic/storyLog';

interface StoryLogModalProps {
  open: boolean;
  entries: StoryLogEntry[];
  activeIndex: number;
  canGoBack: boolean;
  onClose: () => void;
  onSelectEntry: (index: number) => void;
}

export default function StoryLogModal({
  open,
  entries,
  activeIndex,
  canGoBack,
  onClose,
  onSelectEntry,
}: StoryLogModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [open, onClose]);

  if (!open) return null;

  const handleSelect = (index: number) => {
    onSelectEntry(index);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close story log"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[min(80vh,640px)] bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-zinc-800 bg-zinc-950 shrink-0">
          <div>
            <h2 className="text-sm font-semibold text-zinc-100">Story Log</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Sections are summarized — expand to browse beats or rewind
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
          {entries.length > 0 ? (
            <StoryLogSectionList
              entries={entries}
              activeIndex={activeIndex}
              canGoBack={canGoBack}
              onSelectEntry={handleSelect}
            />
          ) : (
            <p className="px-5 py-8 text-sm text-zinc-500 text-center">No story beats yet.</p>
          )}
        </div>

        <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-950 shrink-0">
          <p className="text-[10px] text-zinc-600 text-center">
            Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono">P</kbd> or{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}