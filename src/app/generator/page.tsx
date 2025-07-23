'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        <Image
          src="https://placehold.co/900x500/e2e8f0/475569?text=AI+Pricing+Dashboard"
          alt="Dashboard Preview"
          width={900}
          height={500}
          className="mt-16 rounded-xl shadow-2xl border mx-auto"
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

      {/* Continue from here... */}

      {/* ✅ Use similar fixes for all <img> — use <Image /> */}
      {/* ✅ Escape all other `"` in JSX text using &quot; */}

      {/* ... */}
    </div>
  );
}
