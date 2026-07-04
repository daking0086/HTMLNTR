import StatsBar from './StatsBar';
import GameToolbar from './game/GameToolbar';

interface HeaderProps {
  affection: number;
  corruption: number;
  autoPlay?: boolean;
  skipMode?: boolean;
  storyLogEnabled?: boolean;
  storyLogOpen?: boolean;
  canGoBack?: boolean;
  onToggleAuto?: () => void;
  onToggleSkip?: () => void;
  onToggleStoryLog?: () => void;
  onBack?: () => void;
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
  skipMode = false,
  storyLogEnabled = true,
  storyLogOpen = false,
  canGoBack = false,
  onToggleAuto,
  onToggleSkip,
  onToggleStoryLog,
  onBack,
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
        </div>
      </div>

      <div className="flex flex-col sm:items-end gap-3">
        {showToolbar &&
          onToggleAuto &&
          onToggleSkip &&
          onToggleStoryLog &&
          onBack &&
          onMenu &&
          onSave &&
          onLoad &&
          onOptions &&
          onGallery &&
          onExit && (
          <GameToolbar
            autoPlay={autoPlay}
            skipMode={skipMode}
            storyLogEnabled={storyLogEnabled}
            storyLogOpen={storyLogOpen}
            canGoBack={canGoBack}
            onToggleAuto={onToggleAuto}
            onToggleSkip={onToggleSkip}
            onToggleStoryLog={onToggleStoryLog}
            onBack={onBack}
            onMenu={onMenu}
            onSave={onSave}
            onLoad={onLoad}
            onOptions={onOptions}
            onGallery={onGallery}
            onExit={onExit}
          />
        )}
        {/* <StatsBar affection={affection} corruption={corruption} /> */}
      </div>
    </header>
  );
}