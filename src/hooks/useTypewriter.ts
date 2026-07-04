import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTypewriterOptions {
  text: string;
  charDelayMs: number;
  instant?: boolean;
  enabled?: boolean;
}

export function useTypewriter({
  text,
  charDelayMs,
  instant = false,
  enabled = true,
}: UseTypewriterOptions) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    setVisibleCount(0);
    setIsComplete(false);

    if (!enabled || !text.length) {
      setIsComplete(true);
      return;
    }

    if (instant) {
      setVisibleCount(text.length);
      setIsComplete(true);
      return;
    }

    timerRef.current = window.setInterval(() => {
      setVisibleCount((count) => {
        const next = count + 1;
        if (next >= text.length) {
          clearTimer();
          setIsComplete(true);
          return text.length;
        }
        return next;
      });
    }, charDelayMs);

    return clearTimer;
  }, [text, charDelayMs, instant, enabled, clearTimer]);

  return {
    displayedText: text.slice(0, visibleCount),
    isComplete,
  };
}