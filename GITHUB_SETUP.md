# GitHub Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `personal-site` (or any name you prefer)
3. Choose **Public** or **Private**
4. **DO NOT** check "Add a README file" (we already have one)
5. Click **"Create repository"**

## Step 2: Connect Your Local Repository

After creating the repository on GitHub, you'll see a page with setup instructions. Use the "push an existing repository" option:

```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-site.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:YOUR_USERNAME/personal-site.git
git branch -M main
git push -u origin main
```

## Quick Command Reference

After setting up the remote:

- **Push changes**: `git push`
- **Pull changes**: `git pull`
- **Check status**: `git status`
- **View remote**: `git remote -v`
