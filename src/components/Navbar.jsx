import React, { useState, useEffect } from "react";
import { PRIMARY, OLIVE, NAV_LINKS } from "../constants";
import { RippleBtn } from "../shared";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src="/logo.png"
        alt="Manateq Logo"
        width="48"
        height="48"
        style={{ borderRadius: 8 }}
      />
      <div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: PRIMARY,
            letterSpacing: 2,
            fontFamily: "Georgia, serif",
          }}
        >
          MANATEQ
        </div>
        <div style={{ fontSize: 8, color: OLIVE, letterSpacing: 1 }}>مناطق</div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const updateMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", updateMobile);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(255,255,255,0.98)"
          : "rgba(255,255,255,0.9)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(6px)",
        boxShadow: scrolled
          ? "0 2px 24px rgba(0,0,0,0.09)"
          : "0 1px 0 rgba(0,0,0,0.07)",
        transition: "background 0.4s, box-shadow 0.4s, backdrop-filter 0.4s",
        padding: isMobile ? "0 16px" : "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: isMobile ? 60 : 72,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ animation: "fadeUp 0.5s ease both" }}>
          <Logo />
        </div>
      </div>

      <div
        className="navbar-links"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link}
            href="#"
            style={{
              textDecoration: "none",
              color: link === "Home" ? PRIMARY : "#333",
              fontWeight: link === "Home" ? 600 : 400,
              fontSize: 14,
              fontFamily: "Georgia, serif",
              transition: "color 0.2s",
              animation: `fadeUp 0.5s ease ${0.05 * i}s both`,
            }}
            onMouseEnter={(e) => (e.target.style.color = PRIMARY)}
            onMouseLeave={(e) =>
              (e.target.style.color = link === "Home" ? PRIMARY : "#333")
            }
          >
            {link}
            {link === "About Us" ? " ▾" : ""}
          </a>
        ))}
      </div>

      <div
        className="navbar-actions"
        style={{
          display: "flex",
          gap: 12,
          animation: "fadeUp 0.5s ease 0.3s both",
        }}
      >
        <button
          style={{
            border: `2px solid ${PRIMARY}`,
            background: "transparent",
            color: PRIMARY,
            padding: "8px 20px",
            borderRadius: 24,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "Georgia, serif",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = PRIMARY;
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = PRIMARY;
          }}
        >
          Investor Portal
        </button>
        <RippleBtn
          style={{
            background: PRIMARY,
            color: "#fff",
            border: "none",
            padding: "8px 20px",
            borderRadius: 24,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "Georgia, serif",
          }}
        >
          Get Started
        </RippleBtn>
      </div>

      <button
        className="navbar-mobile-toggle"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className={`navbar-mobile-panel ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="navbar-mobile-link">
              {link}
            </a>
          ))}
          <div className="navbar-mobile-ctas">
            <button
              style={{
                border: `2px solid ${PRIMARY}`,
                background: "transparent",
                color: PRIMARY,
                padding: "12px 18px",
                borderRadius: 24,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Georgia, serif",
              }}
            >
              Investor Portal
            </button>
            <RippleBtn
              style={{
                width: "100%",
                justifyContent: "center",
                background: PRIMARY,
                color: "#fff",
                border: "none",
                padding: "12px 18px",
                borderRadius: 24,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Georgia, serif",
              }}
            >
              Get Started
            </RippleBtn>
          </div>
        </div>
      )}
    </nav>
  );
}
