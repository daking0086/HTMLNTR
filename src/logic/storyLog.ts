import { getPageForScene } from '../pages';
import type { Scene, SceneKey } from '../types/game';

export interface StoryLogEntry {
  sceneKey: SceneKey;
  pageId: string;
  pageTitle: string;
  speaker: string;
  text: string;
  isNarration: boolean;
}

export interface StoryLogSection {
  pageId: string;
  title: string;
  startIndex: number;
  endIndex: number;
  beatCount: number;
  summary: string;
  speakers: string[];
  containsActive: boolean;
}

function truncateText(text: string, max = 64): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, max - 1)}…`;
}

export function sceneToLogEntry(scene: Scene | undefined, sceneKey: SceneKey): StoryLogEntry | null {
  if (!scene) return null;

  const page = getPageForScene(sceneKey);
  const pageId = scene.page ?? page?.id ?? 'story';
  const pageTitle = page?.title ?? 'Story';

  if (scene.type === 'narration') {
    return {
      sceneKey,
      pageId,
      pageTitle,
      speaker: 'Narration',
      text: scene.text.join('\n\n'),
      isNarration: true,
    };
  }

  return {
    sceneKey,
    pageId,
    pageTitle,
    speaker: scene.speaker,
    text: scene.text,
    isNarration: false,
  };
}

export function buildStoryLogSections(
  entries: StoryLogEntry[],
  activeIndex: number,
): StoryLogSection[] {
  if (!entries.length) return [];

  const sections: StoryLogSection[] = [];
  let current: StoryLogSection | null = null;

  entries.forEach((entry, index) => {
    if (!current || current.pageId !== entry.pageId) {
      if (current) {
        finalizeStoryLogSection(current, entries);
        sections.push(current);
      }

      current = {
        pageId: entry.pageId,
        title: entry.pageTitle,
        startIndex: index,
        endIndex: index,
        beatCount: 1,
        summary: '',
        speakers: [],
        containsActive: index === activeIndex,
      };
      return;
    }

    current.endIndex = index;
    current.beatCount += 1;
    if (index === activeIndex) current.containsActive = true;
  });

  if (current) {
    finalizeStoryLogSection(current, entries);
    sections.push(current);
  }

  return sections;
}

function finalizeStoryLogSection(section: StoryLogSection, entries: StoryLogEntry[]) {
  const slice = entries.slice(section.startIndex, section.endIndex + 1);
  const speakers = [...new Set(slice.map((entry) => entry.speaker))].slice(0, 4);
  const first = slice[0];
  const last = slice[slice.length - 1];

  section.speakers = speakers;
  section.summary =
    section.beatCount === 1
      ? truncateText(first.text, 72)
      : `${section.beatCount} beats · ${truncateText(first.text, 40)} → ${truncateText(last.text, 32)}`;
}

export function getDefaultExpandedSections(sections: StoryLogSection[]): Set<string> {
  const expanded = new Set<string>();
  const active = sections.find((section) => section.containsActive);
  if (active) expanded.add(active.pageId);
  else if (sections.length > 0) expanded.add(sections[sections.length - 1].pageId);
  return expanded;
}