
import type { Style } from "@react-pdf/types";
import { LinkPdf } from "./DynamicLink.pdf";
import { LinkWeb } from "./DynamicLink.web";


export const DynamicLink = ({variant, children, style, linkValue}: {
    variant: string;
    children: React.ReactNode;
    linkValue: string;
    style?: React.CSSProperties | Record<string, Style>
}) => {
    if(variant === "pdf") {
        return <LinkPdf str={linkValue} style={style as Record<string, Style>}>{children}</LinkPdf>
    }

    if(variant === "web") {
        return <LinkWeb str={linkValue} style={style as React.CSSProperties}>{children}</LinkWeb>
    }
}