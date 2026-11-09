export const profile = {
  name: 'Muhammad Husnain',
  short: 'Husnain',
  role: 'Software Engineer',
  email: 'muhammad.husnain.dev@gmail.com',
  location: 'Pakistan',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Muhammad-Husnain07' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-husnain-255070248/',
    },
    {
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~011b9122ddb114379a?mp_source=share',
    },
    { label: 'Fiverr', href: 'https://www.fiverr.com/nanii_07' },
  ],
}

export const hero = {
  line: 'I ship full-stack AI products: RAG systems, agent platforms, and the application layer that makes them usable in production.',
  rolePrefix: 'I build',
  roles: ['AI applications', 'RAG pipelines', 'agent platforms', 'full-stack products'],
}

export const marquees = {
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'FastAPI',
    'LangGraph',
    'PostgreSQL',
    'MongoDB',
    'OpenAI',
    'RAG',
    'AI Agents',
  ],
  cta: [
    'Full-stack AI builds',
    'Hire on Fiverr',
    'Available on Upwork',
    'RAG & agents',
    'Production systems',
  ],
}

export const services = [
  {
    title: 'Full-stack AI applications',
    body: 'End-to-end products with React/Next.js frontends, Node or Python APIs, auth, data models, and LLM features wired for real users, not demos.',
  },
  {
    title: 'RAG & retrieval systems',
    body: 'Document ingestion, chunking, embeddings, vector search, and grounded Q&A with FastAPI/Node backends plus production auth, rate limits, and monitoring.',
  },
  {
    title: 'Agent platforms & workflows',
    body: 'Tool-calling agents, approval gates, structured planning, and orchestration that plugs into APIs, databases, and existing product flows.',
  },
  {
    title: 'Client websites & product UI',
    body: 'Business sites, landing pages, ecommerce, WordPress/WooCommerce when needed, plus React/Next.js apps with SEO, speed work, migrations, and ongoing fixes.',
  },
]

export const projects = [
  {
    id: 'nexus-agent',
    index: '01',
    title: 'Nexus Agent',
    tag: 'AI · Agents',
    year: '2025',
    outcome: 'Open-source agent orchestration with plan, execute, and observe loops',
    text: 'FastAPI + LangGraph backend with React 19 frontend. Deterministic multi-node workflow compiler, tool registry, human approvals, pgvector memory, Redis, and streaming observability.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'PostgreSQL', 'Redis'],
    href: 'https://github.com/Muhammad-Husnain07/Nexus-Agent',
    tone: 'blue',
  },
  {
    id: 'seedforge',
    index: '02',
    title: 'SeedForge',
    tag: 'Platform · DX',
    year: '2025',
    outcome: 'Deterministic multi-database seeding with schema introspection',
    text: 'TypeScript monorepo that introspects Postgres, MySQL, SQLite, and MongoDB, builds relationship graphs, and streams realistic seed data. Includes CLI, studio dashboard, plugins, and LLM-assisted config suggestions.',
    stack: ['TypeScript', 'Node.js', 'Postgres', 'MongoDB', 'Fastify', 'React'],
    href: 'https://github.com/Muhammad-Husnain07/SeedForge',
    tone: 'red',
  },
  {
    id: 'rag-ai-system',
    index: '03',
    title: 'RAG AI System',
    tag: 'AI · RAG',
    year: '2025',
    outcome: 'Document Q&A with multi-provider LLMs and vector stores',
    text: 'Production RAG stack with FastAPI and React. PDF/DOCX ingestion, embeddings, Pinecone/Chroma/Weaviate, JWT auth, analytics, webhooks, and admin controls.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'OpenAI', 'Pinecone'],
    href: 'https://github.com/Muhammad-Husnain07/rag-ai-system',
    tone: 'green',
  },
  {
    id: 'autonomous-github-agent',
    index: '04',
    title: 'Autonomous GitHub Agent',
    tag: 'AI · Automation',
    year: '2025',
    outcome: 'Self-running agent that plans, codes, and validates full-stack work',
    text: 'Python agent on GitHub Actions that creates repos, commits features incrementally, validates output, and self-heals across React, Next.js, Node, and Python projects.',
    stack: ['Python', 'OpenRouter', 'GitHub Actions', 'LLMs'],
    href: 'https://github.com/Muhammad-Husnain07/Autonomous-GitHub-Agent',
    tone: 'gold',
  },
]

export const credentials = {
  lead: 'Client delivery and open source, side by side.',
  items: [
    {
      platform: 'Fiverr',
      meta: 'nanii_07 · 4.9 rating · 44+ reviews · ~1h response',
      href: 'https://www.fiverr.com/nanii_07',
    },
    {
      platform: 'Upwork',
      meta: 'Full-stack AI apps, RAG, and product UI',
      href: 'https://www.upwork.com/freelancers/~011b9122ddb114379a?mp_source=share',
    },
    {
      platform: 'GitHub',
      meta: 'Agents, RAG systems, and developer tooling',
      href: 'https://github.com/Muhammad-Husnain07',
    },
  ],
}

export const manifesto = {
  outline: 'AI that ships.',
  body: 'Models only matter when the product around them is solid: retrieval that returns the right context, agents with guardrails, APIs that stay stable, and UIs operators can trust under load.',
}

export const process = [
  {
    step: '01',
    title: 'Scope where AI belongs',
    body: 'Separate demo prompts from product requirements. Define data sources, failure modes, cost limits, and what correct looks like before wiring a model.',
  },
  {
    step: '02',
    title: 'Build the full stack',
    body: 'Ship the interface, API, storage, and AI path together. Auth, evaluation hooks, and observability included so the feature can leave staging.',
  },
  {
    step: '03',
    title: 'Harden for production',
    body: 'Rate limits, structured outputs, logging, tests where they pay rent, and a handoff another engineer can run without tribal knowledge.',
  },
]

export const experience = [
  {
    year: 'Now',
    role: 'Software Engineer',
    place: 'Fiverr · Upwork · Independent',
    detail:
      'Delivering full-stack AI applications, RAG systems, agent platforms, and client websites worldwide. On Fiverr as nanii_07 with a 4.9 rating across 44+ reviews and ~1 hour average response time.',
  },
  {
    year: '2023',
    role: 'Software Engineer',
    place: 'Timestream Group',
    detail:
      'Worked on reconSTREAM, a financial reconciliation and settlement platform for an international fintech company headquartered in Dubai. Built product interfaces and features for automated matching workflows, exception handling, settlement views, and operational reporting across banking and payments data.',
  },
  {
    year: '2022',
    role: 'Freelance Developer',
    place: 'Fiverr · Client work',
    detail:
      'Started freelancing on Fiverr and taking client projects: websites, WordPress/WooCommerce, UI builds, fixes, and early full-stack delivery while studying software engineering.',
  },
  {
    year: '2021',
    role: 'Bachelor in Software Engineering',
    place: 'Started degree',
    detail:
      'Began undergraduate studies in software engineering, building foundations in programming, web development, databases, and software design that still shape how I ship products today.',
  },
]

export const about = {
  lead: 'Software engineer shipping AI products.',
  body: 'I design and implement full-stack AI applications: Next.js and Node/Python backends, RAG pipelines, agent platforms, and AI-assisted coding systems. At Timestream Group I worked on reconSTREAM, a reconciliation fintech product for international banking and payments. Through Fiverr and Upwork I also ship business websites, ecommerce, WordPress/WooCommerce builds, migrations, and performance work for clients worldwide. Stack covers React, Next.js, Node, Express, Python, Django, MySQL, MongoDB, and PostgreSQL.',
}
