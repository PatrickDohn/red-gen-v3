import type { Style } from "@react-pdf/types";
import { Text } from "@react-pdf/renderer";

import { IconData } from "@/app/data/iconMap";
export const IconPdf = ({
  style,
  icon,
}: {
  style: Record<string, Style>;
  icon: IconData;
}) => {
  return (
    <Text
      style={[
        style,
        // 🎯 Apply the correct font family dynamically!
        {
          fontFamily: icon.family,
          color: "#004F7A",
        },
      ]}
    >
      {icon.code}
    </Text>
  );
};
