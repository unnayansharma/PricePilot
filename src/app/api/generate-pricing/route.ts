import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { product, audience, competitors = [], features = [] } = body;

    if (!product || !audience) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const prompt = `
You are a SaaS pricing expert. Based on the product, audience, and competitors, return a JSON pricing strategy.

Product: ${product}
Target Audience: ${audience}
Competitors: ${competitors.join(', ') || 'None provided'}
Key Features: ${features.join(', ') || 'None provided'}

Return JSON ONLY (no extra text) with this structure:
{
  "basic": { "price": 19, "features": ["Core features"] },
  "pro": { "price": 49, "features": ["All Basic", "More"] },
  "business": { "price": 99, "features": ["All Pro", "Support"] },
  "justification": "Based on competitor analysis and value-based pricing...",
  "conversionRate": 5,
  "arrAt500": 295000,
  "arrAt1000": 590000
}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0].message.content;

    // Parse and validate JSON
    let result;
    try {
      result = JSON.parse(content);
    } catch (e) {
      console.error('Failed to parse AI JSON:', content);
      return NextResponse.json({ error: 'Invalid AI response format' }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate pricing', details: error.message },
      { status: 500 }
    );
  }
}