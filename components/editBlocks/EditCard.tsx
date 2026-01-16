
import { useSidebar } from "@/app/context/SidebarContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ExperienceEdit } from "./experience/ExperienceEdit";
import { ExperienceStyleEdit } from "./experience/ExperienceStyleEdit";
import { HeadingEdit } from "./heading/HeadingEdit";
import { HeadingStyleEdit } from "./heading/HeadingStyleEdit";
import { SkillsEdit } from "./skills/SkillsEdit";
import { SkillStyleEdit } from "./skills/SkillsStyleEdit";


interface ContentMapProps {
  cardType: string;
}

export function EditCard({ cardType }: ContentMapProps) {

  const { activeItemKey } = useSidebar();
  console.log(activeItemKey, "!!!")
  if (!activeItemKey) return null;

  switch (cardType) {
    case "heading":
      return (
        <Tabs defaultValue="content" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <HeadingEdit />
          </TabsContent>
          <TabsContent value="style">
            <HeadingStyleEdit />
          </TabsContent>
        </Tabs>
      );

    case "experience":
      return (
        <Tabs defaultValue="content" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <ExperienceEdit />
          </TabsContent>
          <TabsContent value="style">
            <ExperienceStyleEdit />
          </TabsContent>
        </Tabs>
      );

    case "skills":
      return (
        <Tabs defaultValue="content" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <SkillsEdit />
          </TabsContent>
          <TabsContent value="style">
            <SkillStyleEdit />
          </TabsContent>
        </Tabs>
      );
  }
}
