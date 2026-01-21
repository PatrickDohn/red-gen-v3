import React from 'react';

// The props structure for the web variant
export type DynamicDivWebProps = React.ComponentPropsWithoutRef<"div"> & {
    children?: React.ReactNode;
    
}

// DivWeb function component: Accepts the full prop set, spreads them to the native <div>
export function DivWeb(props: DynamicDivWebProps) {
    // The {...props} spread includes everything: activeSection, children, style, onClick, etc.
    return <div {...props} />;
}