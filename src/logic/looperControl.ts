/** Custom event so Enter/Continue routes into active Looper / FrameLooper / VideoLooper. */
export const LOOPER_CONTINUE_EVENT = 'vn:looper-continue';

export function requestLooperContinue(): void {
  window.dispatchEvent(new CustomEvent(LOOPER_CONTINUE_EVENT));
}
