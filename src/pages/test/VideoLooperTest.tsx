import { useState } from 'react';
import ComponentTestShell from '../../components/dev/ComponentTestShell';
import UsageGuide from '../../components/dev/UsageGuide';
import VideoLooper from '../../components/game/VideoLooper';
import { assetUrl } from '../../utils/assetUrl';

const RACE_VIDEO = assetUrl('/assets/images/race/race.mp4');
const RACE_POSTER = assetUrl('/assets/images/race/race1.png');

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
 * Sandbox for VideoLooper — looping video + multi-line dialogue.
 * Open: http://localhost:5173/HTMLNTR/test/video-looper
 */
export default function VideoLooperTest() {
  const [runKey, setRunKey] = useState(0);
  const [completed, setCompleted] = useState(false);

  return (
    <ComponentTestShell
      title="Video looper"
      description={
        <>
          Looping <code className="text-violet-300">race.mp4</code> behind dialogue. Continue
          advances text only; video keeps playing. Source:{' '}
          <code className="text-violet-300">src/components/game/VideoLooper.tsx</code>
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
              'Video loops while you read'
            )}
          </span>
        </div>
      }
      notes={
        <UsageGuide
          source="src/components/game/VideoLooper.tsx"
          purpose="Same dialogue flow as Looper / FrameLooper, but the background is a real video file (mp4/webm) that loops. Best when you have smooth footage instead of a gif or stills."
          props={[
            {
              name: 'videoSrc',
              detail: 'Path to mp4/webm. Use assetUrl() for public files.',
            },
            {
              name: 'posterSrc',
              detail: 'Optional still shown before the first frame loads.',
            },
            {
              name: 'muted',
              detail: 'Default true — browsers usually require mute for autoplay.',
            },
            {
              name: 'lines',
              detail: 'Strings or { speaker?, text }. Continue = next line.',
            },
            {
              name: 'onComplete',
              detail: 'After Finish on the last line — go to next story beat.',
            },
            {
              name: 'sceneLocation / dayIndicator',
              detail: 'Optional top labels.',
            },
          ]}
          sandboxSteps={[
            'race.mp4 should autoplay and loop (muted).',
            'Click Continue through 4 racer thoughts — video does not restart.',
            'Finish ends the scene and shows onComplete fired.',
            'Restart scene remounts VideoLooper from line 1.',
          ]}
          example={`
import VideoLooper from './components/game/VideoLooper';
import { assetUrl } from './utils/assetUrl';

<VideoLooper
  videoSrc={assetUrl('/assets/images/race/race.mp4')}
  posterSrc={assetUrl('/assets/images/race/race1.png')}
  muted
  lines={[
    { speaker: 'Thoughts', text: "Don't look at the mirror…" },
    // …
  ]}
  sceneLocation="Night Circuit"
  onComplete={() => goToNextScene()}
/>
`}
          tips={
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong className="text-zinc-400">Looper</strong> = gif ·{' '}
                <strong className="text-zinc-400">FrameLooper</strong> = stills ·{' '}
                <strong className="text-zinc-400">VideoLooper</strong> = video
              </li>
              <li>
                Keep clips short / compressed for web (multi‑MB mp4s lag on first play).
              </li>
              <li>Sound: set muted=false only if you accept click-to-play on some browsers.</li>
            </ul>
          }
        />
      }
    >
      <VideoLooper
        key={runKey}
        videoSrc={RACE_VIDEO}
        posterSrc={RACE_POSTER}
        muted
        lines={RACER_THOUGHTS}
        sceneLocation="Night Circuit · Final Lap"
        dayIndicator="VideoLooper test"
        onComplete={() => setCompleted(true)}
      />
    </ComponentTestShell>
  );
}
