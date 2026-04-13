"use client";

import { useActionState } from "react";
import { type EmailSignInState, signInWithEmail } from "./actions";

const initial: EmailSignInState = {};

export function EmailSignInForm() {
  const [state, formAction, pending] = useActionState(signInWithEmail, initial);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="login-email" className="sr-only">
          Email
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-wf-border bg-wf-cream/50 px-4 py-3 text-sm text-wf-ink outline-none ring-wf-green/30 transition placeholder:text-wf-muted focus:border-wf-green focus:ring-2"
        />
      </div>
      {state?.error ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="tc-tap w-full justify-center rounded-xl border-2 border-wf-ink bg-wf-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-wf-ink-deep disabled:opacity-60"
      >
        {pending ? "Signing you in…" : "Continue with email"}
      </button>
    </form>
  );
}
