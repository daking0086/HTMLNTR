export type PageId = 'intro' | 'airport' | 'taxi' | 'hotel' | 'ending';

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
}

export interface NarrationScene extends BaseScene {
  type: 'narration';
  text: string[];
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