// Idea to Editable Text to Input editable component.

// import * as React from "react";

// const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
//   h1: { fontSize: "32px" },
//   h3: { fontSize: "18px" },
//   span: { fontSize: "14px" },
//   p: { fontSize: "16px" },
// };

// export const Editable = <T extends keyof React.JSX.IntrinsicElements = "h1">(
//   props: { webTag: T } & React.ComponentPropsWithoutRef<T>
// ) => {
//   const { webTag, style, ...rest } = props;

//   const mergedStyle = {
//     ...DEFAULT_STYLES[webTag || "h1"],
//     ...style,
//   };

//   const Tag = (webTag || "h1") as React.ElementType;
//   console.log("Tag style", style);
//   return <Tag style={mergedStyle} {...rest} />;
// };

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

export const Editable = ({
  initialValue,
  style,
}: {
  initialValue: string;
  style?: React.CSSProperties;
}) => {
  const [value, setValue] = useState(initialValue);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleBlur = () => {
    if (elementRef.current) {
      const newValue = elementRef.current.innerText;
      setValue(newValue);
      console.log("Saved to State:", newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents new lines for single-line titles
      elementRef.current?.blur(); // Triggers handleBlur
    }
  };

  return (
    <div
    //   className="text-secondary-foreground hover:bg-secondary/80"
    className={cn(
        "group/decorated relative inline-block",
        false && "border border-black/20 dark:border-white/20",
        "text-4xl font-bold"
      )}
    ref={elementRef}
      contentEditable
      suppressContentEditableWarning // Stops React from warning about manual DOM changes
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      style={{
        ...style,
      }}
      onFocus={() => window.getSelection()?.selectAllChildren(elementRef.current!)}
      // Adds a subtle hover effect to show it's editable
      onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderBottomColor = "transparent")
      }
    >
        <div>
            <MenubarDemo />
        </div>
      {value}
    </div>
  );
};


import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export function MenubarDemo() {
    return (
      <Menubar className="w-72">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Search the web</MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-44">
            <MenubarGroup>
              <MenubarCheckboxItem>Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Full URLs</MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Edit...</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  