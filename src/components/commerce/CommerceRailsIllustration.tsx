/** Hero illustration: dual checkout rails converging on Commerce, then ranch treasury. */
export function CommerceRailsIllustration() {
  return (
    <svg
      viewBox="0 0 880 300"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: card and digital checkouts merge through Coinbase Commerce into ranch treasury reporting"
    >
      <defs>
        <marker
          id="cr-arw"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#0d3b30" />
        </marker>
      </defs>
      <rect width="880" height="300" fill="#f5f7f4" rx="20" />

      <g>
        <rect
          x="40"
          y="70"
          width="170"
          height="160"
          rx="14"
          fill="#fff"
          stroke="#c5d9cf"
          strokeWidth="2"
        />
        <text x="125" y="102" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 12, fontWeight: 700 }}>
          Card &amp; ACH
        </text>
        <rect x="68" y="118" width="114" height="40" rx="8" fill="#e4f0eb" />
        <text x="125" y="144" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          Traditional checkout
        </text>
        <text x="125" y="188" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 9 }}>
          Same SKU &amp; invoice
        </text>
      </g>

      <g>
        <rect
          x="230"
          y="70"
          width="170"
          height="160"
          rx="14"
          fill="#fff"
          stroke="#0f766e"
          strokeWidth="2"
        />
        <text x="315" y="102" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 12, fontWeight: 700 }}>
          Digital assets
        </text>
        <circle cx="315" cy="148" r="32" fill="#0f766e" fillOpacity="0.12" />
        <text x="315" y="154" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 11, fontWeight: 700 }}>
          Commerce
        </text>
        <text x="315" y="188" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 9 }}>
          Invoice-linked
        </text>
      </g>

      <g>
        <rect x="430" y="95" width="150" height="110" rx="16" fill="#0d3b30" />
        <text x="505" y="138" textAnchor="middle" fill="#5eead4" style={{ fontSize: 11, fontWeight: 700 }}>
          Coinbase
        </text>
        <text x="505" y="156" textAnchor="middle" fill="#5eead4" style={{ fontSize: 11, fontWeight: 700 }}>
          Commerce
        </text>
        <text x="505" y="186" textAnchor="middle" fill="#fff" opacity="0.7" style={{ fontSize: 9 }}>
          webhooks · ledger
        </text>
      </g>

      <g>
        <rect
          x="620"
          y="55"
          width="220"
          height="190"
          rx="14"
          fill="#fff"
          stroke="#0d3b30"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <text x="730" y="92" textAnchor="middle" fill="#0d3b30" style={{ fontSize: 12, fontWeight: 700 }}>
          Ranch treasury
        </text>
        <rect x="648" y="108" width="164" height="10" rx="2" fill="#e4f0eb" />
        <rect x="648" y="126" width="120" height="10" rx="2" fill="#e4f0eb" />
        <rect x="648" y="144" width="140" height="10" rx="2" fill="#c5d9cf" />
        <text x="730" y="188" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          Payout per fulfillment
        </text>
        <text x="730" y="208" textAnchor="middle" fill="#5c6f69" style={{ fontSize: 10 }}>
          USDA lot audit trail
        </text>
      </g>

      <path
        d="M 210 150 L 426 150"
        stroke="#0d3b30"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#cr-arw)"
      />
      <path
        d="M 400 150 L 426 150"
        stroke="#0d3b30"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#cr-arw)"
      />
      <path
        d="M 580 150 L 616 150"
        stroke="#0d3b30"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#cr-arw)"
      />
    </svg>
  );
}
