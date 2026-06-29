export default function ExitScreen() {
  return (
    <div className="vn-container bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="px-8 py-16 text-center">
        <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <i className="fa-solid fa-door-open text-zinc-400 text-2xl" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">Thanks for playing</h2>
        <p className="text-sm text-zinc-500 mt-2 max-w-sm mx-auto">
          You can close this browser tab to exit the game.
        </p>
      </div>
    </div>
  );
}