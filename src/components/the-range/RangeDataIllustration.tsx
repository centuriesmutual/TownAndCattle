/** Abstract data-to-marketplace illustration (no vendor branding). */
export function RangeDataIllustration() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="h-auto w-full max-w-4xl"
      aria-hidden
    >
      <defs>
        <marker
          id="range-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#0f766e" />
        </marker>
      </defs>
      <rect width="800" height="420" fill="#eef4f0" rx="24" />

      <g transform="translate(80,120)">
        <rect
          x="0"
          y="0"
          width="140"
          height="100"
          rx="12"
          fill="#ffffff"
          stroke="#c5d9cf"
          strokeWidth="2"
        />
        <circle cx="40" cy="40" r="18" fill="#0f766e" opacity="0.35" />
        <text x="70" y="46" fill="#1a2e28" style={{ fontSize: 11, fontWeight: 700 }}>
          Ranch ops
        </text>
        <text x="16" y="78" fill="#5c6f69" style={{ fontSize: 10 }}>
          Harvest · lots · grades
        </text>
      </g>

      <g transform="translate(320,60)">
        <rect
          x="0"
          y="0"
          width="160"
          height="120"
          rx="12"
          fill="#ffffff"
          stroke="#c5d9cf"
          strokeWidth="2"
        />
        <path
          d="M20 90 L45 70 L70 80 L95 50 L120 65 L140 40"
          fill="none"
          stroke="#0f766e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="20" y="28" fill="#1a2e28" style={{ fontSize: 11, fontWeight: 700 }}>
          Demand signals
        </text>
        <text x="20" y="112" fill="#5c6f69" style={{ fontSize: 10 }}>
          Velocity · regions · price bands
        </text>
      </g>

      <g transform="translate(330,220)">
        <circle cx="70" cy="70" r="68" fill="#0d3b30" opacity="0.92" />
        <text
          x="70"
          y="68"
          textAnchor="middle"
          fill="#f6f7f4"
          style={{ fontSize: 13, fontWeight: 700, fontFamily: "Georgia, serif" }}
        >
          Town
        </text>
        <text
          x="70"
          y="88"
          textAnchor="middle"
          fill="#5eead4"
          style={{ fontSize: 13, fontWeight: 700, fontFamily: "Georgia, serif" }}
        >
          &amp; Cattle
        </text>
        <text
          x="70"
          y="108"
          textAnchor="middle"
          fill="#ffffff"
          opacity="0.65"
          style={{ fontSize: 8 }}
        >
          unified intelligence
        </text>
      </g>

      <g transform="translate(560,120)">
        <rect
          x="0"
          y="0"
          width="160"
          height="100"
          rx="12"
          fill="#ffffff"
          stroke="#0f766e"
          strokeWidth="2"
        />
        <rect x="20" y="28" width="120" height="10" rx="2" fill="#e4f0eb" />
        <rect x="20" y="46" width="90" height="10" rx="2" fill="#e4f0eb" />
        <rect x="20" y="64" width="100" height="10" rx="2" fill="#c5d9cf" />
        <text x="20" y="22" fill="#1a2e28" style={{ fontSize: 11, fontWeight: 700 }}>
          Live catalog
        </text>
        <text x="20" y="94" fill="#5c6f69" style={{ fontSize: 10 }}>
          Listings · fulfillment · payout
        </text>
      </g>

      <path
        d="M 220 170 L 305 248"
        stroke="#0f766e"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerEnd="url(#range-arrow)"
      />
      <path
        d="M 475 115 L 405 248"
        stroke="#0f766e"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerEnd="url(#range-arrow)"
      />
      <path
        d="M 475 275 L 555 205"
        stroke="#0f766e"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerEnd="url(#range-arrow)"
      />
    </svg>
  );
}
