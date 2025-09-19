"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center mr-3">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div> */}
              <Image 
              src="logopositivus.svg"
              alt='Reload'
              width={36}
              height={36}
              >

              </Image>
              <span className="text-xl font-bold text-black">Positivus</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white border-2 border-black text-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200 rounded-lg">
              Request a quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-white border-2 border-black text-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200 rounded-lg">
                Request a quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}