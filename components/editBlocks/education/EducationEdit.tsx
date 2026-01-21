import { useResumeData, useResumeDispatch } from "@/app/context/ResumeContext";
import { EducationData } from "@/app/types/resume-data";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useFieldArray, useForm } from "react-hook-form";

type Inputs = {
  education: EducationData[];
};

export const EducationEdit = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      education: data.education,
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Education Edit</CardTitle>
        <CardDescription>Edit your Education</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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
                    <AccordionTrigger>{e.school}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <div className="grid gap-2">
                        <Label>School:</Label>
                        <Controller
                          control={control}
                          name={`education.${idx}.school`}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              name={`school.${idx}`}
                              type="text"
                              value={value}
                              onChange={(e) => {
                                onChange(e.target.value);
                                dispatch?.({
                                  type: "EDIT_SKILLS",
                                  payload: {
                                    section: "education",
                                    index: idx,
                                    field: "school",
                                    value: e.target.value,
                                  },
                                });
                              }}
                            />
                          )}
                        />
                      </div>
                      <div className="grid gap-2">
                      <Label>School:</Label>
                        <Controller
                          control={control}
                          name={`education.${idx}.duration`}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              name={`duration.${idx}`}
                              type="text"
                              value={value}
                              onChange={(e) => {
                                onChange(e.target.value);
                                dispatch?.({
                                  type: "EDIT_SKILLS",
                                  payload: {
                                    section: "education",
                                    index: idx,
                                    field: "duration",
                                    value: e.target.value,
                                  },
                                });
                              }}
                            />
                          )}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Textarea value={e.about} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
