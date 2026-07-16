export type PageId = 'intro' | 'flashback' | 'airport' | 'taxi' | 'hotel' | 'ending';

export interface StoryPage {
  id: PageId;
  title: string;
}

export interface Choice {
  text: string;
  affection?: number;
  corruption?: number;
  next: string;
}

interface BaseScene {
  page: PageId;
  /** Character sprite ids from characterDisplay.ts (e.g. 'officer-2') */
  characters?: string[];
  /**
   * Optional looping CG frames (relative public paths).
   * When set, the stage cycles these instead of a single still.
   */
  imageLoop?: string[];
  /** Ms per frame when imageLoop is set (default ~110) */
  imageLoopMs?: number;
}

export interface NarrationScene extends BaseScene {
  type: 'narration';
  text: string[];
  image?: string;
  next?: string;
  end?: boolean;
}

export interface DialogueScene extends BaseScene {
  type: 'dialogue';
  speaker: string;
  portrait?: string;
  text: string;
  location: string;
  image?: string;
  next?: string;
  choices?: Choice[];
}

export type Scene = NarrationScene | DialogueScene;

export type SceneKey = string;

export type Scenes = Record<SceneKey, Scene>;

export interface ReleaseMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  startScene: SceneKey;
  endScene: SceneKey;
  pages: StoryPage[];
}

export interface Release {
  meta: ReleaseMeta;
  scenes: Scenes;
}

export interface GameState {
  affection: number;
  corruption: number;
  day: number;
  currentScene: SceneKey;
  isEnded: boolean;
}

export type ReleaseId = 'release1';