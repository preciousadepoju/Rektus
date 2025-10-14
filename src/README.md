# ⚡ Rektus Deal-Making Platform

A mobile-first dark themed landing page for a deal-making platform with bright orange (#ff500b) accents and lightning bolt branding.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📦 Project Structure

```
├── App.tsx                  # Main app component with routing
├── components/
│   ├── WarningBanner.tsx   # Scrolling warning banner
│   ├── Navigation.tsx      # Header with logo and menu
│   ├── HeroSection.tsx     # Hero with two action cards
│   ├── BrandingSection.tsx # Bottom watermark section
│   └── DealSetup.tsx       # Deal creation form page
├── public/images/          # All static images
│   ├── nav-logo-full.png
│   ├── hero-lightning-bolt.png
│   ├── button-icon.png
│   └── bottom-watermark.png
└── styles/globals.css      # Tailwind config and typography
```

## 🎨 Design Features

- **Dark Theme**: Background #0a0a0a with #1a1a1a cards
- **Orange Accent**: Primary color #ff500b for CTAs and highlights
- **Typography**: Funnel Display Light for headings, Geist for body text
- **Mobile-First**: Fully responsive layout
- **Two Pages**: Landing page and Deal setup form

## 🌐 GitHub Pages Deployment

### Step 1: Update Repository Name

Edit `vite.config.ts` line 15 and replace `'rektus-deal-platform'` with your actual repository name:

```typescript
base: process.env.GITHUB_PAGES ? '/YOUR-REPO-NAME/' : '/',
```

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Wait for the workflow to complete (check Actions tab)
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 🔧 Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool
- **ShadCN UI** - Component library
- **Lucide React** - Icons

## 📝 Images

All images are located in `/public/images/`:
- `nav-logo-full.png` - Rektus logo for navigation
- `hero-lightning-bolt.png` - Lightning bolt icon in hero
- `button-icon.png` - Icon for "Rebuild trust" button
- `bottom-watermark.png` - Large Rektus watermark at bottom

Replace these with your actual brand assets.

## 🎯 Key Components

### Landing Page
- Scrolling warning banner with "Always check the contract" message
- Navigation with logo, menu items, and CTAs
- Hero section with "Lock in a deal built ⚡ trust" headline
- Two action cards: "Create a deal" and "Sign a deal as KOL"
- Branding section with large watermark

### Deal Setup Page
- Comprehensive form with project details
- Deal configuration options
- Payment mode selection
- 10% platform fee disclosure
- Terms and disclaimers

## 💡 Troubleshooting

**Images not showing?**
- Make sure all images are in `/public/images/`
- Check that filenames match exactly (case-sensitive)

**GitHub Pages showing 404?**
- Verify the `base` path in `vite.config.ts` matches your repo name
- Check that GitHub Actions workflow completed successfully
- Ensure GitHub Pages is set to "GitHub Actions" source

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📄 License

This project is open source and available under the MIT License.
