import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import { useResumeData, useResumeDispatch } from "@/app/context/ResumeContext";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { ExperienceData } from "@/app/types/resume-data";
import { ExperienceDuties } from "./ExperienceDuties";
import { Switch } from "@/components/ui/switch";

type Inputs = {
  experience: ExperienceData[];
};

export const ExperienceEdit = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      experience: data.experience,
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-100 border-green-200 rounded-lg">
      <Card className="w-100">
        <CardHeader>
          <CardTitle>Experience Edit</CardTitle>
          <CardDescription>Edit your experience</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  // defaultValue="item-1"
                >
                  {fields.map((e, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger>{e.title}</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="grid gap-2">
                          <Button variant="ghost" size={"icon"}>
                            <Trash2 color="red" />
                          </Button>
                          <Controller
                            control={control}
                            name={
                              `experience.${idx}` as const
                            }
                            render={({ field: { onChange, value } }) => {
                              return (
                                <Switch
                                  id={`experience.${idx}`}
                                  checked={value.visible as boolean}
                                  // Use 'checked' (controlled) instead of 'defaultChecked'
                                  // checked={sectionVisibility}
                                  // // Manually pipe the custom event into the RHF onChange
                                  onCheckedChange={(checked) => {
                                    onChange(checked);

                                    dispatch?.({
                                      type: "EXPERIENCE_VISIBILITY",
                                      payload: {
                                        section: "experience",
                                        index: idx,
                                        value: checked,
                                      },
                                    });
                                  }}
                                />
                              );
                            }}
                          />

                          <Label>Title:</Label>
                          <Controller
                            control={control}
                            name={`experience.${idx}.title`}
                            render={({ field: { onChange, value } }) => (
                              <Input
                                name={`title.${idx}`}
                                type="text"
                                value={value}
                                onChange={(e) => {
                                  const newValue = e.target.value;
                                  onChange(newValue);
                                  dispatch?.({
                                    type: "EDIT_SKILLS",
                                    payload: {
                                      section: "experience",
                                      index: idx,
                                      field: "title",
                                      value: newValue,
                                    },
                                  });
                                }}
                              />
                            )}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Company:</Label>
                          <Controller
                            control={control}
                            name={`experience.${idx}.company`}
                            render={({ field: { onChange, value } }) => (
                              <Input
                                name={`company.${idx}`}
                                type="text"
                                placeholder="Most recent title held"
                                value={value}
                                onChange={(e) => {
                                  const newValue = e.target.value;
                                  onChange(newValue);
                                  dispatch?.({
                                    type: "EDIT_SKILLS",
                                    payload: {
                                      section: "experience",
                                      index: idx,
                                      field: "company",
                                      value: newValue,
                                    },
                                  });
                                }}
                              />
                            )}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label>Duration:</Label>
                          <Controller
                            control={control}
                            name={`experience.${idx}.duration`}
                            render={({ field: { onChange, value } }) => (
                              <Input
                                name={`duration.${idx}`}
                                type="text"
                                placeholder="Most recent title held"
                                value={value}
                                onChange={(e) => {
                                  const newValue = e.target.value;
                                  onChange(newValue);
                                  dispatch?.({
                                    type: "EDIT_SKILLS",
                                    payload: {
                                      section: "experience",
                                      index: idx,
                                      field: "duration",
                                      value: newValue,
                                    },
                                  });
                                }}
                              />
                            )}
                          />
                        </div>
                        <ExperienceDuties
                          nestIndex={idx}
                          control={control}
                          dispatch={dispatch}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
