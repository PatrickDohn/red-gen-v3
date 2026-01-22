"use client";
// context/SidebarContext.tsx
import React, { createContext, useState, useContext, useMemo } from "react";
import { SidebarData, SidebarContextType, SidebarItem, TemplateChoice } from "../types/sidebar";
import { ClipboardCheck, Map } from "lucide-react";

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const templateMenuItems: Record<TemplateChoice, SidebarItem[]> = {
  "one": [
    { title: "Heading", url: "?heading" },
    { title: "Experience", url: "/edit#experience", isActive: true },
    { title: "Education", url: "/edit#education" },
    { title: "Skills", url: "/edit#skills" },
    { title: "Design & Font", url: "/edit#design" },
    { title: "Preview", url: "/edit#view" }
  ],
  "two": [
    { title: "Heading", url: "?heading" },
    { title: "Experience", url: "/edit#experience", isActive: true },
    { title: "Skills", url: "/edit#skills" },
    { title: "Education", url: "/edit#education" },
    { title: "Design & Font", url: "/edit#design" },
    { title: "Preview", url: "/edit#view" }
  ],
  "three": [
    { title: "Professional Skills", url: "#" },
  ],
};


// Provider Component
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [activeItemKey, setActiveItemKey] = useState<string | null>(null);
  const [sectionHighlight, setSectionHighlight] = useState<boolean>(false);

  const [templateChoice, setTemplateChoice] = useState<TemplateChoice>("two");

  const dynamicSidebarData: SidebarData = useMemo(() => {
    return {
      navMain: [
        {
          title: "Getting Started",
          url: "/edit#started",
          icon: Map, // Assuming Map is imported
          items: [
            {
              title: "Template Selection",
              url: "#",
              items: [
                { title: "One", url: "#folders" },
                { title: "Two", url: "#files" },
                { title: "Three", url: "#config" },
              ],
            },
          ],
        },
        {
          title: `Template ${templateChoice}`,
          url: "#template",
          icon: ClipboardCheck,
          items: templateMenuItems[templateChoice],
        },
      ],
    };
  }, [templateChoice]);

  const contextValue = useMemo(
    () => ({
      activeItemKey,
      setActiveItemKey,
      sectionHighlight,
      setSectionHighlight,
      templateChoice,
      setTemplateChoice,
      data: dynamicSidebarData,
    }),
    [activeItemKey, sectionHighlight, templateChoice, dynamicSidebarData]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom Hook for easy consumption
export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
