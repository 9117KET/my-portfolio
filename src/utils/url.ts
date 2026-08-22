/**
 * Absolute URL for the current route, without query string or hash.
 * Used for canonical links and og:url, where a stable URL matters.
 */
export function canonicalUrl(): string {
  return window.location.origin + window.location.pathname;
}
