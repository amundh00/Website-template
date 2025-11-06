import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto" style={{ 
      background: 'var(--background-secondary)', 
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center gradient-bg">
                <span className="font-bold" style={{ color: 'var(--text-inverse)' }}>W</span>
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Website Template
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Providing quality services since [Year]. Your trusted partner for [industry].
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Examples</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/examples/components"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  UI Components
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/map"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Map Integration
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid var(--border-light)' }}>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} Website Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
