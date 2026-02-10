import { execSync } from 'child_process';

// Remove the out-of-sync lock file and regenerate it
console.log('Removing old package-lock.json...');
execSync('rm -f /vercel/share/v0-project/package-lock.json', { stdio: 'inherit' });

console.log('Running npm install to regenerate package-lock.json...');
execSync('npm install --prefix /vercel/share/v0-project', { stdio: 'inherit' });

console.log('Done! Lock file regenerated.');
