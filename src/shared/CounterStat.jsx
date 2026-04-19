import React from "react";
import { useCounter } from "../hooks";

export function CounterStat({ icon, end, suffix, label, active, delay }) {
  const n = useCounter(end, active);
  return (
    <div
      className="stats-card"
      style={{
        width: "100%",
        textAlign: "center",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div
        className="stats-icon"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          margin: "0 auto 16px",
        }}
      >
        {icon}
      </div>
      <div
        className="stats-value"
        style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: 800,
          fontFamily: "Georgia,serif",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n}
        {suffix}
      </div>
      <div
        className="stats-label"
        style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 6 }}
      >
        {label}
      </div>
    </div>
  );
}
