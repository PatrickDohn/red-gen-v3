"use client";
import React from "react";

import {
  useResumeData,
  useResumeDispatch,
} from "../../app/context/ResumeContext";
// import { useStyles } from "../../app/context/StyleContext";
import { HeadingTwo } from "../headingBlocks/HeadingsTwo";
import { ExperienceTwo } from "../experienceBlocks/ExperienceTwo";
import { SkillSectionTwo } from "../skillBlocks/SkillsSectionTwo";
import { EducationTwo } from "../educationBlocks/EducationTwo";
import { TemplateWrapper } from "./TemplateWrapper";
import { useStyles, useStyleState } from "@/app/context/test";

export const ResTemplateTwo = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();

  const styles = useStyles();

  const { 
    heading, 
    experience, 
    skills, 
    education,
  } = styles;

  const { activeTemplate, iconState, sectionVisibility } = useStyleState();

  return (
    <TemplateWrapper>
      <HeadingTwo
        globalVariant={"web"}
        data={data}
        headingStyle={heading}
        webEdit={dispatch}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ExperienceTwo
          globalVariant="web"
          data={data}
          experienceStyle={experience}
          icons={iconState["experience"]}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SkillSectionTwo
          globalVariant="web"
          data={data}
          webEdit={dispatch}
          skillStyles={skills}
          visibility={sectionVisibility}
          icons={iconState["skills"]}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <EducationTwo
          globalVariant="web"
          data={data}
          educationStyles={education}
          icons={iconState["education"]}
        />
      </div>
    </TemplateWrapper>
  );
};
