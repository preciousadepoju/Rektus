# 🚀 Quick Setup Guide

## Run Locally (3 steps)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   - Go to `http://localhost:5173`

That's it! The app should be running.

---

## Deploy to GitHub Pages (3 steps)

1. **Edit `vite.config.ts` line 15**
   
   Replace `'rektus-deal-platform'` with your actual GitHub repository name:
   ```typescript
   base: process.env.GITHUB_PAGES ? '/YOUR-REPO-NAME/' : '/',
   ```

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages**
   - Under "Build and deployment", set Source to: **GitHub Actions**
   - Wait 1-2 minutes for deployment
   - Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## Need Help?

**App not loading?**
- Make sure all images are in `/public/images/`
- Run `npm install` again

**GitHub Pages shows 404?**
- Check that `base` in `vite.config.ts` matches your repo name exactly
- Verify GitHub Pages source is set to "GitHub Actions"

**Build errors?**
- Delete `node_modules` and run `npm install` again
- Make sure you're using Node.js v18 or higher

That's all you need to know!
