import React from "react";
import { View } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";

export type DynamicDivPdfProps = {
    children: React.ReactNode;
    style?: Record<string, Style>;
  };

export function DivPdf({children, style}: DynamicDivPdfProps) {
    return (
        <View style={style}>{children}</View>
    )
}