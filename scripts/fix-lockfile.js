const { execSync } = require('child_process');

const projectDir = '/vercel/share/v0-project';

// Remove the out-of-sync lock file and regenerate it
console.log('Removing old package-lock.json...');
execSync(`rm -f ${projectDir}/package-lock.json`, { stdio: 'inherit' });

console.log('Running npm install to regenerate package-lock.json...');
execSync(`npm install --prefix ${projectDir}`, { stdio: 'inherit' });

console.log('Done! Lock file regenerated.');
