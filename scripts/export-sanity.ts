import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSanityExportBundle } from '../src/data/catalog/exportSanity';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'sanity-export');
const outFile = join(outDir, 'bundle.json');

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, `${JSON.stringify(buildSanityExportBundle(), null, 2)}\n`, 'utf8');
console.log(`Wrote ${outFile}`);
