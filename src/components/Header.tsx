// src/components/Header.tsx
import Image from 'next/image';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Space for the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Chinem Logo"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Navigation Links with Smooth Scroll */}
        <div className="hidden md:flex gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About
          </button>
          
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Skills
          </button>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Projects
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 text-2xl">☰</button>
        </div>
      </nav>
    </header>
  );
}