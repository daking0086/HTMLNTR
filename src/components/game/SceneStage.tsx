import { useEffect, useState } from 'react';

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

export default function SceneStage({
  imageSrc,
  loopFrames = null,
  loopIntervalMs = 110,
  sceneLocation,
  dayIndicator,
  motionBlur = false,
}: SceneStageProps) {
  const frames = loopFrames && loopFrames.length > 1 ? loopFrames : null;
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    setFrameIndex(0);
  }, [frames?.[0], frames?.length]);

  useEffect(() => {
    if (!frames) return;

    let dir = 1;
    let index = 0;

    const id = window.setInterval(() => {
      const last = frames.length - 1;
      index += dir;
      if (index >= last) {
        index = last;
        dir = -1;
      } else if (index <= 0) {
        index = 0;
        dir = 1;
      }
      setFrameIndex(index);
    }, loopIntervalMs);

    return () => window.clearInterval(id);
  }, [frames, loopIntervalMs]);

  const displaySrc = frames ? frames[frameIndex] ?? imageSrc : imageSrc;

  return (
    <div className="vn-stage relative w-full overflow-hidden bg-zinc-950">
      {displaySrc ? (
        <div
          key={frames ? 'loop' : displaySrc}
          className={motionBlur && !frames ? 'vn-stage-cg-enter' : 'absolute inset-0'}
        >
          <img
            src={displaySrc}
            className="vn-stage-cg-image"
            alt=""
            draggable={false}
          />
          {frames?.map((src) => (
            <img key={src} src={src} alt="" className="hidden" aria-hidden />
          ))}
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
