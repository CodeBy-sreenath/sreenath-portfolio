import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-6 rounded-lg shadow">

            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-2">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 mt-3 block"
            >
              View Project
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}