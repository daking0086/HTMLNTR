import { useCallback, useState } from 'react';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import MainMenu from './components/menu/MainMenu';
import SaveLoadScreen from './components/menu/SaveLoadScreen';
import OptionsScreen from './components/menu/OptionsScreen';
import GalleryScreen from './components/menu/GalleryScreen';
import ExitScreen from './components/menu/ExitScreen';
import { useGameEngine } from './hooks/useGameEngine';
import { useSettings } from './hooks/useSettings';
import { useGallery } from './hooks/useGallery';
import { useConfirm } from './hooks/useConfirm';
import {
  deleteSaveSlot,
  getMostRecentSave,
  getSaveSlot,
  hasAnySave,
  writeSaveSlot,
} from './logic/storage';
import { INITIAL_STATE } from './logic/state';
import { attemptCloseWindow } from './logic/exitGame';
import type { AppView } from './types/app';
import { TEXT_SIZE_CLASS } from './types/app';

export default function App() {
  const [view, setView] = useState<AppView>('menu');
  const [returnView, setReturnView] = useState<AppView>('menu');
  const [saveRefreshKey, setSaveRefreshKey] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const { settings, updateSettings } = useSettings();
  const gallery = useGallery();
  const { confirm, ConfirmDialog } = useConfirm();

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2200);
  }, []);

  const game = useGameEngine({
    settings,
    onSceneEnter: gallery.unlockForScene,
  });

  const openScreen = useCallback((screen: AppView, from?: AppView) => {
    setReturnView(from ?? (view === 'game' ? 'game' : 'menu'));
    setView(screen);
  }, [view]);

  const goBack = useCallback(() => {
    setView(returnView);
  }, [returnView]);

  const startNewGame = useCallback(() => {
    game.loadGameState(INITIAL_STATE);
    setView('game');
  }, [game]);

  const continueGame = useCallback(() => {
    const recent = getMostRecentSave();
    if (!recent) return;
    game.loadGameState(recent.gameState);
    setView('game');
  }, [game]);

  const handleMenu = useCallback(async () => {
    const leave = await confirm({
      title: 'Return to Menu',
      message: 'Return to main menu? Unsaved progress will be lost.',
      confirmLabel: 'Return',
      cancelLabel: 'Stay',
    });
    if (leave) setView('menu');
  }, [confirm]);

  const handleExit = useCallback(async () => {
    const shouldExit = await confirm({
      title: 'Exit Game',
      message: 'Are you sure you want to exit the game?',
      confirmLabel: 'Exit',
      cancelLabel: 'Cancel',
    });
    if (!shouldExit) return;
    attemptCloseWindow();
    setView('exit');
  }, [confirm]);

  const handleSaveSlot = useCallback(async (slot: number) => {
    const save = game.createSaveSlot(slot);
    const existing = getSaveSlot(slot);

    if (existing) {
      const overwrite = await confirm({
        title: 'Overwrite Save',
        message: `Overwrite save slot ${slot}? The previous save will be lost.`,
        confirmLabel: 'Overwrite',
        cancelLabel: 'Cancel',
      });
      if (!overwrite) return;
    }

    writeSaveSlot(save);
    setSaveRefreshKey((k) => k + 1);
    showToast(`Saved to slot ${slot}`);
    setView('game');
  }, [game, showToast, confirm]);

  const handleLoadSlot = useCallback((slot: number) => {
    const save = getSaveSlot(slot);
    if (!save) return;
    game.loadGameState(save.gameState);
    showToast(`Loaded slot ${slot}`);
    setView('game');
  }, [game, showToast]);

  const handleDeleteSlot = useCallback(async (slot: number) => {
    const confirmed = await confirm({
      title: 'Delete Save',
      message: `Delete save slot ${slot}? This cannot be undone.`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      variant: 'danger',
    });
    if (!confirmed) return;
    deleteSaveSlot(slot);
    setSaveRefreshKey((k) => k + 1);
    showToast(`Deleted slot ${slot}`);
  }, [showToast, confirm]);

  const textSizeClass = TEXT_SIZE_CLASS[settings.textSize];

  const toggleAutoPlay = useCallback(() => {
    updateSettings({ autoPlay: !settings.autoPlay });
  }, [settings.autoPlay, updateSettings]);

  return (
    <div className="max-w-[980px] mx-auto px-4 py-8 relative">
      {view === 'menu' && (
        <MainMenu
          hasSave={hasAnySave()}
          onNewGame={startNewGame}
          onContinue={continueGame}
          onLoad={() => openScreen('load', 'menu')}
          onOptions={() => openScreen('options', 'menu')}
          onGallery={() => openScreen('gallery', 'menu')}
          onExit={handleExit}
        />
      )}

      {view === 'game' && (
        <>
          <Header
            affection={game.gameState.affection}
            corruption={game.gameState.corruption}
            autoPlay={settings.autoPlay}
            onToggleAuto={toggleAutoPlay}
            showToolbar
            onMenu={handleMenu}
            onSave={() => openScreen('save', 'game')}
            onLoad={() => openScreen('load', 'game')}
            onOptions={() => openScreen('options', 'game')}
            onGallery={() => openScreen('gallery', 'game')}
            onExit={handleExit}
          />

          <GameContainer
            release={game.release}
            currentScene={game.currentScene}
            sceneLocation={game.sceneLocation}
            dayIndicator={game.dayIndicator}
            isEnded={game.gameState.isEnded}
            textSizeClass={textSizeClass}
            onChoice={game.makeChoice}
            onContinue={game.advanceNarration}
            onRestart={game.restartGame}
            autoPlay={settings.autoPlay}
          />
        </>
      )}

      {view === 'save' && (
        <SaveLoadScreen
          key={`save-${saveRefreshKey}`}
          mode="save"
          onBack={goBack}
          onSelectSlot={handleSaveSlot}
        />
      )}

      {view === 'load' && (
        <SaveLoadScreen
          key={`load-${saveRefreshKey}`}
          mode="load"
          onBack={goBack}
          onSelectSlot={handleLoadSlot}
          onDeleteSlot={handleDeleteSlot}
        />
      )}

      {view === 'options' && (
        <OptionsScreen
          settings={settings}
          onChange={updateSettings}
          onBack={goBack}
        />
      )}

      {view === 'gallery' && (
        <GalleryScreen
          entries={gallery.entries}
          isUnlocked={gallery.isUnlocked}
          unlockedCount={gallery.unlockedCount}
          onBack={goBack}
        />
      )}

      {view === 'exit' && <ExitScreen />}

      {view !== 'menu' && view !== 'exit' && (
        <footer className="mt-4 text-center">
          <p className="text-[10px] text-zinc-600">React + TypeScript • Same story, no phone UI</p>
        </footer>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 shadow-xl">
          {toast}
        </div>
      )}

      {ConfirmDialog}
    </div>
  );
}