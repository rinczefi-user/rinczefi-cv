import { Resume } from "./types";

// Example Resume data
export const resumeData: Resume = {
  header: {
    name: "John Doe",
    title: "Software Engineer",
    photo: "https://via.placeholder.com/150", // Placeholder photo URL
  },
  summary:
    "Experienced Software Engineer with expertise in React and TypeScript.",
  experiences: [
    {
      title: "Software Engineer",
      company: "Company A",
      duration: "Jan 2021 - Present",
      description:
        "Developed and maintained web applications using React and TypeScript.",
    },
    {
      title: "Frontend Developer",
      company: "Company B",
      duration: "Jun 2018 - Dec 2020",
      description:
        "Worked on user interfaces and experience improvements for web applications.",
    },
  ],
  skills: [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
  ],
  education: [
    {
      degree: "BSc Computer Science",
      institution: "University X",
      duration: "2014 - 2018",
    },
  ],
  contacts: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
};
