import { useResumeData } from "@/app/context/ResumeContext";
import { EditCard } from "../editBlocks/EditCard";
import { useSidebar } from "@/app/context/SidebarContext";

const docStyle: Record<string, React.CSSProperties> = {
  appContainer: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)",
    boxSizing: "border-box",
    // transform: "scale(1.3)", // <-- zoom web preview
    transformOrigin: "top left", // <-- keep layout aligned
    width: `${816}px`, // <-- real Letter width
    height: `${1056}px`, // <-- real Letter height
    zoom: 1.2, // <-- prevent browser messing with scaling
  },

  page: {
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 16,
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "var(--font-inter)",
    fontWeight: 400,
    color: "#212121",

    // --- SUBTLE GEOMETRIC TEXTURE ---
    // backgroundColor: "#FFFFFF", // Keep base white for readability
    // background: `
    //   radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent),
    //   radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 40px 40px,
    //   linear-gradient(rgba(0, 0, 0, 0.10) 1px, transparent 1px) 0 -0.5px,
    //   linear-gradient(90deg, rgba(0, 0, 0, 0.10) 1px, #ffffff 1px) -0.5px 0
    // `,
    // backgroundSize: "80px 80px, 80px 80px, 40px 40px, 40px 40px",
    // --- GEOMETRIC PATTERN END ---
  },
};

export const TemplateWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const data = useResumeData();
  const { templateChoice } = useSidebar();

  const activeSection = data.activeSection;
  return (
    <div className="flex flex-row justify-around gap-10 ml-10 mr-10 items-start relative">
      {/* 1. FIX: add this style to context */}
      <div style={docStyle.appContainer}>
        <div
          style={
            templateChoice === "one"
              ? {
                  minHeight: "100vh",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FFFFFF",
                  padding: 16,
                  paddingTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 12,
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  color: "#212121",

                  // borders
                  borderTop: "10px solid #B0BEC5",
                  borderBottom: "10px solid #B0BEC5",
                  borderTopLeftRadius: "50px",
                  borderBottomRightRadius: "50px",

                  overflow: "hidden",
                }
              : {
                  minHeight: "100vh",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FFFFFF",
                  padding: 16,
                  paddingTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 12,
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  color: "#212121",
                }
          }
        >
          {children}
        </div>
      </div>

      {/* 2. Sticky Sidebar Container */}
      {activeSection && (
        <aside className="sticky top-10 self-start min-w-[350px]">
          <EditCard cardType={activeSection} />
        </aside>
      )}
    </div>
  );
};
