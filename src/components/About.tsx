// src/components/About.tsx
export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* ←←← YOUR PHOTO GOES HERE ←←← */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/images/profile.jpg"     // ← Change this to your photo name
                alt="Chinem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi! I'm Chinem, a passionate beginner web developer based in Port Harcourt, Nigeria. 
              I'm currently diving deep into modern web development with Next.js, TypeScript, and Tailwind CSS.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I enjoy turning ideas into functional and beautiful websites. 
              My goal is to build clean, user-friendly applications that solve real problems. 
              I'm always eager to learn new technologies and improve my skills every day.
            </p>

            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-800">Port Harcourt, Nigeria</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Focus</p>
                <p className="font-medium text-gray-800">Next.js &amp; TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}