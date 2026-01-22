"use client";

import { ResumeAction } from "@/app/context/ResumeContext";
import { toTitleCase } from "@/lib/utils";
import { IconData } from "@/app/data/iconMap";
import { Typography } from "../dynamicPdfWebComponents/typography/Typography";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";
import { ResumeDocProps } from "@/app/types/resume-data";
import { DynamicIcon } from "../dynamicPdfWebComponents/dynamicIcon/DynamicIcon";
import { DynamicLink } from "../dynamicPdfWebComponents/dynamicLink/DynamicLink";

interface HeadingProps {
  globalVariant: string;
  data: ResumeDocProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingStyle: any;
  webEdit?: React.Dispatch<ResumeAction> | null;
}

export const HeadingTwo = ({
  globalVariant,
  data,
  headingStyle,
  webEdit,
}: HeadingProps) => {
  const activeSection = data.activeSection;
  return (
    <DynamicDiv
      variant={globalVariant}
      id="heading"
      className={`
            hover:bg-gray-100 cursor-pointer transition duration-150 rounded-md
            ${
              activeSection === "heading"
                ? "ring-2 ring-blue-400 bg-gray-100"
                : ""
            }
          `}
      onClick={() => {
        if (webEdit) {
          webEdit({
            type: "SET_ACTIVE_SECTION",
            payload: "heading",
          });
        }
      }}
      style={headingStyle.headingSection}
    >
      <DynamicDiv variant={globalVariant} style={headingStyle.headingName}>
        {/* <h1 style={headingStyle.headerTitle}>{data.name}</h1> */}
        <Typography variant={globalVariant} style={headingStyle.headerTitle}>
          {data.name}
        </Typography>
        {!data.title.visible ? null : (
          <Typography
            variant={globalVariant}
            style={headingStyle.headerSubTitle}
          >
            {data.title.value}
          </Typography>
        )}
        <DynamicDiv variant={globalVariant} style={headingStyle.contactSection}>
          {Object.entries(data.contact).map(([tag, item]) => {
            if (!item.visible) return null;

            return (
              <DynamicDiv
                key={tag}
                variant={globalVariant}
                style={headingStyle.contactRow}
              >
                <DynamicDiv
                  variant={globalVariant}
                  style={headingStyle.textContainer}
                >
                  <Typography
                    variant={globalVariant}
                    style={headingStyle.contactText}
                  >
                    {toTitleCase(tag)}
                  </Typography>
                  <DynamicLink
                    variant={globalVariant}
                    linkValue={item.value}
                    style={headingStyle.link}
                  >
                    {item.value}
                  </DynamicLink>
                </DynamicDiv>
              </DynamicDiv>
            );
          })}
        </DynamicDiv>
      </DynamicDiv>
    </DynamicDiv>
  );
};
