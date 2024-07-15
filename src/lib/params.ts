import {
  Platform,
  type HomePageParams,
  type SkillPageParams,
  type ResumePageParams,
  type ProjectPageParams,
  type ExperiencePageParams,
  type EducationPageParams,
} from "./types";
import MY_SKILLS from "./skills.params";
import MY_PROJECTS from "./project.params";
import MY_EXPERIENCES from "./experiences.params";
import MY_EDUCATION from "./education.params";
import { Icons } from "./utils";

export const NavBar = {
  home: "Home",
  personal: "Projects",
  career: "Experiences",
  resume: "Resume",
  skills: "Skills",
  Education: "Education",
};

export const HOME: HomePageParams = {
  title: "Home",
  name: "Dipak",
  lastName: "Prajapati",
  description: `Hello! I'm Dipak Prajapati, a Software Engineer with a demonstrated history of 
		working in the information technology and services industry.
		Skilled in Analytical Skills, Java, Full-Stack Development, OpenCV, and 
		Creative Problem Solving. Strong engineering professional with a 
		Bachelor of Engineering focused in Information Technology from the University of Mumbai.`,
  quote: `An asymptote, who strives for knowledge until it reaches the infinity.`,
  author: `~@d1089`,
  links: [
    { platform: Platform.GitHub, link: "https://github.com/d1089" },
    {
      platform: Platform.Linkedin,
      link: "https://www.linkedin.com/in/dpr1729",
    },
    {
      platform: Platform.Email,
      link: "prdpak9@outlook.com",
    },
  ],
};

export const getPlatfromIcon = (platform: Platform): Icons => {
  switch (platform) {
    case Platform.GitHub:
      return Icons.GitHub;
    case Platform.Linkedin:
      return Icons.LinkedIn;
    case Platform.Email:
      return Icons.Email;
    default:
      return Icons.null;
    // case Platform.Location:
    // 	return Icons.Location;
  }
};

export const SKILLS: SkillPageParams = {
  title: "Skills",
  items: MY_SKILLS,
};

export const PROJECTS: ProjectPageParams = {
  title: "Projects",
  items: MY_PROJECTS,
};

export const EXPERIENCES: ExperiencePageParams = {
  title: "Experiences",
  items: MY_EXPERIENCES,
};

export const EDUCATION: EducationPageParams = {
  title: "Education",
  items: MY_EDUCATION,
};

export const RESUME: ResumePageParams = {
  title: "Resumé",
  // item: 'https://drive.google.com/file/d/14y4YZUstHndZBZ2-d9FdgJzTJoW9yieQ/preview'
  item: "https://drive.google.com/file/d/1A-XVArcfyClJxZUMYuufpdtzOmHGPu3V/preview",
};
