import type { Scene } from '../types/game';

interface DialogueAreaProps {
  scene: Scene | undefined;
  isEnded: boolean;
  textSizeClass?: string;
  compact?: boolean;
}

export default function DialogueArea({
  scene,
  isEnded,
  textSizeClass = 'text-[17px]',
  compact = false,
}: DialogueAreaProps) {
  if (isEnded || !scene) return null;

  const isNarration = scene.type === 'narration';

  return (
    <div className={`flex-1 min-h-0 flex flex-col ${compact ? 'px-4 py-3' : 'vn-padding vn-content-area'}`}>
      <div className="flex-1 min-h-0 overflow-y-auto">
        {!isNarration && (
          <div className="character-name font-semibold text-blue-300 text-sm tracking-[0.5px] mb-1">
            {scene.speaker}
          </div>
        )}

        <div
          className={`vn-text ${textSizeClass} leading-relaxed text-zinc-100 whitespace-pre-wrap ${
            compact ? 'max-w-none' : 'vn-dialogue-text'
          } ${isNarration ? 'narration' : ''}`}
        >
          {isNarration ? scene.text.join('\n\n') : scene.text}
        </div>
      </div>
    </div>
  );
}