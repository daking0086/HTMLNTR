import { Fragment } from 'react';
import type { Scene } from '../types/game';

interface DialogueAreaProps {
  scene: Scene | undefined;
  isEnded: boolean;
  textSizeClass?: string;
}

export default function DialogueArea({ scene, isEnded, textSizeClass = 'text-[17px]' }: DialogueAreaProps) {
  if (isEnded || !scene) return null;

  const isNarration = scene.type === 'narration';

  return (
    <div className="p-8 min-h-[420px] flex flex-col">
      <div className="flex-1 flex items-start gap-x-4">
        <div className="flex-1">
          {!isNarration && (
            <div className="character-name font-semibold text-blue-300 text-sm tracking-[0.5px] mb-1.5">
              {scene.speaker}
            </div>
          )}

          <div
            className={`vn-text ${textSizeClass} leading-relaxed text-zinc-100 max-w-prose ${
              isNarration ? 'narration' : ''
            }`}
          >
            {isNarration
              ? scene.text.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {line}
                  </Fragment>
                ))
              : scene.text}
          </div>
        </div>
      </div>

      {scene.type === 'dialogue' && scene.image && (
        <div className="mt-6 flex justify-end">
          <div className="w-40 h-40 rounded-3xl overflow-hidden border border-zinc-700 shadow-xl">
            <img src={scene.image} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}