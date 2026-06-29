interface GameToolbarProps {
  autoPlay: boolean;
  onToggleAuto: () => void;
  onMenu: () => void;
  onSave: () => void;
  onLoad: () => void;
  onOptions: () => void;
  onGallery: () => void;
  onExit: () => void;
}

function ToolButton({
  icon,
  label,
  onClick,
  active = false,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={`px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-x-1.5 ${
        active
          ? 'bg-blue-600 text-white hover:bg-blue-500'
          : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
      }`}
    >
      <i className={`fa-solid ${icon}`} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export default function GameToolbar({
  autoPlay,
  onToggleAuto,
  onMenu,
  onSave,
  onLoad,
  onOptions,
  onGallery,
  onExit,
}: GameToolbarProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      <ToolButton
        icon="fa-forward-step"
        label="Auto"
        onClick={onToggleAuto}
        active={autoPlay}
      />
      <ToolButton icon="fa-floppy-disk" label="Save" onClick={onSave} />
      <ToolButton icon="fa-folder-open" label="Load" onClick={onLoad} />
      <ToolButton icon="fa-images" label="Gallery" onClick={onGallery} />
      <ToolButton icon="fa-sliders" label="Options" onClick={onOptions} />
      <ToolButton icon="fa-bars" label="Menu" onClick={onMenu} />
      <ToolButton icon="fa-door-open" label="Exit" onClick={onExit} />
    </div>
  );
}