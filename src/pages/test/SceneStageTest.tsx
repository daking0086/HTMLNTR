import { useMemo, useState } from 'react';
import ComponentTestShell from '../../components/dev/ComponentTestShell';
import UsageGuide from '../../components/dev/UsageGuide';
import SceneStage from '../../components/game/SceneStage';
import { assetUrl } from '../../utils/assetUrl';

const STILLS = [
  {
    id: 'office',
    label: 'Empty office',
    src: assetUrl('/assets/images/backgrounds/airport/emptyOffice.png'),
  },
  {
    id: 'airport',
    label: 'Airport outside',
    src: assetUrl('/assets/images/backgrounds/airport/airport.png'),
  },
  {
    id: 'crowd',
    label: 'Airport crowd',
    src: assetUrl('/assets/images/backgrounds/airport/airportPeople.png'),
  },
];

const GRIND_LOOP = [
  assetUrl('/assets/images/flashback/grinding/ezgif-frame-001.jpg'),
  assetUrl('/assets/images/flashback/grinding/ezgif-frame-005.jpg'),
  assetUrl('/assets/images/flashback/grinding/ezgif-frame-010.jpg'),
  assetUrl('/assets/images/flashback/grinding/ezgif-frame-014.jpg'),
  assetUrl('/assets/images/flashback/grinding/ezgif-frame-018.jpg'),
];

type Mode = 'still' | 'loop' | 'empty';

/**
 * Sandbox for SceneStage — still CGs, empty placeholder, optional frame loop.
 */
export default function SceneStageTest() {
  const [mode, setMode] = useState<Mode>('still');
  const [stillId, setStillId] = useState(STILLS[0].id);
  const [motionBlur, setMotionBlur] = useState(false);
  const [loopMs, setLoopMs] = useState(130);

  const stillSrc = useMemo(
    () => STILLS.find((s) => s.id === stillId)?.src ?? null,
    [stillId],
  );

  const imageSrc = mode === 'empty' ? null : mode === 'loop' ? GRIND_LOOP[0] : stillSrc;
  const loopFrames = mode === 'loop' ? GRIND_LOOP : null;

  return (
    <ComponentTestShell
      title="Scene stage"
      description={
        <>
          Preview <code className="text-violet-300">SceneStage</code> — still CGs, empty state,
          and image-loop playback. Edit component props in{' '}
          <code className="text-violet-300">src/components/game/SceneStage.tsx</code>.
        </>
      }
      controls={
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ['still', 'Still CG'],
                ['loop', 'Frame loop'],
                ['empty', 'Empty / placeholder'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  mode === id
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {mode === 'still' && (
            <div className="flex flex-wrap gap-2">
              {STILLS.map((still) => (
                <button
                  key={still.id}
                  type="button"
                  onClick={() => setStillId(still.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    stillId === still.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {still.label}
                </button>
              ))}
            </div>
          )}

          {mode === 'loop' && (
            <label className="flex items-center gap-3 text-sm text-zinc-400">
              <span className="w-28">Frame ms</span>
              <input
                type="range"
                min={60}
                max={240}
                step={10}
                value={loopMs}
                onChange={(e) => setLoopMs(Number(e.target.value))}
                className="flex-1 max-w-xs"
              />
              <span className="tabular-nums text-zinc-300 w-12">{loopMs}</span>
            </label>
          )}

          <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
            <input
              type="checkbox"
              checked={motionBlur}
              onChange={(e) => setMotionBlur(e.target.checked)}
              className="rounded border-zinc-600"
            />
            Motion blur on still change
          </label>
        </div>
      }
      notes={
        <UsageGuide
          source="src/components/game/SceneStage.tsx"
          purpose="Main VN picture frame: one still CG, empty placeholder, or a multi-frame ping-pong loop. Holds the previous image until the next is loaded (no black flash)."
          props={[
            {
              name: 'imageSrc',
              detail: 'Still CG URL, or first frame when using loopFrames. null = placeholder.',
            },
            {
              name: 'loopFrames',
              detail: 'Optional string[] of frame URLs (2+). Ping-pongs automatically.',
            },
            {
              name: 'loopIntervalMs',
              detail: 'Ms per frame when looping (default 110).',
            },
            {
              name: 'sceneLocation / dayIndicator',
              detail: 'Top overlay labels.',
            },
            {
              name: 'motionBlur',
              detail: 'Optional enter animation on still change (default false).',
            },
          ]}
          sandboxSteps={[
            'Still CG — pick a background and click other stills to test swaps.',
            'Frame loop — sample grind frames; drag Frame ms for speed.',
            'Empty — placeholder when no image is set.',
            'Toggle motion blur to preview the optional enter effect.',
          ]}
          example={`
import SceneStage from './components/game/SceneStage';
import { assetUrl } from './utils/assetUrl';

// Still
<SceneStage
  imageSrc={assetUrl('/assets/images/backgrounds/airport/airport.png')}
  sceneLocation="Airport"
  dayIndicator="Night"
/>

// Multi-frame loop (optional)
<SceneStage
  imageSrc={frames[0]}
  loopFrames={frames}
  loopIntervalMs={130}
  sceneLocation="…"
  dayIndicator="…"
/>
`}
          tips={
            <ul className="list-disc list-inside space-y-1">
              <li>
                In story beats use <code className="text-zinc-400">image:</code> on narration/dialogue.
              </li>
              <li>
                Optional <code className="text-zinc-400">imageLoop</code> +{' '}
                <code className="text-zinc-400">imageLoopMs</code> on a scene for auto frame cycle.
              </li>
              <li>
                Prefer one image per beat (like grind up/down/up) for click-through sequences.
              </li>
            </ul>
          }
        />
      }
    >
      <div className="flex-1 min-h-0 flex flex-col">
        <SceneStage
          imageSrc={imageSrc}
          loopFrames={loopFrames}
          loopIntervalMs={loopMs}
          motionBlur={motionBlur}
          sceneLocation="Component lab · Scene stage"
          dayIndicator={mode === 'loop' ? `Loop ${loopMs}ms` : mode}
        />
      </div>
    </ComponentTestShell>
  );
}
