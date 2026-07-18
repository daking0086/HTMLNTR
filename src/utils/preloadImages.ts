const loaded = new Set<string>();
const inFlight = new Map<string, Promise<void>>();

/** Warm the browser cache for a list of image URLs (deduped, safe to call often). */
export function preloadImages(urls: Array<string | null | undefined>): void {
  for (const url of urls) {
    if (!url || loaded.has(url) || inFlight.has(url)) continue;

    const promise = new Promise<void>((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        loaded.add(url);
        inFlight.delete(url);
        resolve();
      };
      img.onerror = () => {
        inFlight.delete(url);
        resolve();
      };
      img.src = url;
      if (img.complete) {
        loaded.add(url);
        inFlight.delete(url);
        resolve();
      }
    });

    inFlight.set(url, promise);
  }
}

export function isImagePreloaded(url: string | null | undefined): boolean {
  if (!url) return true;
  if (loaded.has(url)) return true;
  // Probe cache via a throwaway Image if already complete in browser cache
  return false;
}

/** Resolves when every listed URL is loaded (or failed). */
export function waitForImages(urls: Array<string | null | undefined>): Promise<void> {
  const unique = [...new Set(urls.filter((u): u is string => Boolean(u)))];
  preloadImages(unique);
  return Promise.all(
    unique.map((url) => inFlight.get(url) ?? (loaded.has(url) ? Promise.resolve() : Promise.resolve())),
  ).then(() => undefined);
}
