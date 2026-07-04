# Mia Terminal Basics Design

## Goal
Create a plain-English static tutorial site that teaches a Mac beginner how to install iTerm2 and use basic terminal navigation without panic.

## Scope
- New static site repository: `mia-terminal-basics`.
- English only.
- HTML/CSS only for the published site, with no build step.
- Pages use the `mia-*` prefix after `index.html`.
- Visual style follows `jihad-speak-english`: dark background, red hero treatment, green accents, sticky pill navigation, cards, callouts, and large direct headings.
- Code examples use black terminal blocks with green prompts.
- The first lesson teaches iTerm2 installation and links to the official iTerm2 downloads page.
- The course explicitly explains `~` as the user's home folder and connects it to Finder locations.
- The hero image uses the approved Option B direction: Mia learning terminal, large hero treatment.

## Pages
- `index.html`: course home.
- `mia-00-install-iterm2.html`: install iTerm2.
- `mia-01-where-am-i.html`: `pwd`, `ls`, `open .`.
- `mia-02-moving-around.html`: `cd`, `..`, `~`.
- `mia-03-paths.html`: absolute paths, relative paths, `.`, `..`, `~`, and common home paths.
- `mia-04-making-things.html`: `mkdir`, `touch`.
- `mia-05-tab-completion.html`: Tab, arrow-up, `Ctrl+C`.
- `mia-06-files-with-spaces.html`: quotes and escaped spaces.
- `mia-07-command-shapes.html`: command, option, argument.
- `mia-08-safe-deleting.html`: `rm`, `rmdir`, safety warnings.
- `mia-09-getting-unstuck.html`: `clear`, `q`, `cd ~`, `Ctrl+C`.
- `mia-10-practice-mission.html`: full beginner mission.

## Safety
Avoid teaching `sudo`, `rm -rf`, `chmod`, `chown`, `brew`, `git`, and `ssh` in early lessons. Deleting gets its own late lesson with clear warnings.

## Verification
A local validator checks required files, navigation links, terminal blocks, official iTerm2 link, hero asset, and the explicit `~` explanation.
