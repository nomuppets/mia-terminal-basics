# Mia Terminal Basics

A calm first course for using iTerm2 and the Mac terminal without panic.

Live site, once GitHub Pages is enabled:

```text
https://nomuppets.github.io/mia-terminal-basics/
```

## The promise

This course teaches a fresh Mac user how to use terminal-style apps without making the terminal feel like a hacker movie.

Mia learns:

- how to install iTerm2 safely
- where Terminal is standing
- how to move between folders
- what paths mean
- what `~`, `.`, and `..` mean
- how to create folders and files
- how to use Tab completion
- how to avoid typing output lines by mistake
- which items are terminal commands and which are keyboard shortcuts
- when to stop and ask before running dangerous commands

## Book structure

| Lesson | Page | What Mia learns |
|---:|---|---|
| 00 | [`mia-00-install-iterm2.html`](mia-00-install-iterm2.html) | Install iTerm2 from the official download page and make the text readable. |
| 01 | [`mia-01-where-am-i.html`](mia-01-where-am-i.html) | Use `pwd`, `ls`, and `open .` to connect Terminal with Finder. |
| 02 | [`mia-02-moving-around.html`](mia-02-moving-around.html) | Use `cd`, `..`, and `~` to move without getting lost. |
| 03 | [`mia-03-paths.html`](mia-03-paths.html) | Understand absolute paths, relative paths, `.`, `..`, and `~`. |
| 04 | [`mia-04-making-things.html`](mia-04-making-things.html) | Create folders and files with `mkdir` and `touch`. |
| 05 | [`mia-05-tab-completion.html`](mia-05-tab-completion.html) | Use Tab, arrow-up, and `Ctrl+C`. |
| 06 | [`mia-06-files-with-spaces.html`](mia-06-files-with-spaces.html) | Use quotes around names with spaces. |
| 07 | [`mia-07-command-shapes.html`](mia-07-command-shapes.html) | Read a command as command, option, and target. |
| 08 | [`mia-08-safe-deleting.html`](mia-08-safe-deleting.html) | Delete carefully with `rm` and `rmdir`. |
| 09 | [`mia-09-getting-unstuck.html`](mia-09-getting-unstuck.html) | Recover with `clear`, `q`, `cd ~`, and `Ctrl+C`. |
| 10 | [`mia-10-practice-mission.html`](mia-10-practice-mission.html) | Complete a safe beginner mission. |
| 11 | [`mia-11-cheat-sheet.html`](mia-11-cheat-sheet.html) | Review all commands, symbols, and keyboard shortcuts. |

Start here:

```text
index.html
```

## Teaching design

The site uses a teacher voice. It avoids jargon until the learner has a concrete reason to care.

Each lesson follows this pattern:

1. one main idea
2. a short explanation
3. labelled terminal examples
4. a teacher note
5. a tiny mission

Terminal examples separate input from output:

```text
TYPE THIS
pwd

MAC REPLIES
/Users/mia
```

This is deliberate. A beginner should not have to guess which lines to type.

## Visual style

The site is plain static HTML/CSS. No build step.

Style notes:

- dark background
- red hero panels
- green success accents
- sticky pill navigation
- large headings
- bigger body copy
- green command pills in body copy
- black terminal blocks
- labelled `TYPE THIS`, `MAC REPLIES`, and `NOTE` rows

The design follows the same broad static-site style as `jihad-speak-english`, but the content is English only.

## Safety rules

The course avoids these in beginner lessons:

```text
sudo
rm -rf
chmod
chown
brew
git
ssh
```

The cheat sheet still warns Mia to stop and ask before running destructive or permission-changing commands.

## Official iTerm2 link

The install lesson links to the official iTerm2 downloads page:

```text
https://iterm2.com/downloads.html
```

## Local preview

Open this file in a browser:

```text
index.html
```

Or serve the folder with any static file server.

## Test

Run:

```bash
npm test
```

The validator checks:

- all lesson files exist
- local links resolve
- every page has terminal examples
- terminal examples tell Mia to type only `TYPE THIS` lines
- the official iTerm2 link exists
- the hero image exists
- `~` is explained as the home folder
- lesson 11 separates terminal commands from keyboard shortcuts
- body-copy commands render as green pills

## Hero image

The approved hero image lives in the assets folder and is already committed.

Regenerate it only when the visual direction changes.

## Publish

This repo is designed for GitHub Pages from the `master` branch root.

Expected Pages URL:

```text
https://nomuppets.github.io/mia-terminal-basics/
```

## Maintenance

There is no build pipeline. Edit HTML/CSS directly, then run:

```bash
npm test
```
