import SceneHeader from './SceneHeader';
import DialogueArea from './DialogueArea';
import Choices from './Choices';
import NarrationContinue from './NarrationContinue';
import EndScreen from './EndScreen';
import type { Choice, DialogueScene, Release, Scene } from '../types/game';

interface GameContainerProps {
  release: Release;
  currentScene: Scene | undefined;
  sceneLocation: string;
  dayIndicator: string;
  isEnded: boolean;
  textSizeClass?: string;
  onChoice: (choice: Choice) => void;
  onContinue: () => void;
  onRestart: () => void;
  autoPlay?: boolean;
}

function isDialogueScene(scene: Scene): scene is DialogueScene {
  return scene.type === 'dialogue';
}

export default function GameContainer({
  release,
  currentScene,
  sceneLocation,
  dayIndicator,
  isEnded,
  textSizeClass,
  onChoice,
  onContinue,
  onRestart,
  autoPlay = false,
}: GameContainerProps) {
  const showNarrationContinue =
    !isEnded &&
    (currentScene?.type === 'narration' ||
      (currentScene?.type === 'dialogue' &&
        !!currentScene.next &&
        !(currentScene.choices?.length)));

  const showChoices =
    !isEnded &&
    currentScene !== undefined &&
    isDialogueScene(currentScene) &&
    (currentScene.choices?.length ?? 0) > 0;

  const portrait =
    currentScene && isDialogueScene(currentScene) ? (currentScene.portrait ?? null) : null;

  return (
    <main className="vn-container bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
      <SceneHeader
        portrait={portrait}
        sceneLocation={sceneLocation}
        dayIndicator={dayIndicator}
      />

      {isEnded ? (
        <EndScreen release={release} onRestart={onRestart} />
      ) : (
        <DialogueArea scene={currentScene} isEnded={isEnded} textSizeClass={textSizeClass} />
      )}

      {showChoices && isDialogueScene(currentScene!) && currentScene.choices && (
        <Choices choices={currentScene.choices} onChoice={onChoice} />
      )}

      {showNarrationContinue && (
        <NarrationContinue onContinue={onContinue} autoPlay={autoPlay} />
      )}
    </main>
  );
}