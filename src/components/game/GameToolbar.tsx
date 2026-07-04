interface GameToolbarProps {
  autoPlay: boolean;
  skipMode: boolean;
  storyLogEnabled: boolean;
  storyLogOpen: boolean;
  canGoBack: boolean;
  onToggleAuto: () => void;
  onToggleSkip: () => void;
  onToggleStoryLog: () => void;
  onBack: () => void;
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
  disabled = false,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      className={`px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-x-1.5 disabled:opacity-40 disabled:pointer-events-none ${
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
  skipMode,
  storyLogEnabled,
  storyLogOpen,
  canGoBack,
  onToggleAuto,
  onToggleSkip,
  onToggleStoryLog,
  onBack,
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
        icon="fa-backward-step"
        label="Back"
        onClick={onBack}
        disabled={!canGoBack}
      />
      <ToolButton
        icon="fa-angles-right"
        label="Skip"
        onClick={onToggleSkip}
        active={skipMode}
      />
      {storyLogEnabled && (
        <ToolButton
          icon="fa-list"
          label="Log"
          onClick={onToggleStoryLog}
          active={storyLogOpen}
        />
      )}
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