import React from "react";
import { Text } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";

export function TypographyPdf({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: Record<string, Style>;
}) {
  return <Text style={style}>{children}</Text>;
}
