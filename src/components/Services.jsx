import { PRIMARY, OLIVE, SERVICES } from "../constants";
import { useInView } from "../hooks/useInView";

export default function Services() {
  const [servicesRef, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      className="services-section"
      style={{ background: "#fff", padding: "80px" }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 56,
          animation: isInView ? "fadeUp 0.6s ease 0.1s both" : "none",
          opacity: isInView ? 1 : 0,
        }}
      >
        <div
          style={{
            color: PRIMARY,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          Our Service
        </div>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#111",
            margin: "0 0 8px",
            fontFamily: "Georgia, serif",
          }}
        >
          Comprehensive Solutions for
        </h2>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: OLIVE,
            margin: "0 0 20px",
            fontFamily: "Georgia, serif",
          }}
        >
          Business Success
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: 16,
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          From infrastructure to regulatory support, we provide everything you
          need to establish and grow your business in Qatar's thriving economic
          zones.
        </p>
      </div>
      <div
        ref={servicesRef}
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {SERVICES.map((s, index) => (
          <div
            key={s.title}
            className="svc-card"
            style={{
              border: "1px solid #f0e8e8",
              borderRadius: 12,
              padding: "28px 24px",
              transition: "all 0.3s ease",
              cursor: "pointer",
              animation: isInView
                ? `fadeUp 0.6s ease ${0.2 + index * 0.1}s both`
                : "none",
              opacity: isInView ? 1 : 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(139,26,46,0.15)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = PRIMARY;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.borderColor = "#f0e8e8";
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            <div
              style={{
                color: PRIMARY,
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 10,
                fontFamily: "Georgia, serif",
              }}
            >
              {s.title}
            </div>
            <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
