import { SidebarItem } from "@/app/types/sidebar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SidebarMenuItem, SidebarMenuSubButton } from "../ui/sidebar";
import { TemplateStyle } from "../editBlocks/TemplateStyle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PdfDisplay from "../pdf/PdfDisplay";

interface CustomSubItemProps {
  item: SidebarItem;
  activeItemKey: string | null;
  handleItemClick: (title: string) => void;
  designPopoverOpen: boolean;
  setDesignPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pdfPreview: boolean;
  pdfIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomSubItem = ({
  item,
  activeItemKey,
  handleItemClick,
  designPopoverOpen,
  pdfPreview,
  pdfIsOpen,
  setDesignPopoverOpen,
}: CustomSubItemProps) => {
  const isDesign = item.title.toLowerCase() === "design & font";
  const isPreview = item.title.toLowerCase() === "preview";

  const content = (
    <SidebarMenuSubButton
      isActive={
        isDesign
          ? designPopoverOpen
          : activeItemKey === item.title.toLowerCase()
      }
      onClick={() => handleItemClick(item.title)}
    >
      {item.title}
    </SidebarMenuSubButton>
  );

  const contentTwo = (
    <SidebarMenuSubButton
      isActive={isPreview}
      onClick={() => handleItemClick(item.title)}
    >
      {item.title}
    </SidebarMenuSubButton>
  );

  if (isPreview) {
    return (
      <Dialog>
        <DialogTrigger asChild>{contentTwo}</DialogTrigger>

        <DialogContent className="w-[85vw] !max-w-none h-[100vh] flex flex-col p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>

          {/* We use a div here or force DialogDescription to flex-1 
        to ensure the PDF container has a defined height to fill */}
          <div className="flex-1 w-full h-full min-h-0 p-4">
            <DialogDescription className="h-full w-full">
              <PdfDisplay />
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (isDesign) {
    return (
      <Popover
        key={item.title}
        open={designPopoverOpen}
        onOpenChange={setDesignPopoverOpen}
      >
        <PopoverTrigger asChild>{content}</PopoverTrigger>
        <PopoverContent align="start" className="w-80">
          <TemplateStyle />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <SidebarMenuSubButton
      isActive={
        isDesign
          ? designPopoverOpen
          : activeItemKey === item.title.toLowerCase()
      }
      onClick={() => handleItemClick(item.title)}
    >
      {item.title}
    </SidebarMenuSubButton>
  );
};
