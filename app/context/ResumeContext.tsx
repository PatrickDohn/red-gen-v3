"use client";
import {
  ContactInfo,
  ExperienceData,
  ResumeDocProps,
  Skills,
} from "../types/resume-data";
import { createContext, FC, ReactNode, useContext, useReducer } from "react";

import { isExperience } from "../types/guards";

interface HeaderContactInfo {
  name: string;
  title: { value: string; visible: boolean };
  contact: ContactInfo;
}

interface EditSkills {
  section: keyof ResumeDocProps;
  index: number;
  field: string;
  value: string | number | Skills;
}

interface EditJobDuties {
  section: keyof ResumeDocProps;
  index: number;
  dutyIndex: number;
  value: string;
}

interface ExperienceVisibility {
  section: keyof ResumeDocProps;
  index: number;
  value: boolean;
}

interface SetDutyVisibility {
  section: keyof ResumeDocProps;
  index: number;
  dutyIndex: number;
  value: boolean;
}

export type ResumeAction =
  | { type: "ADD_EXPERIENCE"; payload: ExperienceData }
  | { type: "EDIT_DUTY"; payload: EditJobDuties }
  | { type: "EXPERIENCE_VISIBILITY"; payload: ExperienceVisibility }
  | { type: "SET_DUTY_VISIBILITY"; payload: EditJobDuties }
  | { type: "DELETE_DUTY"; payload: EditJobDuties }
  | { type: "DELETE_EXPERIENCE"; payload: ExperienceData }
  | { type: "SET_ACTIVE_SECTION"; payload: string | null }
  | { type: "UPDATE_HEADER"; payload: HeaderContactInfo }
  | { type: "EDIT_SKILLS"; payload: EditSkills }
  | { type: "DELETE_SKILL"; payload: EditSkills }
  | { type: "ADD_SKILL"; payload: { section: keyof ResumeDocProps } };

interface ResumeProviderProps {
  children: ReactNode;
}

const ResumeContext = createContext<ResumeDocProps | null>(null);

const ResumeDispatchContext =
  createContext<React.Dispatch<ResumeAction> | null>(null);

export const ResumeProvider: FC<ResumeProviderProps> = ({ children }) => {
  const [resData, dispatch] = useReducer(resDataReducer, initialData);

  return (
    <ResumeContext value={resData}>
      <ResumeDispatchContext value={dispatch}>{children}</ResumeDispatchContext>
    </ResumeContext>
  );
};

export function useResumeData() {
  const context = useContext(ResumeContext);
  if (context === null) {
    throw new Error("useResumeData must be used within an AuthProvider");
  }
  return context;
}

export function useResumeDispatch() {
  return useContext(ResumeDispatchContext);
}

