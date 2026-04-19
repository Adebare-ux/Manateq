import { STATS_DATA } from "../constants/stats";
import { CounterStat } from "../shared";
import { useInView } from "../hooks/useInView";

export default function StatsBar() {
  const [statsRef, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      className="stats-section"
      style={{
        background: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&fit=crop) center/cover`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(100, 20, 30, 0.88)",
        }}
      />
      <div
        className="stats-grid"
        style={{
          position: "relative",
          padding: "60px 80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 12,
            fontFamily: "Georgia, serif",
            animation: isInView ? "fadeUp 0.6s ease 0.1s both" : "none",
            opacity: isInView ? 1 : 0,
          }}
        >
          Driving Economic Growth
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 15,
            marginBottom: 48,
            animation: isInView ? "fadeUp 0.6s ease 0.3s both" : "none",
            opacity: isInView ? 1 : 0,
          }}
        >
          Our track record speaks for itself – delivering excellence across
          Qatar's economic landscape
        </p>
        <div
          ref={statsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 32,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {STATS_DATA.map((s, index) => (
            <CounterStat
              key={s.label}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              icon={s.icon}
              delay={index * 0.2}
              active={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
