import { LucideIcon } from 'lucide-react';
import React, { JSX } from 'react';
import { ResumeDocumentProps } from './resume-data';

// Type for a single sub-item (e.g., "Heading", "Experience")
export interface SidebarItem {
  title: string;
  url: string;
  isActive?: boolean;
  items?: SidebarItem[]
}

// Type for a main navigation group (e.g., "Building Your Resume")
export interface SidebarGroup {
  title: string;
  url: string;
  icon?: LucideIcon; // Icon is a Lucide React component
  items?: SidebarItem[];
}

// Type for the entire sidebar data object
export interface SidebarData {
  navMain: SidebarGroup[];
}

// types/sidebar.ts or wherever SectionProps is defined
export interface SectionProps {
  // 'data' is the entire resume object (ResumeDocumentProps)
  data: ResumeDocumentProps; 
  // Function to update the entire object (used by child components)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpdate?: (newData: ResumeDocumentProps) => void; 
}

// Type for the Component Map used for rendering content
export type ComponentMapType = { 
  [key: string]: React.FC<SectionProps> | (() => JSX.Element); 
};

export type TemplateChoice = "one" | "two" | "three"

// Type for the Context state
export interface SidebarContextType {
  activeItemKey: string | null;
  setActiveItemKey: React.Dispatch<React.SetStateAction<string | null>>;
  templateChoice: TemplateChoice; 
  setTemplateChoice: React.Dispatch<React.SetStateAction<TemplateChoice>>;
  sectionHighlight: boolean;
  setSectionHighlight: React.Dispatch<React.SetStateAction<boolean>>;
  data: SidebarData;
}