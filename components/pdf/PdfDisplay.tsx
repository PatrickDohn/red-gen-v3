// This component should be a client component (add 'use client' if necessary)
// It handles the *display* of the PDF.

import dynamic from "next/dynamic";

import { registerFonts } from "@/lib/registerFonts";
import { useStyles } from "@/app/context/StyleContext";
import { useResumeData } from "@/app/context/ResumeContext";
import { useSidebar } from "@/app/context/SidebarContext";
import { TemplateSelection } from "./TemplateSelection";

// Import your ResumeDocument component (which uses <Text>) normally

registerFonts();

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false, // CRITICAL: This ensures the browser-only PDF viewer runs only on the client
    // loading: () => <p>Loading PDF Viewer...</p>,
  }
);

export default function PdfDisplay() {
  const data = useResumeData();
  const { templateChoice } = useSidebar();

  console.log(templateChoice, "Display");
  const { iconState, sectionVisibilityState } = useStyles();

  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid #ccc",
      }}
      showToolbar={true}
    >
      {/* Pass the entire document structure here */}
      <TemplateSelection
        data={data}
        templateChoice={templateChoice}
        visibility={sectionVisibilityState}
        icon={iconState}
      />
    </PDFViewer>
  );
}
