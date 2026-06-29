import type { Release } from '../types/game';

interface EndScreenProps {
  release: Release;
  onRestart: () => void;
}

export default function EndScreen({ release, onRestart }: EndScreenProps) {
  const storyPages = release.meta.pages
    .filter((page) => !['intro', 'ending'].includes(page.id))
    .map((page) => page.title)
    .join(' · ');

  return (
    <div className="p-8 min-h-[420px] flex flex-col justify-center">
      <div className="text-center py-8">
        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
          {release.meta.title} Complete
        </div>
        <div className="text-2xl mb-3">{release.meta.subtitle}</div>
        <p className="text-zinc-500 text-sm mb-4">{storyPages}</p>
        <p className="text-zinc-400 max-w-md mx-auto">
          Your choices will determine how much Ayesha still trusts you...
          and how far she is willing to go when you&apos;re not there.
        </p>
        <div className="mt-8 flex justify-center gap-x-4">
          <button
            type="button"
            onClick={onRestart}
            className="px-6 py-2.5 text-sm rounded-2xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}