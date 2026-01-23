import { useStyleDispatch, useStyles, useStyleState } from "@/app/context/test";
import { PalletteType, RESUME_PALETTES } from "@/app/constants/pallette";

export const ColorPicker = () => {
  // 1. Get the current color from the Style State so the UI stays in sync
  const { theme } = useStyleState(); 
  const dispatch = useStyleDispatch();

  const handleColorChange = (hex: PalletteType) => {
    dispatch?.({
      type: "SET_COLOR",
      payload: {
        primaryColor: hex.primary,    // 2. Use the actual 'hex' passed in
        secondaryColor: hex.secondaryAccent,
        borderColor: hex.accent,
        textColor: hex.text,
      },
    });
  };

  return (
    <div className="flex flex-wrap gap-3 p-4">
      {RESUME_PALETTES.map((hex) => (
        <button
          key={hex.name}
          type="button" // 3. CRITICAL: Prevents accidental form submission/refresh
          onClick={() => handleColorChange(hex)}
          style={{ backgroundColor: hex.primary }}
          className={`
              w-8 h-8 rounded-full border-2 transition-all
              ${
                theme.primaryColor === hex.primary // 4. Source of truth from Context
                  ? "border-gray-900 scale-125 shadow-md"
                  : "border-gray-200"
              }
              hover:scale-110 active:scale-95
            `}
          aria-label={`Select color ${hex}`}
        />
      ))}
    </div>
  );
};
