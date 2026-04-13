"use server";

import { redirect } from "next/navigation";
import { getTcSession } from "@/lib/auth/session";

export async function completeAccountProfile(formData: FormData) {
  const session = await getTcSession();

  if (!session.user?.coinbaseId) {
    redirect("/create-account?error=not_signed_in");
  }

  const phone = String(formData.get("phone") ?? "").trim();
  const zip = String(formData.get("zip") ?? "").trim();
  const marketingEmail = formData.get("marketingEmail") === "on";
  const smsAlerts = formData.get("smsAlerts") === "on";

  if (zip && !/^\d{5}(-\d{4})?$/.test(zip)) {
    redirect("/create-account?step=profile&error=invalid_zip");
  }

  session.profile = {
    phone: phone || undefined,
    zip: zip || undefined,
    marketingEmail,
    smsAlerts,
  };
  session.user.profileCompletedAt = new Date().toISOString();
  await session.save();

  redirect("/market");
}
