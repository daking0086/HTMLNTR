import type { ReactNode } from 'react';

interface ScreenShellProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  backLabel?: string;
  children: ReactNode;
}

export default function ScreenShell({
  title,
  subtitle,
  onBack,
  backLabel = 'Back',
  children,
}: ScreenShellProps) {
  return (
    <div className="vn-container bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="px-6 py-5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="text-xs text-zinc-500 mt-0.5">{subtitle}</p>}
        </div>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="text-sm px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors flex items-center gap-x-2"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            {backLabel}
          </button>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}