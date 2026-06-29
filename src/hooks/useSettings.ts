import { useCallback, useEffect, useState } from 'react';
import { loadSettings, saveSettings } from '../logic/storage';
import type { GameSettings } from '../types/app';

export function useSettings() {
  const [settings, setSettings] = useState<GameSettings>(() => loadSettings());

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const updateSettings = useCallback((patch: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(loadSettings());
  }, []);

  return { settings, updateSettings, resetSettings };
}