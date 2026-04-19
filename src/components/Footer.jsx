import { OLIVE, FOOTER_LINKS } from "../constants";
import { useInView } from "../hooks/useInView";

export default function Footer() {
  const [footerRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <footer
      ref={footerRef}
      className="footer-section"
      style={{ background: OLIVE, color: "#fff", padding: "56px 80px 24px" }}
    >
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            animation: isInView ? "fadeUp 0.6s ease 0.1s both" : "none",
            opacity: isInView ? 1 : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              🏛
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 1,
                fontFamily: "Georgia, serif",
              }}
            >
              MANATEQ
            </span>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
            }}
          >
            Qatar's premier economic zones manager, empowering businesses with
            world-class infrastructure and strategic locations.
          </p>
        </div>
        {Object.entries(FOOTER_LINKS).map(([col, links], index) => (
          <div
            key={col}
            style={{
              animation: isInView
                ? `fadeUp 0.6s ease ${0.2 + index * 0.1}s both`
                : "none",
              opacity: isInView ? 1 : 0,
            }}
          >
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                color: "#fff",
                fontFamily: "Georgia, serif",
              }}
            >
              {col}
            </h4>
            {links.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: 13,
                  marginBottom: 10,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "rgba(255,255,255,0.6)",
          animation: isInView ? "fadeUp 0.6s ease 0.5s both" : "none",
          opacity: isInView ? 1 : 0,
        }}
      >
        <span>© 2026 Manateq. All rights reserved.</span>
        <span>Designed and developed with excellence</span>
      </div>
    </footer>
  );
}
