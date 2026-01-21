/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResumeDocProps } from "@/app/types/resume-data";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";
import { Typography } from "../dynamicPdfWebComponents/typography/Typography";
import { DynamicIcon } from "../dynamicPdfWebComponents/dynamicIcon/DynamicIcon";

import { IconData, iconDictionary } from "@/app/data/iconMap";
import { useResumeDispatch } from "@/app/context/ResumeContext";

interface EducationProps {
  globalVariant: string;
  data: ResumeDocProps;
  educationStyles: any;
  icons?: IconData[];
}

export const EducationTwo = ({
  globalVariant,
  data,
  educationStyles,
  icons,
}: EducationProps) => {
  const dispatch = useResumeDispatch();
  const activeSection = data.activeSection;

  return (
    <DynamicDiv
      variant={globalVariant}
      style={educationStyles.educationSection}
      className={`
        hover:bg-gray-100 cursor-pointer transition duration-150 rounded-md
        ${
          activeSection === "education"
            ? "ring-2 ring-blue-400 bg-gray-100"
            : ""
        }
      `}
      onClick={() =>
        dispatch?.({
          type: "SET_ACTIVE_SECTION",
          payload: "education",
        })
      }
    >
      <DynamicDiv variant={globalVariant} style={educationStyles.heading}>
        <Typography variant={globalVariant} style={educationStyles.title}>
          EDUCATION
        </Typography>
      </DynamicDiv>
      {data.education.map((item, index) => (
        <DynamicDiv
          key={index}
          variant={globalVariant}
          style={educationStyles.educationContainer}
        >
          <DynamicDiv variant={globalVariant} style={educationStyles.titleRow}>
            <Typography
              variant={globalVariant}
              style={educationStyles.schoolTitleText}
            >
              {item.school}
            </Typography>
          </DynamicDiv>
          <Typography variant={globalVariant} style={educationStyles.text}>
            {item.duration}
          </Typography>
          <DynamicDiv variant={globalVariant} style={educationStyles.aboutRow}>
            <DynamicDiv
              variant={globalVariant}
              style={educationStyles.textBullet}
            />
            <Typography
              variant={globalVariant}
              style={educationStyles.aboutText}
            >
              {item.about}
            </Typography>
          </DynamicDiv>
        </DynamicDiv>
      ))}
    </DynamicDiv>
  );
};
