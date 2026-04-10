// src/components/Projects.tsx
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      description:
        "A full-featured todo application with user authentication, drag-and-drop tasks, dark mode, and progress tracking.",
      image: "https://picsum.photos/id/1015/600/400",   // Modern dark task dashboard
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Personal Blog",
      description:
        "A clean and fast blog built with MDX, featuring search, categories, reading time, and beautiful typography.",
      image: "https://picsum.photos/id/201/600/400",    // Clean blog style
      tech: ["Next.js", "MDX", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location search, 7-day forecast, beautiful charts, and responsive design.",
      image: "https://picsum.photos/id/1018/600/400",   // Weather app style
      tech: ["React", "TypeScript", "Tailwind", "API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}