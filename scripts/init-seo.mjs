#!/usr/bin/env node
/**
 * Create essential OG image and favicon files
 */

import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create .well-known directory
const wellKnownDir = path.join(publicDir, '.well-known');
if (!fs.existsSync(wellKnownDir)) {
  fs.mkdirSync(wellKnownDir, { recursive: true });
}

console.log('✓ Public and .well-known directories initialized');
