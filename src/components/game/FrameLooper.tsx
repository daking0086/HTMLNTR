import { useCallback, useEffect, useMemo, useState } from 'react';
import type { LooperLine } from './Looper';
import { LOOPER_CONTINUE_EVENT } from '../../logic/looperControl';
import { preloadImages } from '../../utils/preloadImages';

export type FrameLoopMode = 'pingpong' | 'forward';

export interface FrameLooperProps {
  /** Still frames cycled to fake motion (Summertime Saga–style) */
  frames: string[];
  /** Ms per frame (default 130) */
  frameIntervalMs?: number;
  /** pingpong = 1→N→1… · forward = 1→N→1… jump restart */
  loopMode?: FrameLoopMode;
  /** Lines advance on Continue; scene ends after last line */
  lines: Array<LooperLine | string>;
  sceneLocation?: string;
  dayIndicator?: string;
  onComplete?: () => void;
  className?: string;
  textSizeClass?: string;
}

function normalizeLines(lines: Array<LooperLine | string>): LooperLine[] {
  return lines.map((line) => (typeof line === 'string' ? { text: line } : line));
}

/**
 * FRAME LOOPER — multi-still background that auto-cycles (STS-style motion)
 * while dialogue advances on Continue. Ends when dialogue finishes.
 */
export default function FrameLooper({
  frames,
  frameIntervalMs = 130,
  loopMode = 'pingpong',
  lines,
  sceneLocation = '',
  dayIndicator = '',
  onComplete,
  className = '',
  textSizeClass = 'text-[17px]',
}: FrameLooperProps) {
  const script = useMemo(() => normalizeLines(lines), [lines]);
  const frameList = useMemo(() => frames.filter(Boolean), [frames]);

  const [lineIndex, setLineIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  /** Painted frame — only updates when the next still is loaded */
  const [shownFrame, setShownFrame] = useState<string | null>(frameList[0] ?? null);

  useEffect(() => {
    if (frameList.length) preloadImages(frameList);
  }, [frameList]);

  useEffect(() => {
    setFrameIndex(0);
  }, [frameList[0], frameList.length]);

  // Auto-cycle frames (ping-pong or forward loop)
  useEffect(() => {
    if (frameList.length < 2) return;

    let dir = 1;
    let index = 0;

    const id = window.setInterval(() => {
      const last = frameList.length - 1;

      if (loopMode === 'forward') {
        index = index >= last ? 0 : index + 1;
      } else {
        index += dir;
        if (index >= last) {
          index = last;
          dir = -1;
        } else if (index <= 0) {
          index = 0;
          dir = 1;
        }
      }

      setFrameIndex(index);
    }, frameIntervalMs);

    return () => window.clearInterval(id);
  }, [frameList, frameIntervalMs, loopMode]);

  // Hold previous still until next is ready (no black flash)
  useEffect(() => {
    const target = frameList[frameIndex];
    if (!target) {
      setShownFrame(null);
      return;
    }
    if (target === shownFrame) return;

    let cancelled = false;
    const img = new Image();
    img.decoding = 'async';
    const commit = () => {
      if (!cancelled) setShownFrame(target);
    };
    img.onload = commit;
    img.onerror = commit;
    img.src = target;
    if (img.complete) commit();

    return () => {
      cancelled = true;
    };
  }, [frameList, frameIndex, shownFrame]);

  const current = script[lineIndex];
  const isLast = lineIndex >= script.length - 1;
  const total = script.length;

  const handleContinue = useCallback(() => {
    if (finished || script.length === 0) return;

    if (!isLast) {
      setLineIndex((i) => i + 1);
      return;
    }

    setFinished(true);
    onComplete?.();
  }, [finished, isLast, onComplete, script.length]);

  useEffect(() => {
    const onGlobalContinue = () => handleContinue();
    window.addEventListener(LOOPER_CONTINUE_EVENT, onGlobalContinue);
    return () => window.removeEventListener(LOOPER_CONTINUE_EVENT, onGlobalContinue);
  }, [handleContinue]);

  if (frameList.length === 0) {
    return (
      <div
        className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${className}`}
      >
        <p className="text-sm text-zinc-500">FrameLooper: no frames</p>
      </div>
    );
  }

  if (script.length === 0) {
    return (
      <div
        className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${className}`}
      >
        <p className="text-sm text-zinc-500">FrameLooper: no dialogue lines</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full min-h-0 flex flex-col overflow-hidden bg-zinc-950 ${className}`}
    >
      <div className="absolute inset-0 z-0">
        {shownFrame && (
          <img
            src={shownFrame}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />
        )}
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
            Line {Math.min(lineIndex + 1, total)} / {total}
            <span className="text-zinc-700"> · </span>
            Frame {frameIndex + 1} / {frameList.length}
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
