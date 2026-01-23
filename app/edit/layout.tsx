import "@/app/globals.css";

import { SidebarProvider as StateProvider } from "@/app/context/SidebarContext";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/SidebarLayout";
import { ResumeProvider } from "../context/ResumeContext";

import { BreadcrumbHeader } from "@/components/sidebar/SidebarHeader";
import { StyleProvider } from "../context/test";
import { WebFooter } from "@/components/Footer";

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
        {/* <WebFooter /> */}
      </ResumeProvider>
    </div>
  );
}
