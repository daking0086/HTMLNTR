import CharacterLayer from './CharacterLayer';
import type { CharacterLayerConfig, StageCharacter } from '../../types/characterLayer';

interface SceneCharacterStageProps extends CharacterLayerConfig {
  backgroundSrc: string | null;
  characters?: StageCharacter[];
  activeSpeakerId?: string | null;
  flipLeftCharacter?: boolean;
  sceneLocation?: string;
  dayIndicator?: string;
  className?: string;
  /** Play motion-blur enter when the background changes (default off; set true to enable) */
  motionBlur?: boolean;
}

export default function SceneCharacterStage({
  backgroundSrc,
  characters = [],
  activeSpeakerId = null,
  flipLeftCharacter = true,
  sceneLocation,
  dayIndicator,
  heightPercent,
  speakerScale,
  idleScale,
  backgroundBlurPx = 4,
  className = '',
  motionBlur = false,
}: SceneCharacterStageProps) {
  const showCharacters = characters.length > 0;
  const blurStyle = showCharacters
    ? { filter: `blur(${backgroundBlurPx}px) brightness(0.88) saturate(0.92)` }
    : undefined;

  return (
    <div className={`vn-stage relative w-full overflow-hidden bg-zinc-950 ${className}`}>
      <div className={`vn-stage-bg ${showCharacters ? 'vn-stage-bg--dimmed' : ''}`}>
        {backgroundSrc ? (
          <div
            key={backgroundSrc}
            className={motionBlur ? 'vn-stage-cg-enter' : 'absolute inset-0'}
          >
            <img
              src={backgroundSrc}
              className="vn-stage-bg-image"
              style={blurStyle}
              alt=""
              draggable={false}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
            <div className="text-center px-6">
              <i className="fa-solid fa-image text-5xl text-zinc-800 mb-3" />
              <p className="text-xs text-zinc-600 uppercase tracking-widest">Scene CG</p>
            </div>
          </div>
        )}
      </div>

      {showCharacters && (
        <CharacterLayer
          characters={characters}
          activeSpeakerId={activeSpeakerId}
          heightPercent={heightPercent}
          speakerScale={speakerScale}
          idleScale={idleScale}
          flipLeftCharacter={flipLeftCharacter}
        />
      )}

      {(sceneLocation || dayIndicator) && (
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 py-3 bg-gradient-to-b from-black/75 via-black/40 to-transparent">
          {sceneLocation && <p className="text-xs text-zinc-200 truncate">{sceneLocation}</p>}
          {dayIndicator && (
            <p className="text-xs text-zinc-400 flex items-center gap-x-1.5 shrink-0">
              <i className="fa-solid fa-clock text-[10px]" />
              <span>{dayIndicator}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}