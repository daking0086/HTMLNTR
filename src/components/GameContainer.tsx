import DialogueArea from './DialogueArea';
import Choices from './Choices';
import NarrationContinue from './NarrationContinue';
import EndScreen from './EndScreen';
import SceneStage from './game/SceneStage';
import { getScenePicture } from '../logic/sceneVisual';
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
  skipMode?: boolean;
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
  skipMode = false,
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

  const pictureSrc = getScenePicture(currentScene);

  return (
    <main className="vn-container vn-game-layout bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
      {isEnded ? (
        <>
          <SceneStage
            imageSrc={null}
            sceneLocation={`${release.meta.title} · Complete`}
            dayIndicator={release.meta.subtitle}
          />
          <div className="vn-script-panel">
            <EndScreen release={release} onRestart={onRestart} compact />
          </div>
        </>
      ) : (
        <>
          <SceneStage
            imageSrc={pictureSrc}
            sceneLocation={sceneLocation}
            dayIndicator={dayIndicator}
          />

          <div className="vn-script-panel">
            <DialogueArea
              scene={currentScene}
              isEnded={isEnded}
              textSizeClass={textSizeClass}
              compact
            />

            {showChoices && isDialogueScene(currentScene!) && currentScene.choices && (
              <Choices choices={currentScene.choices} onChoice={onChoice} compact />
            )}

            {showNarrationContinue && (
              <NarrationContinue
                onContinue={onContinue}
                autoPlay={autoPlay}
                skipMode={skipMode}
                compact
              />
            )}
          </div>
        </>
      )}
    </main>
  );
}