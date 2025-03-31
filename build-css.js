const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure the CSS is properly built
console.log('Building CSS...');
try {
  // Run the Tailwind CLI to generate the CSS
  execSync('npx tailwindcss -i ./app/globals.css -o ./app/output.css', { stdio: 'inherit' });
  console.log('CSS built successfully!');
} catch (error) {
  console.error('Error building CSS:', error);
  process.exit(1);
}
