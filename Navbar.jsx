import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-primary hover:text-accent-lime transition-colors"
            aria-label="Shivendra Dixit - Home"
          >
            <span className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-bold text-accent-lime text-sm group-hover:border-accent-lime/40 transition-colors">
              SD
            </span>
            <span className="font-semibold tracking-tight text-base sm:text-lg">
              {profileData.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-secondary hover:text-primary transition-colors rounded-md hover:bg-surface/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume & Let's Connect */}
          <div className="hidden md:flex items-center gap-3">
            {profileData.contact.resumeUrl ? (
              <a
                href={profileData.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-secondary hover:text-primary px-3 py-1.5 rounded-lg border border-border hover:border-secondary/40 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent-blue" />
                Resume
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                title="Resume available upon request"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-secondary hover:text-primary px-3 py-1.5 rounded-lg border border-border hover:border-secondary/40 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent-blue" />
                Resume
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-bg bg-accent-lime hover:bg-accent-limeHover px-4 py-2 rounded-lg transition-colors shadow-glow-lime focus-visible:outline-offset-2"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-surface-hover rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-border flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-bg bg-accent-lime hover:bg-accent-limeHover py-2.5 rounded-lg transition-colors"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
