export default function Skills() {
  const skills = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "Next.js",
    "Python",
    "Machine Learning",
    "Flutter",
    "AI Solutions",
    "Stripe Integration"
  ];

  return (
    <section id="skills" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-black text-white px-4 py-2 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}