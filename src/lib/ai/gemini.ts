import { generateText, streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function askGemini(prompt: string) {
  const { text } = await generateText({
    model: google('gemini-1.5-flash'),
    prompt: prompt,
    system: 'You are an expert programming assistant for a hackathon. Be concise and accurate.',
  });
  return text;
}

export async function askGeminiStream(prompt: string) {
  const { textStream } = await streamText({
    model: google('gemini-1.5-flash'),
    prompt: prompt,
    system: 'You are an expert programming assistant for a hackathon. Be concise and accurate.',
  });
  return textStream;
}
