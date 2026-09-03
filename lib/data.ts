export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Music", href: "#music" },
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
  palette: string;
};

export const projects: Project[] = [
  {
    id: "spotify-listener-insights",
    title: "Spotify Listener Insights",
    category: "Music Analytics",
    description:
      "An analysis of more than 5,000 Spotify tracks exploring how audio features relate to popularity and listener engagement.",
    longDescription:
      "Using Python and pandas, I analyzed more than 5,000 Spotify tracks to explore relationships between audio features and song popularity. I applied statistical analysis, regression, and data visualization to identify potential drivers of listener engagement and translate the findings into clear, interpretable insights.",
    stack: [
      "Python",
      "pandas",
      "Regression",
      "Statistical Analysis",
      "Data Visualization",
    ],
    results: [
      "Analyzed more than 5,000 tracks across audio features and popularity metrics",
      "Used regression and statistical analysis to investigate drivers of listener engagement",
      "Created visualizations that made model findings easier to interpret",
    ],
    palette: "from-rose-mist via-porcelain to-wine/20",
  },
  {
    id: "detecting-fake-yelp-reviews",
    title: "Detecting Fake Yelp Reviews",
    category: "NLP & Machine Learning",
    description:
      "An end-to-end NLP and machine-learning pipeline designed to identify potentially fraudulent five-star reviews.",
    longDescription:
      "I developed an end-to-end machine-learning and NLP pipeline to identify potentially fraudulent Yelp reviews. The project combined sentiment analysis, LDA topic modeling, K-Means clustering, and logistic regression to uncover linguistic patterns and classify suspicious reviews.",
    stack: [
      "Python",
      "NLP",
      "Sentiment Analysis",
      "LDA",
      "K-Means",
      "Logistic Regression",
    ],
    results: [
      "Built a complete pipeline from text analysis through classification",
      "Combined sentiment, topic, and clustering methods to identify review patterns",
      "Achieved 99% model accuracy",
    ],
    palette: "from-bone via-porcelain to-rose-mist",
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
  "SQL",
  "Python",
  "Excel",
  "Tableau",
  "Power BI",
  "AI Agent Development",
  "Data Visualization",
  "Market Research",
  "Consumer Insights",
  "Audience Insights",
  "Quantitative Research",
  "Qualitative Research",
  "Insight Synthesis",
  "Workflow Automation",
  "Business Transformation",
  "Growth Strategy",
  "Process Improvement",
  "Product Strategy",
  "Project Management",
  "Stakeholder Management",
];