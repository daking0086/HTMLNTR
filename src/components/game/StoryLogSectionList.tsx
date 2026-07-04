import { useEffect, useMemo, useRef, useState } from 'react';
import {
  buildStoryLogSections,
  getDefaultExpandedSections,
  type StoryLogEntry,
} from '../../logic/storyLog';

interface StoryLogSectionListProps {
  entries: StoryLogEntry[];
  activeIndex: number;
  canGoBack: boolean;
  onSelectEntry: (index: number) => void;
}

export default function StoryLogSectionList({
  entries,
  activeIndex,
  canGoBack,
  onSelectEntry,
}: StoryLogSectionListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeBeatRef = useRef<HTMLButtonElement>(null);
  const sections = useMemo(
    () => buildStoryLogSections(entries, activeIndex),
    [entries, activeIndex],
  );

  const [expandedSections, setExpandedSections] = useState<Set<string>>(() =>
    getDefaultExpandedSections(sections),
  );

  useEffect(() => {
    setExpandedSections(getDefaultExpandedSections(sections));
  }, [sections]);

  useEffect(() => {
    if (!expandedSections.size) return;
    activeBeatRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [expandedSections, activeIndex]);

  const toggleSection = (pageId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(pageId)) next.delete(pageId);
      else next.add(pageId);
      return next;
    });
  };

  if (!entries.length) return null;

  return (
    <div ref={scrollRef} className="vn-story-log-modal-scroll h-full px-4 py-3">
      <div className="space-y-2">
        {sections.map((section) => {
          const isExpanded = expandedSections.has(section.pageId);

          return (
            <div
              key={section.pageId}
              className="rounded-xl border border-zinc-800 bg-zinc-950/60 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleSection(section.pageId)}
                className={`w-full flex items-start gap-3 px-3 py-2.5 text-left transition-colors hover:bg-zinc-800/50 ${
                  section.containsActive ? 'bg-blue-500/5' : ''
                }`}
              >
                <i
                  className={`fa-solid fa-chevron-right text-[10px] text-zinc-500 mt-1 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-zinc-200 truncate">{section.title}</p>
                    <span className="text-[10px] text-zinc-500 shrink-0">{section.beatCount}</span>
                  </div>
                  <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">{section.summary}</p>
                  {section.speakers.length > 0 && (
                    <p className="text-[10px] text-zinc-600 mt-1 truncate">
                      {section.speakers.join(' · ')}
                    </p>
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-zinc-800 px-2 py-2 space-y-1 max-h-48 overflow-y-auto vn-story-log-modal-scroll">
                  {entries.slice(section.startIndex, section.endIndex + 1).map((entry, offset) => {
                    const index = section.startIndex + offset;
                    const isActive = index === activeIndex;
                    const canJump = index < activeIndex && canGoBack;

                    return (
                      <button
                        key={`${entry.sceneKey}-${index}`}
                        ref={isActive ? activeBeatRef : undefined}
                        type="button"
                        disabled={!canJump}
                        onClick={() => onSelectEntry(index)}
                        className={`w-full text-left rounded-lg px-2.5 py-1.5 transition-colors border ${
                          isActive
                            ? 'border-blue-500/40 bg-blue-500/10'
                            : canJump
                              ? 'border-transparent hover:bg-zinc-800/80 hover:border-zinc-700'
                              : 'border-transparent opacity-60 cursor-default'
                        }`}
                      >
                        <p
                          className={`text-[10px] font-medium ${
                            entry.isNarration ? 'text-zinc-400 italic' : 'text-blue-300'
                          }`}
                        >
                          {entry.speaker}
                        </p>
                        <p className="text-xs text-zinc-400 line-clamp-1 leading-relaxed">
                          {entry.text.replace(/\s+/g, ' ').trim()}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}