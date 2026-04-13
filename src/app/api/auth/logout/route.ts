import { NextResponse } from "next/server";
import { getAppOrigin } from "@/lib/auth/app-origin";
import { getTcSession } from "@/lib/auth/session";

export async function POST() {
  const session = await getTcSession();
  session.destroy();
  return NextResponse.redirect(
    new URL("/login?signed_out=1", getAppOrigin()).toString(),
  );
}
