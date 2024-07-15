import Assets from "./data/assets";
import type { Education } from "./types";

const MY_EDUCATION: Array<Education> = [
  {
    degree: "Bachelor degree of Engineering in Information Technology",
    description: "",
    location: "Mumbai, India",
    logo: Assets.College,
    name: "",
    organization: "M. H. Saboo Siddik College of Engineering",
    period: { from: new Date(2015, 8, 7), to: new Date(2019, 15, 7) },
    shortDescription: "",
    slug: "dummy-education-item",
    subjects: [
      "C",
      "Algorithm",
      "DBMS",
      "Python",
      "C++",
      "JAVA",
      "DMBI",
      "Automata",
    ],
  },
];

export default MY_EDUCATION;
