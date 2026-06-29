interface NarrationContinueProps {
  onContinue: () => void;
  autoPlay?: boolean;
}

export default function NarrationContinue({ onContinue, autoPlay = false }: NarrationContinueProps) {
  return (
    <div className="px-8 pb-8 pt-2 border-t border-zinc-800 bg-zinc-950">
      <button
        type="button"
        onClick={onContinue}
        className="w-full flex items-center justify-center gap-x-2 py-3.5 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-2xl text-sm font-medium"
      >
        {autoPlay ? (
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
    </div>
  );
}