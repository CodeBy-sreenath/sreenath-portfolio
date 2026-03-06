"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import projects from "@/data/projects";

export default function Projects() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" ref={ref} style={{
      padding: "100px 20px", background: "#07071a",
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
          }}>// what I've built</p>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
            color: "#fff", margin: 0, fontFamily: "'Georgia', serif",
          }}>Featured Projects</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 16, fontSize: 15, maxWidth: 480, margin: "16px auto 0" }}>
            Real-world applications built with modern tech stacks — each solving a specific problem at scale.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {projects.map((project, i) => (
            <div key={project.title} style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${hovered === i ? project.color + "55" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 16, padding: "28px 24px", transition: "all 0.35s ease",
              cursor: "pointer",
              transform: inView ? (hovered === i ? "translateY(-8px)" : "translateY(0)") : "translateY(40px)",
              opacity: inView ? 1 : 0,
              transitionDelay: `${i * 0.1}s`,
              boxShadow: hovered === i ? `0 20px 60px ${project.color}20` : "none",
              position: "relative", overflow: "hidden",
            }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}>

              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{
                  background: `${project.color}20`, color: project.color,
                  border: `1px solid ${project.color}40`,
                  padding: "4px 12px", borderRadius: 20,
                  fontSize: 11, fontFamily: "'Courier New', monospace", letterSpacing: 1,
                }}>{project.tag}</span>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 20 }}>↗</span>
              </div>

              <h3 style={{
                color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 12px",
                fontFamily: "'Georgia', serif",
              }}>{project.title}</h3>

              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, margin: "0 0 24px" }}>
                {project.description}
              </p>

              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                color: project.color, textDecoration: "none", fontSize: 13,
                fontFamily: "'Courier New', monospace", letterSpacing: 0.5,
                display: "flex", alignItems: "center", gap: 6, fontWeight: 600,
              }}>
                View Project
                <span style={{
                  transition: "transform 0.3s",
                  transform: hovered === i ? "translateX(4px)" : "none",
                  display: "inline-block",
                }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}