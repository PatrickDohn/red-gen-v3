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
    faGraduationCap,
  } from "@fortawesome/free-solid-svg-icons";
  
  import { faCircle as CircleOutline } from "@fortawesome/free-regular-svg-icons";
  
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
  
  export type IconData = {
    id: number;
    name: string;
    family: string;
    code: string;
    iconObject: IconDefinition;
  };
  
  export const iconDictionary = {
    brandIcons: [
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
        iconObject: faPhone
      }
    ],
    bulletPointIcons: [
      {
        id: 1,
        name: "Check Mark",
        family: "Font Awesome Solid",
        code: "\u{f00c}",
        iconObject: faCheck,
      },
      {
        id: 2,
        name: "Arrow Circle Right",
        family: "Font Awesome Solid",
        code: "\u{f0a9}",
        iconObject: faArrowCircleRight,
      },
      {
        id: 3,
        name: "Asterisk (Star)",
        family: "Font Awesome Solid",
        code: "\u{f069}",
        iconObject: faAsterisk,
      },
      {
        id: 4,
        name: "Caret Right",
        family: "Font Awesome Solid",
        code: "\u{f0da}",
        iconObject: faCaretRight,
      },
      {
        id: 5,
        name: "Square",
        family: "Font Awesome Solid",
        code: "\u{f0c8}",
        iconObject: faSquare,
      },
      {
        id: 6,
        name: "Circle Dot",
        family: "Font Awesome Solid",
        code: "\u{f192}",
        iconObject: faDotCircle,
      },
      {
        id: 7,
        name: "ChevRight",
        family: "Font Awesome Solid",
        code: "\u{f054}",
        iconObject: faChevronRight,
      },
    ],
    experience: [
      {
        id: 1,
        name: "Briecase",
        family: "Font Awesome Solid",
        code: "\u{f0b1}",
        iconObject: faBriefcase,
      },
    ],
    skillIcons: [
      {
        id: 1, 
        name: "Code",
        family: "Font Awesome Solid",
        code: "\u{f121}",
        iconObject: faCode
      },
      {
        id: 2, 
        name: "Book",
        family: "Font Awesome Solid",
        code: "\u{f02d}",
        iconObject: faBook
      },
      {
        id: 3, 
        name: "Database",
        family: "Font Awesome Solid",
        code: "\u{f1c0}",
        iconObject: faDatabase
      },
    ],
    skillRatings: [
      {
        id: 1, 
        name: "circle_fill",
        code: "\u{f111}",
        family: "Font Awesome Solid",
        iconObject: CircleFill
      },
      {
        id: 2, 
        name: "circle_outline",
        code: "\u{f111}",
        family: "Font Awesome Regular",
        iconObject: CircleOutline
      },
      {
        id: 3, 
        name: "star_fill",
        code: "\u{f005}",
        family: "Font Awesome Solid",
        iconObject: faStar
      },
      {
        id: 4, 
        name: "star_outline",
        code: "\u{f005}",
        family: "Font Awesome Regular",
        iconObject: faStar
      },
      {
        id: 5, 
        name: "circle_check_fill",
        code: "\u{f058}",
        family: "Font Awesome Regular",
        iconObject: faCircleCheck
      },
      {
        id: 6, 
        name: "check_fill",
        code: "\u{f00c}",
        family: "Font Awesome Regular",
        iconObject: faCheck
      },
    ],
    education: [
      {
        id: 1,
        name: "graduation_cap",
        code: "\u{f19d}",
        family: "Font Awesome Solid",
        iconObject: faGraduationCap
      }
    ]
  };
  