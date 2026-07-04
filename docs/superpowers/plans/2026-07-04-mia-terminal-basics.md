# Mia Terminal Basics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved static `mia-terminal-basics` course site.

**Architecture:** Plain static HTML/CSS pages with shared navigation and no build step. A small Node validator checks links and required course content. A separate local script can regenerate the hero image from xAI without logging secrets.

**Tech Stack:** HTML, CSS, native Node.js scripts, GitHub Pages-compatible static files.

## Global Constraints
- Use `master` as the branch.
- Do not commit or push unless Richard explicitly asks.
- Keep secrets out of docs, logs, and committed files.
- Use teacher voice, English only.
- Explain `~` clearly as the user's home folder.

---

### Task 1: Static site files

**Files:**
- Create: `index.html`, `mia-*.html`, `style.css`, `.nojekyll`, `.gitignore`, `README.md`, `assets/mia-hero.jpg`

**Steps:**
- [ ] Create shared CSS matching the reference visual style.
- [ ] Create the homepage and lessons with one idea per page.
- [ ] Add black/green terminal examples.
- [ ] Copy the approved hero image into `assets/mia-hero.jpg`.

### Task 2: xAI hero generation script

**Files:**
- Create: `scripts/generate-hero-image.mjs`

**Steps:**
- [ ] Load `XAI_API_KEY` from environment or `~/.pi/agent/auth.json` at runtime.
- [ ] Call `POST https://api.x.ai/v1/images/generations` with `grok-imagine-image-quality`.
- [ ] Save base64 response to `assets/mia-hero.jpg` without printing the key.

### Task 3: Validation

**Files:**
- Create: `scripts/validate-site.mjs`, `package.json`

**Steps:**
- [ ] Check every lesson file exists.
- [ ] Check links point to existing local files or allowed external URLs.
- [ ] Check terminal examples use `.terminal`.
- [ ] Check the official iTerm2 download link exists.
- [ ] Check `~` is explained.
- [ ] Run `npm test` and fix failures.
