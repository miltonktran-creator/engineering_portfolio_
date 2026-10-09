# Engineering Portfolio

A responsive, dark-themed engineering portfolio built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Open and edit in VS Code

1. Download and extract the project ZIP.
2. In VS Code, choose **File → Open Folder…**.
3. Select the extracted `engineering_portfolio` folder.
4. Open `index.html` to edit the page content.
5. To preview it, open `index.html` in your browser. For a live-reload preview, install the **Live Server** extension in VS Code, then right-click `index.html` and choose **Open with Live Server**.

## Personalize the site

- Edit `index.html` to replace the sample name, email, education, experience, skills, project titles, project descriptions, tags, and links.
- Add your resume PDF at `assets/resume.pdf`.
- Add two images per project to `assets/projects/` using these names:
  - `project-01-a.jpg`, `project-01-b.jpg`
  - `project-02-a.jpg`, `project-02-b.jpg`
  - `project-03-a.jpg`, `project-03-b.jpg`
- Replace each sample `href="#"` project link with a real URL, or remove the link if it does not apply.
- Edit `styles.css` to change the appearance.
- `script.js` updates the project count automatically and provides a helpful alert for links that have not been filled in.

## Publish with GitHub Pages

### 1. Create a GitHub repository

Create a new repository on GitHub, for example `engineering-portfolio`. If you want the site at `https://YOUR-USERNAME.github.io/`, name the repository exactly `YOUR-USERNAME.github.io`. Otherwise, a repository named `engineering-portfolio` usually publishes at `https://YOUR-USERNAME.github.io/engineering-portfolio/`.

### 2. Upload the website files

Upload the *contents* of this folder to the repository's root, so `index.html` is at the top level—not inside another nested folder. Include `styles.css`, `script.js`, `.nojekyll`, and the `assets` folder.

You can upload through GitHub's web interface (**Add file → Upload files**) or use Git from VS Code.

### 3. Enable Pages

In the GitHub repository:
1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`.
4. Click **Save**.

Wait for GitHub Pages to finish deploying. The published URL will appear in **Settings → Pages**.

### 4. Updating the site

Edit files in VS Code, save them, then commit and push the changes to the repository. GitHub Pages will redeploy the site automatically.

## Before sharing

Replace all starter text and placeholder links, add your actual resume PDF and project images, and verify the published site on both desktop and mobile. Do not upload private or confidential engineering files.
