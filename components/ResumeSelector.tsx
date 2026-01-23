import { useSidebar } from "@/app/context/SidebarContext";
import Resume from "./Templates/TemplateOne";
import { ResTemplateTwo } from "./Templates/TemplateTwo";
import { WebFooter } from "./Footer";
import { useStyleDispatch } from "@/app/context/test";
import { useEffect } from "react";


export const ResumeSelector = () => {
    const {templateChoice} = useSidebar()

    const dispatch = useStyleDispatch();

  // 1. Sync Sidebar State with Style Context
  useEffect(() => {
    if (templateChoice === "one") {
      dispatch?.({ type: "SET_TEMPLATE", payload: "templateOne" });
    } else if (templateChoice === "two") {
      dispatch?.({ type: "SET_TEMPLATE", payload: "templateTwo" });
    }
    // Add "three" when that factory is ready
  }, [templateChoice, dispatch]);


    switch (templateChoice) {
        case "one":
          return (
            <div>
              <Resume />
              <WebFooter />
            </div>
          );
        case "two":
          return (
            <div>
              <ResTemplateTwo />
              <WebFooter />
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

