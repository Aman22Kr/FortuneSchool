# FortuneSchool — Premier Educational Institution Portal

An authentic, fully responsive, multi-page static web application inspired by the architectural and institutional design of premier convent schools like [Carmel Convent School, New Delhi](https://www.carmeldelhi.com/index.html), recreated under the new brand identity **FortuneSchool** for GitHub user **Aman22kr**.

---

## 1. What the Website Does
FortuneSchool is a comprehensive digital portal for an elite K-12 CBSE-affiliated convent institution located in Chanakyapuri, New Delhi. The portal delivers:
- An authoritative, prestigious institutional presence with traditional scholastic colors (navy blue, royal burgundy, warm gold, and crisp alabaster).
- An interactive admissions desk with online application draft saving and printable acknowledgement slips.
- A live searchable, filterable circular and notice board with bookmarking and mock PDF downloads.
- Senior secondary academic stream explorer (Science, Commerce, Humanities).
- Campus facilities catalog and 16:9 aspect-ratio video player placeholders (strictly conforming to YouTube embed reproduction guidelines).
- Statutory student Transfer Certificate (TC) search and verification.
- Mandatory CBSE Public Disclosure (Appendix IX compliance).
- Unobtrusive educational advertisement placeholders on all key pages.
- Accessibility controls for text sizing (A / A+ / A++) and high contrast mode.

---

## 2. Reference Website & Brand Identity
- **Reference Website**: [Carmel Convent School, New Delhi](https://www.carmeldelhi.com/index.html)
- **New Brand Name**: `FortuneSchool`
- **Motto**: *In Veritate et Sapientia* (In Truth and Wisdom)
- **Founded**: 1970
- **Location**: Malcha Marg, Chanakyapuri, New Delhi - 110021, India
- **CBSE Affiliation No.**: 2730048 | **School Code**: 85210
- **GitHub Repository**: `https://github.com/Aman22kr/FortuneSchool`

---

## 3. Main Pages & Features Implemented

| Route | Page | Key Features |
|---|---|---|
| `#/` | **Homepage** | Hero slider with 3 slides, quick access tiles, Principal's desk welcome, milestone metrics, live circulars ticker, notice board & calendar side-by-side, YouTube video placeholder, four houses showcase, testimonials, ad slot |
| `#/about` | **About Us** | 50+ years heritage, vision & mission statements, school crest symbolism, filterable faculty & leadership directory |
| `#/academics` | **Academics** | CBSE curriculum, NEP 2020 integration, Primary (K-V), Middle (VI-VIII), Senior Wings, interactive Senior Secondary Stream Explorer (Science, Commerce, Humanities), academic calendar |
| `#/admissions` | **Admissions** | Pre-school age criteria & 100-point parameter matrix, DoE fee structure table, interactive online registration form with `localStorage` draft saving, validation, and printable acknowledgement slip modal, FAQ accordion |
| `#/campus` | **Campus & Facilities** | Smart classrooms, science & STEAM labs, 45,000-volume library, sports arena & semi-Olympic pool, auditorium, infirmary, GPS fleet transport, video tour placeholder |
| `#/student-life` | **Student Life** | Four house system (Ruby, Sapphire, Emerald, Topaz), house point standings, prefectorial board / student council, 6 student clubs (FS-MUN, Robotics, Eco-Warriors, Choir, Debating, Interact), community outreach |
| `#/circulars` | **Circulars & Notices** | Real-time text search, category tabs (Admissions, Academics, Exams, Holidays, Events, Bookmarked), localStorage bookmarking, mock PDF download |
| `#/circulars/:id` | **Circular Detail** | Official letterhead view, checksum verification stamp, print view, share link, and downloadable copy |
| `#/gallery` | **Gallery & Archives** | Filterable photo categories (Campus, Sports, Cultural, Academics, Celebrations), full-screen Lightbox viewer modal, video showcase placeholders |
| `#/contact` | **Contact & Directions** | Campus address, telephone, email, visiting hours, departmental extensions, interactive inquiry form with validation and `localStorage` storage, map & transit guide |
| `#/transfer-certificate`| **TC Verification** | Search issued student transfer certificates by Admission Number or name, view verified digital certificates, printable leaving certificate modal |
| `#/mandatory-disclosure`| **CBSE Disclosure** | Appendix IX mandatory disclosure table, statutory NOC / fire / building certificates list, POCSO & child safety committee |
| `*` | **404 Not Found** | Scholastic error page with search assistance and direct links back to portal hubs |

---

## 4. Project Structure

```
FortuneSchool/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Official GitHub Pages deployment workflow
├── public/                       # Static public assets
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.tsx     # Reusable advertising slot
│   │   ├── Breadcrumbs.tsx       # Subpage navigation breadcrumb
│   │   ├── Footer.tsx            # 4-column institutional footer
│   │   ├── GlobalSearchModal.tsx # Command palette / global search (Cmd+K)
│   │   ├── LightboxModal.tsx     # Full-screen photo lightbox
│   │   ├── Navbar.tsx            # Main header with brand crest & dropdowns
│   │   ├── NoticeTicker.tsx      # Flash announcements marquee
│   │   ├── TopBar.tsx            # Top bar with accessibility resizer & contact
│   │   └── VideoPlaceholder.tsx  # YouTube 16:9 layout blank placeholder
│   ├── context/
│   │   └── AppContext.tsx        # localStorage persistence provider
│   ├── data/
│   │   └── schoolData.ts         # Comprehensive mock data & institutional facts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AcademicsPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── CampusPage.tsx
│   │   ├── CircularDetailPage.tsx
│   │   ├── CircularsPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── MandatoryDisclosurePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── StudentLifePage.tsx
│   │   └── TransferCertificatePage.tsx
│   ├── App.tsx                   # Main app router (HashRouter)
│   ├── index.css                 # Tailwind CSS styles & animations
│   └── main.tsx                  # React entry point
├── .gitignore
├── index.html                    # SEO, fonts (Cinzel, Plus Jakarta Sans), favicon
├── metadata.json
├── package.json                  # Dependencies and npm scripts
├── package-lock.json             # Valid npm lockfile for CI/CD builds
├── tsconfig.json
└── vite.config.ts                # Vite config with base: './'
```

---

## 5. Prerequisites & Node.js Compatibility
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

---

## 6. How to Install Dependencies

```bash
# Clean install using the committed package-lock.json
npm ci

# Or standard install:
npm install
```

---

## 7. How to Run Development Server

```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

---

## 8. How to Generate and Preview the Production Build

```bash
# 1. Run production build
npm run build

# 2. Preview production build locally
npm run preview
```
The output will be bundled in the `dist/` directory with relative asset paths (`base: './'`).

---

## 9. LocalStorage Persistence & Limitations

The following client-side data is persisted in the user's browser `localStorage`:
1. `fs_bookmarked_notices`: Array of circular IDs bookmarked by the user for fast reference.
2. `fs_admission_draft`: Unsubmitted admission application inputs (draft is preserved across page refreshes so users never lose entered form data).
3. `fs_submitted_applications`: Archive of generated admission application records with unique application numbers (`FS-2025-XXXXXX`).
4. `fs_contact_msgs`: Archive of inquiries submitted via the Contact page.
5. `fs_newsletter_emails`: Subscribed parent email addresses.
6. `fs_font_size`: Visual text size preference (`normal`, `large`, `xlarge`).
7. `fs_high_contrast`: Boolean flag for high-contrast reading mode.
8. `fs_banner_dismissed`: State of the flash announcements marquee.

**Important Notice**:
> Browser `localStorage` is scoped exclusively to the local web browser and device. It does not synchronize across separate devices or replace a live database server. Draft submissions and generated admission IDs are illustrative client-side demonstrations and do not claim that real banking or government school board registration has occurred.

---

## 10. How to Configure GitHub Repository and Username
1. Create a new repository on your GitHub account:
   ```bash
   # On GitHub: Create repository named "FortuneSchool" under user "Aman22kr"
   ```
2. Initialize and link your local project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FortuneSchool complete web application"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/FortuneSchool.git
   ```

---

## 11. How to Enable GitHub Pages using GitHub Actions
1. On GitHub, navigate to your repository `Aman22kr/FortuneSchool`.
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** under the *Code and automation* section.
4. Under **Build and deployment > Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
5. Save changes. The repository is now configured to deploy automatically via `.github/workflows/deploy.yml`.

---

## 12. How to Push Changes and Trigger Automatic Deployment

```bash
git add .
git commit -m "Update FortuneSchool content and layout"
git push -u origin main
```
Whenever a push is made to the `main` branch, the `.github/workflows/deploy.yml` workflow triggers automatically:
1. Checks out repository.
2. Installs dependencies using `npm ci`.
3. Executes `npm run build` to generate `dist/`.
4. Uploads artifacts and publishes to `https://aman22kr.github.io/FortuneSchool/`.

You can also trigger manual deployments via the **Actions** tab by selecting **Deploy to GitHub Pages** and clicking **Run workflow**.

---

## 13. Troubleshooting Common Deployment Problems

- **Assets failing to load (404 for CSS/JS files on GitHub Pages)**:
  Ensure `vite.config.ts` includes `base: './'`. This guarantees assets resolve relatively regardless of repository subdirectory paths.
- **Page refresh returns 404 on GitHub Pages**:
  The application utilizes `HashRouter` (`/#/about`, `/#/admissions`). Hash-based routing is 100% compatible with static GitHub Pages hosting and avoids server rewrite requirement issues.
- **Build fails during `npm ci`**:
  Ensure `package-lock.json` is committed and not ignored in `.gitignore`. Run `npm i --package-lock-only` locally to regenerate if dependencies are altered.
- **Workflow permission errors**:
  Ensure `.github/workflows/deploy.yml` contains:
  ```yaml
  permissions:
    contents: read
    pages: write
    id-token: write
  ```

---

## 14. How to Customize Brand Name, Content, and Visual Theme

1. **Brand Name & Motto**:
   Edit `src/data/schoolData.ts`:
   ```typescript
   export const SCHOOL_INFO = {
     name: 'YourSchoolName',
     fullName: 'YourSchoolName, New Delhi',
     motto: 'Your Motto Here',
     // ...
   };
   ```
2. **Colors & Typography**:
   Colors and typography are centralized in `src/index.css`:
   ```css
   @theme {
     --color-school-navy: #0e2038;
     --color-school-blue: #1b3d6c;
     --color-school-gold: #c99700;
   }
   ```
3. **HTML Meta & Title**:
   Edit `<title>` and `<meta>` tags in `/index.html` and `/metadata.json`.

---

## 15. How to Reuse This Project for Another Institution
To adapt this portal for another school:
1. Update `SCHOOL_INFO`, `NOTICES`, `EVENTS`, `FACILITIES`, and `FACULTY_MEMBERS` in `src/data/schoolData.ts`.
2. Adjust the school crest SVG in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
3. Update repository links in `src/components/Footer.tsx`.
4. Run `npm run build` to compile the customized application.

---

## 16. Mock Implementations & Limitations
- **Backend / Authentication**: No live backend database is attached in this static release. All admission submissions, contact inquiries, and bookmarks are simulated locally via browser `localStorage`.
- **Payment Gateway**: Fee schedule is presented for transparency with informational payment guidance; no live credit card or UPI processing is conducted.
- **YouTube Placeholders**: Conforming strictly to instructions, video players show high-fidelity 16:9 blank video player mockups with player controls rather than third-party tracking embeds.
- **Statutory Documents**: CBSE compliance files provide mock preview alerts and text downloads. In a production deployment, replace with official scanned PDF assets.

---

*Authored by Aman22kr • Built with Vite, React, Tailwind CSS, and Framer Motion.*
