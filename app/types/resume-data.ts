export type DutyItem = {
    content: string;
    visible: boolean
   }
   
   export type ExperienceData = {
      title: string;
      company: string;
      duration: string;
      duties: DutyItem[];
      visible: boolean;
    };
    
    type EducationData = {
      school: string;
      duration: number;
      about: string;
    };
    
    export type ContactInfo = {
      email: {value: string, visible: boolean};
      phone: {value: string, visible: boolean};
      linkedIn: {value: string, visible: boolean};
      github: {value: string, visible: boolean};
    };
    
    export type Skills = {
      skill: string;
      rating: number;
    };
  
    export type ProSkills = {
      skill: string;
      rating: number
    }
    
    // Define the shape of the object passed directly to the component
    export interface ResumeDocumentProps {
      data: {
        // The component now ONLY accepts one prop called 'data'
        name: string;
        title: string;
        contact: ContactInfo;
        experience: ExperienceData[];
        skills: Skills[];
        frameworksLibraries: Skills[],
        programmingLanguages:Skills[],
        toolsDatabases: Skills[]
        professionalSkills: ProSkills[]
        education: EducationData[];
      },
      editing?: {
        border: string;
        borderColor: string;
      }
    }
  
    export interface ResumeDocProps {
      name: string;
      title: {value: string, visible: boolean};
      contact: ContactInfo;
      experience: ExperienceData[];
      skills: Skills[];
      frameworksLibraries: Skills[];
      programmingLanguages: Skills[];
      toolsDatabases: Skills[];
      professionalSkills: ProSkills[];
      education: EducationData[];
      activeSection: string | null
    }