"use client";
import { useState, useEffect, useMemo } from "react";

function Particles() {
  // Generate particles ONCE — never recalculate on re-render
  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
    })),
  []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Don't render on server at all — only render after client mounts
  if (!mounted) return null;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(0,245,160,${p.opacity})`,
            animation: `floatParticle ${p.duration}s ${p.delay}s infinite ease-in-out`,
            boxShadow: `0 0 ${p.size * 3}px rgba(0,245,160,0.6)`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const roles = ["Full Stack Developer", "AI Solutions Builder", "MERN Stack Expert", "Next.js Specialist"];
  const [typed, setTyped]         = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed   = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTyped(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setTyped(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex(r => (r + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #05050f 0%, #0a0a20 50%, #05050f 100%)",
      padding: "100px 20px 60px",
    }}>
      <Particles />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,245,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,160,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px", pointerEvents: "none",
      }} />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "10%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(0,245,160,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", animation: "pulse 4s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "10%", width: 300, height: 300,
        background: "radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", animation: "pulse 5s 1s ease-in-out infinite",
      }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 800 }}>
        {/* Badge */}
        <div style={{
          display: "inline-block", border: "1px solid rgba(0,245,160,0.3)",
          borderRadius: 30, padding: "6px 18px", marginBottom: 28,
          fontFamily: "'Courier New', monospace", fontSize: 13, color: "#00f5a0",
          letterSpacing: 2, animation: "fadeInDown 0.8s ease forwards",
          background: "rgba(0,245,160,0.05)",
        }}>
          ✦ Available for Opportunities
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(40px, 8vw, 88px)", fontWeight: 900, lineHeight: 1.05,
          margin: "0 0 16px", fontFamily: "'Georgia', serif",
          animation: "fadeInUp 0.8s 0.2s ease both", color: "#fff", letterSpacing: -2,
        }}>
          Hi, I'm{" "}
          <span style={{
            background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Sreenath
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontSize: "clamp(18px, 3vw, 28px)", color: "rgba(255,255,255,0.5)",
          fontFamily: "'Courier New', monospace", marginBottom: 20, height: 40,
          animation: "fadeInUp 0.8s 0.4s ease both",
        }}>
          <span style={{ color: "#00f5a0" }}>{typed}</span>
          <span style={{
            display: "inline-block", width: 2, height: "1em", background: "#00f5a0",
            marginLeft: 2, verticalAlign: "middle", animation: "blink 0.7s step-end infinite",
          }} />
        </div>

        {/* Subtext */}
        <p style={{
          fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.45)",
          maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.8,
          animation: "fadeInUp 0.8s 0.6s ease both",
        }}>
          I build intelligent, scalable web applications that solve real-world problems —
          from AI-powered analytics to seamless full-stack platforms.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
          animation: "fadeInUp 0.8s 0.8s ease both",
        }}>
          <a href="#projects" style={{
            padding: "14px 36px",
            background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
            color: "#000", borderRadius: 6, textDecoration: "none",
            fontWeight: 700, fontSize: 14, letterSpacing: 1,
            fontFamily: "'Courier New', monospace", transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 10px 40px rgba(0,245,160,0.4)"; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}>
            View My Work →
          </a>
          <a href="#contact" style={{
            padding: "14px 36px", border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.8)", borderRadius: 6, textDecoration: "none",
            fontWeight: 600, fontSize: 14, letterSpacing: 1,
            fontFamily: "'Courier New', monospace", transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#00f5a0"; e.target.style.color = "#00f5a0"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.8)"; }}>
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: 48, justifyContent: "center", marginTop: 64,
          flexWrap: "wrap", animation: "fadeInUp 0.8s 1s ease both",
        }}>
          {[
            { num: "5+", label: "Projects Shipped" },
            { num: "3+", label: "AI Solutions Built" },
            { num: "2+", label: "Years Coding" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: 32, fontWeight: 900, color: "#00f5a0",
                fontFamily: "'Georgia', serif", textShadow: "0 0 20px rgba(0,245,160,0.4)",
              }}>{num}</div>
              <div style={{
                fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 1,
                textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginTop: 4,
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}