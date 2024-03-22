import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Prompt is required' }), {
      status: 400,
    });
  }

  try {
    const response = await openai.images.generate({
      prompt,
      n: 1,
      style: 'natural',
      model: 'dall-e-3',
      quality: 'hd',
    });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
    });
  }
}
