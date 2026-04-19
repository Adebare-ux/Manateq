import { PRIMARY } from "../constants";
import { RippleBtn } from "../shared";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f0e8 0%, #fff 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
          animation: "kenburns 14s ease-in-out infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.1) 100%)",
        }}
      />
      <div
        className="hero-content"
        style={{ position: "relative", padding: "0 80px", maxWidth: 680 }}
      >
        <div
          style={{
            display: "inline-block",
            background: PRIMARY,
            color: "#fff",
            padding: "6px 16px",
            borderRadius: 4,
            fontSize: 13,
            marginBottom: 24,
            fontFamily: "Georgia, serif",
            animation: "fadeUp 0.6s ease 0.1s both",
            opacity: 0,
          }}
        >
          Dedicating our time to serve you better
        </div>
        <h1
          className="hero-heading"
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#111",
            margin: "0 0 24px",
            fontFamily: "Georgia, serif",
          }}
        >
          <span
            style={{
              display: "inline-block",
              animation: "fadeUp 0.6s ease 0.3s both",
              opacity: 0,
            }}
          >
            Empowering
          </span>
          <br />
          <span
            style={{
              display: "inline-block",
              animation: "fadeUp 0.6s ease 0.5s both",
              opacity: 0,
            }}
          >
            Business
          </span>{" "}
          <span
            style={{
              display: "inline-block",
              animation: "fadeUp 0.6s ease 0.7s both",
              opacity: 0,
            }}
          >
            Growth
          </span>
        </h1>
        <p
          className="hero-text"
          style={{
            fontSize: 17,
            color: "#444",
            lineHeight: 1.7,
            margin: "0 0 36px",
            maxWidth: 500,
          }}
        >
          Manateq is Qatar's premier economic zones manager, providing
          world-class infrastructure and strategic locations to drive industrial
          and commercial excellence.
        </p>
        <div className="hero-buttons" style={{ display: "flex", gap: 16 }}>
          <button
            style={{
              background: PRIMARY,
              color: "#fff",
              border: "none",
              padding: "14px 28px",
              borderRadius: 28,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "Georgia, serif",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Explore Opportunities →
          </button>
          <button
            style={{
              background: "transparent",
              color: "#333",
              border: "2px solid #ccc",
              padding: "14px 28px",
              borderRadius: 28,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "Georgia, serif",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Apply Now ⬇
          </button>
        </div>
      </div>
    </section>
  );
}
