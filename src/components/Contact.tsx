// src/components/Contact.tsx
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-md mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition resize-y"
                  placeholder="Hi Chinem, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                Feel free to reach out through any of these platforms. 
                I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-500">jethrochinem@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Github size={24} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-gray-500">JethroChinem</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-500">/in/JethroChinem</p>
                </div>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Twitter size={24} />
                </div>
                <div>
                  <p className="font-medium">Twitter / X</p>
                  <p className="text-sm text-gray-500">@JethroChinem</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}