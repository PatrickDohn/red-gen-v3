// import { isPdfStyleShape } from "@/types/guards";

import type { Style } from "@react-pdf/types";
import { DivPdf, DynamicDivPdfProps } from "./DynamicDiv.pdf";
import { DivWeb, DynamicDivWebProps } from "./DynamicDiv.web";

type DynamicDivProps =
  | ({ variant: string } & DynamicDivWebProps)
  | ({ variant: string } & DynamicDivPdfProps);

export function DynamicDiv(props: DynamicDivProps) {
  const { variant, style, children } = props;
  if (variant === "pdf") {
    return <DivPdf style={style as Record<string, Style>}>{children}</DivPdf>;
  }

  if (variant == "web") {
    return <DivWeb  {...(props as DynamicDivWebProps)} />;
  }
}
