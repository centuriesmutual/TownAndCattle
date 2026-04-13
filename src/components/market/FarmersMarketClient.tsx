"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useCallback, useEffect, useMemo, useState } from "react";
import type { MarketProduct } from "@/data/site";

const WALLET_KEY = "townandcattle_wallet_v1";
const CART_KEY = "townandcattle_cart_v1";

type Wallet = { usd: number; usdc: number };

type CartLine = { sku: string; qty: number };

type LedgerEntry = { id: string; at: string; text: string };

function loadWallet(): Wallet {
  if (typeof window === "undefined") return { usd: 0, usdc: 0 };
  try {
    const raw = localStorage.getItem(WALLET_KEY);
    if (!raw) return { usd: 150, usdc: 40 };
    const p = JSON.parse(raw) as Partial<Wallet>;
    return {
      usd: typeof p.usd === "number" ? p.usd : 150,
      usdc: typeof p.usdc === "number" ? p.usdc : 40,
    };
  } catch {
    return { usd: 150, usdc: 40 };
  }
}

function saveWallet(w: Wallet) {
  localStorage.setItem(WALLET_KEY, JSON.stringify(w));
}

function loadCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as CartLine[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveCart(lines: CartLine[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(lines));
}

function formatMoney(n: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(n);
}

export function FarmersMarketClient({ products }: { products: MarketProduct[] }) {
  const [wallet, setWallet] = useState<Wallet>({ usd: 150, usdc: 40 });
  const [cart, setCart] = useState<CartLine[]>([]);
  const [ledger, setLedger] = useState<LedgerEntry[]>([]);
  const [checkoutMsg, setCheckoutMsg] = useState<string | null>(null);

  useEffect(() => {
    startTransition(() => {
      setWallet(loadWallet());
      setCart(loadCart());
    });
  }, []);

  const persistWallet = useCallback((next: Wallet) => {
    setWallet(next);
    saveWallet(next);
  }, []);

  const persistCart = useCallback((next: CartLine[]) => {
    setCart(next);
    saveCart(next);
  }, []);

  const pushLedger = useCallback((text: string) => {
    setLedger((prev) => {
      const row: LedgerEntry = {
        id: crypto.randomUUID(),
        at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        text,
      };
      return [row, ...prev].slice(0, 8);
    });
  }, []);

  const bySku = useMemo(() => {
    const m = new Map<string, MarketProduct>();
    for (const p of products) m.set(p.sku, p);
    return m;
  }, [products]);

  const cartLines = useMemo(() => {
    return cart
      .map((line) => {
        const p = bySku.get(line.sku);
        if (!p) return null;
        const unit = Number.parseFloat(p.price);
        return { ...line, product: p, unit, subtotal: unit * line.qty };
      })
      .filter(Boolean) as Array<
        CartLine & { product: MarketProduct; unit: number; subtotal: number }
      >;
  }, [cart, bySku]);

  const subtotal = useMemo(
    () => cartLines.reduce((s, l) => s + l.subtotal, 0),
    [cartLines],
  );

  const addToCart = (sku: string) => {
    const next = [...cart];
    const i = next.findIndex((l) => l.sku === sku);
    if (i >= 0) next[i] = { ...next[i], qty: next[i].qty + 1 };
    else next.push({ sku, qty: 1 });
    persistCart(next);
    setCheckoutMsg(null);
  };

  const updateQty = (sku: string, qty: number) => {
    if (qty < 1) {
      persistCart(cart.filter((l) => l.sku !== sku));
      return;
    }
    persistCart(cart.map((l) => (l.sku === sku ? { ...l, qty } : l)));
  };

  const checkout = () => {
    if (subtotal <= 0) return;
    let usd = wallet.usd;
    let usdc = wallet.usdc;
    let remaining = subtotal;

    const useUsd = Math.min(usd, remaining);
    usd -= useUsd;
    remaining -= useUsd;

    if (remaining > 0) {
      const useUsdc = Math.min(usdc, remaining);
      usdc -= useUsdc;
      remaining -= useUsdc;
    }

    if (remaining > 0) {
      setCheckoutMsg(
        `Add at least ${formatMoney(remaining, "USD")} to your wallet (cash or USDC) to complete this order.`,
      );
      return;
    }

    persistWallet({ usd, usdc });
    pushLedger(`Paid ${formatMoney(subtotal, "USD")} · ${cartLines.length} stall item(s)`);
    persistCart([]);
    setCheckoutMsg(
      `Order placed for ${formatMoney(subtotal, "USD")}. Ranch partners receive fulfillment notices on the operational rail.`,
    );
  };

  const addCash = (n: number) => {
    persistWallet({ ...wallet, usd: wallet.usd + n });
    pushLedger(`Added ${formatMoney(n, "USD")} cash`);
  };

  const addUsdc = (n: number) => {
    persistWallet({ ...wallet, usdc: wallet.usdc + n });
    pushLedger(`Added ${n} USDC`);
  };

  const convertUsdToUsdc = () => {
    const move = Math.min(25, wallet.usd);
    if (move < 1) return;
    persistWallet({ usd: wallet.usd - move, usdc: wallet.usdc + move });
    pushLedger(`Converted ${formatMoney(move, "USD")} to USDC`);
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8 lg:py-14">
      <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-[340px]">
        <div className="rounded-2xl border border-wf-border bg-wf-white p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-wf-green">
            Your wallet
          </p>
          <p className="mt-2 text-sm text-wf-muted">
            Demo balances stay in this browser. Coinbase checkout on the commerce
            rail is separate—this is your consumer vantage for the market stall.
          </p>

          <dl className="mt-6 space-y-4 border-t border-wf-border pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-wf-muted">
                Cash (USD)
              </dt>
              <dd className="font-display text-2xl font-semibold text-wf-ink">
                {formatMoney(wallet.usd, "USD")}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-wf-muted">
                USDC
              </dt>
              <dd className="font-display text-2xl font-semibold text-wf-ink">
                {`${wallet.usdc.toFixed(2)} USDC`}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => addCash(50)}
              className="tc-tap rounded-lg border border-wf-border bg-wf-cream px-3 py-2 text-xs font-semibold text-wf-ink transition hover:border-wf-green"
            >
              +$50 cash
            </button>
            <button
              type="button"
              onClick={() => addCash(100)}
              className="tc-tap rounded-lg border border-wf-border bg-wf-cream px-3 py-2 text-xs font-semibold text-wf-ink transition hover:border-wf-green"
            >
              +$100 cash
            </button>
            <button
              type="button"
              onClick={() => addUsdc(25)}
              className="tc-tap rounded-lg border border-wf-border bg-wf-cream px-3 py-2 text-xs font-semibold text-wf-ink transition hover:border-wf-green"
            >
              +25 USDC
            </button>
            <button
              type="button"
              onClick={convertUsdToUsdc}
              className="tc-tap rounded-lg border border-wf-border bg-wf-white px-3 py-2 text-xs font-semibold text-wf-green transition hover:bg-wf-sage"
            >
              Move $25 → USDC
            </button>
          </div>

          {ledger.length > 0 ? (
            <div className="mt-8 border-t border-wf-border pt-6">
              <p className="text-[10px] font-bold uppercase tracking-wider text-wf-muted">
                Recent activity
              </p>
              <ul className="mt-3 max-h-40 space-y-2 overflow-y-auto text-xs text-wf-muted">
                {ledger.map((e) => (
                  <li
                    key={e.id}
                    className="flex justify-between gap-2 border-b border-wf-border/60 pb-2 text-wf-ink last:border-0"
                  >
                    <span>{e.text}</span>
                    <span className="shrink-0 text-[11px] text-wf-muted">{e.at}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Link
            href="/commerce"
            className="mt-6 block text-center text-xs font-semibold text-wf-green underline-offset-4 hover:underline"
          >
            How Coinbase Commerce settles real orders →
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-wf-border bg-wf-sage/40 p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-wf-green">
            Cart
          </p>
          {cartLines.length === 0 ? (
            <p className="mt-3 text-sm text-wf-muted">Your basket is empty.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {cartLines.map((line) => (
                <li
                  key={line.sku}
                  className="flex flex-wrap items-center justify-between gap-2 border-b border-wf-border/70 pb-3 text-sm last:border-0"
                >
                  <span className="font-medium text-wf-ink">{line.product.name}</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={line.qty}
                      onChange={(ev) =>
                        updateQty(line.sku, Number.parseInt(ev.target.value, 10) || 1)
                      }
                      className="w-14 rounded-md border border-wf-border bg-wf-white px-2 py-1 text-center text-xs"
                    />
                    <span className="text-wf-price font-semibold">
                      {formatMoney(line.subtotal, line.product.priceCurrency)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex items-center justify-between border-t border-wf-border pt-4">
            <span className="text-sm font-semibold text-wf-ink">Subtotal</span>
            <span className="font-display text-lg font-semibold text-wf-price">
              {formatMoney(subtotal, "USD")}
            </span>
          </div>
          <button
            type="button"
            onClick={checkout}
            disabled={subtotal <= 0}
            className="tc-tap mt-4 w-full justify-center rounded-xl border border-wf-green bg-wf-green py-3 text-sm font-semibold text-white transition hover:bg-wf-green-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            Pay from wallet
          </button>
          {checkoutMsg ? (
            <p className="mt-3 text-center text-xs leading-relaxed text-wf-ink">{checkoutMsg}</p>
          ) : null}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Farmers market
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wf-ink sm:text-4xl">
            Ranch stalls, USDA labels, per-pound clarity
          </h1>
          <p className="mt-4 text-base leading-relaxed text-wf-muted sm:text-lg">
            Browse verified listings the way you would at a Saturday market—know the
            ranch, the grade, and the price before you commit. Your wallet funds
            simulated checkout; production fulfillment rides the commerce rail.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.sku}
              className="flex flex-col overflow-hidden rounded-2xl border border-wf-border bg-wf-white"
            >
              <div className="relative aspect-[4/3] w-full bg-wf-cream">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-wf-green">
                  {p.grade} · {p.ranch}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-wf-ink">{p.name}</h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-wf-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-wf-border pt-4">
                  <p className="font-display text-xl font-semibold text-wf-price">
                    {formatMoney(Number.parseFloat(p.price), p.priceCurrency)}
                    <span className="text-xs font-normal text-wf-muted"> / lb</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => addToCart(p.sku)}
                    className="tc-tap rounded-xl border-2 border-wf-ink bg-wf-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-wf-ink-deep"
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
