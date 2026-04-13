/** Canonical public origin for OAuth redirects and absolute links. */
export function getAppOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export function getCoinbaseRedirectUri(): string {
  return `${getAppOrigin()}/api/auth/coinbase/callback`;
}
