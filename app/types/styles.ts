

import { faCircle as CircleOutline } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faTimeline,
  faBriefcase,
  faCode,
  faFileLines,
  faArrowCircleRight,
  faAsterisk,
  faCaretRight,
  faCheck,
  faDotCircle,
  faSquare,
  faEnvelope,
  faChevronRight,
  faCircle as CircleFill,
  faBook,
  faDatabase,
  IconDefinition,
  faPhone,
  faStar,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import { experienceStyle, experienceStyleTwo } from "../styles/experienceStyles";
import { skillStyle, skillStyleTwo } from "../styles/skillStyles";
import { headingStyle, headingStyleTwo } from "../styles/headingStyles";
import { educationStyles, educationStylesTwo } from "../styles/educationStyles";
import { IconData } from "../data/iconMap";

interface IconRecord {
  family: string;
  code: string;
  iconObject: IconDefinition;
}

type IconDataType = Record<string, IconRecord>;

const iconMap: Record<string, IconDataType> = {
  brandIcons: {
    github: {
      family: "Font Awesome Brands",
      code: "\u{f09b}",
      iconObject: faGithub,
    },
  },
  skillRatingIcons: {
    circleOutline: {
      code: "\u{f111}",
      family: "Font Awesome Regular",
      iconObject: CircleOutline,
    },
    circleFill: {
      code: "\u{f111}",
      family: "Font Awesome Solid",
      iconObject: CircleFill,
    },
    starFill: {
      code: "\u{f005}",
      family: "Font Awesome Solid",
      iconObject: faStar,
    },
    starOutline: {
      code: "\u{f005}",
      family: "Font Awesome Regular",
      iconObject: faStar,
    },
    circleCheckFill: {
      code: "\u{f058}",
      family: "Font Awesome Regular",
      iconObject: faCircleCheck,
    },
    checkFill: {
      code: "\u{f00c}",
      family: "Font Awesome Regular",
      iconObject: faCheck,
    },
  },
};

export interface IconState {
  [key: string]: IconData[];
}

export const iconState: IconState = {
  heading: [
    {
      id: 1,
      name: "Github",
      family: "Font Awesome Brands",
      code: "\u{f09b}",
      iconObject: faGithub,
    },
    {
      id: 2,
      name: "LinkedIn",
      family: "Font Awesome Brands",
      code: "\u{f08c}",
      iconObject: faLinkedin,
    },
    {
      id: 3,
      name: "Email",
      family: "Font Awesome Regular",
      code: "\u{f0e0}",
      iconObject: faEnvelope,
    },
    {
      id: 4,
      name: "Phone",
      family: "Font Awesome Solid",
      code: "\u{f095}",
      iconObject: faPhone,
    },
  ],
  skills: [
    {
      id: 1,
      name: "circle_fill",
      code: "\u{f111}",
      family: "Font Awesome Solid",
      iconObject: CircleFill,
    },
    {
      id: 2,
      name: "circle_outline",
      code: "\u{f111}",
      family: "Font Awesome Regular",
      iconObject: CircleOutline,
    },
  ],
  experience: [
    {
      id: 1,
      name: "ChevRight",
      family: "Font Awesome Solid",
      code: "\u{f054}",
      iconObject: faChevronRight,
    },
  ],
  education: [
    {
      id: 1,
      name: "ChevRight",
      family: "Font Awesome Solid",
      code: "\u{f054}",
      iconObject: faChevronRight,
    },
  ]
};

export interface SectionVisibilityState {
  [key: string]: {visibility: boolean}
}

export const sectionVisibilityState: SectionVisibilityState = {
  heading: {visibility: true},
  experience: {visibility: true},
  skills: {visibility: false},
  professionalSkills: {visibility: false},
  programmingLanguages: {visibility: true},
  frameworksLibraries:{visibility: true},
  toolsDatabases: {visibility: true}
}

export const initialStyles = {
  experienceStyle,
  experienceStyleTwo,
  skillStyle,
  skillStyleTwo,
  headingStyle,
  headingStyleTwo,
  educationStyles,
  educationStylesTwo,
  iconMap,
  iconState,
  sectionVisibilityState
};

export type StyleState = typeof initialStyles;
