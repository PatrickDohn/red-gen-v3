import { Font } from "@react-pdf/renderer";

export const registerFonts = () => {
  // --- 1. Register Inter (Static TTF files) ---

  Font.register({
    family: "Inter",
    fonts: [
      { src: "/fonts/inter/Inter_24pt-Light.ttf", fontWeight: 300 },
      { src: "/fonts/inter/Inter_24pt-Regular.ttf", fontWeight: 400 },
      { src: "/fonts/inter/Inter_24pt-Bold.ttf", fontWeight: 700 },
    ],
  });
  


  Font.register({
    family: "JetBrains Mono",
    fonts: [
      { src: "/fonts/JetBrainsMono-Italic[wght].ttf", fontWeight: 400 }, // Avoid using Italic for base weight
      { src: "/fonts/JetBrainsMono-ExtraBold.ttf", fontWeight: 700 },
    ],
  });


  // --- 2. Register Font Awesome (Icon Fonts) ---
  Font.register({
    family: "Font Awesome Solid",
    src: "/fonts/fa-solid-900.woff2",
  });

  Font.register({
    family: "Font Awesome Regular",
    src: "/fonts/fa-regular-400.woff2",
  });

  Font.register({
    family: "Font Awesome Brands", // Use a distinct family name
    src: "/fonts/fa-brands-400.woff2", // Use the fa-brands-400.ttf file
  });

  console.log("PDF Fonts Registered.");
};
