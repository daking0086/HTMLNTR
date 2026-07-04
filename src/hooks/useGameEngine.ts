import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { getActiveRelease, getPageForScene, scenes } from '../pages';
import { INITIAL_STATE, clampStat } from '../logic/state';
import type { Choice, GameState, Release, Scene, SceneKey, StoryPage } from '../types/game';
import type { GameSettings, SaveSlot } from '../types/app';
import { MAX_STORY_HISTORY, TEXT_SPEED_MS } from '../types/app';
import { sceneSupportsAutoAdvance } from '../logic/sceneFlow';
import { sceneToLogEntry, type StoryLogEntry } from '../logic/storyLog';
import type { ReleaseId } from '../types/game';
import { ACTIVE_RELEASE_ID } from '../pages';

interface UseGameEngineOptions {
  settings: GameSettings;
  skipMode?: boolean;
  onSceneEnter?: (sceneKey: SceneKey) => void;
}

interface UseGameEngineResult {
  gameState: GameState;
  release: Release;
  currentScene: Scene | undefined;
  page: StoryPage | null;
  sceneLocation: string;
  dayIndicator: string;
  storyLog: StoryLogEntry[];
  canGoBack: boolean;
  makeChoice: (choice: Choice) => void;
  advanceNarration: () => void;
  goBack: () => void;
  goBackToLogIndex: (index: number) => void;
  restartGame: () => void;
  loadGameState: (state: GameState) => void;
  createSaveSlot: (slot: number) => SaveSlot;
}

export function useGameEngine({
  settings,
  skipMode = false,
  onSceneEnter,
}: UseGameEngineOptions): UseGameEngineResult {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [pastStates, setPastStates] = useState<GameState[]>([]);
  const release = useMemo(() => getActiveRelease(), []);
  const autoTimerRef = useRef<number | null>(null);
  const gameStateRef = useRef(gameState);
  const pastStatesRef = useRef(pastStates);

  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  useEffect(() => {
    pastStatesRef.current = pastStates;
  }, [pastStates]);

  const currentScene = scenes[gameState.currentScene];
  const page = getPageForScene(gameState.currentScene);

  const pageLabel = page ? `${page.title} · ` : '';
  const location =
    (currentScene && 'location' in currentScene ? currentScene.location : undefined) ||
    page?.title ||
    'Unknown';
  const sceneLocation = `${pageLabel}${location}`;
  const dayIndicator = `${release.meta.title} · Day ${gameState.day}`;

  const storyLog = useMemo(() => {
    const entries: StoryLogEntry[] = [];

    for (const state of pastStates) {
      const entry = sceneToLogEntry(scenes[state.currentScene], state.currentScene);
      if (entry) entries.push(entry);
    }

    if (!gameState.isEnded) {
      const currentEntry = sceneToLogEntry(currentScene, gameState.currentScene);
      if (currentEntry) entries.push(currentEntry);
    }

    return entries;
  }, [pastStates, gameState.currentScene, gameState.isEnded, currentScene]);

  const clearAutoTimer = useCallback(() => {
    if (autoTimerRef.current !== null) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const recordHistory = useCallback(() => {
    setPastStates((history) => {
      const snapshot = { ...gameStateRef.current };
      const next = [...history, snapshot];
      if (next.length > MAX_STORY_HISTORY) {
        return next.slice(next.length - MAX_STORY_HISTORY);
      }
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setPastStates([]);
  }, []);

  const goToScene = useCallback(
    (sceneKey: SceneKey, options?: { recordHistory?: boolean }) => {
      if (options?.recordHistory !== false) {
        recordHistory();
      }

      setGameState((prev) => ({
        ...prev,
        currentScene: sceneKey,
        isEnded: false,
      }));
      onSceneEnter?.(sceneKey);
    },
    [onSceneEnter, recordHistory],
  );

  const restoreState = useCallback(
    (state: GameState, history: GameState[]) => {
      clearAutoTimer();
      setPastStates(history);
      setGameState(state);
      onSceneEnter?.(state.currentScene);
    },
    [clearAutoTimer, onSceneEnter],
  );

  const goBack = useCallback(() => {
    const history = pastStatesRef.current;
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    restoreState(previous, history.slice(0, -1));
  }, [restoreState]);

  const goBackToLogIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= pastStates.length) return;
      const target = pastStates[index];
      restoreState(target, pastStates.slice(0, index));
    },
    [pastStates, restoreState],
  );

  const makeChoice = useCallback(
    (choice: Choice) => {
      clearAutoTimer();
      recordHistory();

      setGameState((prev) => ({
        ...prev,
        affection: clampStat(prev.affection + (choice.affection ?? 0)),
        corruption: clampStat(prev.corruption + (choice.corruption ?? 0)),
      }));

      if (choice.next) {
        const delay = TEXT_SPEED_MS[settings.textSpeed].choice;
        window.setTimeout(() => goToScene(choice.next, { recordHistory: false }), delay);
      }
    },
    [clearAutoTimer, recordHistory, goToScene, settings.textSpeed],
  );

  const advanceNarration = useCallback(() => {
    clearAutoTimer();
    const current = scenes[gameStateRef.current.currentScene];

    if (current && 'next' in current && current.next) {
      goToScene(current.next);
    } else if (current && 'end' in current && current.end) {
      recordHistory();
      setGameState((prev) => ({ ...prev, isEnded: true }));
    }
  }, [clearAutoTimer, goToScene, recordHistory]);

  const restartGame = useCallback(() => {
    clearAutoTimer();
    clearHistory();
    setGameState(INITIAL_STATE);
    onSceneEnter?.(INITIAL_STATE.currentScene);
  }, [clearAutoTimer, clearHistory, onSceneEnter]);

  const loadGameState = useCallback(
    (state: GameState) => {
      clearAutoTimer();
      clearHistory();
      setGameState(state);
      onSceneEnter?.(state.currentScene);
    },
    [clearAutoTimer, clearHistory, onSceneEnter],
  );

  const createSaveSlot = useCallback(
    (slot: number): SaveSlot => {
      const scene = scenes[gameState.currentScene];
      const scenePage = getPageForScene(gameState.currentScene);
      const label =
        (scene && 'location' in scene ? scene.location : undefined) ||
        scenePage?.title ||
        gameState.currentScene;

      return {
        slot,
        gameState: { ...gameState },
        releaseId: ACTIVE_RELEASE_ID as ReleaseId,
        sceneKey: gameState.currentScene,
        sceneLabel: label,
        savedAt: new Date().toISOString(),
      };
    },
    [gameState],
  );

  useEffect(() => {
    clearAutoTimer();

    const shouldAdvance = skipMode || settings.autoPlay;
    if (!shouldAdvance || gameState.isEnded) return;

    const current = scenes[gameState.currentScene];
    if (!sceneSupportsAutoAdvance(current)) return;

    const delay = skipMode
      ? TEXT_SPEED_MS[settings.textSpeed].skip
      : TEXT_SPEED_MS[settings.textSpeed].autoPlay;

    autoTimerRef.current = window.setTimeout(() => {
      advanceNarration();
    }, delay);

    return clearAutoTimer;
  }, [
    gameState.currentScene,
    gameState.isEnded,
    settings.autoPlay,
    settings.textSpeed,
    skipMode,
    advanceNarration,
    clearAutoTimer,
  ]);

  return {
    gameState,
    release,
    currentScene,
    page,
    sceneLocation,
    dayIndicator,
    storyLog,
    canGoBack: pastStates.length > 0,
    makeChoice,
    advanceNarration,
    goBack,
    goBackToLogIndex,
    restartGame,
    loadGameState,
    createSaveSlot,
  };
}