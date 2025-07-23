"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">\            Generate Winning Pricing Pages in Seconds
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Say goodbye to expensive designers. Launch fast, convert faster.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/generator"
              className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Generate Your Page
            </Link>
            <a
              href="https://github.com/unnayan/pricepilot"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why PricePilot?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            The easiest way to create professional pricing pages that convert.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <Image
                src="https://placehold.co/64x64"
                alt="No Code"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">No Code Needed</h3>
              <p className="text-gray-600 mt-2">
                Generate pages without writing a single line of code.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <Image
                src="https://placehold.co/64x64"
                alt="Fast"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">Lightning Fast</h3>
              <p className="text-gray-600 mt-2">
                Launch beautiful pages in less than a minute.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <Image
                src="https://placehold.co/64x64"
                alt="Free"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">100% Free</h3>
              <p className="text-gray-600 mt-2">
                Use it freely, forever. No hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-lg text-gray-600 mb-12">
            Get started for free. Upgrade when you're ready.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-gray-600 mt-2">$0/month</p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li>✔ Unlimited Pages</li>
                <li>✔ AI Generator Access</li>
                <li>✔ Export as HTML</li>
              </ul>
            </div>
            <div className="border-2 border-black rounded-lg p-6 bg-white shadow-xl">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-gray-600 mt-2">$9/month</p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li>✔ All Free Features</li>
                <li>✔ Remove Branding</li>
                <li>✔ Custom Domains</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-gray-600 mt-2">Contact Us</p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li>✔ Everything in Pro</li>
                <li>✔ Team Access</li>
                <li>✔ SLA &amp; Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-lg italic">
                &quot;I created a pricing page in 30 seconds. This is wild.&quot;
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Image
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="John Doe"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-sm font-semibold">John Doe</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-lg italic">
                &quot;This tool saved me days of work and thousands of rupees.&quot;
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Image
                  src="https://ui-avatars.com/api/?name=Priya+Sharma"
                  alt="Priya Sharma"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-sm font-semibold">Priya Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to create your pricing page?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join hundreds of users building beautiful pricing pages with PricePilot.
        </p>
        <Link
          href="/generator"
          className="bg-white text-black px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-100"
        >
          Generate Yours Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        <p>
          Built by <a href="https://github.com/unnayan" className="underline">@unnayan</a>. Open source on{' '}
          <a href="https://github.com/unnayan/pricepilot" className="underline">GitHub</a>.
        </p>
      </footer>
    </div>
  );
}
