interface SceneStageProps {
  imageSrc: string | null;
  sceneLocation: string;
  dayIndicator: string;
}

export default function SceneStage({ imageSrc, sceneLocation, dayIndicator }: SceneStageProps) {
  return (
    <div className="vn-stage relative w-full overflow-hidden bg-zinc-950">
      {imageSrc ? (
        <img
          src={imageSrc}
          className="absolute inset-0 h-full w-full object-cover object-center"
          alt=""
        />
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