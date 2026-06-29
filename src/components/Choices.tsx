import type { Choice } from '../types/game';

interface ChoicesProps {
  choices: Choice[];
  onChoice: (choice: Choice) => void;
}

export default function Choices({ choices, onChoice }: ChoicesProps) {
  if (!choices.length) return null;

  return (
    <div className="px-8 pb-8 pt-2 border-t border-zinc-800 bg-zinc-950">
      <div className="text-xs uppercase tracking-widest text-zinc-500 mb-3 px-1">
        Your response
      </div>
      <div className="grid grid-cols-1 gap-2">
        {choices.map((choice) => (
          <button
            key={choice.text}
            type="button"
            onClick={() => onChoice(choice)}
            className="choice-btn w-full text-left px-5 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl text-sm transition-all flex items-center justify-between group"
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