import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const words = readFileSync(new URL('./text.txt', import.meta.url), 'utf8').trim();
const characterCount = Array.from(words).length;
if (characterCount === 0 || characterCount > 280) {
  throw new Error(`text.txt must contain between 1 and 280 characters; got ${characterCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (outputDir.trim().length === 0) {
  throw new Error('MAKEFUN_OUTPUT_DIR must be a non-empty directory path');
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${words}\n`, 'utf8');
console.log(words);
