'use client';

import { useState } from 'react';

export default function GeneratorPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // ✅ Step 1: Extract and process data BEFORE creating payload
    const product = formData.get('product');
    const audience = formData.get('audience');

    const competitorsValue = formData.get('competitors');
    const competitors = typeof competitorsValue === 'string' && competitorsValue
      ? competitorsValue.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    const featuresValue = formData.get('features');
    const features = typeof featuresValue === 'string' && featuresValue
      ? featuresValue.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    // ✅ Step 2: Validate required fields
    if (!product || !audience) {
      alert('Please fill in Product Name and Target Audience');
      return;
    }

    // ✅ Step 3: Now create the payload object
    const payload = {
      product,
      audience,
      competitors,
      features,
    };

    // ✅ Step 4: Call API
    setLoading(true);
    try {
      const res = await fetch('/api/generate-pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('API Error:', errorText);
        throw new Error(`Failed to generate pricing: ${res.status}`);
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">Generate Your AI Pricing</h1>

        {!data ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Product Name</label>
              <input
                name="product"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="e.g., AI Writing Tool"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Target Audience</label>
              <input
                name="audience"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="e.g., solopreneurs, marketing agencies"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Competitors (comma-separated)</label>
              <input
                name="competitors"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Jasper, Copy.ai, Writer.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Key Features (comma-separated)</label>
              <input
                name="features"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="SEO optimization, tone adjustment, team collaboration"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Generating...' : 'Generate Pricing'}
            </button>
          </form>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your AI Pricing Strategy</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
            <button
              onClick={() => setData(null)}
              className="mt-4 text-indigo-600 font-medium hover:underline"
            >
              ← Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
