import { Code, Layout, Database, Smartphone, GitBranch, Terminal } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      name: "HTML5 & CSS3",
      description: "Semantic markup, responsive design, Tailwind CSS",
    },
    {
      icon: <Terminal className="w-10 h-10 text-blue-600" />,
      name: "JavaScript / TypeScript",
      description: "Modern ES6+, typing for safer code",
    },
    {
      icon: <Layout className="w-10 h-10 text-blue-600" />,
      name: "React & Next.js",
      description: "Component-based UI, App Router, SSR",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      name: "Responsive Design",
      description: "Mobile-first, Tailwind breakpoints",
    },
    {
      icon: <GitBranch className="w-10 h-10 text-blue-600" />,
      name: "Git & GitHub",
      description: "Version control, collaboration basics",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      name: "Learning Backend",
      description: "Node.js basics, APIs, databases (exploring)",
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}