export type AudienceType = "companies" | "freelancers" | "local-businesses";

export interface Project {
  id: string;
  title: string;
  category: string;
  number: string;
  liveUrl: string;
  images: {
    col1_1: string;
    col1_2: string;
    col2: string;
  };
  audienceAdaptation: {
    companies: string; // How this project relates to team collaboration & scaling
    freelancers: string; // How this project demonstrates speed and custom design
    "local-businesses": string; // How this project demonstrates business conversion & local reach
  };
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  date: string;
  audienceType: AudienceType;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  audienceFocus: {
    companies: string;
    freelancers: string;
    "local-businesses": string;
  };
}

export interface ExperienceTimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
  audienceType: AudienceType;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  iconName: string;
}
