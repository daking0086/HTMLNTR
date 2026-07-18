import { useCallback, useMemo, useState } from 'react';

export interface LooperLine {
  /** Dialogue or thought text */
  text: string;
  /** Optional speaker label (omit for pure narration/thoughts) */
  speaker?: string;
}

export interface LooperProps {
  /** Looping background (gif/webp/video still via img) — plays continuously */
  backgroundSrc: string;
  /** Lines advance one-by-one on Continue; scene ends after the last line */
  lines: Array<LooperLine | string>;
  sceneLocation?: string;
  dayIndicator?: string;
  /** Called once when the user continues past the final line */
  onComplete?: () => void;
  className?: string;
  textSizeClass?: string;
}

function normalizeLines(lines: Array<LooperLine | string>): LooperLine[] {
  return lines.map((line) => (typeof line === 'string' ? { text: line } : line));
}

/**
 * LOOPER — full-bleed looping background (e.g. gif) with multi-line dialogue.
 * Background never stops; only text advances on Continue.
 * Ends when the user continues after the last line.
 */
export default function Looper({
  backgroundSrc,
  lines,
  sceneLocation = '',
  dayIndicator = '',
  onComplete,
  className = '',
  textSizeClass = 'text-[17px]',
}: LooperProps) {
  const script = useMemo(() => normalizeLines(lines), [lines]);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = script[index];
  const isLast = index >= script.length - 1;
  const total = script.length;

  const handleContinue = useCallback(() => {
    if (finished || script.length === 0) return;

    if (!isLast) {
      setIndex((i) => i + 1);
      return;
    }

    setFinished(true);
    onComplete?.();
  }, [finished, isLast, onComplete, script.length]);

  if (script.length === 0) {
    return (
      <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${className}`}>
        <p className="text-sm text-zinc-500">Looper: no dialogue lines</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full min-h-0 flex flex-col overflow-hidden bg-zinc-950 ${className}`}
    >
      {/* Infinite gif / looping visual — never remounted with dialogue */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />
      </div>

      {(sceneLocation || dayIndicator) && (
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 py-3 bg-gradient-to-b from-black/75 via-black/40 to-transparent">
          {sceneLocation && (
            <p className="text-xs text-zinc-200 truncate">{sceneLocation}</p>
          )}
          {dayIndicator && (
            <p className="text-xs text-zinc-400 flex items-center gap-x-1.5 shrink-0">
              <i className="fa-solid fa-clock text-[10px]" />
              <span>{dayIndicator}</span>
            </p>
          )}
        </div>
      )}

      <div className="relative z-10 mt-auto flex flex-col shrink-0 border-t border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm">
        <div className="px-5 py-4 min-h-[7.5rem]">
          {current.speaker && (
            <div className="character-name font-semibold text-blue-300 text-sm tracking-[0.5px] mb-1">
              {current.speaker}
            </div>
          )}
          <p
            className={`vn-text ${textSizeClass} leading-relaxed text-zinc-100 whitespace-pre-wrap ${
              !current.speaker ? 'text-zinc-200 italic' : ''
            }`}
          >
            {current.text}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-widest text-zinc-600">
            {Math.min(index + 1, total)} / {total}
          </p>
        </div>

        <div className="px-4 pb-3 pt-1 border-t border-zinc-800">
          {finished ? (
            <div className="w-full py-2.5 rounded-xl text-xs text-center text-zinc-500 bg-zinc-900 border border-zinc-800">
              Scene complete
            </div>
          ) : (
            <button
              type="button"
              onClick={handleContinue}
              className="w-full flex items-center justify-center gap-x-2 bg-zinc-800 hover:bg-zinc-700 transition-colors font-medium py-2.5 rounded-xl text-xs"
            >
              <span>{isLast ? 'Finish' : 'Continue'}</span>
              <i className={`fa-solid ${isLast ? 'fa-check' : 'fa-arrow-right'}`} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
