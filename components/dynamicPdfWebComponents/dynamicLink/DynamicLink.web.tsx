import Link from "next/link";



export const LinkWeb = ({children, style, str}: {
    children: React.ReactNode;
    style: React.CSSProperties;
    str: string
}) => {
    return (
        <Link href={`https://${str}`} style={style}>{children}</Link>
    )
}