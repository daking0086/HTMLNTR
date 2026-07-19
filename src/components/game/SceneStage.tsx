import { useEffect, useMemo, useState } from 'react';
import { preloadImages } from '../../utils/preloadImages';

interface SceneStageProps {
  imageSrc: string | null;
  /** When set (2+ frames), cycles these for a looping CG effect */
  loopFrames?: string[] | null;
  /** Ms per frame when looping (default 110) */
  loopIntervalMs?: number;
  sceneLocation: string;
  dayIndicator: string;
  /** Play motion-blur enter when the picture changes (default off; set true to enable) */
  motionBlur?: boolean;
}

/**
 * Holds the previous CG on screen until the next one finishes loading
 * so beat transitions never flash black on first playthrough.
 * Supports FrameLooper-style still loops via loopFrames.
 */
export default function SceneStage({
  imageSrc,
  loopFrames = null,
  loopIntervalMs = 110,
  sceneLocation,
  dayIndicator,
  motionBlur = false,
}: SceneStageProps) {
  // Stabilize array identity so parent re-renders (typewriter) don't reset the loop
  const framesKey = loopFrames && loopFrames.length > 1 ? loopFrames.join('\0') : '';
  const frames = useMemo(() => {
    if (!framesKey) return null;
    return framesKey.split('\0');
  }, [framesKey]);

  const [frameIndex, setFrameIndex] = useState(0);
  /** Actually painted CG — only advances when the new src is ready */
  const [shownSrc, setShownSrc] = useState<string | null>(imageSrc);

  // Warm loop frames once per unique set
  useEffect(() => {
    if (frames) preloadImages(frames);
  }, [framesKey]);

  // Auto-cycle frames forward only: 1 → 2 → 3 → 1 → …
  useEffect(() => {
    if (!frames || frames.length < 2) return;

    let index = 0;
    setFrameIndex(0);

    const id = window.setInterval(() => {
      index = (index + 1) % frames.length;
      setFrameIndex(index);
    }, loopIntervalMs);

    return () => window.clearInterval(id);
  }, [framesKey, loopIntervalMs]);

  // When target still changes, keep old image until new one is fully loaded
  useEffect(() => {
    const target = frames ? frames[frameIndex] ?? imageSrc : imageSrc;

    if (!target) {
      setShownSrc(null);
      return;
    }

    if (target === shownSrc) return;

    let cancelled = false;
    const img = new Image();
    img.decoding = 'async';

    const commit = () => {
      if (!cancelled) setShownSrc(target);
    };

    img.onload = commit;
    img.onerror = commit;
    img.src = target;

    if (img.complete) commit();

    return () => {
      cancelled = true;
    };
  }, [imageSrc, frames, frameIndex, shownSrc]);

  return (
    <div className="vn-stage relative w-full overflow-hidden bg-zinc-950">
      {shownSrc ? (
        <div
          key={motionBlur && !frames ? shownSrc : 'stable'}
          className={motionBlur && !frames ? 'vn-stage-cg-enter' : 'absolute inset-0'}
        >
          <img
            src={shownSrc}
            className="vn-stage-cg-image"
            alt=""
            draggable={false}
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
          <div className="text-center px-6">
            <i className="fa-solid fa-image text-5xl text-zinc-800 mb-3" />
            <p className="text-xs text-zinc-600 uppercase tracking-widest">Scene CG</p>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 py-3 bg-gradient-to-b from-black/75 via-black/40 to-transparent">
        <p className="text-xs text-zinc-200 truncate">{sceneLocation}</p>
        <p className="text-xs text-zinc-400 flex items-center gap-x-1.5 shrink-0">
          <i className="fa-solid fa-clock text-[10px]" />
          <span>{dayIndicator}</span>
        </p>
      </div>
    </div>
  );
}
