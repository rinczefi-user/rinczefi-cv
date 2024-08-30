// Interface for an individual experience item
export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

// Interface for an individual skill item
export interface SkillItem {
  name: string;
  level: string; // E.g., Beginner, Intermediate, Advanced
}

// Interface for an individual education item
export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

// Interface for contact information
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

// Interface for the Resume data structure
export interface Resume {
  header: {
    name: string;
    title: string;
    photo: string; // URL to the photo
  };
  summary: string;
  experiences: ExperienceItem[];
  skills: SkillItem[];
  education: EducationItem[];
  contacts: ContactInfo;
}
