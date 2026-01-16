
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
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
  
  import {
    useStyleDispatch,
    useStyles,
  } from "@/app/context/StyleContext";
  import { IconData } from "@/app/data/iconMap";
  import {
    faCheck,
    faCircle,
    faCircleCheck,
    faStar,
    IconDefinition,
  } from "@fortawesome/free-solid-svg-icons";
  
  import { faCircle as CircleOutline } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  
  import { Controller, SubmitHandler, useForm } from "react-hook-form";
  import { Slider } from "@/components/ui/slider";
  
  interface SelectionType {
    name: string;
    iconObject: IconDefinition;
    code: string;
    fill: IconData;
    outline: IconData;
  }
  
  export const SkillStyleEdit = () => {
    const { iconMap, iconState, skillStyle } = useStyles();
    const dispatch = useStyleDispatch();
    const iconData = [
      {
        name: "Circle",
        iconObject: faCircle,
        code: "\u{f111}",
        fill: {
          id: 1,
          name: "circle_fill",
          code: "\u{f111}",
          family: "Font Awesome Solid",
          iconObject: faCircle,
        },
        outline: {
          id: 2,
          name: "circle_outline",
          code: "\u{f111}",
          family: "Font Awesome Regular",
          iconObject: CircleOutline,
        },
      },
      {
        name: "Star",
        iconObject: faStar,
        code: "\u{f005}",
        fill: {
          id: 3,
          name: "star_fill",
          code: "\u{f005}",
          family: "Font Awesome Solid",
          iconObject: faStar,
        },
        outline: {
          id: 4,
          name: "star_outline",
          code: "\u{f111}",
          family: "Font Awesome Regular",
          iconObject: CircleOutline,
        },
      },
      {
        name: "Circle Check",
        iconObject: faCircleCheck,
        code: "\u{f058}",
        fill: {
          id: 5,
          name: "circle_check_fill",
          code: "\u{f058}",
          family: "Font Awesome Regular",
          iconObject: faCircleCheck,
        },
        outline: {
          id: 2,
          name: "circle_outline",
          code: "\u{f111}",
          family: "Font Awesome Regular",
          iconObject: CircleOutline,
        },
      },
      {
        name: "Check",
        iconObject: faCheck,
        code: "\u{f00c}",
        fill: {
          id: 6,
          name: "check_fill",
          code: "\u{f00c}",
          family: "Font Awesome Solid",
          iconObject: faCheck,
        },
        outline: {
          id: 2,
          name: "circle_outline",
          code: "\u{f111}",
          family: "Font Awesome Regular",
          iconObject: CircleOutline,
        },
      },
    ];
    const [selectedIcon, setSelectedIcon] = useState<SelectionType | undefined>(
      undefined
    );
  
    type Inputs = {
      skillContainer: {
        marginBottom: number;
        marginTop: number;
        padding: number
      };
      skillText: {
        paddingLeft: number;
      };
      title: {
        fontSize: number;
      };
    };
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({
      defaultValues: {
        skillContainer: {
          marginBottom: skillStyle.skillContainer.marginBottom as number,
          marginTop: skillStyle.skillContainer.marginTop as number,
          padding: skillStyle.skillContainer.padding as number
        },
        skillText: {
          paddingLeft: skillStyle.skillText.paddingLeft as number,
        },
        title: {
          fontSize: skillStyle.heading.fontSize as number,
        },
      },
    });
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log(data);
    };
  
    const handleIconChange = (value: string) => {
      const icon = iconData.find((i) => i.code === value);
      if (icon) {
        setSelectedIcon(icon);
        dispatch?.({
          type: "UPDATE_ICON",
          section: "iconState",
          key: "skills",
          data: [icon.fill, icon.outline],
        });
      }
    };
  
    return (
      <div className="h-100 border-green-200 rounded-lg ">
        <Card className="w-100">
          <CardHeader>
            <CardTitle>Skills Edit</CardTitle>
            <CardDescription>Edit your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
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
                            {/* 🟢 RENDERING SELECTED ICON: Use the FontAwesomeIcon component */}
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
                            {/* 🟢 RENDERING DROPDOWN ICON: Use the FontAwesomeIcon component */}
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
                <div className="grid gap-2">
                  <Label>Header Font Size:</Label>
                  <Controller
                    control={control}
                    name={"title.fontSize"}
                    render={({ field: { onChange } }) => (
                      <Input
                        type="number"
                        defaultValue={skillStyle.title.fontSize}
                        placeholder="Choose a font"
                        onChange={(e) => {
                          onChange(e.target.value);
                          dispatch({
                            type: "UPDATE_MARGIN",
                            section: "skillStyle",
                            property: "fontSize",
                            key: "title",
                            data: Number(e.target.value),
                          });
                        }}
                      />
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Skill item Font Size:</Label>
                  <Input
                    type="number"
                    placeholder="Choose a font"
                    defaultValue={skillStyle.skillRating.fontSize}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Icon Size:</Label>
                  <Input
                    type="number"
                    placeholder="Choose a font"
                    defaultValue={skillStyle.skillIcon.fontSize}
                  />
                </div>
                <div className="flex justify-evenly">
                  <Label>Top Margin</Label>
                  <Controller
                    control={control}
                    name={"skillContainer.marginBottom"}
                    render={({ field: { onChange, value } }) => (
                      <Slider
                        id="skillContainer.marginBottom"
                        defaultValue={[value]}
                        max={12}
                        step={1}
                        onValueChange={(vals) => {
                          const newValue = vals[0];
                          onChange(newValue);
                          dispatch({
                            type: "UPDATE_MARGIN",
                            section: "skillStyle",
                            property: "marginBottom",
                            key: "skillContainer",
                            data: newValue,
                          });
                        }}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-evenly">
                  <Label>Section Padding</Label>
                  <Controller
                    control={control}
                    name={"skillContainer.padding"}
                    render={({ field: { onChange, value } }) => (
                      <Slider
                        id="skillContainer.padding"
                        defaultValue={[value]}
                        max={20}
                        step={1}
                        onValueChange={(vals) => {
                          const newValue = vals[0];
                          onChange(newValue);
                          dispatch({
                            type: "UPDATE_MARGIN",
                            section: "skillStyle",
                            key: "skillContainer",
                            property: "padding",
                            data: newValue,
                          });
                        }}
                      />
                    )}
                  />
                </div>
                {/* <div className="flex justify-evenly">
                  <Label>Padding</Label>
                  <Controller
                    control={control}
                    name={"skillSection.marginBottom"}
                    render={({ field: { onChange, value } }) => (
                      <Slider
                        id="skillSection.marginBottom"
                        defaultValue={[value]}
                        max={12}
                        step={1}
                        onValueChange={(vals) => {
                          const newValue = vals[0];
                          onChange(newValue);
                          dispatch({
                            type: "UPDATE_MARGIN",
                            section: "headingStyle",
                            key: "headingSection",
                            property: "padding",
                            data: newValue,
                          });
                        }}
                      />
                    )}
                  />
                </div> */}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  };
  