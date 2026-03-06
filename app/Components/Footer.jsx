export default function Footer() {
  return (
    <footer style={{
      padding: "28px 20px", background: "#05050f",
      borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center",
    }}>
      <p style={{
        color: "rgba(255,255,255,0.25)", fontSize: 13,
        fontFamily: "'Courier New', monospace", letterSpacing: 1,
      }}>
        {"<"}<span style={{ color: "#00f5a0" }}>Sreenath TS</span>{" />"} — Built with React & passion ✦ {new Date().getFullYear()}
      </p>
    </footer>
  );
}