import { useState } from 'react';
import ComponentTestShell from '../../components/dev/ComponentTestShell';
import UsageGuide from '../../components/dev/UsageGuide';
import Looper from '../../components/game/Looper';
import { assetUrl } from '../../utils/assetUrl';

const RACE_GIF = assetUrl('/assets/images/race/race.gif');

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
 * Sandbox for LOOPER — looping gif background + multi-line dialogue.
 * Open: http://localhost:5173/HTMLNTR/test/looper
 */
export default function LooperTest() {
  const [runKey, setRunKey] = useState(0);
  const [completed, setCompleted] = useState(false);

  return (
    <ComponentTestShell
      title="Looper"
      description={
        <>
          Infinite background gif while dialogue advances on Continue. Scene ends after the last
          line. Source:{' '}
          <code className="text-violet-300">src/components/game/Looper.tsx</code>
        </>
      }
      stageHeight="min(75vh, 780px)"
      controls={
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
              'Gif keeps running while you read'
            )}
          </span>
        </div>
      }
      notes={
        <UsageGuide
          source="src/components/game/Looper.tsx"
          purpose="Keep a looping background (gif) running while dialogue advances one line at a time. The looper scene ends after the user continues past the last line."
          props={[
            {
              name: 'backgroundSrc',
              detail: 'Gif/webp/image URL that loops forever (img tag). Use assetUrl().',
            },
            {
              name: 'lines',
              detail: 'Array of strings or { speaker?, text }. One Continue = next line.',
            },
            {
              name: 'onComplete',
              detail: 'Called once after Finish on the last line — go to next story beat here.',
            },
            {
              name: 'sceneLocation / dayIndicator',
              detail: 'Optional top labels.',
            },
            {
              name: 'textSizeClass',
              detail: 'Optional Tailwind text size class for body copy.',
            },
          ]}
          sandboxSteps={[
            'Watch race.gif loop behind the text (it never restarts on Continue).',
            'Click Continue through all 4 racer thoughts.',
            'On the last line, Finish ends the scene and shows onComplete fired.',
            'Restart scene resets to line 1 with a fresh Looper mount.',
          ]}
          example={`
import Looper from './components/game/Looper';
import { assetUrl } from './utils/assetUrl';

<Looper
  backgroundSrc={assetUrl('/assets/images/race/race.gif')}
  lines={[
    { speaker: 'Thoughts', text: "Don't look at the mirror — look at the gap." },
    { speaker: 'Thoughts', text: 'One more corner…' },
    // …
  ]}
  sceneLocation="Night Circuit"
  dayIndicator="Final lap"
  onComplete={() => goToNextScene()}
/>
`}
          tips={
            <ul className="list-disc list-inside space-y-1">
              <li>
                Gif file: <code className="text-zinc-400">public/assets/images/race/race.gif</code>
              </li>
              <li>Omit speaker for italic narration-style lines.</li>
              <li>
                Not wired into release1 yet — drop into GameContainer or a special scene type when
                ready.
              </li>
            </ul>
          }
        />
      }
    >
      <Looper
        key={runKey}
        backgroundSrc={RACE_GIF}
        lines={RACER_THOUGHTS}
        sceneLocation="Night Circuit · Final Lap"
        dayIndicator="Looper test"
        onComplete={() => setCompleted(true)}
      />
    </ComponentTestShell>
  );
}
