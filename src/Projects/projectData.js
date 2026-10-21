const projects = [
  {
    slug: "relaysms",
    client: "RelaySMS",
    headline: "Making offline messaging easy to understand and use",
    summary:
      "RelaySMS lets people send messages to online platforms like Gmail and Telegram without an active internet connection, over SMS from their phone. I redesigned how the product explains itself on the web, redesigned the mobile app itself, then carried the same experience over to desktop.",
    role: "Product Designer & Frontend Developer",
    services: ["UI/UX Design", "Web Development"],
    cover: "/RelaySMS/RelaySMS(shape)-Dark Theme.svg",
    links: [
      { label: "Live website", href: "https://relay.smswithoutborders.com/" },
      {
        label: "Download the app",
        href: "https://relay.smswithoutborders.com/download",
      },
      {
        label: "Dashboard",
        href: "https://github.com/smswithoutborders/RelaySMS-Telemetry",
      },
    ],
    context: [
      "The product solves a real problem, but the old product page made people work to understand how sending a message without internet actually happens.",
      "Inside the app, people had to struggle to understand technical concepts like bridges, and too many steps to send a message. ",
    ],
    tracks: [
      {
        title: "Product website",
        summary:
          "Designed and developed the RelaySMS product page, with a clear value proposition up front and a getting-started flow people can scan.",
        points: [
          "Redesigned hero with a clear value proposition and supporting visuals.",
          "Scannable, tiered getting-started sections.",
          "Added valuable pages like contribution guide, resources,and a System Overview page that breaks the RelaySMS ecosystem into digestible visual components.",
        ],
        media: [
          {
            type: "video",
            src: "/Screencast from 2026-09-17 02-45-10.webm",
            caption: "Walkthrough of the redesigned website.",
            wide: true,
          },
        ],
      },
      {
        title: "App redesign",
        summary:
          "Redesigned the RelaySMS mobile app around what people actually do in it: managing their accounts (platforms) easily and sending messages quickly.",
        points: [
          "Clear on-boarding: a clear, visual explanation of how RelaySMS works, removing any extra work, just get in and send a message.",
          "A simplier Compose modal with clear platform selection, no jargon.",
          "Simple account management: add, edit and delete platforms in one place using visual queues people already understand.",
          "Clear bottom navigation: Messages, Platforms, Routing Numbers",
          "Cleaner compose screen with account selection drop down",
        ],
        media: [
          {
            type: "image",
            src: "/RelaySMS/full.svg",
            wide: true,
          },
          {
            type: "image",
            src: "/RelaySMS/accounts-saved.png",
            maxWidth: "50%",
          },
          {
            type: "image",
            src: "/RelaySMS/gmail-accounts.png",
            maxWidth: "50%",
          },
        ],
      },
      {
        title: "Dashboard design and development",
        summary:
          "A clean dashboard for the RelaySMS team to monitor publications, manage platforms and services.",
        points: [
          "Colour-coded status indicators for instant system-health checks.",
          "Time-range selector from 24 hours to custom ranges.",
          "Responsive charts that simplify on mobile without losing meaning.",
          "CRUD for managing platforms and services.",
        ],
        media: [
          {
            type: "image",
            src: "/RelaySMS/Telemetry.png",
            wide: true,
          },
        ],
      },
    ],
    delivered: [
      "A product page that explains the product in seconds.",
      "A redesigned mobile app still maintaining the previous functionality but with a more intuitive flow.",
      "Dashboard that helps the team perform actions faster and monitor the health of the system.",
    ],
  },
  {
    slug: "smswithoutborders",
    client: "SMSWithoutBorders",
    headline: "Website Design and Development.",
    summary:
      "SMSWithoutBorders builds and researches open-source tools, including RelaySMS, that let people communicate offline via SMS when the internet is unavailable or shut down. I designed and built the project’s website, the main place new users, partners, and contributors learn what it is and why it matters.",
    role: "Website Designer & Frontend Developer",
    services: ["Website Design", "UX Research"],
    cover: "/RelaySMS/SWOB-Blue.svg",
    links: [
      {
        label: "Website",
        href: "https://smswithoutborders.com/",
      },
      { label: "GitHub", href: "https://github.com/smswithoutborders" },
    ],
    context: [
      "The previous website had no clear information about the work SMSWithoutBorders does, and no clear way to get involved, access it's products or even use the open source code.",
      "The team had spent time writing cool and very useful code that could be used by others but this information was not out there.",
    ],
    tracks: [
      {
        title: "Website design",
        summary:
          "Clear hero with the project name and what the project does, followed by a scannable list of the products and research the team has built.",
        points: [
          "Clear hero with the project name and what the project does.",
          "List of the products and research the team has built, with links to each.",
          "Research page with a list of the team's publications, and links to the code and data behind them.",
          "Threw in a brand resources page to make it easy for people to use the logo and colours correctly.",
        ],
        media: [
          {
            type: "image",
            src: "/RelaySMS/swob-web.png",
            wide: true,
          },
          {
            type: "image",
            src: "/RelaySMS/swob2.png",
            wide: true,
          },
        ],
      },
    ],
    delivered: ["A clear website for the SMSWithoutBorders project."],
  },
  {
    slug: "afkanerd",
    client: "Afkanerd",
    headline:
      "Brand identity and website for an african team of engineers, researchers and creatives",
    summary:
      "Afkanerd is building open source tools for problems affecting the African continent including SMSWithoutBorders and ShortMesh. I refined the logo and designed the website.",
    role: "Designer & Frontend Developer",
    services: ["Website Design", "UI/UX Design"],
    cover: "/RelaySMS/Afkanerd.svg",
    links: [
      {
        label: "Website",
        href: "https://afkanerd.com/",
      },
      { label: "GitHub", href: "https://github.com/afkanerd" },
    ],
    context: [
      "The goal is a simple website that clearly communicates the Afkanerd brand and the work they do, while also providing a clear path to their projects and open source code and of course a way to reach the team.",
    ],
    tracks: [
      {
        title: "Logo refinement",
        summary:
          "The original logo was grea but could not scale and had color the brand no longer aligned with. I refined the logo to be more scalable and made it monotone, that better represented the brand.",
        media: [
          
          {
            type: "video",
            src: "/RelaySMS/logo-animation.mp4",
            caption: "Refined logo.",
            wide: true,
          },
        ],
      },
      {
        title: "Website design",
        summary:
          "Clear hero with the company name and what the project does, followed by a scannable list of the products and research the team has built.",
        points: [
          "Clear hero with the company name and what the project does.",
          "List of the products and research the team has built, with links to each.",
          "Research page with a list of the team's publications, and links to the code and data behind them.",
          "Threw in a brand resources page to make it easy for people to use the logo and colours correctly.",
        ],
        media: [
          {
            type: "image",
            src: "/RelaySMS/afkanerd-web1.png",
          },
          {
            type: "image",
            src: "/RelaySMS/afkanerd-web2.png",
          },
        ],
      },
    ],
    delivered: ["A clear brand representation for Afkanerd and a website that clearly communicates the work they do."],
  },
  {
    slug: "shortmesh",
    client: "Shortmesh",
    headline: "Keeping a technical product approachable",
    summary:
      "I designed and developed the Authy website, the Authy widget and the Interface API dashboard, so people trying a quick demo and developers integrating the API each get what they need.",
    role: "Product Designer & Frontend Developer",
    services: ["Web Design", "Widget Design", "Developer Dashboard"],
    cover: "/Authy-ShortMesh.png",
    links: [
      { label: "Authy demo", href: "https://authy.shortmesh.com/demo/" },
      {
        label: "Interface API repository",
        href: "https://github.com/shortmesh/Interface-API",
      },
    ],
    context: [
      "The project is highly technical, but the website still needed to feel simple to non-technical users.",
      "It had to serve two audiences at once: people trying a quick demo, and developers integrating the API.",
    ],
    tracks: [
      {
        title: "Authy website",
        summary:
          "Clear messaging and a direct entry point to the demo, so users understand Authy quickly and can try it without heavy onboarding.",
        media: [
          {
            type: "image",
            src: "/shortmesh.png",
            caption: "Authy website.",
            wide: true,
          },
        ],
      },
      {
        title: "Authy widget",
        summary:
          "One interaction model that translates well across web and Android, built for reusable integration.",
        media: [
          {
            type: "image",
            src: "/authy-widget-full.png",
            caption: "Full widget flow.",
          },
          { type: "image", src: "/widget.png", caption: "Focused widget UI.", maxWidth: "50%" },
        ],
      },
      {
        title: "Interface API dashboard",
        summary:
          "A developer-side dashboard that gives integration-focused users and internal teams a clear home for their workflows.",
        media: [
          {
            type: "image",
            src: "/shortmesh-dashboard.png",
            caption: "Interface API dashboard.",
            wide: true,
          },
        ],
      },
    ],
    delivered: [
      "A product website with a clear path to the demo",
      "A reusable Authy widget for web and Android",
      "An Interface API dashboard for developers",
    ],
  },
  {
    slug: "promisefru",
    client: "Promise Fru",
    headline: "A quiet, confident brand for a senior engineer",
    summary:
      "Promise Fru designs cryptographic protocols and the backend systems behind communication tools that have to keep working when the network doesn't. I created the brand identity, the colour scheme, the logo and the website design. Development was handled separately.",
    role: "Brand & Web Designer",
    services: ["Brand Identity", "Logo Design", "Web Design"],
    cover: "/RelaySMS/promise.svg",
    links: [{ label: "Live website", href: "https://promisefru.com" }],
    context: [
      "The work is deeply technical, but the people booking consulting calls are often founders and teams, not protocol specialists. The brand had to signal rigour without feeling cold or intimidating.",
      "It also had to stay out of the way. The writing and the work are the product, so the identity needed to give them room rather than compete with them.",
    ],
    tracks: [
      {
        title: "Colour scheme",
        summary:
          "A restrained palette: soft paper grey and near-black for reading comfort, with one deep teal that carries the brand and keeps it from feeling generic.",
        points: [
          "Teal is used sparingly, for the logo and accent surfaces, so it stays recognisable.",
          "Light and dark surfaces alternate on content cards to add rhythm without adding colour.",
        ],
        media: [
          {
            type: "palette",
            colors: [
              { name: "Deep Teal", hex: "#193A3D", text: "#FFFFFF" },
              { name: "Ink", hex: "#1E1E1E", text: "#FFFFFF" },
              { name: "Paper", hex: "#F3F3F3", text: "#1E1E1E" },
              { name: "White", hex: "#FFFFFF", text: "#1E1E1E" },
            ],
            caption: "The Promise Fru palette.",
            wide: true,
          },
        ],
      },
      {
        title: "Logo",
        summary:
          "A code-bracket mark, </>, drawn with slanted, broken strokes, recognisable to developers at a glance and simple enough to work as an avatar or a small accent on content. And to rigorous eyes, could look like 2 P's back to back, for Promise. ",
        media: [
          {
            type: "logo",
            src: "/promisefru-logo-dark.png",
            caption: "Primary mark on light.",
            bg: "#F3F3F3",
          },
          {
            type: "logo",
            src: "/promisefru-logo-light.png",
            caption: "Reversed mark on Deep Teal.",
            bg: "#193A3D",
          },
        ],
      },
      {
        title: "Website",
        summary:
          "An editorial, type-led site built around a large wordmark, generous whitespace and pill-shaped calls to action, with clear routes to the work, the writing and booking a call.",
        points: [
          "Home: a direct statement of what Promise does and who it's for.",
          "Work: a timeline of roles and projects with links out to code and sites.",
          "Posts: cards that alternate white, ink and teal surfaces.",
          "Book a call: a calendar that shows availability at a glance.",
        ],
        media: [
          {
            type: "image",
            src: "/RelaySMS/promise-web.png",
            caption: "Home.",
          },
          {
            type: "image",
            src: "/promisefru-work.png",
            caption: "Work timeline.",
          },
          { type: "image", src: "/promisefru-posts.png", caption: "Posts." },
          {
            type: "image",
            src: "/promisefru-booking.png",
            caption: "Booking calendar.",
          },
          
        ],
      },
    ],
    delivered: [
      "A brand colour scheme",
      "A logo mark in primary and reversed versions",
      "A full website design: home, about, work, posts and booking",
    ],
  },
];

export default projects;

export const getProject = (slug) => projects.find((p) => p.slug === slug);
