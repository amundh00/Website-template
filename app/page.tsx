import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--primary-50), var(--background))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Welcome to
              <span style={{ color: 'var(--primary-600)' }}> Company Name</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Your trusted partner for [industry/service]. Delivering excellence since
              [year].
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/about">
                <Button variant="primary" size="lg">
                  Learn More
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Why Choose Us
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover what makes us the right choice for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl hover:shadow-md transition-shadow" style={{ background: 'var(--background-secondary)' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--primary-100)' }}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--primary-600)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Quality Service
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Professional service delivered with attention to detail and commitment
                to excellence.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl hover:shadow-md transition-shadow" style={{ background: 'var(--background-secondary)' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--primary-100)' }}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--primary-600)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Expert Team
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Experienced professionals dedicated to providing the best solutions for
                your needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl hover:shadow-md transition-shadow" style={{ background: 'var(--background-secondary)' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--primary-100)' }}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--primary-600)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Customer Focus
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your satisfaction is our priority. We work closely with you to ensure
                the best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--primary-600)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-inverse)' }}>
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--primary-100)' }}>
            Contact us today to discuss your project and get started
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

