"use client";
import { useInView } from "@/hooks/useInView";

const skills = [
  { name: "MongoDB",          icon: "🍃" },
  { name: "Express.js",       icon: "⚡" },
  { name: "React",            icon: "⚛️" },
  { name: "Node.js",          icon: "🟢" },
  { name: "Next.js",          icon: "▲" },
  { name: "Python",           icon: "🐍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Flutter",          icon: "💙" },
  { name: "AI Solutions",     icon: "🧠" },
  { name: "Stripe",           icon: "💳" },
];

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} style={{
      padding: "100px 20px",
      background: "linear-gradient(180deg, #07071a 0%, #05050f 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <p style={{
            fontFamily: "'Courier New', monospace", color: "#00f5a0",
            fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12,
          }}>// what I work with</p>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
            color: "#fff", margin: 0, fontFamily: "'Georgia', serif",
          }}>My Tech Stack</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 16, fontSize: 15 }}>
            A carefully curated set of tools I use to build powerful products
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}>
          {skills.map((skill, i) => (
            <div key={skill.name} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: "24px 16px", textAlign: "center",
              cursor: "default", transition: "all 0.3s ease",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${i * 0.06}s`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(0,245,160,0.4)";
                e.currentTarget.style.background   = "rgba(0,245,160,0.06)";
                e.currentTarget.style.transform    = "translateY(-6px)";
                e.currentTarget.style.boxShadow    = "0 20px 40px rgba(0,245,160,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background   = "rgba(255,255,255,0.03)";
                e.currentTarget.style.transform    = "translateY(0)";
                e.currentTarget.style.boxShadow    = "none";
              }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{skill.icon}</div>
              <div style={{
                color: "rgba(255,255,255,0.8)", fontSize: 13,
                fontFamily: "'Courier New', monospace", letterSpacing: 0.5, fontWeight: 600,
              }}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}