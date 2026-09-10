# Muhammad Wendra Suryananda — Portfolio

A custom English portfolio built with Astro, TypeScript, Tailwind CSS, and Motion. Static HTML, locally hosted fonts and technology logos, a responsive dark layout, and reduced-motion support.

## Run locally

Requires Node.js 22.12+ (Node.js 24 is supported).

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is disabled. Open the local URL printed by Astro (normally http://127.0.0.1:4321).

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`. It can be hosted on any static hosting service. This project has not been published or connected to a domain.

## Update your content

Edit `src/data/portfolio.ts`:

- **Profile:** name, introduction metadata, email, GitHub and LinkedIn URLs. Empty contact fields remain unpublished; no fake contact links are used.
- **Experience:** the verified timeline is Koding Next (2024–2025), PT ITCI Kartika Utama (2025–2026), and PT Graha Prima Energy (2026–Present). Update dates in `period` if they change.
- **Education:** update the verified Informatics program, Universitas Mulawarman, 2020–2024 period, GPA, and recognition in the `education` object.
- **Certificates:** update the verified TensorFlow Developer Certificate and MikroTik Certified Network Associate details in `certificates`. Their original PNG files are stored in `public/images/certificates/`; thumbnails are optimized during the build, and visitors can open the original files in a new tab.
- **Skills:** add or remove technologies. Logos are bundled from `@iconify-json/logos`; NAS uses a generic storage icon because a vendor has not been provided.
- **Projects:** the four published entries link to Procurement and Payment Request Tracking, SDM-System, Timesheet-System, and Asset Management System. Update their content in `src/data/procurement.ts`, `src/data/sdm-system.ts`, `src/data/timesheet-system.ts`, and `src/data/asset-management-system.ts`. All case study pages under `src/pages/projects/` use `src/components/CaseStudy.astro`, with the content type in `src/data/case-study.ts`. SDM-System, Timesheet-System, and Asset Management System include internal Synology NAS deployment. Results use supplied qualitative descriptions without invented performance metrics. Images accept imported metadata (optimized during build) or a file path under `public/`.
- **Achievements:** update the verified university milestones with `title`, `issuer`, `year`, and `description`. Optional fields include `category`, `highlight`, `contribution`, an imported `image`, `imageAlt`, `url`, and `linkLabel`. The provided 2024 Best Graduate certificate and hackathon team photo are stored unchanged in `public/images/achievements/`; responsive thumbnails are generated during the build. Links open the original documentation at full size.

Main page copy lives in `src/pages/index.astro`. Layout, colors, and responsive rules live in `src/styles/global.css`.

## Profile photograph

The hero uses `public/images/wendra-professional-v2-fullhd.png` through `src/components/HeroPortrait.astro`. This version uses natural skin smoothing with the original skin tone. The 1080 × 1920 portrait is an upscaled export of the retouched image, not native Full HD capture. Astro generates responsive WebP versions during the build. Earlier PNG versions stay unchanged. The component contains the photograph's framing and mobile styles; edit its image import to use a different photo.

## Enable CV download

The downloadable CV is included at:

```text
public/Muhammad-Wendra-Suryananda-CV.pdf
```

The Download CV button is active. To replace it later, update the file at this path and keep the filename synchronized with `profile.cvFile`.

## Accessibility and motion

- Mobile menu supports keyboard controls, Escape, and accurate expanded state.
- Headings, cards, screenshots, and content blocks animate as they enter the viewport on the home page and every case study. Groups appear with short staggered delays, and scrolling away and back replays the entrance. A thin line at the top indicates reading progress.
- Logo movement pauses on hover or keyboard focus. The Pause motion button on the home page and case studies stops movement and immediately settles active scroll animations. Scrolling remains native.
- Scroll behavior lives in `src/scripts/scroll-animations.ts`. Content is visible by default, animated ancestors exclude nested targets, and keyboard focus immediately settles the focused element.
- System reduced-motion settings disable continuous movement and scroll animation.
- Content and in-page navigation remain usable without JavaScript; the mobile menu itself needs JavaScript.
- No fake proficiency scores, dates, credentials, completed projects, or contact details.

## Before publishing

Add the real CV and contact details, confirm the introductory copy, and add future projects only when their details are ready. A custom domain and social-sharing image can be added after choosing the production address.

## Browser verification

Run `npm run verify:scroll` with the local server running to exercise scroll entrance and replay, pause/resume, live reduced-motion changes, and no-JavaScript readability on all three pages at desktop and mobile sizes.

With the local server running, run `npm run verify` (or `npm.cmd run verify` on PowerShell). The verification script uses an installed Google Chrome via Playwright, checks responsive layouts, keyboard navigation, animation controls, reduced motion, honest empty states, and WCAG A/AA accessibility with axe. Screenshots are saved in `test-results/`. Set `PORTFOLIO_URL` to test another local URL, such as a production preview.

Technology logos from Iconify Logos and Simple Icons identify their respective products and remain the property of their owners. The orbital and project illustrations are original SVG/CSS artwork.
