function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-wf-border bg-wf-white p-4">{children}</div>
  );
}

export function PillarArtBuyers() {
  return (
    <Wrap>
      <svg viewBox="0 0 200 120" className="h-28 w-full" aria-hidden>
        <defs>
          <marker
            id="cab-arw"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#0f766e" />
          </marker>
        </defs>
        <rect
          x="20"
          y="28"
          width="70"
          height="44"
          rx="6"
          fill="#e4f0eb"
          stroke="#c5d9cf"
        />
        <text x="55" y="55" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 9 }}>
          Card
        </text>
        <path
          d="M95 50 L112 50"
          stroke="#0f766e"
          strokeWidth="2"
          markerEnd="url(#cab-arw)"
        />
        <rect
          x="118"
          y="28"
          width="62"
          height="44"
          rx="6"
          fill="#0f766e"
          fillOpacity="0.15"
          stroke="#0f766e"
        />
        <text x="149" y="55" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 8 }}>
          Crypto
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 8 }}>
          One invoice
        </text>
      </svg>
    </Wrap>
  );
}

export function PillarArtRanchers() {
  return (
    <Wrap>
      <svg viewBox="0 0 200 120" className="h-28 w-full" aria-hidden>
        <rect x="24" y="30" width="152" height="14" rx="2" fill="#e4f0eb" />
        <rect x="24" y="50" width="100" height="14" rx="2" fill="#c5d9cf" />
        <circle cx="40" cy="88" r="8" fill="#0f766e" />
        <path
          d="M56 88 L160 88"
          stroke="#0f766e"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <rect x="164" y="78" width="28" height="20" rx="4" fill="#0d3b30" />
        <text x="100" y="112" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 8 }}>
          Event → payout
        </text>
      </svg>
    </Wrap>
  );
}

export function PillarArtBoth() {
  return (
    <Wrap>
      <svg viewBox="0 0 200 120" className="h-28 w-full" aria-hidden>
        <text
          x="100"
          y="24"
          textAnchor="middle"
          fill="#0d3b30"
          style={{ fontSize: 9, fontWeight: 700 }}
        >
          Fees shown pre-capture
        </text>
        <rect x="30" y="40" width="140" height="36" rx="6" fill="#fff" stroke="#0f766e" />
        <text x="100" y="58" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 8 }}>
          Network + FX estimate
        </text>
        <text x="100" y="74" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 8 }}>
          Net to ranch preview
        </text>
        <text x="100" y="108" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 7 }}>
          Cross-border clarity
        </text>
      </svg>
    </Wrap>
  );
}

export function PillarArtOps() {
  return (
    <Wrap>
      <svg viewBox="0 0 200 120" className="h-28 w-full" aria-hidden>
        <rect x="28" y="32" width="56" height="24" rx="4" fill="#e4f0eb" />
        <text x="56" y="48" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 8 }}>
          Auth
        </text>
        <path d="M88 44 L112 44" stroke="#0f766e" strokeWidth="2" />
        <rect x="116" y="32" width="56" height="24" rx="4" fill="#e4f0eb" />
        <text x="144" y="48" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 8 }}>
          Capture
        </text>
        <path d="M100 58 L100 72" stroke="#0f766e" strokeWidth="2" />
        <rect x="72" y="76" width="56" height="24" rx="4" fill="#0d3b30" fillOpacity="0.85" />
        <text x="100" y="92" textAnchor="middle" fill="#fff" style={{ fontSize: 8 }}>
          Lot gate
        </text>
      </svg>
    </Wrap>
  );
}
