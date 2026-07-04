import type { Release } from '../types/game';

interface EndScreenProps {
  release: Release;
  onRestart: () => void;
  compact?: boolean;
}

export default function EndScreen({ release, onRestart, compact = false }: EndScreenProps) {
  const storyPages = release.meta.pages
    .filter((page) => !['intro', 'ending'].includes(page.id))
    .map((page) => page.title)
    .join(' · ');

  return (
    <div
      className={`flex-1 min-h-0 flex flex-col justify-center overflow-y-auto ${
        compact ? 'px-4 py-3' : 'vn-padding vn-content-area'
      }`}
    >
      <div className={`text-center ${compact ? 'py-2' : 'py-8'}`}>
        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
          {release.meta.title} Complete
        </div>
        <div className={`mb-2 ${compact ? 'text-lg' : 'text-2xl mb-3'}`}>
          {release.meta.subtitle}
        </div>
        <p className={`text-zinc-500 mb-2 ${compact ? 'text-xs line-clamp-1' : 'text-sm mb-4'}`}>
          {storyPages}
        </p>
        <p className={`text-zinc-400 mx-auto ${compact ? 'text-xs line-clamp-2' : 'max-w-md text-sm'}`}>
          Your choices will determine how much Ayesha still trusts you...
          and how far she is willing to go when you&apos;re not there.
        </p>
        <div className={`flex justify-center gap-x-4 ${compact ? 'mt-3' : 'mt-8'}`}>
          <button
            type="button"
            onClick={onRestart}
            className={`rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors ${
              compact ? 'px-4 py-2 text-xs' : 'px-6 py-2.5 text-sm rounded-2xl'
            }`}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}