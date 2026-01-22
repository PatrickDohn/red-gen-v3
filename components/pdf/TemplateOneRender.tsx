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

import { HeadingTwo } from "../headingBlocks/HeadingsTwo";
import { styles } from "@/app/styles/pdf/pdfDocument";
import { ExperienceTwo } from "../experienceBlocks/ExperienceTwo";
import {
  experienceStyleTwo,
  pdfExperienceStyles,
} from "@/app/styles/pdf/pdfExperience";
import { SkillSectionTwo } from "../skillBlocks/SkillsSectionTwo";
import { pdfSkillStyles, skillStyleTwo } from "@/app/styles/pdf/pdfSkills";
import { EducationTwo } from "../educationBlocks/EducationTwo";
import { educationStyles, educationStylesTwo } from "@/app/styles/pdf/pdfEducation";
import { Heading } from "../headingBlocks/Heading";
import { headingStyle } from "@/app/styles/pdf/pdfHeading";
import { Experience } from "../experienceBlocks/Experience";
import { SkillSection } from "../skillBlocks/SkillsSection";
import { Education } from "../educationBlocks/Education";

interface DocProps {
  data: ResumeDocProps;
  iconState: IconState;
  visibility: SectionVisibilityState;
}

const TemplateOneRender = ({ data, iconState, visibility }: DocProps) => {
  return (
    <Document
      title="Patrick Dohn"
      subject="Python, React, NextJs, TypeScript, JavaScript, Tailwind, Node.js, Full-Stack, Git, Databases"
      author="Patrick Dohn"
      producer="Res-Gen"
    >
      <Page size="LETTER" style={styles.page}>
        <Heading
          globalVariant={"pdf"}
          data={data}
          headingStyle={headingStyle}
          icons={iconState["heading"]}
        />
        <View style={{ flexDirection: "row" }}>
          <Experience
            globalVariant={"pdf"}
            data={data}
            experienceStyle={pdfExperienceStyles}
            icons={iconState["experience"]}
          />
          <SkillSection
            globalVariant={"pdf"}
            data={data}
            skillStyles={pdfSkillStyles}
            icons={iconState["skills"]}
            visibility={visibility}
          />
        </View>
        <Education
          globalVariant={"pdf"}
          data={data}
          educationStyles={educationStyles}
          icons={iconState["education"]}
        />
      </Page>
    </Document>
  );
};

export default TemplateOneRender;
