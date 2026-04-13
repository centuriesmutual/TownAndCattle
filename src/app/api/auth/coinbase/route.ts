import { NextResponse } from "next/server";
import {
  buildAuthorizeUrl,
  coinbaseOAuthReady,
} from "@/lib/auth/coinbase";
import { getAppOrigin } from "@/lib/auth/app-origin";
import { createPkcePair, randomOAuthState } from "@/lib/auth/pkce";
import { getTcSession } from "@/lib/auth/session";

/**
 * Starts Coinbase App OAuth2 (PKCE). Register redirect URI in CDP:
 * `{NEXT_PUBLIC_APP_URL}/api/auth/coinbase/callback`
 */
export async function GET() {
  if (!coinbaseOAuthReady()) {
    return NextResponse.redirect(
      new URL(
        "/create-account?error=oauth_not_configured",
        getAppOrigin(),
      ).toString(),
    );
  }

  const session = await getTcSession();
  const state = randomOAuthState();
  const { verifier, challenge } = createPkcePair();

  session.oauthState = state;
  session.codeVerifier = verifier;
  await session.save();

  const url = buildAuthorizeUrl({ state, codeChallenge: challenge });
  return NextResponse.redirect(url);
}
