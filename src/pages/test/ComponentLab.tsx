import { toAppHref } from '../../utils/appPath';

const TESTS: Array<{
  path: string;
  title: string;
  description: string;
  howTo: string[];
}> = [
  {
    path: '/test/character-layer',
    title: 'Character layer',
    description: 'Sprites over a blurred BG — sizing, dual layout, speaker zoom.',
    howTo: [
      'Toggle single vs two officers.',
      'Edit sprite layout in src/data/characterDisplay.ts.',
      'In story: characters: [\'officer-1\'] on a scene beat.',
    ],
  },
  {
    path: '/test/scene-stage',
    title: 'Scene stage',
    description: 'Still CGs, empty placeholder, optional multi-frame loop.',
    howTo: [
      'Still / Loop / Empty modes for the main picture frame.',
      'In story: image: \'/assets/…\' on narration or dialogue.',
      'Optional imageLoop + imageLoopMs for auto frame cycle.',
    ],
  },
  {
    path: '/test/looper',
    title: 'Looper',
    description: 'Infinite gif background + multi-line dialogue (race thoughts).',
    howTo: [
      'Gif keeps looping; Continue advances lines only.',
      'Finish on last line → onComplete().',
      'Pass backgroundSrc + lines[] when wiring into the game.',
    ],
  },
  {
    path: '/test/frame-looper',
    title: 'Frame looper',
    description: 'STS-style stills cycle + dialogue (race1–6 pngs).',
    howTo: [
      'Stills auto-cycle (ping-pong or forward).',
      'Continue advances text only; Finish → onComplete().',
      'Use when you have keyframes, not a gif.',
    ],
  },
  {
    path: '/test/video-looper',
    title: 'Video looper',
    description: 'Looping video + dialogue (race.mp4).',
    howTo: [
      'Video loops under the text panel.',
      'Continue advances lines; Finish → onComplete().',
      'Use mp4/webm when you have real footage.',
    ],
  },
];

/**
 * Index of all component sandboxes.
 * Open at: http://localhost:5173/HTMLNTR/test
 */
export default function ComponentLab() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-blue-400">Dev</p>
          <h1 className="text-3xl font-semibold text-zinc-100">Component lab</h1>
          <p className="text-sm text-zinc-500">
            Sandboxes for building and tuning UI pieces outside the full game loop. Each page has a
            full how-to guide under the preview.
          </p>
          <p className="text-xs text-zinc-600 font-mono">
            http://localhost:5173/HTMLNTR/test
          </p>
        </header>

        <ul className="space-y-4">
          {TESTS.map((test) => (
            <li key={test.path}>
              <a
                href={toAppHref(test.path)}
                className="block rounded-2xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 hover:border-zinc-600 transition-colors"
              >
                <p className="text-base font-medium text-zinc-100">{test.title}</p>
                <p className="text-sm text-zinc-500 mt-1">{test.description}</p>
                <p className="text-[11px] text-zinc-600 mt-2 font-mono">
                  {toAppHref(test.path)}
                </p>
                <div className="mt-3 pt-3 border-t border-zinc-800">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5">
                    Quick guide
                  </p>
                  <ol className="list-decimal list-inside space-y-0.5 text-xs text-zinc-400">
                    {test.howTo.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-xs text-zinc-500 space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400">Add a new test</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Create <code className="text-zinc-400">src/pages/test/YourThingTest.tsx</code> with{' '}
              <code className="text-zinc-400">ComponentTestShell</code> +{' '}
              <code className="text-zinc-400">UsageGuide</code>.
            </li>
            <li>
              Register route in <code className="text-zinc-400">src/main.tsx</code> →{' '}
              <code className="text-zinc-400">TEST_ROUTES</code>.
            </li>
            <li>
              Add a card to the <code className="text-zinc-400">TESTS</code> list in this file.
            </li>
          </ol>
        </div>

        <a
          href={toAppHref('/')}
          className="inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to game
        </a>
      </div>
    </div>
  );
}
