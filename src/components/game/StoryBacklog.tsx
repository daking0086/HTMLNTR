import { useEffect, useRef } from 'react';
import type { StoryLogEntry } from '../../logic/storyLog';

interface StoryBacklogProps {
  entries: StoryLogEntry[];
  activeIndex: number;
  canGoBack: boolean;
  onSelectEntry: (index: number) => void;
  compact?: boolean;
  modal?: boolean;
}

export default function StoryBacklog({
  entries,
  activeIndex,
  canGoBack,
  onSelectEntry,
  compact = false,
  modal = false,
}: StoryBacklogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !stickToBottomRef.current) return;
    container.scrollTop = container.scrollHeight;
  }, [entries.length, activeIndex]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    stickToBottomRef.current = distanceFromBottom < 48;
  };

  if (entries.length === 0) return null;

  if (modal) {
    return (
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto px-5 py-4 space-y-2 scroll-smooth"
      >
        {entries.map((entry, index) => {
          const isActive = index === activeIndex;
          const canJump = index < activeIndex && canGoBack;

          return (
            <button
              key={`${entry.sceneKey}-${index}`}
              type="button"
              disabled={!canJump}
              onClick={() => onSelectEntry(index)}
              className={`w-full text-left rounded-xl px-4 py-3 transition-colors border ${
                isActive
                  ? 'border-blue-500/40 bg-blue-500/10'
                  : canJump
                    ? 'border-transparent bg-zinc-800/60 hover:bg-zinc-800 hover:border-zinc-700'
                    : 'border-transparent bg-zinc-900/40 opacity-70 cursor-default'
              }`}
            >
              <p
                className={`text-xs font-medium mb-1 ${
                  entry.isNarration ? 'text-zinc-400 italic' : 'text-blue-300'
                }`}
              >
                {entry.speaker}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{entry.text}</p>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="border-b border-zinc-800 bg-zinc-950/80 shrink-0">
      <div
        className={`flex items-center justify-between gap-3 ${
          compact ? 'px-4 pt-2 pb-1' : 'px-6 pt-4 pb-2'
        }`}
      >
        <p className="text-[10px] uppercase tracking-widest text-zinc-500">Story Log</p>
        {!compact && (
          <p className="text-[10px] text-zinc-600">Scroll or click a line to rewind</p>
        )}
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`overflow-y-auto space-y-1.5 scroll-smooth ${
          compact
            ? 'vn-story-log-compact px-4 pb-2'
            : 'vn-story-log-scroll px-6 pb-4 space-y-2'
        }`}
      >
        {entries.map((entry, index) => {
          const isActive = index === activeIndex;
          const canJump = index < activeIndex && canGoBack;

          return (
            <button
              key={`${entry.sceneKey}-${index}`}
              type="button"
              disabled={!canJump}
              onClick={() => onSelectEntry(index)}
              className={`w-full text-left rounded-lg px-2.5 py-1.5 transition-colors border ${
                isActive
                  ? 'border-blue-500/40 bg-blue-500/10'
                  : canJump
                    ? 'border-transparent bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700'
                    : 'border-transparent bg-zinc-900/40 opacity-70 cursor-default'
              }`}
            >
              <p
                className={`text-[11px] font-medium mb-0.5 ${
                  entry.isNarration ? 'text-zinc-400 italic' : 'text-blue-300'
                }`}
              >
                {entry.speaker}
              </p>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{entry.text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}