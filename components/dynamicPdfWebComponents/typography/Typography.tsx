
import type { Style } from "@react-pdf/types";
import { TypographyWeb, ValidTags } from "./Typography.web";
import { TypographyPdf } from "./Typography.pdf";

type Variant = string;

export function Typography({
  variant,
  children,
  style,
  webTag,
}: {
  variant: Variant;
  children: React.ReactNode;
  style?: React.CSSProperties | Record<string, Style>;
  webTag?: ValidTags 
}) {
  if (variant === "pdf") {
    return <TypographyPdf style={style as Record<string, Style>}>{children}</TypographyPdf>;
  }
  
  return <TypographyWeb webTag={webTag} style={style as React.CSSProperties}>{children}</TypographyWeb>;
}
