"use client";
import React from "react";

// import data from "../../data/resumeData.json";

import { Heading } from "../headingBlocks/Heading";
// import { Experience } from "./Experience";
// import { experienceStyle } from "./styles/experienceStyles";
// import { SkillSection } from "./SkillSection";

import {
  useResumeData,
  useResumeDispatch,
} from "../../app/context/ResumeContext";
import { useStyles } from "../../app/context/StyleContext";
import { Experience } from "../experienceBlocks/Experience";
import { experienceStyle } from "@/app/styles/experienceStyles";
import { EditCard } from "../editBlocks/EditCard";
import { SkillSection } from "../skillBlocks/SkillsSection";
import { Education } from "../educationBlocks/Education";
import { Card, CardContent } from "../ui/card";
import { HeadingTwo } from "../headingBlocks/HeadingsTwo";
import { ExperienceTwo } from "../experienceBlocks/ExperienceTwo";
import { SkillSectionTwo } from "../skillBlocks/SkillsSectionTwo";
import { EducationTwo } from "../educationBlocks/EducationTwo";
const docStyle: Record<string, React.CSSProperties> = {
  appContainer: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)",
    boxSizing: "border-box",
    transform: "scale(1.3)", // <-- zoom web preview
    transformOrigin: "top left", // <-- keep layout aligned
    width: `${816}px`, // <-- real Letter width
    height: `${1056}px`, // <-- real Letter height
    zoom: 1, // <-- prevent browser messing with scaling
  },

  page: {
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 16,
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "var(--font-inter)",
    fontWeight: 400,
    color: "#212121",

    // borders
    borderTop: "10px solid #B0BEC5",
    borderBottom: "10px solid #B0BEC5",
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",

    overflow: "hidden",
  },
};

export const ResTemplateTwo = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();
  const {
    headingStyleTwo,
    iconState,
    experienceStyleTwo,
    sectionVisibilityState,
    skillStyleTwo,
    educationStyles,
  } = useStyles();

  const activeSection = data.activeSection;
  console.log(sectionVisibilityState, "!!!")
  return (
    <div className="flex flex-row justify-between ml-10 mr-10">
      <div style={docStyle.appContainer}>
        <div style={docStyle.page}>
          <HeadingTwo
            globalVariant={"web"}
            data={data}
            headingStyle={headingStyleTwo}
            webEdit={dispatch}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ExperienceTwo
              globalVariant="web"
              data={data}
              experienceStyle={experienceStyleTwo}
              icons={iconState["experience"]}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <SkillSectionTwo
              globalVariant="web"
              data={data}
              webEdit={dispatch}
              skillStyles={skillStyleTwo}
              visibility={sectionVisibilityState}
              icons={iconState["skills"]}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <EducationTwo
              globalVariant="web"
              data={data}
              educationStyles={educationStyles}
              icons={iconState["education"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
