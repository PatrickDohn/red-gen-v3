'use client'
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
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  ClipboardCheck,
} from "lucide-react";
import { useSidebar } from "@/app/context/SidebarContext";
import { useResumeDispatch } from "@/app/context/ResumeContext";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data, activeItemKey, setActiveItemKey } = useSidebar();
  const dispatch = useResumeDispatch();
  const handleItemClick = (title: string) => {
    // Normalize to lowercase to match EditCard switch cases
    const key = title.toLowerCase(); 
    setActiveItemKey(key);
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
            {/* The map function implicitly types 'group' as SidebarGroup */}
            {data.navMain.map((group) => (
              <SidebarMenuItem key={group.title}>
                <SidebarMenuButton asChild>
                  {/* TypeScript infers the icon component type */}
                  <a href={group.url} className="font-medium">
                    {group.icon && <group.icon />}
                    <span>{group.title}</span>
                  </a>
                </SidebarMenuButton>
                {group.items?.length ? (
                  <SidebarMenuSub>
                    {/* The map function implicitly types 'item' as SidebarItem */}
                    {group.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          // Type-safe comparison
                          isActive={item.title === activeItemKey}
                          onClick={() => {
                            handleItemClick(item.title)
                            dispatch?.({
                              type: "SET_ACTIVE_SECTION",
                              payload: item.title.toLowerCase(),
                            })
                          }}
                          className={`block w-full text-left p-2 ${
                            activeItemKey === item.title.toLowerCase() ? "bg-accent" : ""
                          }`}
                        >
                          {item.title}
                        </SidebarMenuSubButton>
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
