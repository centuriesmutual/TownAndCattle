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

function sessionPassword(): string {
  const p = process.env.IRON_SESSION_PASSWORD;
  if (p && p.length >= 32) return p;
  if (process.env.NODE_ENV !== "production") {
    return "01234567890123456789012345678901";
  }
  throw new Error(
    "IRON_SESSION_PASSWORD must be set in production (minimum 32 characters).",
  );
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
