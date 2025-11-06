'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="shadow-sm sticky top-0 z-50" style={{ background: 'var(--background)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center gradient-bg">
              <span className="font-bold text-xl" style={{ color: 'var(--text-inverse)' }}>W</span>
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Website Template
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium transition-colors"
                style={{
                  color: isActive(link.href) ? 'var(--primary-600)' : 'var(--text-secondary)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            aria-label="Open menu"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation (hidden by default) */}
        <div className="md:hidden pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
              style={{
                background: isActive(link.href) ? 'var(--primary-50)' : 'transparent',
                color: isActive(link.href) ? 'var(--primary-600)' : 'var(--text-secondary)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

