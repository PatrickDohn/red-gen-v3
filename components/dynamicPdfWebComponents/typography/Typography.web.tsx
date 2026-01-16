import React from "react";


 export type ValidTags = "h1" | "h3" | "span"

export type WebProps<T extends ValidTags> = 
  React.ComponentPropsWithoutRef<T> & {
    // Override the tag prop to be the specific literal type T
    webTag: T | undefined  
  };

export function TypographyWeb<T extends ValidTags = "h1">(
  props: WebProps<T>
) {
  const { webTag, ...rest } = props
  const tag = webTag ? webTag : "h1"
  switch(tag) {
    case "h1":
      return <h1 {...rest} />
    
      case "h3":
      return <h3 {...rest} />
    
    case "span": 
    return <span {...rest} />
  }
}

