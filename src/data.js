export const profile = {
  name: 'Arun Shinde',
  contact: [
    { icon: 'briefcase', label: 'Tata Consultancy Services', brand: 'tcs' },
    { icon: 'mail', label: 'arunshinde239@gmail.com', href: 'mailto:arunshinde239@gmail.com' },
    { icon: 'pin', label: 'Mumbai, India' },
  ],
}

export const about = [
  "I'm a results-driven Senior Software Developer with 5+ years of experience in fintech and banking software development, specialising in Core Java, Spring Boot, and scalable backend systems.",
  "At Tata Consultancy Services I'm working on a large-scale technology transformation for one of India's prestigious educational institutions — automating faculty recruitment workflows with jBPM and Drools, and championing Test-Driven Development. Previously at Oracle, I built and ran core banking modules that serve 27M+ internet banking users, spanning payments, deposits, trade finance, loans, and real-time fraud screening.",
]

export const socials = [
  { name: 'GitHub',   href: 'https://github.com/ArunReaper' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arun-shinde-dev' },
]

export const education = [
  {
    title: 'B.E. Electronics and Telecommunication Engineering',
    org: 'Dwarkadas J. Sanghvi College of Engineering, Mumbai University',
    date: '2017 – 2020',
    detail: 'CGPA: 9.15/10',
  },
  {
    title: 'Diploma in Industrial Electronics',
    org: 'Bhausaheb Vartak Polytechnic, MSBTE',
    date: '2014 – 2017',
    detail: 'Grade: 90.57%',
  },
]

export const experience = [
  {
    title: 'Senior Software Developer',
    org: 'Tata Consultancy Services (TCS) | Mumbai, India',
    date: 'January 2026 – Present',
    bullets: [
      "Working on a large-scale technology transformation initiative for one of India's prestigious educational institutions.",
      'Designed and implemented an automated workflow management application for faculty recruitment using jBPM workflow with a Drools based rule engine, reducing manual processing time by 60%.',
      "Adopted a Test-Driven Development (TDD) approach, writing unit tests with JUnit and Mockito and enforcing code quality standards using JaCoCo and SonarQube.",
    ],
  },
  {
    title: 'Staff Consultant',
    org: 'Oracle | Mumbai, India',
    date: 'September 2022 – December 2025',
    bullets: [
      'Led development of core banking modules such as payments, deposits, trade finance, and loans using a Domain-Driven Design (DDD) approach, supporting 27M+ internet banking users across scalable, high-availability systems.',
      'Built and maintained real-time fraud screening and risk management modules, integrating third-party APIs (Visa, Mastercard, NPCI) for secure debit card tokenisation and transaction monitoring, directly reducing fraud exposure.',
      'Developed an AI-powered backend code generation tool, increasing developer productivity by 15% across teams.',
    ],
  },
  {
    title: 'Associate Consultant',
    org: 'Oracle | Mumbai, India',
    date: 'October 2020 – September 2022',
    bullets: [
      'Developed and maintained critical banking modules by implementing new features, fixing defects, and supporting UAT cycles to ensure stable deployments, while also integrating biometric login functionality using OAuth 2.0 and OpenID Connect to enhance authentication security for digital banking users.',
      "Recognised with Oracle's Rising Star Award (2021) for rapid learning ability and strong problem-solving skills.",
    ],
  },
]

export const projects = [
  {
    title: 'AI-Powered Legacy Application Modernisation',
    github: 'https://github.com/ArunReaper/Employee_Managment_App/tree/modernization/employee-app',
    description:
      'An AI-assisted code modernisation project leveraging Claude Code\'s modernisation plugin to analyse, understand, and transform a legacy Java EE application built with JSP and Servlets into a modern Spring Boot and React architecture.',
    bullets: [
      'Leveraged Claude Code to analyse legacy codebases and understand existing application architecture and business logic.',
      'Used AI-assisted modernisation workflows to transform legacy JSP and Servlet components into Spring Boot REST APIs and React components.',
      'Accelerated legacy code migration while preserving existing business functionality and application workflows.',
      'Explored AI-driven code analysis, transformation, and modernisation of legacy enterprise applications.',
    ],
    stack: ['Spring Boot', 'Java 21', 'Spring JDBC', 'PostgreSQL', 'React 18', 'Vite', 'React Router 6', 'Vitest', 'Maven'],
  },
]

export const skills = [
  {
    label: 'Languages',
    items: [
      { name: 'Core Java', logo: 'openjdk' },
      { name: 'Python', logo: 'python' },
      { name: 'JavaScript', logo: 'javascript' },
    ],
  },
  {
    label: 'Frameworks & Architecture',
    items: [
      { name: 'Spring Boot', logo: 'springboot' },
      { name: 'Microservices', logo: 'kubernetes' },
      { name: 'Domain-Driven Design', logo: 'uml' },
      { name: 'REST / SOAP', logo: 'postman' },
      { name: 'OAuth 2.0', logo: 'openid' },
    ],
  },
  {
    label: 'Databases & ORM',
    items: [
      { name: 'Oracle DB', logo: 'mysql' },
      { name: 'SQL', logo: 'sqlite' },
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'Hibernate', logo: 'hibernate' },
      { name: 'EclipseLink', logo: 'eclipseide' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Linux / Unix', logo: 'linux' },
      { name: 'GitHub', logo: 'github' },
      { name: 'GitLab', logo: 'gitlab' },
      { name: 'Docker', logo: 'docker' },
      { name: 'Gradle', logo: 'gradle' },
      { name: 'Maven', logo: 'apachemaven' },
      { name: 'CI/CD', logo: 'jenkins' },
      { name: 'jBPM', logo: 'camunda' },
      { name: 'Drools', logo: 'redhat' },
      { name: 'OpenAPI', logo: 'openapiinitiative' },
    ],
  },
  {
    label: 'Testing & Quality',
    items: [
      { name: 'JUnit', logo: 'junit5' },
      { name: 'Mockito', logo: 'testinglibrary' },
      { name: 'JaCoCo', logo: 'codecov' },
      { name: 'SonarQube', logo: 'sonarqube' },
      { name: 'TDD', logo: 'jest' },
    ],
  },
  {
    label: 'Domain Expertise',
    items: [
      { name: 'BFSI', logo: 'axisbank' },
      { name: 'Core Banking', logo: 'hdfcbank' },
      { name: 'Payments', logo: 'contactlesspayment' },
      { name: 'Fraud Detection & Risk', logo: 'securityscorecard' },
      { name: 'Trade Finance', logo: 'tradingview' },
      { name: 'Agile / Scrum', logo: 'trello' },
    ],
  },
]

export const oss = {
  intro: [],
  items: [],
}

export const certifications = [
  {
    id: 'oci-generative-ai',
    category: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    level: 'Professional',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9DB1763C98AA7514FD8DCFC17074B8E4E9E63684B13F6CB1DC13C1E7D48FE303',
  },
  {
    id: 'oci-ai-foundations',
    category: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    level: 'Associate',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F87BED9F428E8F8D22DC7C50DA5FF45D4C12FA621C5D9D93B8BE27277FCDE5CF',
  },
  {
    id: 'claude-certified-associate',
    category: 'Anthropic',
    title: 'Claude Certified Associate',
    level: 'Associate',
    link: 'https://www.credly.com/badges/63b5af36-955b-44e0-8a41-e183f7ee09ea',
  },
  {
    id: 'java-se-8',
    category: 'Oracle',
    title: 'Java SE 8 Programming - Oracle Certified Associate',
    level: 'Associate',
    link: 'https://www.oracle.com/java/technologies/javase/java8-jsp.html',
  },
  {
    id: 'aws-cloud-practitioner',
    category: 'Amazon Web Services',
    title: 'AWS Certified Cloud Practitioner',
    level: 'Foundational',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
]


export const languages = [
  {
    id: 'ielts-academic',
    title: 'IELTS Academic',
    level: 'C1 (Advanced)',
    provider: 'British Council',
    date: 'August 2026',
    testDate: 'August 2026',
  },
]

export const extracurricular = []

export const references = {
  note: 'Available upon request.',
}
