import { useResumeData } from "@/app/context/ResumeContext";
import { EditCard } from "../editBlocks/EditCard";
import { useSidebar } from "@/app/context/SidebarContext";
import { useStyleState } from "@/app/context/test";
import { useEffect, useState } from "react";
import { useResponsiveZoom } from "@/hooks/useResponsiveZoom";

// const docStyle: Record<string, React.CSSProperties> = {
//   appContainer: {
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)",
//     boxSizing: "border-box",
//     // transform: "scale(1.3)", // <-- zoom web preview
//     transformOrigin: "top left", // <-- keep layout aligned
//     width: `${816}px`, // <-- real Letter width
//     height: `${1056}px`, // <-- real Letter height
//     zoom: 1.2, // <-- prevent browser messing with scaling

//   },

//   page: {
//     minHeight: "100vh",
//     height: "100%",
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#FFFFFF",
//     padding: 16,
//     paddingTop: 10,
//     paddingBottom: 8,
//     paddingLeft: 12,
//     paddingRight: 12,
//     fontFamily: "var(--font-inter)",
//     fontWeight: 400,
//     color: "#212121",

//     // --- SUBTLE GEOMETRIC TEXTURE ---
//     // backgroundColor: "#FFFFFF", // Keep base white for readability
//     // background: `
//     //   radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent),
//     //   radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 40px 40px,
//     //   linear-gradient(rgba(0, 0, 0, 0.10) 1px, transparent 1px) 0 -0.5px,
//     //   linear-gradient(90deg, rgba(0, 0, 0, 0.10) 1px, #ffffff 1px) -0.5px 0
//     // `,
//     // backgroundSize: "80px 80px, 80px 80px, 40px 40px, 40px 40px",
//     // --- GEOMETRIC PATTERN END ---
//   },
// };

export const TemplateWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const data = useResumeData();
  const { templateChoice } = useSidebar();
  const { theme } = useStyleState();

  const zoomLevel = useResponsiveZoom();

  const docStyle: Record<string, React.CSSProperties> = {
    appContainer: {
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)",
      boxSizing: "border-box",
      // transform: "scale(1.3)", // <-- zoom web preview
      transformOrigin: "top left", // <-- keep layout aligned
      width: `${816}px`, // <-- real Letter width
      height: `${1056}px`, // <-- real Letter height
      zoom: zoomLevel, // <-- prevent browser messing with scaling
    },
  };

  const baseStyleMap: Record<string, React.CSSProperties> = {
    one: {
      // minHeight: "100vh",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#FFFFFF",

      padding: theme.documentPadding,
      fontFamily: "var(--font-inter)",
      fontWeight: 400,
      color: "#212121",

      // borders
      borderTop: `10px solid ${theme.borderColor}`,
      borderBottom: `10px solid ${theme.borderColor}`,
      borderTopLeftRadius: "50px",
      borderBottomRightRadius: "50px",

      overflow: "hidden",
    },
    two: {
      // minHeight: "100vh",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#FFFFFF",

      padding: theme.documentPadding,
      fontFamily: "var(--font-inter)",
      fontWeight: 400,
      color: theme.textColor,
    },
    three: {
      // minHeight: "100vh",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      // borderBottom: `40px solid red`,

      padding: theme.documentPadding,
      fontFamily: "var(--font-inter)",
      fontWeight: 400,
      color: theme.textColor,
    },
  };

  // This only runs once the component hits the browser

  // While the server is rendering or before the browser is ready,
  // we return null (or a skeleton/spinner) to prevent hydration errors.

  const activeSection = data.activeSection;
  const activeStle = baseStyleMap[templateChoice];
  return (
    <div className="flex flex-row justify-around gap-10 ml-10 mr-10 items-start relative">
      {/* 1. FIX: add this style to context */}
      <div style={docStyle.appContainer}>
        <div style={{ ...activeStle }}>{children}</div>
      </div>

      {/* 2. Sticky Sidebar Container */}
      {activeSection && <EditCard cardType={activeSection} />}
    </div>
  );
};
