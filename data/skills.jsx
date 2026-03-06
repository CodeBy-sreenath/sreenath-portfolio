
const skills = [
  { name: "MongoDB", icon: "🍃" },
  { name: "Express.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Flutter", icon: "💙" },
  { name: "AI Solutions", icon: "🧠" },
  { name: "Stripe", icon: "💳" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
  }));
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
            background: `rgba(0,245,160,${Math.random() * 0.5 + 0.2})`,
            animation: `floatParticle ${p.duration}s ${p.delay}s infinite ease-in-out`,
            boxShadow: `0 0 ${p.size * 3}px rgba(0,245,160,0.6)`,
          }}
        />
      ))}
    </div>
  );
}