import type { ReactNode } from 'react';
import { toAppHref } from '../../utils/appPath';

interface ComponentTestShellProps {
  /** Short badge above the title, e.g. "Dev test" */
  badge?: string;
  title: string;
  description?: ReactNode;
  /** Main preview area (stage / component under test) */
  children: ReactNode;
  /** Controls below the preview */
  controls?: ReactNode;
  /** Optional notes / tuning guide */
  notes?: ReactNode;
  /** Stage frame height (default VN-like) */
  stageHeight?: string;
  /** Show back-to-lab link */
  showLabLink?: boolean;
}

/**
 * Shared layout for `/test/*` component sandboxes.
 * Use this when building or tuning a UI piece outside the full game.
 */
export default function ComponentTestShell({
  badge = 'Dev test',
  title,
  description,
  children,
  controls,
  notes,
  stageHeight = 'min(70vh, 720px)',
  showLabLink = true,
}: ComponentTestShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8">
      <div className="max-w-[1200px] mx-auto space-y-6">
        <header className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-blue-400">{badge}</p>
          <h1 className="text-2xl font-semibold text-zinc-100">{title}</h1>
          {description && (
            <div className="text-sm text-zinc-500 max-w-2xl">{description}</div>
          )}
        </header>

        <div
          className="vn-container bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{ height: stageHeight, minHeight: '360px' }}
        >
          {children}
        </div>

        {controls && <div className="space-y-3">{controls}</div>}

        {notes && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 text-sm text-zinc-400">
            {notes}
          </div>
        )}

        <div className="flex flex-wrap gap-4 text-sm">
          {showLabLink && (
            <a href={toAppHref('/test')} className="text-blue-400 hover:text-blue-300">
              ← Component lab
            </a>
          )}
          <a href={toAppHref('/')} className="text-zinc-500 hover:text-zinc-300">
            Back to game
          </a>
        </div>
      </div>
    </div>
  );
}
