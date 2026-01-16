'use client'
// context/SidebarContext.tsx
import React, { createContext, useState, useContext, useMemo } from 'react';
import { SidebarData, SidebarContextType } from '../types/sidebar';
import { ClipboardCheck } from 'lucide-react'; // Example Icon

// --- Sidebar Data Definition (Centralized & Typed) ---
export const sidebarData: SidebarData = {
  navMain: [
    {
      title: "Getting Started",
      url: "#started",
      // icon: Map, // Assuming Map is imported
      items: [
        { title: "Installation", url: "#installation" },
        { title: "Project Structure", url: "#" },
      ],
    },
    {
      title: "Building Your Resume",
      url: "#",
      icon: ClipboardCheck, 
      items: [
        { title: "Heading", url: "heading" },
        { title: "Experience", url: "/experience", isActive: true },
        { title: "Education", url: "#" },
        { title: "Skills", url: "#" },
        { title: "Professional Skills", url: "#" },
      ],
    },
  ],
};



const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Helper to find the default active item
export const getDefaultActiveItem = (): string | null=> {
  return sidebarData.navMain
    .flatMap(group => group.items || [])
    .find(item => item.isActive)?.title || null;
};

// Provider Component
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [activeItemKey, setActiveItemKey] = useState<string | null>(null);
  const [sectionHighlight, setSectionHighlight] = useState<boolean>(false)

  const contextValue = useMemo(() => ({
    activeItemKey,
    setActiveItemKey,
    sectionHighlight,
    setSectionHighlight,
    data: sidebarData,
  }), [activeItemKey, sectionHighlight]);

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom Hook for easy consumption
export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}