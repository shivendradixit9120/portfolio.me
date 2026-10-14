# Shivendra Dixit — Personal Portfolio Website

A clean, modern, recruiter-friendly personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, following the Dark Cinematic × Futuristic AI × Minimal Developer design language.

## 🚀 Key Highlights

- **Aesthetic**: Dark cinematic theme (`#101114` background, `#17191F` raised surfaces, subtle lime `#B7FF5A` and blue `#65C8FF` accents).
- **Honest Representation**: No fabricated metrics or inflated progress bars — skills use transparent labels (`Used in project`, `Practicing`, `Learning`).
- **Showcase Projects**:
  - **KrishiSathi AI**: AI agricultural decision-support assistant.
  - **SafeTourOS**: Smart tourist safety & incident response system.
- **Separation of Concerns**: All editable content is centralized in `src/data/portfolioData.js`.
- **Accessibility & UX**: Semantic HTML5 landmarks, keyboard navigation support, skip-to-content link, accessible focus rings, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                 # HTML shell with SEO meta & SVG monogram favicon
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration for Tailwind
├── tailwind.config.js         # Custom design tokens, colors & glow utilities
├── vite.config.js             # Vite development & build configuration
├── README.md                  # Project documentation & deployment guide
└── src/
    ├── main.jsx               # Application mount entrypoint
    ├── App.jsx                # Layout orchestrator
    ├── index.css              # Custom styling & scrollbar utilities
    ├── data/
    │   └── portfolioData.js   # Centralized data model for profile, skills, projects
    └── components/
        ├── Navbar.jsx         # Sticky header with blurred backdrop & mobile drawer
        ├── Hero.jsx           # Dark cinematic hero with dual CTAs
        ├── About.jsx          # Academic context & engineering mindset
        ├── Skills.jsx         # Categorized skills grid with honest status chips
        ├── Projects.jsx       # Project showcase cards with challenge & architecture
        ├── LearningJourney.jsx# Continuous learning topics & credentials section
        ├── Contact.jsx        # Direct email link & copy-to-clipboard functionality
        └── Footer.jsx         # Dynamic copyright year & social links
```

---

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js**: v18+ or v20+ recommended (`node -v`)
- **npm**: v9+ (`npm -v`)

### 1. Install Dependencies
Navigate into the `portfolio` directory and install packages:

```bash
cd portfolio
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static bundle in the `portfolio/dist` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Personalizing Content

To update personal information, links, or projects, simply edit **`src/data/portfolioData.js`**:

1. **Email & Socials**:
   - Update `contact.email` and `contact.displayEmail` with your actual email address.
   - Update `contact.github` and `contact.linkedin` with your profile URLs.
   - Add your resume file (e.g. place `resume.pdf` in the `public/` folder and set `resumeUrl: "/resume.pdf"`).
2. **Projects**:
   - Add GitHub repository URLs or Live Demo links as they become available.
3. **Certifications**:
   - Add verified credentials to the `certificationsData` array when received.

---

## 🌐 Deployment to Vercel

The portfolio is designed to deploy seamlessly to **Vercel** with zero cost:

### Option A: Via GitHub (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Click **"Add New"** -> **"Project"** and select your repository.
4. In the project configuration:
   - **Root Directory**: Click *Edit* and select **`portfolio`** (since the portfolio is inside the `portfolio/` subfolder).
   - **Framework Preset**: Vite (detected automatically).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build and assign you a live `.vercel.app` URL.

### Option B: Via Vercel CLI
```bash
cd portfolio
npx vercel
```
Follow the interactive prompts to deploy.

---

## 📄 License
MIT License. Created by Shivendra Dixit.
