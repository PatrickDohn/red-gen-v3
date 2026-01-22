"use client";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

// import { headingStyles } from "@/lib/styleSections/headingStylesheet";

import { ResumeDocProps } from "@/app/types/resume-data";
import { IconState, SectionVisibilityState } from "@/app/types/styles";
import { headingStyleTwo } from "@/app/styles/pdf/pdfHeading";
import { HeadingTwo } from "../headingBlocks/HeadingsTwo";
import { stylesTwo } from "@/app/styles/pdf/pdfDocument";
import { ExperienceTwo } from "../experienceBlocks/ExperienceTwo";
import { experienceStyleTwo } from "@/app/styles/pdf/pdfExperience";
import { SkillSectionTwo } from "../skillBlocks/SkillsSectionTwo";
import { skillStyleTwo } from "@/app/styles/pdf/pdfSkills";
import { EducationTwo } from "../educationBlocks/EducationTwo";
import { educationStylesTwo } from "@/app/styles/pdf/pdfEducation";


interface DocProps {
  data: ResumeDocProps;
  iconState: IconState;
  visibility: SectionVisibilityState;
}

const TemplateTwoRender = ({ data, iconState, visibility }: DocProps) => {
  
  return (
    <Document
      title="Patrick Dohn"
      subject="Python, React, NextJs, TypeScript, JavaScript, Tailwind, Node.js, Full-Stack, Git, Databases"
      author="Patrick Dohn"
      producer="Res-Gen"
    >
      <Page size="LETTER" style={stylesTwo.page}>
        <HeadingTwo
          globalVariant={"pdf"}
          data={data}
          headingStyle={headingStyleTwo}
        />
        <ExperienceTwo
          globalVariant={"pdf"}
          data={data}
          experienceStyle={experienceStyleTwo}
        />
        <SkillSectionTwo
          globalVariant="pdf"
          data={data}
          skillStyles={skillStyleTwo}
        />
        <EducationTwo
          globalVariant={"pdf"}
          data={data}
          educationStyles={educationStylesTwo}
        />
      </Page>
    </Document>
  );
};

export default TemplateTwoRender;
