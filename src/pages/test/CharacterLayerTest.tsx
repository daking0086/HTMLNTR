import { useState } from 'react';
import SceneCharacterStage from '../../components/game/SceneCharacterStage';
import { OFFICER_1_SPRITE, OFFICER_2_SPRITE } from '../../data/characterDisplay';

const TEST_BG = '/assets/images/backgrounds/airport/emptyOffice.png';

export default function CharacterLayerTest() {
  const [mode, setMode] = useState<'single' | 'dual'>('single');
  const [activeSpeakerId, setActiveSpeakerId] = useState<string>('officer-1');

  const characters = mode === 'single' ? [OFFICER_1_SPRITE] : [OFFICER_1_SPRITE, OFFICER_2_SPRITE];

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8">
      <div className="max-w-[1200px] mx-auto space-y-6">
        <header className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-blue-400">Dev test</p>
          <h1 className="text-2xl font-semibold text-zinc-100">Character layer</h1>
          <p className="text-sm text-zinc-500 max-w-2xl">
            To change size and position, edit{' '}
            <code className="text-violet-300">src/data/characterDisplay.ts</code> and refresh.
          </p>
        </header>

        <div
          className="vn-container vn-game-layout bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
          style={{ height: 'min(70vh, 720px)', minHeight: '480px' }}
        >
          <SceneCharacterStage
            backgroundSrc={TEST_BG}
            characters={characters}
            activeSpeakerId={activeSpeakerId}
            sceneLocation="Security Scanner Area - Empty"
            dayIndicator="Character Layer Test"
            speakerScale={1.08}
            idleScale={0.94}
            backgroundBlurPx={4}
          />

          <div className="vn-script-panel px-5 py-4 text-sm text-zinc-300 border-t border-zinc-800">
            <p>
              Active speaker:{' '}
              <span className="text-blue-300 font-medium">
                {characters.find((c) => c.id === activeSpeakerId)?.name ?? 'None'}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setMode('single');
              setActiveSpeakerId('officer-1');
            }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              mode === 'single'
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Single character
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('dual');
              setActiveSpeakerId('officer-1');
            }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              mode === 'dual'
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Two characters
          </button>
        </div>

        {mode === 'dual' && (
          <div className="flex flex-wrap gap-3">
            {characters.map((character) => (
              <button
                key={character.id}
                type="button"
                onClick={() => setActiveSpeakerId(character.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSpeakerId === character.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                Speak as {character.name}
              </button>
            ))}
          </div>
        )}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 text-sm text-zinc-400 space-y-2">
          <p className="font-medium text-zinc-200">Quick tuning guide</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>
              <strong className="text-zinc-300">Bigger</strong> → raise <code>heightPercent</code> and{' '}
              <code>scale</code>
            </li>
            <li>
              <strong className="text-zinc-300">Move right</strong> → raise <code>left</code> (e.g. 68% → 75%)
            </li>
            <li>
              <strong className="text-zinc-300">Move left</strong> → lower <code>left</code>
            </li>
            <li>
              <strong className="text-zinc-300">Nudge up</strong> → set <code>bottom</code> to e.g.{' '}
              <code>'12px'</code>
            </li>
            <li>
              <strong className="text-zinc-300">Wider</strong> → raise <code>maxWidth</code> (e.g. '70%')
            </li>
          </ul>
        </div>

        <a href="/" className="inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Back to game
        </a>
      </div>
    </div>
  );
}