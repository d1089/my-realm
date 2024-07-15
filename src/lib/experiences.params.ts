import Assets from "./data/assets";
import { getSkills } from "./skills.params";
import { ContractType, type Experience } from "./types";

const MY_EXPERIENCES: Array<Experience> = [
  {
    slug: "Reliance-Jio",
    company: "JPL",
    description: [
      `• Jio NetSensor:`,
      `•Contributed in the design documentation and architecture for the Jio NetSensor SaaS product,
currently available in the market.`,
      `•Orchestrated the end-to-end onboarding journey for B2B clients, ensuring a seamless and
efficient process.`,
      `•Worked on implementing Backend APIs (NodeJS) for log propagation and its visualization on
monitoring dashboard using ReactJS and Spring Boot.`,
      `•Implemented MFA feature for secure authentication using TOTP (something you have).`,
      `Jio PhishAware :`,
      `•Led the development of the Analytics Dashboard for Jio PhishAware, contributing to enhanced
data visualization and actionable insights (Golang).`,
      `Conducted reverse engineering analyses on competing products in the market, providing critical intelligence for product optimization.`,
      `•Implemented feature for generating customized phishing mail templates with success rate of
90% people getting phished and provided insightful reports with respect to individual verticals in
the organization.`,
    ],
    contract: ContractType.FullTime,
    type: "Software Development",
    location: "Navi Mumbai",
    period: { from: new Date(2022, 8, 29) },
    skills: getSkills("java", "ts", "reactjs", "spring-boot"),
    name: "Software Development Engineer",
    color: "#ffffff",
    links: [],
    logo: Assets.Jio,
    shortDescription: "",
  },
  {
    slug: "Salam",
    company: "Wipro - Salam",
    description: [
      `• Created a Scheduler as a Service application in Golang to replace theDelayed Jobs(which was used as a scheduler for 77 percent of delayed invocation in backend app for BYJUS Learning App ) implementations for Ruby on Rails Backend service. That reduced the overalllatency and reduced 5xx Errors by 90 percent.`,
    ],
    contract: ContractType.FullTime,
    type: "Software Development",
    location: "Pune",
    period: { from: new Date(2022, 5, 1), to: new Date(2022, 6, 23) },
    skills: getSkills("java", "selenium"),
    name: "Automation QA Engineer",
    color: "#ffffff",
    links: [],
    logo: Assets.Wipro,
    shortDescription: "",
  },
  {
    slug: "ITC",
    company: "ITC",
    description: [
      "• Integrated a new Payment Method for Toppr CRM (in Django) provided by Ingenico payments as custom EMIs ( via. Standing Instructions) and also regular payment methods which supported 50 percentof total orders.",
      `• Worked on Bulk Order tool for placing orders in bulk, created a Queuesystem using AWS SQS for implementation of the feature. `,
    ],
    contract: ContractType.FullTime,
    type: "Software Development",
    location: "Home",
    period: { from: new Date(2021, 5, 14), to: new Date(2022, 5, 1) },
    skills: getSkills("python", "django", "postgres"),
    name: "Software Engineer",
    color: "#ffffff",
    links: [],
    logo: Assets.Wipro,
    shortDescription: "",
  },
];

export default MY_EXPERIENCES;
