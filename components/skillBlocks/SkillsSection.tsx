import { Skills } from "./Skills";
import { ResumeAction } from "@/app/context/ResumeContext";
import { ResumeDocProps } from "@/app/types/resume-data";

import { IconData, iconDictionary } from "@/app/data/iconMap";
import { SectionVisibilityState } from "@/app/types/styles";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";

interface SkillSection {
  globalVariant: string;
  data: ResumeDocProps;
  webEdit?: React.Dispatch<ResumeAction> | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skillStyles: any;
  icons: IconData[];
  visibility: SectionVisibilityState;
}

export const SkillSection = ({
  globalVariant,
  data,
  webEdit,
  skillStyles,
  icons,
  visibility,
}: SkillSection) => {
  const activeSection = data.activeSection;

  return (
    <DynamicDiv
      variant={globalVariant}
      className={`
                hover:bg-gray-100 cursor-pointer transition duration-150 rounded-md
                ${
                  activeSection === "skills"
                    ? "ring-2 ring-blue-400 bg-gray-100"
                    : ""
                }
              `}
      style={skillStyles.skillSection}
      onClick={() => {
        if (webEdit) {
          webEdit({
            type: "SET_ACTIVE_SECTION",
            payload: "skills",
          });
        }
      }}
    >
      {visibility.programmingLanguages.visibility ? (
        <Skills
          globalVariant={globalVariant}
          skillData={data.programmingLanguages}
          title="Programming Languages"
          icon={iconDictionary.skillIcons[0]}
          skillStyle={skillStyles}
          visibility={visibility}
          ratingIcons={icons}
        />
      ) : null}

      {visibility.frameworksLibraries.visibility ? (
        <Skills
          globalVariant={globalVariant}
          skillData={data.frameworksLibraries}
          title="Frameworks / Libraries"
          icon={iconDictionary.skillIcons[1]}
          skillStyle={skillStyles}
          visibility={visibility}
          ratingIcons={icons}
        />
      ) : null}

      {visibility.toolsDatabases.visibility ? (
        <Skills
          globalVariant={globalVariant}
          skillData={data.toolsDatabases}
          title="Tools / Databases"
          icon={iconDictionary.skillIcons[2]}
          skillStyle={skillStyles}
          visibility={visibility}
          ratingIcons={icons}
        />
      ) : null}
    </DynamicDiv>
  );
};
