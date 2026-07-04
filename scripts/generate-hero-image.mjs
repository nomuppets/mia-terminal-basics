import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const defaultPrompt = 'A friendly beginner named Mia learning the Mac terminal at a tidy desk, iTerm2-style terminal open with simple green command text, teacher notes beside the laptop, calm red and black colour palette, approachable educational website hero, modern semi-realistic illustration, warm teacher mood, no brand logos, no hacker aesthetic, no cyberpunk, no clutter, wide banner composition.';

function parseArgs(argv) {
  const args = { out: 'assets/mia-hero.jpg', prompt: defaultPrompt };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') args.out = argv[++i];
    else if (arg === '--prompt') args.prompt = argv[++i];
    else if (arg === '--auth') args.auth = argv[++i];
  }
  return args;
}

function readKey(authPath) {
  if (process.env.XAI_API_KEY) return process.env.XAI_API_KEY;
  const file = authPath || path.join(os.homedir(), '.pi', 'agent', 'auth.json');
  const raw = fs.readFileSync(file, 'utf8');
  const auth = JSON.parse(raw);
  const key = auth?.xai?.key;
  if (!key || typeof key !== 'string') throw new Error('Missing xai.key in auth.json');
  return key;
}

const args = parseArgs(process.argv.slice(2));
const key = readKey(args.auth);
const response = await fetch('https://api.x.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${key}`
  },
  body: JSON.stringify({
    model: 'grok-imagine-image-quality',
    prompt: args.prompt,
    aspect_ratio: '2:1',
    resolution: '2k',
    response_format: 'b64_json'
  })
});

if (!response.ok) {
  const text = await response.text();
  throw new Error(`xAI image request failed with HTTP ${response.status}: ${text.slice(0, 300)}`);
}

const body = await response.json();
const b64 = body?.data?.[0]?.b64_json;
if (!b64) throw new Error('xAI response did not include data[0].b64_json');

fs.mkdirSync(path.dirname(args.out), { recursive: true });
fs.writeFileSync(args.out, Buffer.from(b64, 'base64'));
console.log(`Saved ${args.out}`);
