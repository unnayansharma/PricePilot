'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-indigo-600 text-2xl font-bold">PricePilot.ai</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#features" className="text-gray-700 hover:text-indigo-600">Features</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-indigo-600">Pricing</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</Link>
              <Link href="#cta" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Stop Guessing Your{' '}
          <span className="text-indigo-600">&quot;SaaS Price&quot;</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Get AI-powered pricing recommendations, revenue scenarios, and competitor insights — in under 2 minutes.
        </p>
        <div className="space-x-4">
          <Link href="/generator" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition">
            Try It Free →
          </Link>
          <Link href="#how-it-works" className="inline-block border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg hover:border-indigo-600 transition">
            See How It Works
          </Link>
        </div>
        <img
          src="https://placehold.co/900x500/e2e8f0/475569?text=AI+Pricing+Dashboard"
          alt="Dashboard Preview"
          className="mt-16 rounded-xl shadow-2xl border mx-auto"
          width={900}
          height={500}
          unoptimized // Required for external URLs like placehold.co
        />
      </header>

      {/* Trust Bar */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4">Trusted by founders at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {['StartupX', 'IndieTool', 'ScaleLab', 'NexusApp', 'FlowStack'].map((name) => (
              <span key={name} className="text-2xl font-bold text-gray-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pricing Paralysis Is Costing You Revenue</h2>
          <p className="text-lg text-gray-600 mb-8">
            70% of solopreneurs struggle to set the right price. Too high? You lose signups. Too low? You leave money on the table.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: '🧠', title: 'Analysis Paralysis', desc: 'Endless options make decision-making overwhelming.' },
              { icon: '🚫', title: 'High Bounce Rates', desc: 'Complex pricing pages cause up to 40% drop-off.' },
              { icon: '💸', title: 'Free-User Purgatory', desc: '25% fewer conversions due to unclear upgrade paths.' },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How PricePilot Fixes Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-16">AI that learns from thousands of SaaS models — so you don’t have to guess.</p>
          {[
            {
              img: 'https://placehold.co/500x300/c7d2fe/4338ca?text=AI+Recommendations',
              title: 'AI-Generated Pricing Tiers',
              desc: 'Enter your product, audience, and competitors — our AI analyzes market data and suggests optimal pricing plans.',
              bullets: ['Basic, Pro, Business tiers', 'Feature allocation per plan', 'Justified by real benchmarks'],
              reverse: false,
            },
            {
              img: 'https://placehold.co/500x300/d1fae5/065f46?text=Revenue+Modeling',
              title: 'Revenue Scenarios & Forecasting',
              desc: 'See what your ARR could be at 100, 1K, or 10K customers — with realistic conversion assumptions.',
              bullets: ['Project growth curves', 'Identify monetization gaps', 'Maximize LTV'],
              reverse: true,
            },
            {
              img: 'https://placehold.co/500x300/fed7aa/fa951b?text=Competitor+Benchmarks',
              title: 'Competitor Intelligence',
              desc: 'Compare your pricing against real competitors — automatically scraped and analyzed.',
              bullets: ['Instant benchmarking', 'Find pricing gaps', 'Avoid under/over-pricing'],
              reverse: false,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 mb-16`}
            >
              <div className="md:w-1/2">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="rounded-lg shadow-lg w-full"
                  width={500}
                  height={300}
                  unoptimized
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">Start free. Upgrade when you’re ready.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-white rounded-lg shadow-md p-8 border hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0<span className="text-gray-500 text-lg">/month</span></div>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex justify-center"><span>✅</span> 1 Product Workspace</li>
                <li className="flex justify-center"><span>✅</span> AI Pricing Suggestions</li>
                <li className="flex justify-center"><span>✅</span> Revenue Projection Tool</li>
                <li className="flex justify-center"><span>❌</span> No Export PDF</li>
                <li className="flex justify-center"><span>❌</span> No Team Sharing</li>
              </ul>
              <Link href="#get-started" className="block bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Get Started Free
              </Link>
            </div>
            {/* Pro */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-indigo-600 relative hover:shadow-2xl transition">
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">$29<span className="text-gray-500 text-lg">/mo</span></div>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex justify-center"><span>✅</span> Unlimited Workspaces</li>
                <li className="flex justify-center"><span>✅</span> Export to PDF & Share</li>
                <li className="flex justify-center"><span>✅</span> A/B Test Advisor</li>
                <li className="flex justify-center"><span>✅</span> Competitor Alerts</li>
                <li className="flex justify-center"><span>✅</span> Priority Support</li>
              </ul>
              <Link href="#get-started" className="block bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Upgrade to Pro
              </Link>
            </div>
            {/* Agency */}
            <div className="bg-white rounded-lg shadow-md p-8 border hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">Agency</h3>
              <div className="text-4xl font-bold mb-4">$79<span className="text-gray-500 text-lg">/mo</span></div>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex justify-center"><span>✅</span> All Pro Features</li>
                <li className="flex justify-center"><span>✅</span> Team Seats (up to 5)</li>
                <li className="flex justify-center"><span>✅</span> White-label Reports</li>
                <li className="flex justify-center"><span>✅</span> Client Management</li>
                <li className="flex justify-center"><span>✅</span> Monthly Strategy Call</li>
              </ul>
              <Link href="#get-started" className="block bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Become an Agency Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Founders Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was stuck between $19 and $29. PricePilot recommended $35 with annual billing — and my conversions went up 30%.",
                name: "Sarah Kim",
                role: "Founder, ContentFlow",
                color: "4F46E5",
              },
              {
                quote: "The competitor analysis alone saved me 20 hours of research. Now I know exactly where I stand.",
                name: "James Lee",
                role: "Builder, TaskZen",
                color: "10B981",
              },
              {
                quote: "Went from 0 to confident pricing in 5 minutes. Worth every second.",
                name: "Lena Patel",
                role: "Indie Hacker, FormGenius",
                color: "7C3AED",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
                <div className="flex items-center justify-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${t.name}&background=${t.color}&color=fff`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Price With Confidence?</h2>
          <p className="text-xl opacity-90 mb-10">Join 2,300+ founders who stopped guessing and started growing.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.currentTarget.email.value;
              alert(`🎉 Thanks! We’ll send access to ${email}.`);
              e.currentTarget.reset();
            }}
            className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-grow px-5 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Started Free
            </button>
          </form>
          <p className="mt-4 text-sm opacity-75">No credit card required. 100% free forever plan available.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-gray-600">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-indigo-600">PricePilot.ai</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-indigo-600"><i className="fab fa-twitter"></i></Link>
              <Link href="#" className="hover:text-indigo-600"><i className="fab fa-linkedin"></i></Link>
              <Link href="#" className="hover:text-indigo-600"><i className="fab fa-github"></i></Link>
              <Link href="#" className="hover:text-indigo-600"><i className="fas fa-envelope"></i></Link>
            </div>
          </div>
          <div className="mt-6 text-sm">
            © 2025 PricePilot.ai. All rights reserved. |{' '}
            <Link href="#" className="hover:text-indigo-600">Privacy</Link> |{' '}
            <Link href="#" className="hover:text-indigo-600">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
