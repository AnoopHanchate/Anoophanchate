# GitHub Pages Deployment Guide

## 📋 Prerequisites
- A GitHub account
- Git installed on your computer
- Your portfolio code ready

## 🚀 Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Choose a repository name (e.g., `portfolio`, `anoop-portfolio`, etc.)
   - This will be part of your URL: `username.github.io/repository-name`
5. Set it to **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Update Vite Configuration

1. Open `/vite.config.ts`
2. Change this line:
   ```typescript
   base: '/your-repo-name/',
   ```
   To match your repository name:
   ```typescript
   base: '/portfolio/',  // or whatever you named your repo
   ```

### Step 3: Initialize Git and Push Your Code

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub (might be 'master' instead of 'main' depending on your Git version)
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/anoophanchate/portfolio.git
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select **"GitHub Actions"**
5. The workflow will automatically deploy your site!

### Step 5: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-5 minutes)
4. Once complete, your site will be live!

### Step 6: Access Your Website

Your portfolio will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
```
https://anoophanchate.github.io/portfolio/
```

## 🔄 Making Updates

After initial setup, whenever you want to update your website:

```bash
# Make your changes in the code
# Then commit and push

git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Action will automatically rebuild and redeploy your site!

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] `vite.config.ts` updated with correct repository name
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] GitHub Actions workflow completed successfully
- [ ] Website accessible at `https://username.github.io/repo-name/`

## 🎯 Custom Domain (Optional)

If you want a custom domain like `anoophanchate.com`:

1. Purchase a domain from GoDaddy, Namecheap, etc.
2. In repository Settings → Pages → Custom domain
3. Enter your domain name
4. Update DNS settings at your domain registrar:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
   - Or add A records for GitHub's IP addresses

## 🆘 Troubleshooting

**Problem: 404 Error or blank page**
- Check that `base` in `vite.config.ts` matches your repository name exactly
- Ensure it starts and ends with `/` like: `base: '/portfolio/',`

**Problem: GitHub Action fails**
- Check the Actions tab for error messages
- Ensure your default branch is `main` (or update workflow file to `master`)
- Make sure repository is public

**Problem: Changes not showing**
- Wait a few minutes for deployment
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check Actions tab to ensure workflow completed

## 📞 Need Help?

If you encounter issues:
1. Check the Actions tab for deployment errors
2. Review the workflow logs for specific error messages
3. Ensure all files are committed and pushed

---

Good luck with your deployment! 🚀
