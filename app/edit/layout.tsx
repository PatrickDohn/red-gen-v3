import "@/app/globals.css";

import { SidebarProvider as StateProvider } from "@/app/context/SidebarContext";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/SidebarLayout";
import { ResumeProvider } from "../context/ResumeContext";
import { StyleProvider } from "../context/StyleContext";
import { BreadcrumbHeader } from "@/components/sidebar/SidebarHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ResumeProvider>
        <StyleProvider>
          <StateProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <BreadcrumbHeader />
                <div className="flex flex-3 flex-col gap-2 p-4">{children}</div>
              </SidebarInset>
            </SidebarProvider>
          </StateProvider>
        </StyleProvider>
      </ResumeProvider>
    </div>
  );
}
