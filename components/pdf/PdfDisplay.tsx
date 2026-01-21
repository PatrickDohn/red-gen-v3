// This component should be a client component (add 'use client' if necessary)
// It handles the *display* of the PDF.

import dynamic from "next/dynamic";

import ResumeDocument from "./DocumentRenderer";
import { registerFonts } from "@/lib/registerFonts";
import { useStyles } from "@/app/context/StyleContext";
import { useResumeData } from "@/app/context/ResumeContext";

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
  const { iconState, sectionVisibilityState } = useStyles();

  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
        border: "1px solid #ccc",
      }}
      showToolbar={true}
    >
      {/* Pass the entire document structure here */}
      <ResumeDocument
        data={data}
        iconState={iconState}
        visibility={sectionVisibilityState}
      />
    </PDFViewer>
  );
}
