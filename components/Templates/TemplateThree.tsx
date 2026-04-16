"use client";
import React from "react";

import {
  useResumeData,
  useResumeDispatch,
} from "../../app/context/ResumeContext";
// import { useStyles } from "../../app/context/StyleContext";
import { TemplateWrapper } from "./TemplateWrapper";
import { useStyles, useStyleState } from "@/app/context/test";
import { HeadingThree } from "../headingBlocks/HeadingThree";
import { ExperienceThree } from "../experienceBlocks/ExperienceThree";
import { SkillSectionTwo } from "../skillBlocks/SkillsSectionTwo";
import { SkillSectionThree } from "../skillBlocks/SkillsSectionThree";
import { EducationTwo } from "../educationBlocks/EducationTwo";

export const ResTemplateThree = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();

  const styles = useStyles();

  const { heading, experience, skills, education } = styles;

  const { activeTemplate, iconState, sectionVisibility } = useStyleState();

  return (
    <TemplateWrapper>
      <HeadingThree
        globalVariant={"web"}
        data={data}
        headingStyle={heading}
        webEdit={dispatch}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ExperienceThree
          globalVariant="web"
          data={data}
          experienceStyle={experience}
          icons={iconState["experience"]}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SkillSectionThree
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
