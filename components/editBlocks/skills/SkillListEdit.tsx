import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomAccordianItem } from "./SkillAccordianItem";
import {
  Controller,
  Path,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Skills } from "@/app/types/resume-data";
import { useResumeData, useResumeDispatch } from "@/app/context/ResumeContext";
import { useStyleDispatch, useStyles } from "@/app/context/StyleContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type Inputs = {
  skills: Skills[];
};

export const SkillListEdit = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();
  const dispatchStyle = useStyleDispatch();
  const { sectionVisibilityState } = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      skills: data.skills,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const { fields, remove, append } = useFieldArray({
    control,
    name: "skills",
  });

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
                    <AccordionTrigger>Skills</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      {fields.map((item, idx) => {
                        return (
                          <div key={item.id} className="flex gap-2 w-full">
                            <Controller
                              control={control}
                              name={`skills.${idx}.skill` as Path<Inputs>}
                              render={({ field: { onChange, value } }) => (
                                <Input
                                  id={`skills-${idx}`}
                                  value={(value as string) || ""}
                                  onChange={(e) => {
                                    const newValue = e.target.value;
                                    onChange(newValue);
                                    dispatch?.({
                                      type: "EDIT_SKILLS",
                                      payload: {
                                        section: "skills",
                                        index: idx,
                                        field: "skill",
                                        value: newValue,
                                      },
                                    });
                                  }}
                                />
                              )}
                            />
                            <Button
                              size="icon-sm"
                              type="button"
                              variant="destructive"
                              onClick={() => {
                                remove(idx); // This safely removes the item from Hook Form state
                                dispatch?.({
                                  type: "DELETE_SKILL",
                                  payload: {
                                    section: "skills",
                                    index: idx,
                                    field: "skill",
                                    value: item,
                                  },
                                });
                              }}
                            >
                              <Trash2 />
                            </Button>
                          </div>
                        );
                      })}
                      <Button
                        type="button"
                        onClick={() => {
                          const newItem = {
                            skill: "**Update**",
                            rating: 1,
                          };
                          append(newItem); // Adds to RHF with a unique ID
                          dispatch?.({
                            type: "ADD_SKILL",
                            payload: {
                              section: "skills",
                            },
                          }); // Adds to Context
                        }}
                      >
                        Add Skill
                      </Button>
                    </AccordionContent>
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
