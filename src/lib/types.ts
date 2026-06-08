
// Defines the shape of the entire portfolio data structure, based on data.json.

export type PortfolioMetadata = {
  owner: string;
  version: string;
  last_updated: string;
  language: string;
};

export type ProfileContact = {
  linkedin: string;
  github: string;
  medium: string;
  resume_url: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  contact: ProfileContact;
  languages: string[];
};

export type ExecutivePillar = {
  concept: string;
  detail: string;
};

export type ExecutiveSummary = {
  philosophy: string;
  core_pillars: ExecutivePillar[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  src?: string;
  description: string;
  achievements: string[];
  location?: string;
};

export type ConsultingLink = {
  text: string;
  url: string;
};

export type ConsultingRD = {
  engagement: string;
  date: string;
  details: string;
  links?: ConsultingLink[];
};

export type ProjectLink = {
  type: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  year: number;
  category: string;
  description: string;
  src?: string;
  tech_stack: string[];
  links?: ProjectLink[];
  business_impact?: string;
};

export type CaseStudyKPI = {
  label: string;
  before: string;
  after: string;
  impact: string;
};

export type CaseStudySection = {
  title: string;
  content: string;
  list?: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  executive_summary: string;
  paradigm_shift: string;
  kpis: CaseStudyKPI[];
  role_and_ownership: string[];
  challenge: string;
  solution_sections: CaseStudySection[];
  metrics_comparison: {
    metric: string;
    before: string;
    after: string;
    change: string;
  }[];
  takeaways: string[];
};

export type TechnicalArsenal = {
  architectural_patterns: string[];
  data_engineering_and_mlops: string[];
  graph_and_semantic_tech: string[];
  languages_and_frameworks: string[];
  frontend_and_deployment: string[];
};

export type Credential = {
  title: string;
  issuer: string;
  id?: string;
  highlight: string;
  url?: string;
};

export type Certification = {
  category: string;
  credentials: Credential[];
};

export type CommunityLeadership = {
  role: string;
  organization: string;
  period: string;
  details: string;
};

export type Education = {
  institution: string;
  degree: string;
  status: string;
  graduation_date: string;
  highlights?: string[];
};

export type Award = {
  title: string;
  issuer: string;
  year: number | string;
  details: string;
  link?: string;
};

export type BeyondTheCodeInterest = {
  activity: string;
  details: string;
  icon: string;
};

export type BeyondTheCode = {
  description: string;
  interests: BeyondTheCodeInterest[];
};

export type PortfolioData = {
  portfolio_metadata: PortfolioMetadata;
  profile: Profile;
  executive_summary: ExecutiveSummary;
  case_studies: CaseStudy[];
  professional_experience: Experience[];
  independent_consulting_and_rd: ConsultingRD[];
  featured_projects: {
    description: string;
    projects: Project[];
  };
  technical_arsenal: TechnicalArsenal;
  certifications: Certification[];
  community_leadership: CommunityLeadership[];
  education: {
    description: string;
    entries: Education[];
  };
  awards_and_recognitions: Award[];
  beyond_the_code: BeyondTheCode;
};
