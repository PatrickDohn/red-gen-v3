import type { Style } from "@react-pdf/types";
import { ExperienceData } from "./resume-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export  function isPdfStyleShape(value: any): value is Style {
    if (typeof value !== "object" || value === null) return false;
    return true
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function isExperience(item: any): item is ExperienceData {
    return (
      item !== null &&
      typeof item === "object" &&
      typeof item.title === "string" &&
      typeof item.company === "string" &&
      Array.isArray(item.duties) // Check nested arrays too!
    );
  }