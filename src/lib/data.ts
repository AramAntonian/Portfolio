export const profile = {
  name: "Aram Antonyan",
  role: "Full-stack Software Engineer",
  address: "Garegin Njdeh 13, Yerevan, Armenia",
  phone: "+37494909351",
  email: "aram.antonian5@gmail.com",
  summary:
    "Full-Stack Software Engineer with 3 years of experience building and maintaining core applications and internal tools for government and enterprise environments. Skilled in designing RESTful APIs, developing single-page and server-rendered applications, and designing and optimizing databases. Adept at translating complex business requirements into reliable, scalable, and maintainable SaaS solutions while collaborating effectively with cross-functional teams.",
  // Put your photo in /public and set the path, e.g. "/profile.jpg".
  // Leave empty to show the placeholder.
  image: "/profile.jpg",
};

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "2", label: "Environments: gov & enterprise" },
  { value: "3", label: "Languages spoken" },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Ministry of Defense of Republic of Armenia",
    period: "Jul 2024 – Jul 2026",
    description:
      "Designed, developed, and maintained core software applications, internal tools, and system utilities. Collaborated with cross-functional teams, system architects, and technical leads to translate functional requirements into software solutions.",
  },
];

export const education = [
  {
    school: "National Polytechnic University of Armenia",
    detail: "Associate Degree, Computer Science",
    period: "Sep 2020 – Jun 2024",
  },
  {
    school: "Yerevan Basic School № 12 Named After Victor Hambardzumyan",
    detail: "Basic education",
    period: "Sep 2011 – Jun 2020",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML/CSS"] },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "PrismaORM", "TypeORM"],
  },
  { group: "Frontend", items: ["React.js", "Next.js", "Redux"] },
  {
    group: "Database",
    items: ["SQL", "NoSQL", "MySQL", "PostgreSQL", "Redis", "MongoDB"],
  },
  { group: "Cloud / DevOps", items: ["AWS", "Docker", "Git"] },
];

export const languages = [{ name: "Armenian" }, { name: "Russian" }, { name: "English" }];
