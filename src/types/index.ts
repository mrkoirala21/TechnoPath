export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  features: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  techStack: string[];
  industries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  keyFeatures: string[];
  benefits: string[];
  targetAudience: string;
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  technoPathSolutions: string[];
  featuredTech: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientSector: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  tags: string[];
  image: string;
}

export interface PartnerBrand {
  name: string;
  category: 'Networking' | 'Compute & Storage' | 'Cloud' | 'Cybersecurity' | 'Surveillance & Voice';
  description: string;
  logoText: string;
  solutionsDelivered: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  subject: string;
  message: string;
}

export interface ClientItem {
  id: string;
  name: string;
  sector: 'Healthcare' | 'Financial & Corporate' | 'Education' | 'Hospitality & Retail' | 'Public Sector';
  location: string;
  deployedSolution: string;
  logoBadge: string;
  highlight: string;
}
