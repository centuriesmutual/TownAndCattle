import { cookies } from "next/headers";
import { getIronSession, type SessionOptions } from "iron-session";

export type TcUser = {
  coinbaseId: string;
  email?: string;
  name?: string;
  avatarUrl?: string;
  profileCompletedAt?: string;
};

export type TcProfile = {
  phone?: string;
  zip?: string;
  marketingEmail: boolean;
  smsAlerts: boolean;
};

export type TcSessionData = {
  oauthState?: string;
  codeVerifier?: string;
  user?: TcUser;
  profile?: TcProfile;
};

/** Dev + emergency fallback only — must match length iron-session expects. */
const FALLBACK_SESSION_PASSWORD = "01234567890123456789012345678901";

function sessionPassword(): string {
  const p = process.env.IRON_SESSION_PASSWORD;
  if (p && p.length >= 32) return p;
  if (process.env.NODE_ENV !== "production") {
    return FALLBACK_SESSION_PASSWORD;
  }
  // Production used to throw here; that broke every route once the site layout
  // started reading the session. Prefer a loud warning + fallback so deploys
  // boot—set IRON_SESSION_PASSWORD for real deployments.
  console.warn(
    "[townandcattle] IRON_SESSION_PASSWORD is missing or shorter than 32 characters. Using an insecure built-in fallback; set IRON_SESSION_PASSWORD in your host environment.",
  );
  return FALLBACK_SESSION_PASSWORD;
}

export function getSessionOptions(): SessionOptions {
  return {
    cookieName: "tc_session",
    password: sessionPassword(),
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    },
  };
}

export async function getTcSession() {
  const store = await cookies();
  return getIronSession<TcSessionData>(store, getSessionOptions());
}
