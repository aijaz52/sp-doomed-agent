import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const words = readFileSync(new URL('./text.txt', import.meta.url), 'utf8').trim();
if (words.length === 0 || words.length > 280) {
  throw new Error(`text.txt must contain between 1 and 280 characters; got ${words.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${words}\n`, 'utf8');
console.log(words);
