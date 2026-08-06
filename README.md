# Danyal Khan — Portfolio

Premium dark-theme freelance developer portfolio. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build for production with `npm run build && npm run start`.

## Architecture

```
src/
  app/
    layout.tsx       Root layout: fonts, SEO + Open Graph metadata
    page.tsx          Assembles all sections in order
    globals.css        Design tokens (colors/fonts) + shared utility classes
  data/                 <-- EDIT CONTENT HERE, not inside components
    profile.ts          Name, hero copy, stats, contact info, social links
    nav.ts               Nav bar links
    skills.ts            Skill categories + items
    projects.ts           Project cards (add/remove freely)
    experience.ts          Timeline entries (newest first)
    testimonials.ts         Client testimonials
  components/
    ui/                   Small reusable primitives (Button, GlassCard, Badge, SectionHeader, SocialIcons)
    layout/                Navbar, Footer
    sections/               One file per page section (Hero, About, Skills, Projects, Experience, Testimonials, Contact)
    ProjectCard.tsx, ExperienceCard.tsx, TestimonialCard.tsx, ContactForm.tsx
public/
  images/                 Placeholder SVGs — swap file contents/paths to use real photos
```

## Customizing content

Everything text-based lives in `src/data/*.ts`. You will not need to touch component files to:

- Change your name, tagline, bio, stats, or contact details -> `data/profile.ts`
- Add/remove/edit skills -> `data/skills.ts`
- Add/remove/edit projects -> `data/projects.ts` (category filter buttons on the Projects section are generated automatically from this file)
- Add/remove/edit experience timeline entries -> `data/experience.ts`
- Add/remove/edit testimonials -> `data/testimonials.ts`
- Change nav links -> `data/nav.ts`

## Replacing your photo

Replace `public/images/profile-placeholder.svg` with your real photo (jpg/png/webp all work). If you use a different filename, update `avatarSrc` in `data/profile.ts` — that's the only place it's referenced.

## Wiring up the contact form

`components/ContactForm.tsx` currently simulates a submit. Point it at a real endpoint by replacing the `handleSubmit` body with a `fetch()` call to your API route, or a service like Formspree/Resend.

## Design tokens

Colors, fonts, and shared effects (glass, glow, gradient text) live in `src/app/globals.css` under `:root` and `@theme inline`. Change a hex value there to re-theme the whole site.
