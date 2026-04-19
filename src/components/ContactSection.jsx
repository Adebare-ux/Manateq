import React, { useState } from "react";
import { PRIMARY, OLIVE, LIGHT_PINK } from "../constants";
import { useInView } from "../hooks/useInView";
import { RippleBtn } from "../shared";

export default function ContactSection() {
  const [contactRef, isInView] = useInView({ threshold: 0.2 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  return (
    <section
      ref={contactRef}
      className="contact-section"
      style={{ background: LIGHT_PINK, padding: "80px" }}
    >
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1100,
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            animation: isInView ? "fadeUp 0.6s ease 0.1s both" : "none",
            opacity: isInView ? 1 : 0,
          }}
        >
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.3,
              fontFamily: "Georgia, serif",
            }}
          >
            Ready to Grow Your
            <br />
            Business in <span style={{ color: OLIVE }}>Qatar?</span>
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: 15,
              lineHeight: 1.8,
              margin: "20px 0 32px",
            }}
          >
            Join over 1,000 companies that have chosen Manateq as their partner
            for success. Let's discuss how we can support your business
            ambitions.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <RippleBtn
              style={{
                background: PRIMARY,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 24,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Georgia, serif",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Schedule a Consultation →
            </RippleBtn>
            <RippleBtn
              style={{
                background: "transparent",
                color: "#333",
                border: "2px solid #ccc",
                padding: "12px 24px",
                borderRadius: 24,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Georgia, serif",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Download Brochure ⬇
            </RippleBtn>
          </div>
        </div>

        <div
          className="contact-form"
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "40px 36px",
            boxShadow: "0 8px 48px rgba(0,0,0,0.10)",
            animation: isInView ? "fadeUp 0.6s ease 0.3s both" : "none",
            opacity: isInView ? 1 : 0,
          }}
        >
          <h3
            style={{
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 28,
              fontFamily: "Georgia, serif",
            }}
          >
            Get in Touch
          </h3>
          {[
            {
              label: "Full Name",
              key: "name",
              placeholder: "John DOE",
              icon: "👤",
              type: "text",
            },
            {
              label: "Email Address",
              key: "email",
              placeholder: "khayla2001@gmail.com",
              icon: "✉",
              type: "email",
            },
            {
              label: "Company's Name",
              key: "company",
              placeholder: "Your company",
              icon: null,
              type: "text",
            },
          ].map((f, index) => (
            <div
              key={f.key}
              style={{
                marginBottom: 20,
                animation: isInView
                  ? `fadeUp 0.5s ease ${0.4 + index * 0.1}s both`
                  : "none",
                opacity: isInView ? 1 : 0,
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "#444",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                {f.label}
              </label>
              <div style={{ position: "relative" }}>
                {f.icon && (
                  <span
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: 14,
                      color: "#aaa",
                    }}
                  >
                    {f.icon}
                  </span>
                )}
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={(e) =>
                    setForm({ ...form, [f.key]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: f.icon ? "12px 14px 12px 38px" : "12px 14px",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: 8,
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                    fontFamily: "Georgia, serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                  onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
                />
              </div>
            </div>
          ))}
          <div
            style={{
              marginBottom: 24,
              animation: isInView ? "fadeUp 0.5s ease 0.7s both" : "none",
              opacity: isInView ? 1 : 0,
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: 13,
                color: "#444",
                marginBottom: 8,
                fontWeight: 500,
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Type here"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1.5px solid #e8e8e8",
                borderRadius: 8,
                fontSize: 14,
                outline: "none",
                resize: "vertical",
                boxSizing: "border-box",
                fontFamily: "Georgia, serif",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
              onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
            />
          </div>
          <div
            style={{
              animation: isInView ? "fadeUp 0.5s ease 0.8s both" : "none",
              opacity: isInView ? 1 : 0,
            }}
          >
            <RippleBtn
              style={{
                width: "100%",
                background: PRIMARY,
                color: "#fff",
                padding: "14px",
                borderRadius: 28,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Georgia, serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              Send a message →
            </RippleBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
