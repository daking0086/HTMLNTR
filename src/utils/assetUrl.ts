/** Resolve a public-folder path for the current Vite base (e.g. /HTMLNTR/ on GitHub Pages). */
export function assetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  // Encode each segment so folders like "suck loop 1" work in prod
  const encoded = normalized
    .split('/')
    .map((seg) => encodeURIComponent(seg))
    .join('/');
  return `${base}${encoded}`;
}