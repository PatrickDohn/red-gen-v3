import { Link } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";




export const LinkPdf = ({children, style, str}: {
    children: React.ReactNode;
    style: Record<string, Style>;
    str: string
}) => {
    return (
        <Link src={`https://${str}`} style={style}>{children}</Link>
    )
}