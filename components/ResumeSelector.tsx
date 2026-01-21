import { useSidebar } from "@/app/context/SidebarContext";
import Resume from "./Templates/TemplateOne";
import { ResTemplateTwo } from "./Templates/TemplateTwo";


export const ResumeSelector = () => {
    const {templateChoice} = useSidebar()
    switch (templateChoice) {
        case "one":
          return (
            <div>
              <Resume />
            </div>
          );
        case "two":
          return (
            <div>
              <ResTemplateTwo />
            </div>
          );
          case "three":
            return (
              <div>
                <h2>Template three</h2>
              </div>
            );
      }
}

