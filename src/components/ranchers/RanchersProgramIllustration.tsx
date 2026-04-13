/** Full-width program illustration: listings → rails → intelligence → partners. */
export function RanchersProgramIllustration() {
  return (
    <svg
      viewBox="0 0 960 380"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: USDA listings connect to settlement rails and demand intelligence, feeding the Town and Cattle partner network"
    >
      <defs>
        <linearGradient id="rp-bg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e4f0eb" />
          <stop offset="100%" stopColor="#f5f7f4" />
        </linearGradient>
        <marker
          id="rp-arw"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0,0 L9,4.5 L0,9 Z" fill="#0f766e" />
        </marker>
      </defs>
      <rect width="960" height="380" fill="url(#rp-bg)" rx="20" />

      {/* USDA listing */}
      <g transform="translate(48,100)">
        <rect
          width="200"
          height="180"
          rx="14"
          fill="#fff"
          stroke="#0d3b30"
          strokeWidth="2"
        />
        <text x="100" y="36" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 13, fontWeight: 700 }}>
          USDA listings
        </text>
        <rect x="24" y="52" width="152" height="8" rx="2" fill="#c5d9cf" />
        <rect x="24" y="68" width="120" height="8" rx="2" fill="#e4f0eb" />
        <rect x="24" y="84" width="140" height="8" rx="2" fill="#e4f0eb" />
        <text x="100" y="120" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          Grades · lots · harvest
        </text>
        <text x="100" y="142" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          windows · cut sheets
        </text>
      </g>

      {/* Settlement */}
      <g transform="translate(300,90)">
        <rect
          width="200"
          height="200"
          rx="14"
          fill="#fff"
          stroke="#0f766e"
          strokeWidth="2"
        />
        <text x="100" y="40" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 13, fontWeight: 700 }}>
          Settlement rails
        </text>
        <rect x="40" y="58" width="56" height="36" rx="6" fill="#e4f0eb" />
        <text x="68" y="80" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 9 }}>
          Fiat
        </text>
        <rect x="104" y="58" width="56" height="36" rx="6" fill="#0f766e" opacity="0.2" />
        <text x="132" y="80" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 9 }}>
          Digital
        </text>
        <path
          d="M100 110 L100 150 M70 130 L130 130"
          stroke="#0f766e"
          strokeWidth="2"
        />
        <text x="100" y="178" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          Coinbase Commerce
        </text>
        <text x="100" y="196" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          webhooks · reconciliation
        </text>
      </g>

      {/* Analytics cloud */}
      <g transform="translate(552,95)">
        <ellipse cx="100" cy="90" rx="95" ry="85" fill="#fff" stroke="#c5d9cf" strokeWidth="2" />
        <text x="100" y="56" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 13, fontWeight: 700 }}>
          Demand intelligence
        </text>
        <path
          d="M40 100 Q100 70 160 100"
          fill="none"
          stroke="#0f766e"
          strokeWidth="2.5"
        />
        <circle cx="100" cy="118" r="6" fill="#0f766e" />
        <text x="100" y="150" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          Velocity · regions · bands
        </text>
        <text x="100" y="168" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          modeled demand streams
        </text>
      </g>

      {/* Township */}
      <g transform="translate(780,110)">
        <rect
          width="152"
          height="160"
          rx="14"
          fill="#0d3b30"
        />
        <text x="76" y="48" textAnchor="middle" fill="#5eead4" style={{ fontSize: 12, fontWeight: 700 }}>
          Our Township
        </text>
        <text x="76" y="72" textAnchor="middle" fill="#fff" opacity="0.85" style={{ fontSize: 10 }}>
          FSIS-aligned
        </text>
        <text x="76" y="90" textAnchor="middle" fill="#fff" opacity="0.85" style={{ fontSize: 10 }}>
          onboarding · legal
        </text>
        <text x="76" y="120" textAnchor="middle" fill="#fff" opacity="0.65" style={{ fontSize: 9 }}>
          partner playbook
        </text>
      </g>

      <path
        d="M 252 190 L 292 190"
        stroke="#0f766e"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#rp-arw)"
      />
      <path
        d="M 504 190 L 554 190"
        stroke="#0f766e"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#rp-arw)"
      />
      <path
        d="M 756 190 L 776 190"
        stroke="#0f766e"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#rp-arw)"
      />
    </svg>
  );
}
