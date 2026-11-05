/**
 * Script to manage client logo assets in 'src/assets/clients' and 'public/clients'
 * Usage:
 *   node scripts/manage-client-logos.js list
 *   node scripts/manage-client-logos.js sync
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../src/assets/clients');
const publicDir = path.resolve(__dirname, '../public/assets/clients');
const publicRootClients = path.resolve(__dirname, '../public/clients');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function syncLogos() {
  ensureDir(srcDir);
  ensureDir(publicDir);
  ensureDir(publicRootClients);

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.svg') || f.endsWith('.png') || f.endsWith('.webp'));
  console.log(`Found ${files.length} client logo assets in src/assets/clients:`);

  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    fs.copyFileSync(srcFile, path.join(publicDir, file));
    fs.copyFileSync(srcFile, path.join(publicRootClients, file));
    console.log(`  ✓ Synced: ${file}`);
  });

  console.log('\nAll client logo assets successfully synchronized to public folders for Vercel production!');
}

function listLogos() {
  if (!fs.existsSync(srcDir)) {
    console.log('src/assets/clients does not exist yet.');
    return;
  }
  const files = fs.readdirSync(srcDir);
  console.log('Current files in src/assets/clients:');
  files.forEach(f => console.log(' - ' + f));
}

const command = process.argv[2] || 'sync';
if (command === 'list') {
  listLogos();
} else {
  syncLogos();
}
