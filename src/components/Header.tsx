// src/components/Header.tsx
'use client';   // ← This is the most important line

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
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

        {/* Desktop Navigation */}
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
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-lg py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-left text-lg py-2 text-gray-700 hover:text-blue-600"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-left text-lg py-2 text-gray-700 hover:text-blue-600"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-lg py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}