// constants/palettes.ts

export interface PalletteType {
    name: string;
    primary: string;
    accent: string;
    secondaryAccent: string;
    secondary: string;
    text: string;
    bg: string;
}

export const RESUME_PALETTES = [
    {
      name: "Corporate Executive",
      primary: "#004F7A",
      secondary: "#64748B",        // Darker Silver/Blue-Grey
      text: "#212121",
      bg: "#FFFFFF",
      accent: "#B0BEC5",
      secondaryAccent: "#64748B"   // Strong Slate for visible lines
    },
    {
      name: "Modern Technologist",
      primary: "#059669",
      secondary: "#A7F3D0",        // Noticeable Mint/Emerald
      text: "#1E293B",
      bg: "#F8FAFC",
      accent: "#059669",
      secondaryAccent: "#10B981"   // High-contrast Green line
    },
    {
      name: "Creative Minimalist",
      primary: "#C2410C",
      secondary: "#E7D4C1",        // Deep Sandstone
      text: "#2D2A26",
      bg: "#FFFBFA",
      accent: "#C2410C",
      secondaryAccent: "#A89185"   // Muted Clay line
    },
    {
      name: "High-Contrast Cobalt",
      primary: "#2563EB",
      secondary: "#BFDBFE",        // Solid Light Blue (not grey)
      text: "#000000",
      bg: "#FFFFFF",
      accent: "#2563EB",
      secondaryAccent: "#60A5FA"   // Strong Cobalt-Lite line
    },
    {
      name: "Elegant Visionary",     // NEW PURPLE PALETTE
      primary: "#7C3AED",          // Vivid Royal Purple
      secondary: "#DDD6FE",        // Soft Lavender (visible but subtle)
      text: "#1F1635",             // Very dark purple-grey text
      bg: "#FFFFFF",
      accent: "#7C3AED",
      secondaryAccent: "#A78BFA"   // Bold Purple line
    },

  ];


//   import { RESUME_PALETTES } from "@/app/constants/pallette";
// import { useStyleDispatch, useStyleState } from "@/app/context/test";


// export const PaletteGallery = () => {
//   const { theme } = useStyleState();
//   const dispatch = useStyleDispatch();

//   const handleApplyPalette = (palette: typeof RESUME_PALETTES[0]) => {
//     dispatch?.({
//       type: "SET_COLOR",
//       payload: {
//         primaryColor: palette.primary,
//         secondaryColor: palette.secondary,
//         textColor: palette.text,
//         // If you added backgroundColor to your ThemeConfig:
//         // backgroundColor: palette.bg 
//       },
//     });
//   };

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {RESUME_PALETTES.map((palette) => (
//         <button
//           key={palette.name}
//           type="button"
//           onClick={() => handleApplyPalette(palette)}
//           className={`
//             flex flex-col p-2 rounded-lg border-2 transition-all text-left
//             ${theme.primaryColor === palette.primary 
//               ? "border-blue-600 bg-blue-50" 
//               : "border-gray-200 hover:border-gray-300"}
//           `}
//         >
//           <span className="text-xs font-bold mb-2">{palette.name}</span>
//           <div className="flex h-6 w-full rounded overflow-hidden">
//             <div style={{ backgroundColor: palette.primary, width: '40%' }} />
//             <div style={{ backgroundColor: palette.secondary, width: '30%' }} />
//             <div style={{ backgroundColor: palette.text, width: '30%' }} />
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// };