interface NarrationContinueProps {
  onContinue: () => void;
  autoPlay?: boolean;
  skipMode?: boolean;
  compact?: boolean;
}

export default function NarrationContinue({
  onContinue,
  autoPlay = false,
  skipMode = false,
  compact = false,
}: NarrationContinueProps) {
  const rapidAdvance = skipMode || autoPlay;

  return (
    <div
      className={`border-t border-zinc-800 bg-zinc-950 shrink-0 ${
        compact ? 'px-4 pb-3 pt-2' : 'vn-padding-x pb-[var(--vn-padding)] pt-3'
      }`}
    >
      <button
        type="button"
        onClick={onContinue}
        className={`w-full flex items-center justify-center gap-x-2 bg-zinc-800 hover:bg-zinc-700 transition-colors font-medium ${
          compact ? 'py-2 rounded-xl text-xs' : 'py-3.5 rounded-2xl text-sm'
        }`}
      >
        {skipMode ? (
          <>
            <i className="fa-solid fa-angles-right text-blue-400" />
            <span>Skipping…</span>
          </>
        ) : autoPlay ? (
          <>
            <i className="fa-solid fa-forward-step text-blue-400" />
            <span>Auto playing…</span>
          </>
        ) : (
          <>
            <span>Continue</span>
            <i className="fa-solid fa-arrow-right" />
          </>
        )}
      </button>
      {rapidAdvance && !compact && (
        <p className="text-center text-[10px] text-zinc-600 mt-2">
          Pauses at choices. Turn off Skip or Auto to read at your own pace.
        </p>
      )}
    </div>
  );
}