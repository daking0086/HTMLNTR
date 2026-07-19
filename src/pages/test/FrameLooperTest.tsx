import { useState } from 'react';
import ComponentTestShell from '../../components/dev/ComponentTestShell';
import UsageGuide from '../../components/dev/UsageGuide';
import FrameLooper, { type FrameLoopMode } from '../../components/game/FrameLooper';
import { assetUrl } from '../../utils/assetUrl';

/** Race stills — Summertime Saga–style fake motion */
const RACE_FRAMES = [
  assetUrl('/assets/images/race/race1.png'),
  assetUrl('/assets/images/race/race2.png'),
  assetUrl('/assets/images/race/race3.png'),
  assetUrl('/assets/images/race/race4.png'),
  assetUrl('/assets/images/race/race5.png'),
  assetUrl('/assets/images/race/race6.png'),
];

const RACER_THOUGHTS = [
  {
    speaker: 'Thoughts',
    text: "Engine's redlining. Don't look at the mirror — look at the gap.",
  },
  {
    speaker: 'Thoughts',
    text: "They're drafting me. One more corner and I dump them in the dust.",
  },
  {
    speaker: 'Thoughts',
    text: "Hands steady. Breath short. This is what all those nights were for.",
  },
  {
    speaker: 'Thoughts',
    text: "Finish line. Don't lift. Don't think. Just drive.",
  },
];

/**
 * Sandbox for FrameLooper — stills cycle while dialogue advances.
 * Open: http://localhost:5173/HTMLNTR/test/frame-looper
 */
export default function FrameLooperTest() {
  const [runKey, setRunKey] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [frameMs, setFrameMs] = useState(140);
  const [loopMode, setLoopMode] = useState<FrameLoopMode>('pingpong');

  return (
    <ComponentTestShell
      title="Frame looper"
      description={
        <>
          Summertime Saga–style motion: still frames auto-cycle while dialogue advances on Continue.
          Source: <code className="text-violet-300">src/components/game/FrameLooper.tsx</code>
        </>
      }
      stageHeight="min(75vh, 780px)"
      controls={
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setRunKey((k) => k + 1);
                setCompleted(false);
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              Restart scene
            </button>
            <span className="text-sm text-zinc-500">
              {completed ? (
                <span className="text-emerald-400">onComplete fired</span>
              ) : (
                'Stills keep cycling while you read'
              )}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                ['pingpong', 'Ping-pong'],
                ['forward', 'Forward loop'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setLoopMode(id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  loopMode === id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 text-sm text-zinc-400">
            <span className="w-28">Frame ms</span>
            <input
              type="range"
              min={60}
              max={280}
              step={10}
              value={frameMs}
              onChange={(e) => setFrameMs(Number(e.target.value))}
              className="flex-1 max-w-xs"
            />
            <span className="tabular-nums text-zinc-300 w-12">{frameMs}</span>
          </label>
        </div>
      }
      notes={
        <UsageGuide
          source="src/components/game/FrameLooper.tsx"
          purpose="Fake motion with a sequence of stills (like Summertime Saga) while dialogue advances independently on Continue. Prefer this over Looper when you have keyframe PNGs, not a gif."
          props={[
            {
              name: 'frames',
              detail: 'Ordered still URLs (use assetUrl). Need 2+ for animation.',
            },
            {
              name: 'frameIntervalMs',
              detail: 'How long each still shows (default 130).',
            },
            {
              name: 'loopMode',
              detail: '"pingpong" (1→N→1) or "forward" (1→N then jump to 1).',
            },
            {
              name: 'lines',
              detail: 'Same as Looper: strings or { speaker?, text }.',
            },
            {
              name: 'onComplete',
              detail: 'After Finish on the last line — advance the story.',
            },
          ]}
          sandboxSteps={[
            'Race stills race1–race6 cycle in the background.',
            'Continue through 4 racer thoughts — frames keep moving.',
            'Try ping-pong vs forward and adjust Frame ms.',
            'Finish ends the scene; Restart resets lines + animation.',
          ]}
          example={`
import FrameLooper from './components/game/FrameLooper';
import { assetUrl } from './utils/assetUrl';

const frames = [
  assetUrl('/assets/images/race/race1.png'),
  assetUrl('/assets/images/race/race2.png'),
  // …
];

<FrameLooper
  frames={frames}
  frameIntervalMs={140}
  loopMode="pingpong"
  lines={[
    { speaker: 'Thoughts', text: "Don't look at the mirror…" },
    // …
  ]}
  onComplete={() => goToNextScene()}
/>
`}
          tips={
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong className="text-zinc-400">Looper</strong> = one gif.{" "}
                <strong className="text-zinc-400">FrameLooper</strong> = many stills.
              </li>
              <li>
                Flashback grind/suck as <em>story beats</em> still wins when each pose needs its own
                line. Use FrameLooper when motion is ambient under dialogue.
              </li>
              <li>Frames are preloaded + held until ready (no black flash between stills).</li>
            </ul>
          }
        />
      }
    >
      <FrameLooper
        key={runKey}
        frames={RACE_FRAMES}
        frameIntervalMs={frameMs}
        loopMode={loopMode}
        lines={RACER_THOUGHTS}
        sceneLocation="Night Circuit · Final Lap"
        dayIndicator="FrameLooper test"
        onComplete={() => setCompleted(true)}
      />
    </ComponentTestShell>
  );
}
