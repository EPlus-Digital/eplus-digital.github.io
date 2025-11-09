# GitHub Pages Deployment Guide

## Deploy to GitHub Pages

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your React app for production
   - Deploy the `dist` folder to the `gh-pages` branch
   - GitHub Pages will automatically serve your site

3. **Configure GitHub Pages** (if not already done):
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Set source to `gh-pages` branch
   - Set folder to `/ (root)`

## Important Notes

- The repository name is `eplus-digital.github.io`, so the base path is `/`
- The `404.html` file will handle React Router routes
- Make sure `gh-pages` package is installed: `npm install --save-dev gh-pages`
- After deployment, wait a few minutes for GitHub Pages to update

## Troubleshooting

If you see a white screen:
1. Make sure you ran `npm run deploy` (not just `npm run build`)
2. Check that the `gh-pages` branch exists and contains the `dist` folder contents
3. Verify GitHub Pages is set to use the `gh-pages` branch
4. Clear your browser cache and try again

