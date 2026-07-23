import { useState } from 'react';
import ComponentTestShell from '../../components/dev/ComponentTestShell';
import UsageGuide from '../../components/dev/UsageGuide';
import SceneCharacterStage from '../../components/game/SceneCharacterStage';
import { OFFICER_1_SPRITE, OFFICER_2_SPRITE } from '../../data/characterDisplay';
import { assetUrl } from '../../utils/assetUrl';

const TEST_BG = assetUrl(
  '/assets/images/backgrounds/airport/Gemini_Generated_Image_4danq24danq24dan-clean.png',
);

export default function CharacterLayerTest() {
  const [mode, setMode] = useState<'single' | 'dual'>('single');
  const [activeSpeakerId, setActiveSpeakerId] = useState<string>('officer-1');

  const characters = mode === 'single' ? [OFFICER_1_SPRITE] : [OFFICER_1_SPRITE, OFFICER_2_SPRITE];

  return (
    <ComponentTestShell
      title="Character layer"
      description={
        <>
          To change size and position, edit{' '}
          <code className="text-violet-300">src/data/characterDisplay.ts</code> and refresh.
        </>
      }
      stageHeight="min(70vh, 720px)"
      controls={
        <div className="space-y-3">
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
        </div>
      }
      notes={
        <UsageGuide
          source="src/components/game/SceneCharacterStage.tsx + CharacterLayer.tsx"
          purpose="Show 1–3 character sprites over a blurred background. Used in-game when a scene has characters: ['officer-1', …]."
          props={[
            {
              name: 'backgroundSrc',
              detail: 'BG image URL (use assetUrl for public paths).',
            },
            {
              name: 'characters',
              detail: 'Array of StageCharacter from characterDisplay.ts.',
            },
            {
              name: 'activeSpeakerId',
              detail: 'Which sprite is “speaking” (zoom + highlight).',
            },
            {
              name: 'speakerScale / idleScale',
              detail: 'Zoom for speaking vs idle when 2+ characters.',
            },
            {
              name: 'backgroundBlurPx',
              detail: 'How soft the BG blur is under sprites.',
            },
            {
              name: 'motionBlur',
              detail: 'Optional CG enter animation (default off).',
            },
          ]}
          sandboxSteps={[
            'Use Single / Two characters to switch layout.',
            'In dual mode, click Speak as… to test speaker zoom.',
            'Edit OFFICER_1_SPRITE / OFFICER_2_SPRITE in characterDisplay.ts, then refresh.',
          ]}
          example={`
import SceneCharacterStage from './components/game/SceneCharacterStage';
import { OFFICER_1_SPRITE } from './data/characterDisplay';
import { assetUrl } from './utils/assetUrl';

<SceneCharacterStage
  backgroundSrc={assetUrl(
    '/assets/images/backgrounds/airport/Gemini_Generated_Image_4danq24danq24dan-clean.png',
  )}
  characters={[OFFICER_1_SPRITE]}
  activeSpeakerId="officer-1"
  sceneLocation="Security"
  dayIndicator="Night"
/>
`}
          tips={
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong className="text-zinc-400">Bigger</strong> → raise heightPercent and scale
              </li>
              <li>
                <strong className="text-zinc-400">Move right/left</strong> → raise/lower left %
              </li>
              <li>
                <strong className="text-zinc-400">Nudge up</strong> → bottom e.g. &apos;12px&apos;
              </li>
              <li>
                In story data: set <code className="text-zinc-400">characters: [&apos;officer-1&apos;]</code>{' '}
                on a scene beat.
              </li>
            </ul>
          }
        />
      }
    >
      <div className="flex-1 min-h-0 flex flex-col vn-game-layout">
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
        <div className="vn-script-panel px-5 py-4 text-sm text-zinc-300 border-t border-zinc-800 shrink-0">
          <p>
            Active speaker:{' '}
            <span className="text-blue-300 font-medium">
              {characters.find((c) => c.id === activeSpeakerId)?.name ?? 'None'}
            </span>
          </p>
        </div>
      </div>
    </ComponentTestShell>
  );
}
