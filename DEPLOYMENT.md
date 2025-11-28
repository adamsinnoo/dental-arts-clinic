# How to Publish Your Website

This guide will help you publish your Dental Arts Clinic website so it's accessible from any device.

## Option 1: GitHub Pages (FREE - Recommended)

GitHub Pages provides free hosting for static websites. Here's how to set it up:

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account (if you don't have one)

### Step 2: Create a New Repository
1. Click the "+" icon in the top right
2. Select "New repository"
3. Name it: `dental-arts-clinic` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Files
**Method A: Using GitHub Website (Easiest)**
1. Go to your new repository
2. Click "Add file" → "Upload files"
3. Drag and drop all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `translations.js`
   - `.htaccess` (optional - only works on Apache servers)
4. Click "Commit changes"

**Method B: Using Git Command Line**
```bash
# Navigate to your project folder
cd c:\aiproj

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Dental Arts Clinic website"

# Add GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/dental-arts-clinic.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait 1-2 minutes for deployment

### Step 5: Access Your Website
Your website will be available at:
```
https://YOUR_USERNAME.github.io/dental-arts-clinic/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Option 2: Netlify (FREE - Alternative)

Netlify is another excellent free hosting option with easy deployment.

### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your project folder
5. Your site will be live instantly at a random URL
6. You can customize the domain name in settings

**Advantages:**
- Free SSL certificate
- Custom domain support
- Automatic deployments
- Better for .htaccess (uses netlify.toml instead)

---

## Option 3: Vercel (FREE - Alternative)

Similar to Netlify, great for static sites.

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy automatically

---

## Option 4: Traditional Web Hosting

If you have a web hosting account (like cPanel, Bluehost, etc.):

1. Upload all files via FTP or File Manager
2. Place files in `public_html` or `www` folder
3. Access via your domain name

---

## Important: Update URLs Before Publishing

Before publishing, update these in `index.html`:

1. **Open Graph URLs** (around line 20-30):
   ```html
   <meta property="og:url" content="https://YOUR_USERNAME.github.io/dental-arts-clinic/">
   <meta property="og:image" content="https://YOUR_USERNAME.github.io/dental-arts-clinic/og-image.jpg">
   ```

2. **Canonical URL** (around line 35):
   ```html
   <link rel="canonical" href="https://YOUR_USERNAME.github.io/dental-arts-clinic/">
   ```

3. **Structured Data** (around line 50-90):
   ```json
   "url": "https://YOUR_USERNAME.github.io/dental-arts-clinic",
   "image": "https://YOUR_USERNAME.github.io/dental-arts-clinic/logo.jpg"
   ```

---

## Quick Start: GitHub Pages (Recommended)

**Fastest way to get online:**

1. Create GitHub account → Create repository → Upload files → Enable Pages
2. Your site is live in 5 minutes!
3. Free forever
4. Works on all devices
5. HTTPS automatically enabled

---

## Custom Domain (Optional)

If you want to use your own domain (e.g., `dentalartsclinic.com`):

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In GitHub Pages settings, add your custom domain
3. Update DNS records as instructed
4. Your site will be accessible via your custom domain

---

## Testing Your Published Site

After publishing, test:
- ✅ Website loads on mobile phone
- ✅ Website loads on tablet
- ✅ Website loads on desktop
- ✅ Language toggle works
- ✅ WhatsApp links work
- ✅ Forms submit correctly
- ✅ All images load

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

