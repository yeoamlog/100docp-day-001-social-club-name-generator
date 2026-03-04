# Social Club Name Generator

Python CLI project converted to a browser demo that feels like a terminal app.

## What is included
- `main.py`: original CLI-style generator (Python).
- `index.html`, `style.css`, `app.js`: web demo for GitHub Pages.

## Run the Python version
```bash
cd social-club-name-generator
python3 main.py
```

## Run the web demo locally
```bash
cd social-club-name-generator
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish as a public GitHub repo
Recommended: make this folder its own repo root.

```bash
cd social-club-name-generator
git init
git add .
git commit -m "Initial Social Club Name Generator (Python + Web Demo)"
gh repo create social-club-name-generator --public --source=. --remote=origin --push
```

## Enable GitHub Pages
1. Open your repo on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` and `/ (root)`
4. Save, then wait about 1-2 minutes.

Your demo URL will be:

`https://<your-github-username>.github.io/social-club-name-generator/`
