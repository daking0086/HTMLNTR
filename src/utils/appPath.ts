/**
 * Vite base without trailing slash, e.g. `/HTMLNTR`.
 * Empty string if base is `/`.
 */
export function getBasePath(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '';
  return base.replace(/\/+$/, '');
}

/**
 * Pathname without Vite base.
 * `http://localhost:5173/HTMLNTR/test` → `/test`
 * `http://localhost:5173/HTMLNTR/test/scene-stage` → `/test/scene-stage`
 */
export function getAppPath(): string {
  const base = getBasePath();
  let path = window.location.pathname;

  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || '/';
  }

  if (!path.startsWith('/')) path = `/${path}`;
  return path.replace(/\/+$/, '') || '/';
}

/**
 * Build an href under the Vite base.
 * `toAppHref('/test')` → `/HTMLNTR/test`
 * `toAppHref('test/scene-stage')` → `/HTMLNTR/test/scene-stage`
 */
export function toAppHref(path: string): string {
  const base = getBasePath();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
