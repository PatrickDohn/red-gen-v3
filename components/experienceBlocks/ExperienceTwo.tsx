/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useResumeDispatch,
} from "../../app/context/ResumeContext";
import { Typography } from "../dynamicPdfWebComponents/typography/Typography";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";
import { ResumeDocProps } from "@/app/types/resume-data";


import { IconData } from "@/app/data/iconMap";

interface ExperienceProps {
  globalVariant: string;
  data: ResumeDocProps;
  experienceStyle: any;
  icons?: IconData[];
}

export const ExperienceTwo = ({
  globalVariant,
  data,
  experienceStyle,
}: ExperienceProps) => {
  const dispatch = useResumeDispatch();
  const activeSection = data.activeSection;
  return (
    <DynamicDiv
      variant={globalVariant}
      className={`
                  hover:bg-gray-100 cursor-pointer transition duration-150 rounded-md
                  ${
                    activeSection === "experience"
                      ? "ring-2 ring-blue-400 bg-gray-100"
                      : ""
                  }
                `}
      onClick={() =>
        dispatch?.({
          type: "SET_ACTIVE_SECTION",
          payload: "experience",
        })
      }
      style={experienceStyle.section}
    >
      <DynamicDiv variant={globalVariant} style={experienceStyle.heading}>
        <Typography variant={globalVariant} style={experienceStyle.title}>
          EXPERIENCE
        </Typography>
      </DynamicDiv>
      {data.experience.map((job, index) => {
        if (!job.visible) return null;
        return (
          <DynamicDiv
            variant={globalVariant}
            key={index}
            style={experienceStyle.experienceContainer}
          >
            <DynamicDiv
              variant={globalVariant}
              style={experienceStyle.positionTitleRow}
            >
              <Typography
                variant={globalVariant}
                style={experienceStyle.positionTitleText}
              >
                {job.title}
                <Typography
                  style={experienceStyle.positionTitleText}
                  variant={globalVariant}
                  webTag="span"
                >
                  {" "}
                  at{" "}
                </Typography>
                <Typography
                  variant={globalVariant}
                  webTag="span"
                  style={experienceStyle.positionCompanyAccent}
                >
                  {job.company}
                </Typography>
              </Typography>
            </DynamicDiv>
            <Typography variant={globalVariant} style={experienceStyle.text}>
              {job.duration}
            </Typography>
            {job.duties.map((duty, i) => {
              if (!duty.visible) return null;

              return (
                <DynamicDiv
                  variant={globalVariant}
                  key={i}
                  style={experienceStyle.dutyRow}
                >
                  {globalVariant === "pdf" ? (
                    <DynamicDiv
                      // CRITICAL FIX: Use the 'dutyRow' style here to establish the horizontal layout.
                      variant={globalVariant}
                      style={experienceStyle.dutyRow}
                    >
                      <DynamicDiv variant={globalVariant}>
                        <DynamicDiv
                          variant={globalVariant}
                          style={experienceStyle.iconText}
                        />
                      </DynamicDiv>
                      {/* Column 2: The Wrapping Text Content */}
                      <Typography
                        variant={globalVariant}
                        // CRITICAL FIX: Use the 'dutyText' style (which has flex: 1) on the Typography
                        // component or its direct container.
                        style={experienceStyle.dutyText}
                        webTag="span" // Using span for web for inline-like behavior if needed
                      >
                        {duty.content}
                      </Typography>
                    </DynamicDiv>
                  ) : (
                    <DynamicDiv
                      variant={globalVariant}
                      style={experienceStyle.dutyText}
                    >
                      <DynamicDiv
                        variant={globalVariant}
                        style={experienceStyle.iconText}
                      />
                      <Typography variant={globalVariant}>
                        {duty.content}
                      </Typography>
                    </DynamicDiv>
                  )}
                </DynamicDiv>
              );
            })}
          </DynamicDiv>
        );
      })}
    </DynamicDiv>
  );
};
