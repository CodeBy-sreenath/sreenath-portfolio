"use client";
import { useState, useEffect } from "react";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "12px 32px" : "20px 32px",
      background: scrolled ? "rgba(5,5,15,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,245,160,0.15)" : "none",
      transition: "all 0.4s ease",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: "'Courier New', monospace", fontSize: 20, fontWeight: 700,
        color: "#00f5a0", letterSpacing: 2, textShadow: "0 0 20px rgba(0,245,160,0.5)",
      }}>
        {"<"}<span style={{ color: "#fff" }}>Sreenath</span>{"/>"}
      </div>

      {/* Desktop Links */}
      <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: activeSection === link.toLowerCase() ? "#00f5a0" : "rgba(255,255,255,0.7)",
            textDecoration: "none", fontSize: 14, letterSpacing: 1.5,
            textTransform: "uppercase", fontFamily: "'Courier New', monospace",
            transition: "all 0.3s",
            borderBottom: activeSection === link.toLowerCase() ? "1px solid #00f5a0" : "1px solid transparent",
            paddingBottom: 2,
          }}>
            {link}
          </a>
        ))}
        <a href="mailto:sreenathts655@gmail.com" style={{
          padding: "8px 20px", border: "1px solid #00f5a0", color: "#00f5a0",
          borderRadius: 4, textDecoration: "none", fontSize: 13, letterSpacing: 1,
          fontFamily: "'Courier New', monospace", transition: "all 0.3s",
        }}
          onMouseEnter={e => { e.target.style.background = "#00f5a0"; e.target.style.color = "#000"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#00f5a0"; }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
        background: "none", border: "none", cursor: "pointer",
        display: "none", flexDirection: "column", gap: 5, padding: 8,
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: "block", width: 24, height: 2, background: "#00f5a0",
            transition: "all 0.3s", opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(5,5,15,0.98)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,245,160,0.2)",
          padding: "20px 32px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.8)", textDecoration: "none",
                fontSize: 15, letterSpacing: 1.5, textTransform: "uppercase",
                fontFamily: "'Courier New', monospace",
              }}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}