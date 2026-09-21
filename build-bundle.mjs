// Bündelt alle content/*.md in content/bundle.js, damit die App auch per Doppelklick
// (file://) funktioniert. Nach jeder Änderung an den Markdown-Dateien ausführen:
//   node build-bundle.mjs
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dir = fileURLToPath(new URL('./content/', import.meta.url));
const files = (await readdir(dir)).filter(f => f.endsWith('.md')).sort();
const data = {};
for (const f of files) data[f] = (await readFile(join(dir, f), 'utf8')).replace(/\r\n/g, '\n');

await writeFile(join(dir, 'bundle.js'),
  '/* GENERIERT von build-bundle.mjs – nicht von Hand bearbeiten */\nwindow.APP_MD = ' + JSON.stringify(data) + ';\n');
console.log(`bundle.js: ${files.length} Dateien (${files.join(', ')})`);
