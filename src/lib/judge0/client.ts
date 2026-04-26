// A basic client wrapper for Judge0 API

export interface CodeSubmission {
  source_code: string;
  language_id: number;
  stdin?: string;
}

export async function submitToJudge0(submission: CodeSubmission) {
  const url = process.env.JUDGE0_API_URL || 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true';
  const apiKey = process.env.JUDGE0_API_KEY;

  if (!apiKey) {
    console.warn('JUDGE0_API_KEY is not set. Returning stub response.');
    return {
      status: { description: 'Stub Execution (No API Key)' },
      stdout: 'This is a stub output. Please configure your Judge0 API key.',
      stderr: null,
      compile_output: null,
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
      'x-rapidapi-key': apiKey,
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    throw new Error(`Judge0 API error: ${response.statusText}`);
  }

  return await response.json();
}
