export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Music", href: "#music" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  linkedin:
    "https://www.linkedin.com/in/mandaakini-raghuraman/",
  email: "mailto:mandaakini@gmail.com",
  github: "https://github.com/mandaakini",
  instagram: "https://www.instagram.com/mandaakini/",
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  stack: string[];
  results: string[];
  palette: string; // tailwind gradient classes
};

export const projects: Project[] = [
  {
    id: "consumer-research-dashboard",
    title: "Consumer Research Dashboard",
    category: "Consumer Analytics",
    description:
      "An interactive dashboard turning raw survey data into a live read on consumer sentiment.",
    longDescription:
      "Built to replace a static quarterly slide deck, this dashboard pulls together survey responses, NPS trends, and open-text feedback into a single interactive view. The goal was speed of insight: instead of waiting on a report, a stakeholder can filter by segment and see how sentiment is actually moving, week over week.",
    stack: ["Tableau", "SQL", "Excel"],
    results: [
      "Cut reporting turnaround from 5 days to same-day",
      "Surfaced 3 previously invisible churn signals",
      "Adopted as the team's weekly standup reference",
    ],
    palette: "from-blush via-cream to-sage",
  },
  {
    id: "market-research-project",
    title: "Market Research Project",
    category: "Market Research",
    description:
      "A segmentation study identifying which customer personas actually drive repeat purchase.",
    longDescription:
      "Designed and fielded a mixed-methods study — a quantitative survey paired with follow-up interviews — to understand why certain customer segments returned and others churned after one purchase. The output was a persona framework the client's marketing team used to reallocate acquisition spend.",
    stack: ["Qualtrics", "Excel", "Statistical Testing"],
    results: [
      "Identified 4 distinct customer personas from 600+ responses",
      "Reallocated recommendation lifted projected retention 12%",
      "Presented findings directly to marketing leadership",
    ],
    palette: "from-sage via-cream to-blush",
  },
  {
    id: "sql-analysis",
    title: "SQL Cohort Analysis",
    category: "Data Analysis",
    description:
      "Cohort and retention analysis written in SQL to find where users actually drop off.",
    longDescription:
      "Wrote a set of cohort retention queries against a multi-table transactional database to map user behavior across their first 90 days. Rather than relying on an aggregate retention number, this broke retention down by acquisition channel and first-week activity, which is where the real story was.",
    stack: ["SQL", "PostgreSQL", "Excel"],
    results: [
      "Pinpointed a single onboarding step causing 40% of early drop-off",
      "Query set adopted into the team's recurring reporting pipeline",
    ],
    palette: "from-cream via-blush to-sage",
  },
  {
    id: "tableau-dashboard",
    title: "Executive KPI Dashboard",
    category: "Data Visualization",
    description:
      "A single-page executive dashboard designed to be read in under 30 seconds.",
    longDescription:
      "Executives don't have time to explore a dashboard — they need the answer on the first screen. This project focused as much on information hierarchy and visual restraint as on the underlying data model, using a strict top-line-metrics-first layout with drill-down available but never required.",
    stack: ["Tableau", "Power BI", "SQL"],
    results: [
      "Reduced exec review meetings from 45 to 20 minutes",
      "Became the standing template for monthly business reviews",
    ],
    palette: "from-blush via-sage to-cream",
  },
  {
    id: "python-analytics",
    title: "Python Churn Model",
    category: "Predictive Analytics",
    description:
      "A logistic regression model predicting which customers are likely to churn next month.",
    longDescription:
      "Built an end-to-end pipeline in Python — cleaning transactional and behavioral data, engineering features like usage recency and support-ticket frequency, and training a logistic regression model to flag at-risk accounts. The focus was on interpretability: the business team needed to understand why a customer was flagged, not just that they were.",
    stack: ["Python", "pandas", "scikit-learn"],
    results: [
      "78% precision identifying at-risk accounts 30 days out",
      "Findings translated into a proactive outreach playbook",
    ],
    palette: "from-sage via-blush to-cream",
  },
  {
    id: "ai-insight-summarizer",
    title: "AI Consumer Insight Summarizer",
    category: "Applied AI",
    description:
      "A tool that reads thousands of open-ended survey responses and returns themed summaries.",
    longDescription:
      "Open-text survey data is where the richest insight lives and the least gets read. This project used an LLM-based pipeline to cluster and summarize thousands of open-ended responses into themed, human-readable summaries with representative quotes, cutting a week of manual coding down to an afternoon of review.",
    stack: ["Python", "OpenAI API", "pandas"],
    results: [
      "Reduced manual response coding time by roughly 85%",
      "Surfaced themes a manual read of a 200-response sample had missed",
    ],
    palette: "from-cream via-sage to-blush",
  },
  {
    id: "product-case-study",
    title: "Onboarding Redesign Case Study",
    category: "Product Strategy",
    description:
      "A feature-prioritization case study rethinking first-time-user onboarding for a streaming app.",
    longDescription:
      "A self-directed case study examining a music-streaming app's first-session experience. Combined usability heuristics, competitive teardown, and a lightweight RICE prioritization framework to propose a redesigned onboarding flow aimed at getting users to their 'first great song' faster.",
    stack: ["Figma", "RICE Framework", "UX Research"],
    results: [
      "Proposed flow projected to cut time-to-first-play by 35%",
      "Framework reused across two subsequent case studies",
    ],
    palette: "from-blush via-cream to-sage-deep",
  },
  {
    id: "music-industry-strategy",
    title: "Music Industry Strategy Project",
    category: "Music Strategy",
    description:
      "An analysis of playlist placement and streaming royalty structures for independent artists.",
    longDescription:
      "Bringing the analytics lens to the music side: this project modeled how playlist placement, release-day timing, and catalog depth interact with streaming royalty structures for independent artists, and proposed a release strategy designed to compound playlist momentum instead of resetting it with every single.",
    stack: ["Excel", "Spotify for Artists Data", "Market Research"],
    results: [
      "Modeled royalty impact across 3 hypothetical release strategies",
      "Framework since used to plan an independent artist's EP rollout",
    ],
    palette: "from-sage-deep via-blush to-cream",
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
};




export const skills = [
  "Analytics",
  "SQL",
  "Python",
  "Tableau",
  "Excel",
  "Power BI",
  "A/B Testing",
  "Market Research",
  "Consumer Insights",
  "Agile",
  "Stakeholder Management",
  "Product Strategy",
  "UX Research",
  "Data Visualization",
]; 
