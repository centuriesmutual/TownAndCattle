"use server";

import { redirect } from "next/navigation";
import { getTcSession } from "@/lib/auth/session";

export type EmailSignInState = { error?: string };

export async function signInAsGuest() {
  const session = await getTcSession();
  session.oauthState = undefined;
  session.codeVerifier = undefined;
  const id = crypto.randomUUID();
  session.user = {
    coinbaseId: `guest:${id}`,
    name: "Guest shopper",
    profileCompletedAt: new Date().toISOString(),
  };
  session.profile = {
    marketingEmail: false,
    smsAlerts: false,
  };
  await session.save();
  redirect("/market");
}

export async function signInWithEmail(
  _prev: EmailSignInState,
  formData: FormData,
): Promise<EmailSignInState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address." };
  }

  const session = await getTcSession();
  session.oauthState = undefined;
  session.codeVerifier = undefined;
  const local = email.split("@")[0]?.replace(/[._]+/g, " ") ?? "Shopper";
  session.user = {
    coinbaseId: `email:${email}`,
    email,
    name: local.replace(/\b\w/g, (c) => c.toUpperCase()),
    profileCompletedAt: new Date().toISOString(),
  };
  session.profile = {
    marketingEmail: false,
    smsAlerts: false,
  };
  await session.save();
  redirect("/market");
}
