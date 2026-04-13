import { getAppOrigin, getCoinbaseRedirectUri } from "./app-origin";

const AUTH_URL =
  process.env.COINBASE_AUTH_URL ?? "https://login.coinbase.com/oauth2/auth";
const TOKEN_URL =
  process.env.COINBASE_TOKEN_URL ?? "https://login.coinbase.com/oauth2/token";
const USER_URL =
  process.env.COINBASE_USER_URL ?? "https://api.coinbase.com/v2/user";

/** Read-only identity; expand scopes only when product requires wallet access. */
const DEFAULT_SCOPE = "wallet:user:read";

export function coinbaseOAuthReady(): boolean {
  return !!(
    process.env.COINBASE_CLIENT_ID?.trim() &&
    process.env.COINBASE_CLIENT_SECRET?.trim()
  );
}

export function buildAuthorizeUrl(params: {
  state: string;
  codeChallenge: string;
}): string {
  const clientId = process.env.COINBASE_CLIENT_ID!;
  const redirectUri = getCoinbaseRedirectUri();
  const scope = process.env.COINBASE_OAUTH_SCOPE?.trim() || DEFAULT_SCOPE;

  const q = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
    state: params.state,
    code_challenge: params.codeChallenge,
    code_challenge_method: "S256",
  });

  return `${AUTH_URL}?${q.toString()}`;
}

export async function exchangeCodeForTokens(params: {
  code: string;
  codeVerifier: string;
}): Promise<{
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
}> {
  const clientId = process.env.COINBASE_CLIENT_ID!;
  const clientSecret = process.env.COINBASE_CLIENT_SECRET!;
  const redirectUri = getCoinbaseRedirectUri();

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: params.code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code_verifier: params.codeVerifier,
  });

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: body.toString(),
  });

  const json = (await res.json()) as Record<string, unknown>;

  if (!res.ok) {
    const msg =
      typeof json.error_description === "string"
        ? json.error_description
        : typeof json.error === "string"
          ? json.error
          : `token_exchange_failed_${res.status}`;
    throw new Error(msg);
  }

  const access_token = json.access_token as string;
  if (!access_token) throw new Error("missing_access_token");

  return {
    access_token,
    refresh_token: json.refresh_token as string | undefined,
    expires_in: Number(json.expires_in) || 3600,
    token_type: String(json.token_type || "bearer"),
  };
}

export type CoinbaseUser = {
  id: string;
  name?: string;
  email?: string;
  avatarUrl?: string;
};

export async function fetchCoinbaseUser(
  accessToken: string,
): Promise<CoinbaseUser> {
  const res = await fetch(USER_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const json = (await res.json()) as {
    data?: {
      id?: string;
      name?: string;
      email?: string;
      avatar_url?: string;
    };
    errors?: { message: string }[];
  };

  if (!res.ok || !json.data?.id) {
    const msg = json.errors?.[0]?.message ?? `user_fetch_failed_${res.status}`;
    throw new Error(msg);
  }

  const d = json.data;
  return {
    id: d.id as string,
    name: d.name,
    email: d.email,
    avatarUrl: d.avatar_url,
  };
}

export function oauthErrorRedirect(path: string, code: string): string {
  const u = new URL(path, getAppOrigin());
  u.searchParams.set("error", code);
  return u.pathname + u.search;
}
