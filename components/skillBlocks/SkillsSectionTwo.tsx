import { Skills } from "./Skills";
import { ResumeAction } from "@/app/context/ResumeContext";
import { ResumeDocProps } from "@/app/types/resume-data";

import { IconData, iconDictionary } from "@/app/data/iconMap";
import { SectionVisibilityState } from "@/app/types/styles";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";
import { SkillsTwo } from "./SkillsTwo";

interface SkillSection {
  globalVariant: string;
  data: ResumeDocProps;
  webEdit?: React.Dispatch<ResumeAction> | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skillStyles: any;
  icons?: IconData[];
  visibility?: SectionVisibilityState;
}

export const SkillSectionTwo = ({
  globalVariant,
  data,
  webEdit,
  skillStyles,
  icons,
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
      <SkillsTwo
        globalVariant={globalVariant}
        skillData={data.skills}
        title="Skills"
        icon={iconDictionary.skillIcons[0]}
        skillStyle={skillStyles}
        ratingIcons={icons}
      />
    </DynamicDiv>
  );
};
