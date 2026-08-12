// Central place to edit your identity, hero copy, and contact details.
// Change everything here — no need to touch component files.

export const profile = {
  name: "Danyal",
  fullName: "Danyal Khan",
  role: "MERN Stack & AI Application Developer",
  location: "Karachi, Pakistan",
  availability: "Open for freelance & full-time roles",
  // Paste your deployed Google Apps Script Web App URL here (see google-sheet-script.js).
  // Leave empty until you've deployed the script — the form will just simulate submission until then.
  contactFormEndpoint:
    "https://script.google.com/macros/s/AKfycbyUXKXctKIDsk3xWN3hmpceq3ITPd2XVgsPwj8YoQ8lCuBSI2JFMfQf1ZL9mriZJEXs/exec",

  email: "mdanyalkhan2000@gmail.com",
  phone: "+92 316 9367630",

  heroHeading: "I turn your idea into a live product in 30 days",
  heroSubheading:
    "Full-stack SaaS platforms, real-time dashboards, and business websites — shipped clean, fast, and ready to scale.",
  heroDescription:
    "2.5+ years building SaaS platforms, real-time apps, and business websites for clients across Microsoft 365, MERN, and modern JS stacks. I care about clean architecture, fast interfaces, and shipping things clients can actually rely on.",

  // Real projects shown in the hero trust bar — every name here must be a project you can actually
  // show/link to. Never put a company name here that you haven't done verifiable work for.
  trustedBy: ["Omni Verge Technologies", "BazaarApp", "DME Braces CGM"],

  // This currently scrolls to the contact form — there is no live booking calendar yet, so all
  // copy referencing this link says "message" / "get in touch", not "book a call". If you set up
  // a real Calendly link, swap the URL here AND update the CTA copy in Hero.tsx / Contact.tsx / Navbar.tsx
  // back to "Book a Call" language — until then, keep the copy honest about what actually happens.
  // Once you paste your real Calendly (or Cal.com) link below, every "Book Free 30-Min Call"
  // button across the site will open it directly in a new tab instead of scrolling to the form.
  calendlyUrl: "https://calendly.com/mdanyalkhan2000",
  contactUrl: "#contact",

  stats: [
    { label: "Years experience", value: "2.5+" },
    { label: "Projects shipped", value: "15+" },
    { label: "365 Add-ins built", value: "4" },
    { label: "Stack", value: "MERN" },
  ],

  // Swap this single path to replace your photo everywhere on the site.
  avatarSrc: "/images/danyal-photo.svg",

  // Put your real CV PDF in the public/cv folder with this exact filename
  // (or change the path here to match whatever you name it).
  cvUrl: "/cv/Danyal-Khan-CV.pdf",

  social: {
    github: "https://github.com/Danyalsmit",
    linkedin: "https://linkedin.com/in/danyalkhan20",
    upwork: "https://www.upwork.com/freelancers/~01047f5c5b6d1f572a",
  },
};

export const siteMeta = {
  title: "Danyal Khan — Full Stack MERN Developer",
  description:
    "Danyal Khan is a full-stack MERN & AI application developer building scalable SaaS platforms, real-time apps, and business websites for clients worldwide.",
  url: "https://danyalkhan.dev",
};