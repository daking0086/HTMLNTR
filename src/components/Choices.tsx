import type { Choice } from '../types/game';

interface ChoicesProps {
  choices: Choice[];
  onChoice: (choice: Choice) => void;
  compact?: boolean;
}

export default function Choices({ choices, onChoice, compact = false }: ChoicesProps) {
  if (!choices.length) return null;

  return (
    <div
      className={`border-t border-zinc-800 bg-zinc-950 shrink-0 ${
        compact ? 'px-4 pb-3 pt-2' : 'vn-padding-x pb-[var(--vn-padding)] pt-3'
      }`}
    >
      <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 px-1">
        Your response
      </div>
      <div className="grid grid-cols-1 gap-1.5 max-h-28 overflow-y-auto">
        {choices.map((choice) => (
          <button
            key={choice.text}
            type="button"
            onClick={() => onChoice(choice)}
            className={`choice-btn w-full text-left bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl transition-all flex items-center justify-between group ${
              compact ? 'px-3 py-2 text-xs' : 'px-5 py-4 rounded-2xl text-sm'
            }`}
          >
            <span>{choice.text}</span>
            <div className="flex gap-x-1 text-[10px] opacity-60 group-hover:opacity-100">
              {choice.affection !== undefined && choice.affection !== 0 && (
                <span className={choice.affection > 0 ? 'text-red-400' : 'text-red-500'}>
                  A{choice.affection > 0 ? '+' : ''}
                  {choice.affection}
                </span>
              )}
              {choice.corruption !== undefined && choice.corruption !== 0 && (
                <span className="text-violet-400">C+{choice.corruption}</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}