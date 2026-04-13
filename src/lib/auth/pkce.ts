import { createHash, randomBytes } from "node:crypto";

function toBase64Url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** RFC 7636 PKCE pair for Coinbase App OAuth (S256). */
export function createPkcePair(): { verifier: string; challenge: string } {
  const verifier = toBase64Url(randomBytes(32));
  const challenge = toBase64Url(
    createHash("sha256").update(verifier).digest(),
  );
  return { verifier, challenge };
}

export function randomOAuthState(): string {
  return randomBytes(24).toString("hex");
}
