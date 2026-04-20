# 🚀 Navdeep Singh — Portfolio Deployment Guide

## File Structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── main.js
└── DEPLOY.md
```

---

## ✅ Option 1: GitHub Pages (FREE — Recommended)

### Step-by-step:

1. **Create a GitHub account** at github.com (if you don't have one)

2. **Create a new repository** named exactly:
   ```
   navdeepsingh.github.io
   ```
   *(Replace `navdeepsingh` with your actual GitHub username — `NavdeeepSinghh`)*
   So your repo should be: `NavdeeepSinghh.github.io`

3. **Upload all files**, maintaining the folder structure:
   - `index.html` at root
   - `css/style.css`
   - `js/data.js`
   - `js/main.js`

4. Go to **Settings → Pages → Source → Deploy from branch → main**

5. Your site will be live at:
   ```
   https://NavdeeepSinghh.github.io
   ```

That's it. Completely free, no server needed.

---

## ✅ Option 2: Netlify (FREE — Drag & Drop)

1. Go to **netlify.com** and sign up (free)
2. Click **"Add new site" → "Deploy manually"**
3. **Drag and drop your entire `portfolio` folder** onto the page
4. Done! You get a free URL like `navdeep-abc123.netlify.app`
5. You can set a custom subdomain like `navdeepsingh.netlify.app` for free

---

## ✅ Option 3: Vercel (FREE)

1. Go to **vercel.com** and sign in with GitHub
2. Click **New Project → Import your GitHub repo**
3. Vercel auto-detects it's a static site and deploys it
4. Live at `your-repo.vercel.app`

---

## 🌐 Custom Domain (Optional)

If you want `navdeepsingh.dev` or similar:
- Buy domain from **Namecheap** (~$10/year for `.dev`)
- Point it to your Netlify/GitHub Pages URL (free)

---

## 📝 Updating Your Site

To update content (new projects, skills, etc.):
- **Edit `js/data.js`** — all project and skill data lives there
- **Edit `index.html`** — for bio/about text changes
- Push changes to GitHub → auto-deploys instantly

---

## 💡 Tips

- Make sure all 4 files are uploaded with the exact folder structure
- Test locally by just opening `index.html` in your browser first
- The site uses Google Fonts — internet connection required for full look
