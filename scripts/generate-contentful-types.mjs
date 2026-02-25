import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';

if (!spaceId || !token) {
  console.error(
    'Missing required env vars. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN.'
  );
  process.exit(1);
}

const outDir = resolve(process.cwd(), 'src/lib/__generated__');
mkdirSync(outDir, { recursive: true });

const result = spawnSync(
  process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
  [
    'exec',
    'cf-content-types-generator',
    '-X',
    '-s',
    spaceId,
    '-t',
    token,
    '-e',
    environment,
    '-o',
    outDir,
  ],
  { stdio: 'inherit' }
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
