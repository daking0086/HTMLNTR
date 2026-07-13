import MenuButton from './MenuButton';

interface MainMenuProps {
  hasSave: boolean;
  onNewGame: () => void;
  onContinue: () => void;
  onLoad: () => void;
  onOptions: () => void;
  onGallery: () => void;
  onExit: () => void;
}

export default function MainMenu({
  hasSave,
  onNewGame,
  onContinue,
  onLoad,
  onOptions,
  onGallery,
  onExit,
}: MainMenuProps) {
  return (
    <div className="vn-container bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="px-8 py-10 text-center border-b border-zinc-800 bg-zinc-950">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <i className="fa-solid fa-mobile-screen text-white text-3xl" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tighter">Nights in Aidni</h1>
        <p className="text-sm text-zinc-500 mt-1">Release 1</p>
      </div>

      <div className="p-8 grid grid-cols-1 gap-3 max-w-md mx-auto">
        <MenuButton icon="fa-play" label="New Game" onClick={onNewGame} variant="primary" />
        <MenuButton
          icon="fa-forward"
          label="Continue"
          onClick={onContinue}
          disabled={!hasSave}
        />
        <MenuButton icon="fa-folder-open" label="Load" onClick={onLoad} />
        <MenuButton icon="fa-sliders" label="Options" onClick={onOptions} />
        <MenuButton icon="fa-images" label="Gallery" onClick={onGallery} />
        <MenuButton icon="fa-door-open" label="Exit" onClick={onExit} />
      </div>
    </div>
  );
}