import { useTypewriter } from '../hooks/useTypewriter';
import type { Scene } from '../types/game';

interface DialogueAreaProps {
  scene: Scene | undefined;
  isEnded: boolean;
  textSizeClass?: string;
  compact?: boolean;
  charDelayMs?: number;
  instantReveal?: boolean;
}

export default function DialogueArea({
  scene,
  isEnded,
  textSizeClass = 'text-[17px]',
  compact = false,
  charDelayMs = 26,
  instantReveal = false,
}: DialogueAreaProps) {
  const isNarration = scene?.type === 'narration';
  const fullText =
    scene && isNarration
      ? scene.text.join('\n\n')
      : scene?.type === 'dialogue'
        ? scene.text
        : '';

  const { displayedText, isComplete } = useTypewriter({
    text: fullText,
    charDelayMs,
    instant: instantReveal,
    enabled: !isEnded && Boolean(scene),
  });

  if (isEnded || !scene || scene.type === 'looper') return null;

  return (
    <div className={`flex-1 min-h-0 flex flex-col ${compact ? 'px-4 py-3' : 'vn-padding vn-content-area'}`}>
      <div className="flex-1 min-h-0 overflow-y-auto">
        {scene.type === 'dialogue' && (
          <div className="character-name font-semibold text-blue-300 text-sm tracking-[0.5px] mb-1">
            {scene.speaker}
          </div>
        )}

        <div
          className={`vn-text ${textSizeClass} leading-relaxed text-zinc-100 whitespace-pre-wrap ${
            compact ? 'max-w-none' : 'vn-dialogue-text'
          } ${isNarration ? 'narration' : ''} ${!isComplete ? 'typewriter-active' : ''}`}
        >
          {displayedText}
        </div>
      </div>
    </div>
  );
}