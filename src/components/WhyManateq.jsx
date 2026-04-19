import { PRIMARY, OLIVE, LIGHT_PINK } from "../constants";

export default function WhyManateq() {
  return (
    <section
      className="why-section"
      style={{ background: LIGHT_PINK, padding: "80px" }}
    >
      <div
        className="why-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div className="why-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=200&fit=crop",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          ))}
        </div>
        <div
          style={{
            background: OLIVE,
            borderRadius: 12,
            padding: "40px 36px",
          }}
        >
          <div
            style={{
              color: "#f0c87a",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 12,
              letterSpacing: 1,
            }}
          >
            Our Solution & Why Choose Manateq
          </div>
          <h3
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 20,
              lineHeight: 1.3,
              fontFamily: "Georgia, serif",
            }}
          >
            We Give World-Class Infrastructure & Premium Services
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Our economic zones are designed to provide businesses with
            everything they need to succeed. From cutting-edge infrastructure to
            comprehensive support services, we're committed to your growth.
          </p>
          <button
            style={{
              marginTop: 28,
              background: PRIMARY,
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: 24,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Georgia, serif",
            }}
          >
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}
