"use client";
import { useInView } from "@/hooks/useInView";

const contactItems = [
  { icon: "✉️", label: "Email",    value: "sreenathts655@gmail.com",                   href: "mailto:sreenathts655@gmail.com" },
  { icon: "📞", label: "Phone",    value: "+91 9778373317",                             href: "tel:+919778373317" },
  { icon: "🐙", label: "GitHub",   value: "CodeBy-sreenath",                            href: "https://github.com/CodeBy-sreenath" },
  { icon: "💼", label: "LinkedIn", value: "sreenath-ts",                               href: "https://www.linkedin.com/in/sreenath-ts-b33442362" },
];

export default function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} style={{
      padding: "100px 20px",
      background: "linear-gradient(180deg, #07071a 0%, #05050f 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(0,245,160,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <p style={{
            fontFamily: "'Courier New', monospace", color: "#00f5a0",
            fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12,
          }}>// let's connect</p>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 900,
            color: "#fff", margin: "0 0 16px", fontFamily: "'Georgia', serif", lineHeight: 1.1,
          }}>
            Ready to Build<br />
            <span style={{
              background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Something Great?
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, maxWidth: 500, margin: "0 auto 56px" }}>
            I'm open to internships, freelance projects, and full-time opportunities.
            Whether you have a project in mind or just want to say hi — reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16, marginBottom: 48,
        }}>
          {contactItems.map((item, i) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "16px 20px", textDecoration: "none",
                transition: "all 0.3s",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.1 + 0.3}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(0,245,160,0.3)";
                e.currentTarget.style.background   = "rgba(0,245,160,0.05)";
                e.currentTarget.style.transform    = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background   = "rgba(255,255,255,0.03)";
                e.currentTarget.style.transform    = "translateY(0)";
              }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{
                  fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1,
                  textTransform: "uppercase", fontFamily: "'Courier New', monospace",
                }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#00f5a0", fontWeight: 600, marginTop: 2 }}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="mailto:sreenathts655@gmail.com" style={{
          display: "inline-block", padding: "16px 48px",
          background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
          color: "#000", borderRadius: 8, textDecoration: "none",
          fontWeight: 800, fontSize: 15, letterSpacing: 1,
          fontFamily: "'Courier New', monospace", transition: "all 0.3s",
          boxShadow: "0 0 40px rgba(0,245,160,0.2)",
        }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 15px 50px rgba(0,245,160,0.4)"; }}
          onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 0 40px rgba(0,245,160,0.2)"; }}>
          Send Me a Message →
        </a>
      </div>
    </section>
  );
}