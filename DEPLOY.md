# Deployment Instructions

This portfolio is built with React and Vite. It is ready to be deployed to any static hosting service.

## GitHub Pages Deployment

1.  **Update `vite.config.js`**:
    If you are deploying to `https://<USERNAME>.github.io/<REPO>/`, you need to set the base path.
    Open `vite.config.js` and add `base: '/<REPO>/',` to the config object.
    If you are deploying to `https://<USERNAME>.github.io/` (root), you can skip this.

2.  **Install `gh-pages`**:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Update `package.json`**:
    Add these scripts to your `package.json`:
    ```json
    "scripts": {
      // ... existing scripts
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

4.  **Deploy**:
    Run the deploy command:
    ```bash
    npm run deploy
    ```

## Vercel Deployment (Recommended)

1.  Create a new project on Vercel.
2.  Import your GitHub repository.
3.  Vercel will automatically detect Vite and configure the build settings.
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`
4.  Click **Deploy**.

## Netlify Deployment

1.  Create a new site on Netlify.
2.  Connect your GitHub repository.
3.  Configure build settings:
    -   **Build Command**: `npm run build`
    -   **Publish directory**: `dist`
4.  Click **Deploy Site**.

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```
