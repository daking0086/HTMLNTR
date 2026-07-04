import type { ReactNode } from 'react';
import ScreenShell from './ScreenShell';
import type { GameSettings, TextSize, TextSpeed } from '../../types/app';
import { DEFAULT_SETTINGS } from '../../types/app';
import { cloneDefaultKeyBindings } from '../../logic/keyBindings';
import KeyBindingsEditor from './KeyBindingsEditor';

interface OptionsScreenProps {
  settings: GameSettings;
  onChange: (patch: Partial<GameSettings>) => void;
  onBack: () => void;
}

function OptionGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
      {children}
    </div>
  );
}

function ToggleButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
      }`}
    >
      {label}
    </button>
  );
}

export default function OptionsScreen({ settings, onChange, onBack }: OptionsScreenProps) {
  const textSpeeds: TextSpeed[] = ['slow', 'normal', 'fast'];
  const textSizes: TextSize[] = ['small', 'medium', 'large'];

  return (
    <ScreenShell title="Options" subtitle="Gameplay and display settings" onBack={onBack}>
      <div className="space-y-8 max-w-lg">
        <OptionGroup label="Text Speed">
          <div className="flex flex-wrap gap-2">
            {textSpeeds.map((speed) => (
              <ToggleButton
                key={speed}
                active={settings.textSpeed === speed}
                label={speed.charAt(0).toUpperCase() + speed.slice(1)}
                onClick={() => onChange({ textSpeed: speed })}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup label="Text Size">
          <div className="flex flex-wrap gap-2">
            {textSizes.map((size) => (
              <ToggleButton
                key={size}
                active={settings.textSize === size}
                label={size.charAt(0).toUpperCase() + size.slice(1)}
                onClick={() => onChange({ textSize: size })}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup label="Auto Play">
          <ToggleButton
            active={settings.autoPlay}
            label={settings.autoPlay ? 'On' : 'Off'}
            onClick={() => onChange({ autoPlay: !settings.autoPlay })}
          />
          <p className="text-xs text-zinc-600">
            Automatically advance through story beats. Also available via the Auto button in-game.
          </p>
        </OptionGroup>

        <OptionGroup label="Story Log">
          <ToggleButton
            active={settings.showStoryLog}
            label={settings.showStoryLog ? 'On' : 'Off'}
            onClick={() => onChange({ showStoryLog: !settings.showStoryLog })}
          />
          <p className="text-xs text-zinc-600">
            Enable the story log popup. Open it in-game with the Log button or your bound key (default P).
          </p>
        </OptionGroup>

        <OptionGroup label="Keyboard Shortcuts">
          <KeyBindingsEditor
            keyBindings={settings.keyBindings}
            onChange={(keyBindings) => onChange({ keyBindings })}
          />
          <p className="text-xs text-zinc-600">
            Click a key badge to rebind. Changes save automatically.
          </p>
        </OptionGroup>

        <OptionGroup label="Music Volume">
          <input
            type="range"
            min={0}
            max={100}
            value={settings.musicVolume}
            onChange={(e) => onChange({ musicVolume: Number(e.target.value) })}
            className="w-full accent-blue-500"
          />
          <p className="text-xs text-zinc-600 text-right">{settings.musicVolume}%</p>
        </OptionGroup>

        <OptionGroup label="SFX Volume">
          <input
            type="range"
            min={0}
            max={100}
            value={settings.sfxVolume}
            onChange={(e) => onChange({ sfxVolume: Number(e.target.value) })}
            className="w-full accent-blue-500"
          />
          <p className="text-xs text-zinc-600 text-right">{settings.sfxVolume}%</p>
        </OptionGroup>

        <button
          type="button"
          onClick={() =>
            onChange({
              ...DEFAULT_SETTINGS,
              keyBindings: cloneDefaultKeyBindings(),
            })
          }
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Reset to defaults
        </button>
      </div>
    </ScreenShell>
  );
}