function resDataReducer(
  resData: ResumeDocProps,
  action: ResumeAction
): ResumeDocProps {
  switch (action.type) {
    case "SET_ACTIVE_SECTION": {
      return {
        ...resData,
        activeSection: action.payload,
      };
    }
    case "ADD_EXPERIENCE": {
      return {
        ...resData,
        experience: [
          ...resData.experience,
          {
            title: action.payload.title,
            company: action.payload.company,
            duration: action.payload.duration,
            duties: action.payload.duties,
            visible: action.payload.visible,
          },
        ],
      };
    }

    case "UPDATE_HEADER": {
      return {
        ...resData,
        name: action.payload.name,
        title: {
          value: action.payload.title.value,
          visible: action.payload.title.visible,
        },
        contact: {
          email: {
            value: action.payload.contact.email.value,
            visible: action.payload.contact.email.visible,
          },
          linkedIn: {
            value: action.payload.contact.linkedIn.value,
            visible: action.payload.contact.linkedIn.visible,
          },
          github: {
            value: action.payload.contact.github.value,
            visible: action.payload.contact.github.visible,
          },
          phone: {
            value: action.payload.contact.phone.value,
            visible: action.payload.contact.phone.visible,
          },
        },
      };
    }

    case "EDIT_SKILLS": {
      const { section, index, field, value } = action.payload;

      const currentSection = resData[section as keyof typeof resData];

      if (!Array.isArray(currentSection)) return resData;

      return {
        ...resData,
        [section]: currentSection.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      };
    }

    case "EDIT_DUTY": {
      const { index, dutyIndex, value } = action.payload;

      const newExperience = [...resData.experience];
      newExperience[index].duties[dutyIndex].content = value;

      return {
        ...resData,
        experience: newExperience,
      };
    }

    case "SET_DUTY_VISIBILITY": {
      const { section, index, dutyIndex, value } = action.payload;

      const currentSection = resData[section as keyof typeof resData];

      if (!Array.isArray(currentSection)) return resData;

      return {
        ...resData,
        [section]: currentSection.map((item, i) => {
          if (i === index && isExperience(item)) {
            return {
              ...item,
              duties: item.duties.map((duty, dIx) => {
                if (dIx === dutyIndex) {
                  return { ...duty, visible: value };
                }
                return duty;
              }),
            };
          }
          return item;
        }),
      };
    }

    case "EXPERIENCE_VISIBILITY": {
      const { section, index, value } = action.payload;

      const currentSection = resData[section as keyof typeof resData];

      if (!Array.isArray(currentSection)) return resData;

      return {
        ...resData,
        [section]: currentSection.map((item, i) => {
          if (i === index && isExperience(item)) {
            return {
              ...item,
              visible: value,
            };
          }
          return item;
        }),
      };
    }

    case "DELETE_DUTY": {
      const { section, index, dutyIndex } = action.payload;
      const currentSection = resData[section as keyof typeof resData];

      if (!Array.isArray(currentSection)) return resData;

      return {
        ...resData,
        [section]: currentSection.map((item, i) => {
          if (i === index && isExperience(item)) {
            return {
              ...item,
              duties: item.duties.filter((_, d) => d !== dutyIndex),
            };
          }
          return item;
        }),
      };
    }

    case "DELETE_SKILL": {
      const { section, index } = action.payload;
      console.log(index);
      const currentSection = resData[section as keyof typeof resData];

      if (!Array.isArray(currentSection)) return resData;

      return {
        ...resData,
        [section]: currentSection.filter((_, i) => i !== index),
      };
    }

    case "ADD_SKILL": {
      const { section } = action.payload;
      const newSkill = { skill: "", rating: 5 }; // Define your default blank structure
      const currentSection = resData[section as keyof typeof resData];
      if (!Array.isArray(currentSection)) return resData;
      return {
        ...resData,
        [section]: [...currentSection, newSkill],
      };
    }

    default:
      return resData;
  }
}

