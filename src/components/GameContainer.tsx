import DialogueArea from './DialogueArea';
import Choices from './Choices';
import NarrationContinue from './NarrationContinue';
import EndScreen from './EndScreen';
import SceneStage from './game/SceneStage';
import SceneCharacterStage from './game/SceneCharacterStage';
import { getActiveSpeakerId, getSceneStageCharacters } from '../logic/sceneCharacters';
import {
  getSceneImageLoop,
  getSceneImageLoopMs,
  getScenePicture,
  isImagesEnabled,
} from '../logic/sceneVisual';
import type { Choice, DialogueScene, Release, Scene } from '../types/game';
import type { TextSpeed } from '../types/app';
import { TEXT_SPEED_MS } from '../types/app';

interface GameContainerProps {
  release: Release;
  currentScene: Scene | undefined;
  sceneLocation: string;
  dayIndicator: string;
  isEnded: boolean;
  textSizeClass?: string;
  textSpeed?: TextSpeed;
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
  textSpeed = 'normal',
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
  const pictureLoop = getSceneImageLoop(currentScene);
  const pictureLoopMs = getSceneImageLoopMs(currentScene);
  const stageCharacters = getSceneStageCharacters(currentScene);
  const activeSpeakerId = getActiveSpeakerId(currentScene);

  const devImagesHidden = import.meta.env.DEV && !isImagesEnabled();

  return (
    <main className="vn-container vn-game-layout bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative">
      {devImagesHidden && (
        <div className="absolute top-3 right-3 z-20 rounded-lg bg-amber-500/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-black shadow-lg">
          Dev: images hidden
        </div>
      )}
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
          {stageCharacters.length > 0 ? (
            <SceneCharacterStage
              backgroundSrc={pictureSrc}
              characters={stageCharacters}
              activeSpeakerId={activeSpeakerId}
              sceneLocation={sceneLocation}
              dayIndicator={dayIndicator}
            />
          ) : (
            <SceneStage
              imageSrc={pictureSrc}
              loopFrames={pictureLoop}
              loopIntervalMs={pictureLoopMs}
              sceneLocation={sceneLocation}
              dayIndicator={dayIndicator}
            />
          )}

          <div className="vn-script-panel">
            <DialogueArea
              scene={currentScene}
              isEnded={isEnded}
              textSizeClass={textSizeClass}
              charDelayMs={TEXT_SPEED_MS[textSpeed].typewriter}
              instantReveal={skipMode}
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