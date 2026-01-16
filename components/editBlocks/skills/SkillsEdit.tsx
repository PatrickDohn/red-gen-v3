import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui/button";
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
  import { useResumeData, useResumeDispatch } from "@/app/context/ResumeContext";
  import {
    useStyleDispatch,
    useStyles,
  } from "@/app/context/StyleContext";
  import { IconData, iconDictionary } from "@/app/data/iconMap";
  import {
    faCheck,
    faCircle,
    faCircleCheck,
    faStar,
    IconDefinition,
  } from "@fortawesome/free-solid-svg-icons";
  
  import { faCircle as CircleOutline } from "@fortawesome/free-regular-svg-icons";
  import { useState } from "react";
  import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
  import { ResumeDocProps, Skills } from "@/app/types/resume-data";
  import { Switch } from "@/components/ui/switch";
  import { CustomAccordianItem } from "./SkillAccordianItem";
  
  interface SelectionType {
    name: string;
    iconObject: IconDefinition;
    code: string;
    fill: IconData;
    outline: IconData;
  }
  
  type Inputs = {
    programmingLanguages: Skills[];
    frameworksLibraries: Skills[];
    toolsDatabases: Skills[];
  };
  
  export const SkillsEdit = () => {
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
          code: "\u{f005}",
          family: "Font Awesome Regular",
          iconObject: faStar,
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
          family: "Font Awesome Regular",
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
    const data = useResumeData();
    const { sectionVisibilityState } = useStyles();
    const dispatch = useResumeDispatch();
    const dispatchStyle = useStyleDispatch();
    console.log(sectionVisibilityState, "!!!!");
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<Inputs>({
      defaultValues: {
        programmingLanguages: data.programmingLanguages,
        frameworksLibraries: data.frameworksLibraries,
        toolsDatabases: data.toolsDatabases,
      },
    });
  
    const { fields, remove, append } = useFieldArray({
      control,
      name: "frameworksLibraries",
    });
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log(data);
    };
  
    const handleIconChange = (value: string) => {
      const icon = iconData.find((i) => i.code === value);
  
      if (icon) {
        setSelectedIcon(icon);
      }
    };
    console.log(sectionVisibilityState["programmingLanguages"].visibility);
  
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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={"proskill"}>
                      <AccordionTrigger>Programming Languages</AccordionTrigger>
  
                      <CustomAccordianItem
                        sectionVisibility={
                          sectionVisibilityState["programmingLanguages"]
                            .visibility
                        }
                        control={control}
                        section={"programmingLanguages"}
                      />
                    </AccordionItem>
                    <AccordionItem value={"frameLang"}>
                      <AccordionTrigger>Frameworks/Libraries</AccordionTrigger>
  
                      <CustomAccordianItem
                        sectionVisibility={
                          sectionVisibilityState["frameworksLibraries"].visibility
                        }
                        control={control}
                        section={"frameworksLibraries"}
                      />
                    </AccordionItem>
                    <AccordionItem value={"toolData"}>
                      <AccordionTrigger>Tools & Databases</AccordionTrigger>
                      <CustomAccordianItem
                        sectionVisibility={
                          sectionVisibilityState["toolsDatabases"].visibility
                        }
                        control={control}
                        section={"toolsDatabases"}
                      />
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  };
  