import { PRIMARY, ZONES } from "../constants";
import { useInView } from "../hooks/useInView";

export default function MapSection() {
  const [mapRef, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={mapRef}
      className="map-section"
      style={{ background: "#f7f7f5", padding: "72px 80px" }}
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
        <div
          className="map-stats"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 64,
            marginTop: 24,
          }}
        >
          {[
            { val: "1000+", lbl: "Active Companies" },
            { val: "14M+", lbl: "sq.m Land Area" },
            { val: "5", lbl: "Economic Zones" },
            { val: "87", lbl: "Operational Units Rate (%)" },
          ].map((s, index) => (
            <div
              key={s.lbl}
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
              <div style={{ fontSize: 13, color: "#777", marginTop: 4 }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Qatar map SVG */}
      <div
        style={{
          position: "relative",
          maxWidth: 860,
          width: "100%",
          margin: "0 auto",
          overflow: "hidden",
          animation: isInView ? "fadeUp 0.8s ease 0.5s both" : "none",
          opacity: isInView ? 1 : 0,
        }}
      >
        <svg
          viewBox="0 0 860 520"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.10))",
          }}
        >
          {/* Qatar shape approximation */}
          <path
            d="M 120 80 L 680 80 L 720 160 L 700 260 L 660 340 L 600 420 L 540 450 L 480 450 L 420 430 L 380 400 L 340 360 L 300 300 L 180 280 L 100 220 L 100 160 Z"
            fill="#d4d0c8"
            stroke="#bbb"
            strokeWidth="2"
          />
          {/* Internal regions */}
          <path
            d="M 300 200 L 500 180 L 540 280 L 480 350 L 360 340 L 280 280 Z"
            fill="#c8c4bc"
            stroke="#bbb"
            strokeWidth="1"
          />

          {ZONES.map((z, index) => {
            const cx = (z.x / 100) * 780;
            const cy = (z.y / 100) * 480;
            return (
              <g
                key={z.name}
                transform={`translate(${cx},${cy})`}
                style={{
                  animation: isInView
                    ? `popIn 0.6s ease ${0.7 + index * 0.1}s both`
                    : "none",
                  opacity: isInView ? 1 : 0,
                }}
              >
                {z.isHQ ? (
                  <polygon points="0,-10 8,6 -8,6" fill={z.color} />
                ) : (
                  <circle r="5" fill={z.color} />
                )}
                <rect
                  x={
                    z.name.length > 15
                      ? -z.name.length * 3.5
                      : -z.name.length * 3.5
                  }
                  y="10"
                  width={z.name.length * 7}
                  height="18"
                  rx="9"
                  fill={z.color}
                />
                <text
                  x="0"
                  y="23"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="9"
                  fontWeight="600"
                >
                  {z.name}
                </text>
              </g>
            );
          })}

          {/* Airport & Port icons */}
          <g
            transform="translate(710,330)"
            style={{
              animation: isInView ? "popIn 0.6s ease 1.2s both" : "none",
              opacity: isInView ? 1 : 0,
            }}
          >
            <circle r="20" fill={PRIMARY} />
            <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="14">
              ✈
            </text>
            <text
              x="0"
              y="55"
              textAnchor="middle"
              fill="#555"
              fontSize="9"
              fontWeight="600"
            >
              Hamad International{"\n"}Airport
            </text>
          </g>
          <g
            transform="translate(690,390)"
            style={{
              animation: isInView ? "popIn 0.6s ease 1.3s both" : "none",
              opacity: isInView ? 1 : 0,
            }}
          >
            <circle r="20" fill={PRIMARY} />
            <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="14">
              ⚓
            </text>
            <text
              x="0"
              y="55"
              textAnchor="middle"
              fill="#555"
              fontSize="9"
              fontWeight="600"
            >
              Hamad Port
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
