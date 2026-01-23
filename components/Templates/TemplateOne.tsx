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

import { Experience } from "../experienceBlocks/Experience";
import { experienceStyle } from "@/app/styles/experienceStyles";
import { EditCard } from "../editBlocks/EditCard";
import { SkillSection } from "../skillBlocks/SkillsSection";
import { Education } from "../educationBlocks/Education";
import { Card, CardContent } from "../ui/card";
import { useStyles, useStyleState } from "@/app/context/test";
import { TemplateWrapper } from "./TemplateWrapper";
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

export default function Resume() {
  
  const data = useResumeData();
  const dispatch = useResumeDispatch();
  const styles = useStyles();

  const { heading, experience, skills, education } = styles;

  const { activeTemplate, iconState, sectionVisibility } = useStyleState();

  const activeSection = data.activeSection;
  console.log("ACtive", activeSection);
  return (
    <TemplateWrapper>
      <Heading
        globalVariant="web"
        data={data}
        headingStyle={heading}
        webEdit={dispatch}
        icons={iconState["heading"]}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Experience
          globalVariant="web"
          data={data}
          experienceStyle={experience}
          icons={iconState["experience"]}
        />
        <SkillSection
          globalVariant="web"
          data={data}
          webEdit={dispatch}
          skillStyles={skills}
          visibility={sectionVisibility}
          icons={iconState["skills"]}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Education
          globalVariant="web"
          data={data}
          educationStyles={education}
          icons={iconState["education"]}
        />
      </div>
    </TemplateWrapper>
  );
}
