import { useSidebar } from "@/app/context/SidebarContext";
import Resume from "./Templates/TemplateOne";
import { ResTemplateTwo } from "./Templates/TemplateTwo";
import { WebFooter } from "./Footer";
import { useStyleDispatch } from "@/app/context/test";
import { useEffect } from "react";
import { Editable } from "./custom/TestComp";
import { Input } from "./ui/input";

export const ResumeSelector = () => {
  const { templateChoice } = useSidebar();

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
          <Editable style={{ fontSize: 23 }} initialValue="Is this working" />
          <Editable
            initialValue="What excites me most about this opportunity at CarGurus 

is is getting to drive the next generation of analytics, data products, and dealer-facing experiences. 

I admire your commitment to give people the power to reach their destination, and I would be proud to contribute to that mission.

Thank you for considering my application. I have attached my resume for your review, 

and I would welcome the opportunity to discuss how my background and enthusiasm align with your needs. 

I look forward to the possibility of contributing to your team."
          />
        </div>
      );
  }
};