const initialData: ResumeDocProps = {
  name: "PATRICK DOHN",
  title: { value: "SOFTWARE ENGINEER @ VERIZON", visible: true },
  contact: {
    email: { value: "dohnpatrick1993@gmail.com", visible: true },
    linkedIn: { value: "linkedin.com/in/patrick-dohn/", visible: true },
    github: { value: "github.com/PatrickDohn", visible: true },
    phone: { value: "570-555-5555", visible: false },
  },
  experience: [
    {
      title: "Security Engineer III",
      company: "Verizon",
      duration: "2025 - PRESENT",
      duties: [
        {
          content:
            "Generated an executive-level report, using a Python Playwright automation, to audit which data elements (SSNs, credit cards, credentials, etc.) an application exposed, creating a defensible audit trail and clarifying ownership of data-element changes across multiple internal systems.",
          visible: true,
        },
        {
          content:
            "Conducted API security reviews in Apigee, validating data exposure and policy compliance across enterprise APIs.",
          visible: true,
        },
        {
          content:
            "Performed security and legal reviews for 32 RPA/RDA  bots in a month, evaluating documentation, architecture and team demonstrations to validate compliance and ensure compliant production releases.",
          visible: true,
        },
      ],
      visible: true,
    },
    {
      title: "Software Engineer II",
      company: "Verizon",
      duration: "2022 - 2025",
      duties: [
        {
          content:
            "Designed and built a self-service automation feature that enables users to add IP addresses to network ACLs, validate entries, and safely deploy changes, automating 85% of all VLAN requests.",
          visible: true,
        },
        {
          content:
            "Implemented comprehensive unit and integration tests using MSW, React Testing Library, and Playwright to ensure reliability and consistent application behavior.",
          visible: true,
        },
        {
          content:
            "Designed the UI/UX and implemented full-stack UI and API changes for a broadcast announcement feature that enabled system-wide or targeted messaging, improving communication and reducing organizational email fatigue.",
          visible: true,
        },
        {
          content:
            'Developed and deployed API endpoints for creating, updating, deleting, and sharing custom "perspectives," serializing complex third-party data models into JSON and applying validation logic to let users save, name and share any combination of filters, sorting, and view configurations.',
          visible: true,
        },
      ],
      visible: true,
    },
    {
      title: "Software Engineer",
      company: "F1V",
      duration: "2021 - 2022",
      duties: [
        {
          content:
            "Developed and deployed an internal Slack HR management tool that automated the request, approval, and notification workflow. Successfully integrated the application to post real-time events directly to the company calendar, eliminating manual schedule tracking.",
          visible: true,
        },
        {
          content:
            "Developed new features for a clients mobile application with over 10,000 monthly users, enhancing user engagement and functionality.",
          visible: true,
        },
        {
          content:
            "Built and optimized custom components for the company's internal component library, ensuring design and usability across internal applications.",
          visible: true,
        },
      ],
      visible: true,
    },
    {
      title: "Software Engineer Intern",
      company: "F1V",
      duration: "2020 - 2021",
      duties: [
        {
          content: "Worked closely with developers to build new features.",
          visible: true,
        },
        {
          content:
            "Collaborated with the team to troubleshoot problems and debug.",
          visible: true,
        },
        {
          content:
            "Assisted in content management for multiple wordpress websites for clients.",
          visible: true,
        },
      ],
      visible: true,
    },
  ],
  skills: [
    { skill: "NextJs", rating: 4 },
    { skill: "React", rating: 5 },
    { skill: "TypeScript", rating: 6 },
    { skill: "JavaScript", rating: 6 },
    { skill: "Python", rating: 4 },
    { skill: "Git", rating: 3 },
    { skill: "API Architecture", rating: 5 },
    { skill: "Automated Testing", rating: 6 },
    { skill: "Automation", rating: 4 },
    { skill: "SQL", rating: 3 },
    { skill: "Unit Testing", rating: 5 },
    { skill: "Node.js", rating: 6 },
    { skill: "Pandas", rating: 4 },
    
  ],
  professionalSkills: [
    { skill: "Software Development", rating: 6 },
    { skill: "Databases", rating: 3 },
    { skill: "Verbal Communication", rating: 6 },
    { skill: "Written Communication", rating: 4 },
  ],
  programmingLanguages: [
    { skill: "JavaScript", rating: 6 },
    { skill: "TypeScript", rating: 6 },
    { skill: "Python", rating: 4 },
  ],
  frameworksLibraries: [
    { skill: "NextJs", rating: 4 },
    { skill: "React", rating: 5 },
    { skill: "Node.js", rating: 5 },
  ],
  toolsDatabases: [
    { skill: "Git", rating: 5 },
    { skill: "MariaDB", rating: 4 },
    { skill: "Sqlite", rating: 4 },
  ],
  education: [
    {
      school: "General Assembly",
      duration: "2020",
      about:
        "Completed an intensive 600+ hour curriculum focused on modern web development technologies and best practices.",
        
    },
  ],
  activeSection: null,
};
