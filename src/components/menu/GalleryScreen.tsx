import { useState } from 'react';
import ScreenShell from './ScreenShell';
import { isImagesEnabled } from '../../logic/sceneVisual';
import { assetUrl } from '../../utils/assetUrl';
import type { GalleryEntry } from '../../types/app';

interface GalleryScreenProps {
  entries: GalleryEntry[];
  isUnlocked: (entry: GalleryEntry) => boolean;
  unlockedCount: number;
  onBack: () => void;
}

export default function GalleryScreen({
  entries,
  isUnlocked,
  unlockedCount,
  onBack,
}: GalleryScreenProps) {
  const [selected, setSelected] = useState<GalleryEntry | null>(null);
  const showImages = isImagesEnabled();

  return (
    <>
      <ScreenShell
        title="Gallery"
        subtitle={`${unlockedCount} / ${entries.length} unlocked`}
        onBack={onBack}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {entries.map((entry) => {
            const unlocked = isUnlocked(entry);
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => unlocked && showImages && entry.image && setSelected(entry)}
                disabled={!unlocked}
                className="group text-left rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 disabled:cursor-not-allowed transition-all hover:border-zinc-700"
              >
                <div className="aspect-[3/4] relative bg-zinc-900">
                  {unlocked && showImages && entry.image ? (
                    <img
                      src={assetUrl(entry.image)}
                      alt={entry.title}
                      className="w-full h-full object-cover"
                    />
                  ) : unlocked ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 gap-2">
                      <i className="fa-solid fa-image text-2xl" />
                      <span className="text-[10px] uppercase tracking-widest">Coming soon</span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700">
                      <i className="fa-solid fa-lock text-2xl" />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className={`text-sm font-medium ${unlocked ? 'text-zinc-200' : 'text-zinc-600'}`}>
                    {unlocked ? entry.title : '???'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </ScreenShell>

      {selected && showImages && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-lg w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={assetUrl(selected.image)}
              alt={selected.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{selected.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{selected.description}</p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-4 w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}