import type { ReactNode } from 'react';

interface UsageGuideProps {
  /** Component file path, e.g. src/components/game/Looper.tsx */
  source: string;
  /** What the component is for */
  purpose: string;
  /** Key props and meaning */
  props: Array<{ name: string; detail: string }>;
  /** How to use in this sandbox */
  sandboxSteps: string[];
  /** Minimal usage example (code string) */
  example: string;
  /** Optional extra notes */
  tips?: ReactNode;
}

/** Consistent “how to use” block for component lab pages. */
export default function UsageGuide({
  source,
  purpose,
  props,
  sandboxSteps,
  example,
  tips,
}: UsageGuideProps) {
  return (
    <div className="space-y-5 text-sm">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-blue-400 mb-1">How to use</p>
        <p className="text-zinc-300">{purpose}</p>
        <p className="text-xs text-zinc-600 mt-1 font-mono">{source}</p>
      </div>

      <div>
        <p className="text-xs font-medium text-zinc-200 mb-2">Props</p>
        <ul className="space-y-1.5 text-xs text-zinc-400">
          {props.map((p) => (
            <li key={p.name}>
              <code className="text-violet-300">{p.name}</code>
              <span className="text-zinc-600"> — </span>
              {p.detail}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-medium text-zinc-200 mb-2">In this sandbox</p>
        <ol className="list-decimal list-inside space-y-1 text-xs text-zinc-400">
          {sandboxSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div>
        <p className="text-xs font-medium text-zinc-200 mb-2">Example</p>
        <pre className="text-[11px] leading-relaxed text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap font-mono">
          {example.trim()}
        </pre>
      </div>

      {tips && <div className="text-xs text-zinc-500 space-y-1">{tips}</div>}
    </div>
  );
}
