export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            About Company Name
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Brief company tagline or mission statement goes here
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Story */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Who We Are</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </section>

          {/* Values/Services */}
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ background: 'var(--background-secondary)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Service Category 1
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Brief description of the service or expertise. Highlight key benefits
                  and value propositions.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ background: 'var(--background-secondary)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Service Category 2
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Brief description of the service or expertise. Highlight key benefits
                  and value propositions.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ background: 'var(--background-secondary)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Service Category 3
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Brief description of the service or expertise. Highlight key benefits
                  and value propositions.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ background: 'var(--background-secondary)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Service Category 4
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Brief description of the service or expertise. Highlight key benefits
                  and value propositions.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>By the Numbers</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Key statistics and achievements that demonstrate company success and
              credibility.
            </p>
            <div className="p-8 rounded-xl" style={{ 
              background: 'linear-gradient(135deg, var(--primary-50), var(--background))',
              border: '1px solid var(--border-light)'
            }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary-600)' }}>500+</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary-600)' }}>98%</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary-600)' }}>50+</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary-600)' }}>10+</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Years</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
