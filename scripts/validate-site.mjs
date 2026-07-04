import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'index.html',
  'style.css',
  '.nojekyll',
  'README.md',
  'assets/mia-hero.jpg',
  'mia-00-install-iterm2.html',
  'mia-01-where-am-i.html',
  'mia-02-moving-around.html',
  'mia-03-paths.html',
  'mia-04-making-things.html',
  'mia-05-tab-completion.html',
  'mia-06-files-with-spaces.html',
  'mia-07-command-shapes.html',
  'mia-08-safe-deleting.html',
  'mia-09-getting-unstuck.html',
  'mia-10-practice-mission.html',
  'mia-11-cheat-sheet.html'
];

const failures = [];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));

for (const file of requiredFiles) {
  if (!exists(file)) failures.push(`Missing required file: ${file}`);
}

const htmlFiles = requiredFiles.filter(file => file.endsWith('.html')).filter(exists);

for (const file of htmlFiles) {
  const html = read(file);
  if (!html.includes('<nav class="nav"')) failures.push(`${file}: missing shared nav`);
  if (!html.includes('class="terminal"')) failures.push(`${file}: missing terminal-style example`);
  if (!html.includes('TYPE THIS')) failures.push(`${file}: terminal examples must label learner input with TYPE THIS`);
  if (!html.includes('Type only the lines marked')) failures.push(`${file}: terminal examples must warn learners not to type output lines`);
  if (!html.includes('href="mia-11-cheat-sheet.html"')) failures.push(`${file}: missing Cheat sheet navigation link`);
  if (!html.includes('Mia Terminal Basics')) failures.push(`${file}: missing course title`);

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
  for (const href of hrefs) {
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#') || href.startsWith('mailto:')) continue;
    const target = href.split('#')[0];
    if (target && !exists(target)) failures.push(`${file}: broken local link ${href}`);
  }
}

const install = exists('mia-00-install-iterm2.html') ? read('mia-00-install-iterm2.html') : '';
if (!install.includes('https://iterm2.com/downloads.html')) {
  failures.push('Install lesson must link to official iTerm2 downloads page');
}

const tildePages = ['mia-02-moving-around.html', 'mia-03-paths.html', 'mia-09-getting-unstuck.html', 'mia-11-cheat-sheet.html'];
for (const file of tildePages) {
  if (!exists(file)) continue;
  const html = read(file);
  if (!html.includes('~ means your home folder') && !html.includes('~</code> means your home folder')) {
    failures.push(`${file}: must explicitly explain ~ as the home folder`);
  }
}

if (exists('mia-11-cheat-sheet.html')) {
  const cheatSheet = read('mia-11-cheat-sheet.html');
  if (!cheatSheet.includes('Terminal commands') || !cheatSheet.includes('Keyboard shortcuts')) {
    failures.push('mia-11-cheat-sheet.html must separate terminal commands from keyboard shortcuts');
  }
}

if (!exists('scripts/generate-hero-image.mjs')) failures.push('Missing xAI hero generation script');
if (exists('style.css')) {
  const css = read('style.css');
  if (!css.includes('.card p code') || !css.includes('inline-command-pill')) {
    failures.push('style.css must render inline body-copy code as green command pills');
  }
}
if (exists('.gitignore')) {
  const ignore = read('.gitignore');
  for (const secret of ['auth.json', '.env']) {
    if (!ignore.includes(secret)) failures.push(`.gitignore must include ${secret}`);
  }
}

if (failures.length) {
  console.error('Site validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Site validation passed: ${htmlFiles.length} HTML pages checked.`);
