
import type { Style } from "@react-pdf/types";
import { IconData } from "@/app/data/iconMap";
import { IconPdf } from "./Icon.pdf";
import { IconWeb } from "./Icon.web";

type Variant = string;

export function DynamicIcon({
  variant,
  icon,
  style,
}: {
  variant: Variant;
  icon: IconData;
  style: React.CSSProperties | Record<string, Style>;
}) {
  if (variant === "pdf") {
    return <IconPdf style={style as Record<string, Style>} icon={icon} />;
  }

  if (variant === "web") {
    return <IconWeb style={style} icon={icon.iconObject} />;
  }
}
