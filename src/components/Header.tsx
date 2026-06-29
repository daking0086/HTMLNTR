import StatsBar from './StatsBar';
import GameToolbar from './game/GameToolbar';

interface HeaderProps {
  affection: number;
  corruption: number;
  autoPlay?: boolean;
  onToggleAuto?: () => void;
  showToolbar?: boolean;
  onMenu?: () => void;
  onSave?: () => void;
  onLoad?: () => void;
  onOptions?: () => void;
  onGallery?: () => void;
  onExit?: () => void;
}

export default function Header({
  affection,
  corruption,
  autoPlay = false,
  onToggleAuto,
  showToolbar = false,
  onMenu,
  onSave,
  onLoad,
  onOptions,
  onGallery,
  onExit,
}: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 px-2">
      <div className="flex items-center gap-x-3">
        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
          <i className="fa-solid fa-mobile-screen text-white text-2xl" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tighter">ThePhoneGame</h1>
          <p className="text-xs text-zinc-500 -mt-1">React + TypeScript</p>
        </div>
      </div>

      <div className="flex flex-col sm:items-end gap-3">
        {showToolbar && onToggleAuto && onMenu && onSave && onLoad && onOptions && onGallery && onExit && (
          <GameToolbar
            autoPlay={autoPlay}
            onToggleAuto={onToggleAuto}
            onMenu={onMenu}
            onSave={onSave}
            onLoad={onLoad}
            onOptions={onOptions}
            onGallery={onGallery}
            onExit={onExit}
          />
        )}
        <StatsBar affection={affection} corruption={corruption} />
      </div>
    </header>
  );
}