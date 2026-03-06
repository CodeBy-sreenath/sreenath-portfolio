"use client";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} style={{
      padding: "100px 20px", background: "#07071a",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, right: 0, width: "40%", height: "100%",
        background: "radial-gradient(circle at 80% 50%, rgba(0,245,160,0.04) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "flex", gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center", flexWrap: "wrap",
        }}>
          {/* Avatar */}
          <div style={{
            flex: "0 0 auto", display: "flex", justifyContent: "center",
            opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s ease",
          }}>
            <div style={{
              width: "clamp(180px, 25vw, 240px)", height: "clamp(180px, 25vw, 240px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00f5a0 0%, #00d2ff 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "clamp(60px, 8vw, 80px)",
              boxShadow: "0 0 60px rgba(0,245,160,0.25), 0 0 120px rgba(0,210,255,0.1)",
            }}>
              👨‍💻
            </div>
          </div>

          {/* Text */}
          <div style={{
            flex: 1, minWidth: 280,
            opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.8s 0.2s ease",
          }}>
            <p style={{
              fontFamily: "'Courier New', monospace", color: "#00f5a0",
              fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12,
            }}>// who I am</p>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
              color: "#fff", margin: "0 0 24px", lineHeight: 1.1, fontFamily: "'Georgia', serif",
            }}>
              Passionate about building<br />
              <span style={{
                background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                things that matter
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontSize: "clamp(14px, 1.5vw, 16px)", marginBottom: 16 }}>
              I'm a Computer Science student with a passion for building full-stack applications
              and AI-powered solutions that solve real problems. My toolkit spans the MERN stack,
              Next.js and Node.js — giving me the power to ship end-to-end products fast.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontSize: "clamp(14px, 1.5vw, 16px)", marginBottom: 32 }}>
              Beyond the web, I develop machine learning pipelines in Python and cross-platform
              mobile apps with Flutter. I'm driven by the intersection of great UX and intelligent
              systems — and I bring both to every project I build.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {["Problem Solver", "Fast Learner", "Team Player"].map((trait) => (
                <span key={trait} style={{
                  padding: "6px 16px", border: "1px solid rgba(0,245,160,0.3)",
                  borderRadius: 20, color: "#00f5a0", fontSize: 12,
                  fontFamily: "'Courier New', monospace", letterSpacing: 1,
                  background: "rgba(0,245,160,0.05)",
                }}>✦ {trait}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}