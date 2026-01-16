import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconData } from "@/app/data/iconMap";
import {
  faCheck,
  faChevronRight,
  faCircle,
  faCircleCheck,
  faStar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCircle as CircleOutline } from "@fortawesome/free-regular-svg-icons";
import { useStyleDispatch, useStyles } from "@/app/context/StyleContext";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface SelectionType {
  name: string;
  iconObject: IconDefinition;
  code: string;
}

const iconData = [
  {
    id: 1,
    name: "Circle",
    iconObject: faCircle,
    code: "\u{f111}",
    family: "Font Awesome Solid",
  },
  {
    id: 2,
    name: "Star",
    iconObject: faStar,
    code: "\u{f005}",
    family: "Font Awesome Solid",
  },

  {
    id: 3,
    name: "Check",
    iconObject: faCheck,
    code: "\u{f00c}",
    family: "Font Awesome Solid",
  },
  {
    id: 4,
    name: "ChevRight",
    family: "Font Awesome Solid",
    code: "\u{f054}",
    iconObject: faChevronRight,
  },
];

export const ExperienceStyleEdit = () => {
  const dispatch = useStyleDispatch();
  const { iconState } = useStyles();

  const [selectedIcon, setSelectedIcon] = useState<SelectionType | undefined>(
    iconState["experience"][0]
  );

  const handleIconChange = (value: string) => {
    const icon = iconData.find((i) => i.code === value);
    if (icon) {
      setSelectedIcon(icon);
      dispatch?.({
        type: "UPDATE_ICON",
        section: "iconState",
        key: "experience",
        data: [icon],
      });
    }
  };

  return (
    <div className="h-100 border-green-200 rounded-lg ">
      <Card>
        <CardHeader>
          <CardTitle>Experience Edit</CardTitle>
          <CardDescription>Edit Experience</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>Title Font Size</Label>
              <Input type="text" placeholder="Edit title font size" />
            </div>
            <div className="grid gap-2">
              <Label>Duration Font Size</Label>
              <Input type="text" placeholder="Edit duration font size" />
            </div>
            <div className="grid gap-2">
              <Label>Duty Font Size</Label>
              <Input type="text" placeholder="Edit duty font size" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Rating Icon:</Label>
              <Select
                onValueChange={handleIconChange}
                value={selectedIcon?.name || ""}
              >
                <SelectTrigger className="w-full">
                  <SelectValue>
                    {selectedIcon ? (
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={selectedIcon.iconObject}
                          className="w-4 h-4"
                        />
                        <span className="text-muted-foreground">
                          {selectedIcon.name}
                        </span>
                      </div>
                    ) : (
                      "Choose an Icon"
                    )}
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  {iconData.map((icon) => (
                    <SelectItem key={icon.code} value={icon.code}>
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                          icon={icon.iconObject}
                          className="w-4 h-4"
                        />
                        <span className="text-base">{icon.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
