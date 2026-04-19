import { PRIMARY, ZONES } from "../constants";
import { useInView } from "../hooks/useInView";

const ZONE_LABEL_POSITIONS = {
  "Al Shamal": { lx: 650, ly: 26 },
  "Al Khor": { lx: 700, ly: 124 },
  "Umm Shaharaine (1)": { lx: 465, ly: 118 },
  "Umm Shaharaine (2)": { lx: 438, ly: 186 },
  "Small and Medium Industries": { lx: 58, ly: 184 },
  "Al Karaana": { lx: 12, ly: 230 },
  "Bu Fesseela": { lx: 620, ly: 196 },
  "Aba Saleel": { lx: 150, ly: 248 },
  "Jery Al Samur": { lx: 610, ly: 254 },
  "Bu Sulba": { lx: 94, ly: 280 },
  "Manateq Headquarters": { lx: 438, ly: 234 },
  "Al Wukair": { lx: 500, ly: 290 },
  "Birkat Al Awamer": { lx: 170, ly: 338 },
  "Al Wakra": { lx: 486, ly: 326 },
  Mesaieed: { lx: 250, ly: 402 },
};

export default function MapSection() {
  const [mapRef, isInView] = useInView({ threshold: 0.2 });

  const processedZones = ZONES.map((z) => {
    const cx = (z.x / 100) * 780;
    const cy = (z.y / 100) * 480;
    const pos = ZONE_LABEL_POSITIONS[z.name] || { lx: cx + 14, ly: cy - 10 };
    const labelWidth = Math.max(62, Math.min(170, z.name.length * 5.8 + 14));
    const labelHeight = 18;
    const labelX = pos.lx;
    const labelY = pos.ly;
    const labelCenterX = labelX + labelWidth / 2;
    const labelCenterY = labelY + labelHeight / 2;
    const anchorX =
      cx < labelX
        ? labelX
        : cx > labelX + labelWidth
          ? labelX + labelWidth
          : labelCenterX;
    const anchorY =
      cy < labelY
        ? labelY
        : cy > labelY + labelHeight
          ? labelY + labelHeight
          : labelCenterY;

    return {
      ...z,
      cx,
      cy,
      labelX,
      labelY,
      labelWidth,
      labelHeight,
      anchorX,
      anchorY,
    };
  });

  return (
    <section
      ref={mapRef}
      className="map-section"
      style={{ background: "#f7f7f5", padding: "72px 80px", overflow: "visible" }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          animation: isInView ? "fadeUp 0.6s ease 0.1s both" : "none",
          opacity: isInView ? 1 : 0,
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#333",
            fontFamily: "Georgia, serif",
          }}
        >
          Manateq at a glance
        </h2>

        <div className="map-summary-stats">
          {[
            { val: "1000+", lbl: "Active Companies" },
            { val: "14M+", lbl: "sq.m Land Area" },
            { val: "5", lbl: "Economic Zones" },
            { val: "87", lbl: "Operational Units Rate (%)" },
          ].map((s, index) => (
            <div
              key={s.lbl}
              className="map-summary-stat"
              style={{
                textAlign: "center",
                animation: isInView
                  ? `popIn 0.5s ease ${0.3 + index * 0.1}s both`
                  : "none",
                opacity: isInView ? 1 : 0,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#222",
                  fontFamily: "Georgia, serif",
                }}
              >
                {s.val}
              </div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 4 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 860,
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
          animation: isInView ? "fadeUp 0.8s ease 0.5s both" : "none",
          opacity: isInView ? 1 : 0,
        }}
      >
        <svg
          viewBox="0 0 860 560"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.10))",
          }}
        >
          <path
            d="M 120 80 L 680 80 L 720 160 L 700 260 L 660 340 L 600 420 L 540 450 L 480 450 L 420 430 L 380 400 L 340 360 L 300 300 L 180 280 L 100 220 L 100 160 Z"
            fill="#d4d0c8"
            stroke="#bbb"
            strokeWidth="2"
          />
          <path
            d="M 300 200 L 500 180 L 540 280 L 480 350 L 360 340 L 280 280 Z"
            fill="#c8c4bc"
            stroke="#bbb"
            strokeWidth="1"
          />

          {processedZones.map((z, index) => (
            <g
              key={`${z.name}-graphics`}
              style={{
                animation: isInView
                  ? `popIn 0.6s ease ${0.7 + index * 0.05}s both`
                  : "none",
                opacity: isInView ? 1 : 0,
              }}
            >
              <line
                x1={z.cx}
                y1={z.cy}
                x2={z.anchorX}
                y2={z.anchorY}
                stroke={z.color}
                strokeWidth="1"
                strokeOpacity="0.45"
              />
              {z.isHQ ? (
                <polygon
                  points={`${z.cx},${z.cy - 10} ${z.cx + 8},${z.cy + 6} ${z.cx - 8},${z.cy + 6}`}
                  fill={z.color}
                />
              ) : (
                <circle cx={z.cx} cy={z.cy} r="5" fill={z.color} />
              )}
              <rect
                x={z.labelX}
                y={z.labelY}
                width={z.labelWidth}
                height="18"
                rx="9"
                fill={z.color}
              />
            </g>
          ))}

          {processedZones.map((z, index) => (
            <text
              key={`${z.name}-text`}
              x={z.labelX + z.labelWidth / 2}
              y={z.labelY + 12.5}
              textAnchor="middle"
              fill="#fff"
              fontSize="8.5"
              fontWeight="600"
              style={{
                pointerEvents: "none",
                animation: isInView
                  ? `popIn 0.6s ease ${0.7 + index * 0.05}s both`
                  : "none",
                opacity: isInView ? 1 : 0,
              }}
            >
              {z.name}
            </text>
          ))}

          <g
            transform="translate(660,420)"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.6s ease 1.2s",
            }}
          >
            <circle r="17" fill={PRIMARY} />
            <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="12.5" style={{ pointerEvents: "none" }}>
              ✈
            </text>
            <line x1="0" y1="17" x2="0" y2="26" stroke={PRIMARY} strokeWidth="1" strokeOpacity="0.5" />
            <rect x="-46" y="26" width="92" height="36" rx="8" fill="rgba(255,255,255,0.9)" />
            <text x="0" y="38" textAnchor="middle" fill="#444" fontSize="8.8" fontWeight="700" style={{ pointerEvents: "none" }}>
              <tspan x="0" dy="0">Hamad Intl.</tspan>
              <tspan x="0" dy="14">Airport</tspan>
            </text>
          </g>

          <g
            transform="translate(790,420)"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.6s ease 1.4s",
            }}
          >
            <circle r="17" fill={PRIMARY} />
            <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="12.5" style={{ pointerEvents: "none" }}>
              ⚓
            </text>
            <line x1="0" y1="17" x2="0" y2="26" stroke={PRIMARY} strokeWidth="1" strokeOpacity="0.5" />
            <rect x="-46" y="26" width="92" height="36" rx="8" fill="rgba(255,255,255,0.9)" />
            <text x="0" y="38" textAnchor="middle" fill="#444" fontSize="8.8" fontWeight="700" style={{ pointerEvents: "none" }}>
              <tspan x="0" dy="0">Hamad</tspan>
              <tspan x="0" dy="14">Port</tspan>
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
