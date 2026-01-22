import { TemplateChoice } from "@/app/types/sidebar";
import { View, Text } from "@react-pdf/renderer";
import TemplateTwoRender from "./TemplateTwoRender";
import { useResumeData } from "@/app/context/ResumeContext";
import { useSidebar } from "@/app/context/SidebarContext";
import { useStyles } from "@/app/context/StyleContext";
import { ResumeDocProps } from "@/app/types/resume-data";
import { IconState, SectionVisibilityState } from "@/app/types/styles";
import TemplateOneRender from "./TemplateOneRender";

interface TemplateSelectionProps {
  data: ResumeDocProps;
  templateChoice: TemplateChoice;
  visibility: SectionVisibilityState;
  icon: IconState;
}

export const TemplateSelection = ({
  data,
  templateChoice,
  visibility,
  icon,
}: TemplateSelectionProps) => {
  switch (templateChoice) {
    case "one":
      return (
        <TemplateOneRender
          data={data}
          iconState={icon}
          visibility={visibility}
        />
      );
    case "two":
      return (
        <TemplateTwoRender
          data={data}
          iconState={icon}
          visibility={visibility}
        />
      );
    case "three":
      break;
  }
};
