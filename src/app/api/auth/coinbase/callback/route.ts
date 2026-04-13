import { NextResponse } from "next/server";
import {
  exchangeCodeForTokens,
  fetchCoinbaseUser,
} from "@/lib/auth/coinbase";
import { getAppOrigin } from "@/lib/auth/app-origin";
import { getTcSession } from "@/lib/auth/session";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const err = searchParams.get("error");
  const errDesc = searchParams.get("error_description");

  const fail = (reason: string) =>
    NextResponse.redirect(
      new URL(
        `/create-account?error=${encodeURIComponent(reason)}`,
        getAppOrigin(),
      ).toString(),
    );

  if (err) {
    return fail(errDesc || err);
  }

  if (!code || !state) {
    return fail("missing_code_or_state");
  }

  const session = await getTcSession();

  if (!session.oauthState || state !== session.oauthState) {
    return fail("invalid_state");
  }

  const codeVerifier = session.codeVerifier;
  if (!codeVerifier) {
    return fail("missing_code_verifier");
  }

  try {
    const tokens = await exchangeCodeForTokens({ code, codeVerifier });
    const cbUser = await fetchCoinbaseUser(tokens.access_token);

    session.user = {
      coinbaseId: cbUser.id,
      email: cbUser.email,
      name: cbUser.name,
      avatarUrl: cbUser.avatarUrl,
    };
    session.oauthState = undefined;
    session.codeVerifier = undefined;
    await session.save();
  } catch (e) {
    const msg = e instanceof Error ? e.message : "oauth_failed";
    session.oauthState = undefined;
    session.codeVerifier = undefined;
    await session.save();
    return fail(msg);
  }

  return NextResponse.redirect(
    new URL("/create-account?step=profile", getAppOrigin()).toString(),
  );
}
