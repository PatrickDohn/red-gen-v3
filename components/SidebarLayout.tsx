"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, GalleryVerticalEnd } from "lucide-react";
import { useSidebar } from "@/app/context/SidebarContext";
import { useResumeDispatch } from "@/app/context/ResumeContext";
import { SidebarItem, TemplateChoice } from "@/app/types/sidebar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CustomSubItem } from "./sidebar/SidebarItem";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data, activeItemKey, setActiveItemKey, setTemplateChoice } =
    useSidebar();
  const dispatch = useResumeDispatch();
  const [designPopoverOpen, setDesignPopoverOpen] = React.useState(false);
  const [pdfPreview, setPdfPreviewOpen] = React.useState(false);

  const handleItemClick = (title: string) => {
    const key = title.toLowerCase();

    if (key === "preview") {
      setPdfPreviewOpen(true)
      return
    }

    if (key === "design & font") {
      setDesignPopoverOpen(true);
      return; // Stop here if you don't want the EditCard to change
    }

    setActiveItemKey(key);
    dispatch?.({
      type: "SET_ACTIVE_SECTION",
      payload: key,
    });
  };

  const handleSetTemplateChoice = (title: string) => {
    setTemplateChoice(title.toLowerCase() as TemplateChoice);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Res Gen</span>
                  <span className="">v3.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((group) => (
              <SidebarMenuItem key={group.title}>
                <SidebarMenuButton asChild>
                  <a href={group.url} className="font-medium">
                    {group.icon && <group.icon />}
                    <span>{group.title}</span>
                  </a>
                </SidebarMenuButton>

                {group.items?.length ? (
                  <SidebarMenuSub>
                    {group.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        {/* CHECK: Does this item have nested sub-items? */}
                        {item.items?.length ? (
                          <Collapsible className="group/collapsible">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuSubButton className="flex items-center justify-between">
                                <span>{item.title}</span>
                                <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuSubButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {item.items.map((subItem) => {
                                  return (
                                    <SidebarMenuSubItem key={subItem.title}>
                                      <SidebarMenuSubButton
                                        isActive={
                                          subItem.title.toLowerCase() ===
                                          activeItemKey
                                        }
                                        onClick={() =>
                                          handleSetTemplateChoice(subItem.title)
                                        }
                                        className={
                                          activeItemKey ===
                                          item.title.toLowerCase()
                                            ? "bg-accent"
                                            : ""
                                        }
                                      >
                                        {subItem.title}
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  );
                                })}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          /* Standard button if no children */
                          <CustomSubItem
                            item={item}
                            activeItemKey={activeItemKey}
                            handleItemClick={handleItemClick}
                            designPopoverOpen={designPopoverOpen}
                            pdfPreview={pdfPreview}
                            pdfIsOpen={setPdfPreviewOpen}
                            setDesignPopoverOpen={setDesignPopoverOpen}
                          />
                        )}
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
             
            ))}
             
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
