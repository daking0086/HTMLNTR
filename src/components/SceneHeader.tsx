interface SceneHeaderProps {
  portrait: string | null;
  sceneLocation: string;
  dayIndicator: string;
}

export default function SceneHeader({
  portrait,
  sceneLocation,
  dayIndicator,
}: SceneHeaderProps) {
  return (
    <div className="px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="vn-portrait rounded-2xl overflow-hidden border-2 border-zinc-700 bg-zinc-800 flex-shrink-0">
          {portrait && (
            <img src={portrait} className="w-full h-full object-cover" alt="" />
          )}
        </div>
        <div>
          <div className="text-xs text-zinc-400">{sceneLocation}</div>
        </div>
      </div>

      <div className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 flex items-center gap-x-1.5">
        <i className="fa-solid fa-clock text-xs" />
        <span>{dayIndicator}</span>
      </div>
    </div>
  );
}