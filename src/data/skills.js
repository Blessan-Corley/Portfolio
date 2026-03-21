export const skillsConfig = {
  mainSkills: [
    {
      iconKey: "code",
      title: "Programming & Problem Solving",
      skills: ["Python", "JavaScript", "TypeScript", "Data Structures", "Algorithms", "Problem Solving"],
      color: "#ff6b35"
    },
    {
      iconKey: "monitor",
      title: "Frontend Development",
      skills: ["React", "Next.js 14", "Tailwind CSS", "Zustand", "TanStack Query", "HTML5", "CSS3"],
      color: "#00ff88"
    },
    {
      iconKey: "server",
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "NextAuth", "JWT", "OAuth 2.0", "bcrypt", "Socket.IO"],
      color: "#4ecdc4"
    },
    {
      iconKey: "database",
      title: "Databases & Infrastructure",
      skills: ["MongoDB", "PostgreSQL", "Redis / Upstash", "Docker", "GitHub Actions", "Vercel"],
      color: "#00ffff"
    },
    {
      iconKey: "gitBranch",
      title: "Development Tools",
      skills: ["Git", "GitHub", "Vite", "npm"],
      color: "#8b5cf6"
    },
    {
      iconKey: "cloud",
      title: "Testing & Payments",
      skills: ["Vitest", "Jest", "Playwright", "Stripe", "Firebase"],
      color: "#ffaa00"
    },
  ],
  layout: {
    maxCardsPerRow: 3,
    cardHeight: '400px',
    mobileCardHeight: '350px',
    gap: '20px',
    maxCardWidth: '350px',
  },
  animation: {
    expandRatio: 2.5,
    transitionDuration: 600,
    staggerDelay: 0.08,
  }
};

export const skillUrls = {
  Python: 'https://www.python.org/',
  'Data Structures': 'https://www.geeksforgeeks.org/data-structures/',
  Algorithms: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  TypeScript: 'https://www.typescriptlang.org/',
  'Problem Solving': 'https://www.hackerrank.com/domains/algorithms',
  React: 'https://react.dev/',
  'Next.js': 'https://nextjs.org/',
  'Next.js 14': 'https://nextjs.org/',
  Zustand: 'https://zustand-demo.pmnd.rs/',
  'TanStack Query': 'https://tanstack.com/query/latest',
  HTML5: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  CSS3: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'Node.js': 'https://nodejs.org/',
  'Express.js': 'https://expressjs.com/',
  'REST APIs': 'https://restfulapi.net/',
  NextAuth: 'https://next-auth.js.org/',
  JWT: 'https://jwt.io/',
  'OAuth 2.0': 'https://oauth.net/2/',
  bcrypt: 'https://github.com/kelektiv/node.bcrypt.js',
  'Socket.IO': 'https://socket.io/',
  MongoDB: 'https://www.mongodb.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  'Redis / Upstash': 'https://upstash.com/',
  Docker: 'https://www.docker.com/',
  Vercel: 'https://vercel.com/',
  Redis: 'https://redis.io/',
  Git: 'https://git-scm.com/',
  GitHub: 'https://github.com/',
  Vite: 'https://vitejs.dev/',
  npm: 'https://www.npmjs.com/',
  'GitHub Actions': 'https://github.com/features/actions',
  Vitest: 'https://vitest.dev/',
  Jest: 'https://jestjs.io/',
  Playwright: 'https://playwright.dev/',
  Stripe: 'https://stripe.com/',
  Firebase: 'https://firebase.google.com/'
};
