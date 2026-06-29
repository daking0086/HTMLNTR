import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { getActiveRelease, getPageForScene, scenes } from '../pages';
import { INITIAL_STATE, clampStat } from '../logic/state';
import type { Choice, GameState, Release, Scene, SceneKey, StoryPage } from '../types/game';
import type { GameSettings, SaveSlot } from '../types/app';
import { TEXT_SPEED_MS } from '../types/app';
import { sceneSupportsAutoAdvance } from '../logic/sceneFlow';
import type { ReleaseId } from '../types/game';
import { ACTIVE_RELEASE_ID } from '../pages';

interface UseGameEngineOptions {
  settings: GameSettings;
  onSceneEnter?: (sceneKey: SceneKey) => void;
}

interface UseGameEngineResult {
  gameState: GameState;
  release: Release;
  currentScene: Scene | undefined;
  page: StoryPage | null;
  sceneLocation: string;
  dayIndicator: string;
  makeChoice: (choice: Choice) => void;
  advanceNarration: () => void;
  restartGame: () => void;
  loadGameState: (state: GameState) => void;
  createSaveSlot: (slot: number) => SaveSlot;
}

export function useGameEngine({ settings, onSceneEnter }: UseGameEngineOptions): UseGameEngineResult {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const release = useMemo(() => getActiveRelease(), []);
  const autoTimerRef = useRef<number | null>(null);

  const currentScene = scenes[gameState.currentScene];
  const page = getPageForScene(gameState.currentScene);

  const pageLabel = page ? `${page.title} · ` : '';
  const location =
    (currentScene && 'location' in currentScene ? currentScene.location : undefined) ||
    page?.title ||
    'Unknown';
  const sceneLocation = `${pageLabel}${location}`;
  const dayIndicator = `${release.meta.title} · Day ${gameState.day}`;

  const clearAutoTimer = useCallback(() => {
    if (autoTimerRef.current !== null) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const goToScene = useCallback((sceneKey: SceneKey) => {
    setGameState((prev) => ({
      ...prev,
      currentScene: sceneKey,
      isEnded: false,
    }));
    onSceneEnter?.(sceneKey);
  }, [onSceneEnter]);

  const makeChoice = useCallback((choice: Choice) => {
    setGameState((prev) => ({
      ...prev,
      affection: clampStat(prev.affection + (choice.affection ?? 0)),
      corruption: clampStat(prev.corruption + (choice.corruption ?? 0)),
    }));

    if (choice.next) {
      const delay = TEXT_SPEED_MS[settings.textSpeed].choice;
      setTimeout(() => goToScene(choice.next), delay);
    }
  }, [goToScene, settings.textSpeed]);

  const advanceNarration = useCallback(() => {
    clearAutoTimer();
    const current = scenes[gameState.currentScene];

    if (current && 'next' in current && current.next) {
      goToScene(current.next);
    } else if (current && 'end' in current && current.end) {
      setGameState((prev) => ({ ...prev, isEnded: true }));
    }
  }, [gameState.currentScene, goToScene, clearAutoTimer]);

  const restartGame = useCallback(() => {
    clearAutoTimer();
    setGameState(INITIAL_STATE);
    onSceneEnter?.(INITIAL_STATE.currentScene);
  }, [clearAutoTimer, onSceneEnter]);

  const loadGameState = useCallback((state: GameState) => {
    clearAutoTimer();
    setGameState(state);
    onSceneEnter?.(state.currentScene);
  }, [clearAutoTimer, onSceneEnter]);

  const createSaveSlot = useCallback((slot: number): SaveSlot => {
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
  }, [gameState]);

  useEffect(() => {
    clearAutoTimer();

    if (!settings.autoPlay || gameState.isEnded) return;

    const current = scenes[gameState.currentScene];
    if (!sceneSupportsAutoAdvance(current)) return;

    autoTimerRef.current = window.setTimeout(() => {
      advanceNarration();
    }, TEXT_SPEED_MS[settings.textSpeed].autoPlay);

    return clearAutoTimer;
  }, [
    gameState.currentScene,
    gameState.isEnded,
    settings.autoPlay,
    settings.textSpeed,
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
    makeChoice,
    advanceNarration,
    restartGame,
    loadGameState,
    createSaveSlot,
  };
}