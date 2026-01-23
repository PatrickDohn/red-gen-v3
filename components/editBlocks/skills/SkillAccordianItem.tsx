import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui/button";
  
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
    Control,
    Controller,
    Path,
    SubmitHandler,
    useFieldArray,
    useForm,
  } from "react-hook-form";
  
  import { Switch } from "@/components/ui/switch";
  import { Trash2 } from "lucide-react";

  import { useResumeDispatch } from "@/app/context/ResumeContext";
  import { ResumeDocProps, Skills } from "@/app/types/resume-data";
import { useStyleDispatch } from "@/app/context/test";
  
  type Inputs = {
    programmingLanguages: Skills[];
    frameworksLibraries: Skills[];
    toolsDatabases: Skills[];
  };
  
  interface AccordianItemProps {
    sectionVisibility: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<Inputs, any, Inputs>;
    section: string;
  }
  
  export const CustomAccordianItem = ({
    sectionVisibility,
    control,
    section,
  }: AccordianItemProps) => {
    const dispatch = useResumeDispatch();
    const dispatchStyle = useStyleDispatch();
  
    const { fields, remove, append } = useFieldArray({
      control,
      name: section as
        | "programmingLanguages"
        | "frameworksLibraries"
        | "toolsDatabases",
    });
  
    return (
      <AccordionContent id={`${section}`} className="flex flex-col gap-4 text-balance">
        <div className="flex gap-2 w-full">
          <Label>Visible</Label>
  
          <Switch
            className="ml-5"
            id={"sectionVisibility"}
            // Use 'checked' (controlled) instead of 'defaultChecked'
            checked={sectionVisibility}
            // Manually pipe the custom event into the RHF onChange
            onCheckedChange={(checked) =>
              dispatchStyle?.({
                type: "SET_VISIBILITY",
                key: section,
                data: checked,
              })
            }
          />
        </div>
        {fields.map((item, idx) => {
          return (
            <div key={item.id} className="flex gap-2 w-full">
              <Label className="mt-2">Skill:</Label>
              <Controller
                control={control}
                name={`${section}.${idx}.skill` as Path<Inputs>}
                render={({ field: { onChange, value } }) => (
                  <Input
                    id={`skill-${idx}`}
                    value={(value as string) || ""}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      onChange(newValue);
                      dispatch?.({
                        type: "EDIT_SKILLS",
                        payload: {
                          section: section as keyof ResumeDocProps,
                          index: idx,
                          field: "skill",
                          value: newValue,
                        },
                      });
                    }}
                  />
                )}
              />
              <Label>Rating:</Label>
              <Controller
                control={control}
                name={`${section}.${idx}.rating` as Path<Inputs>}
                render={({ field }) => (
                  <Select
                    name={`rating-${idx}`}
                    // Pass the current form value back to the Select
                    value={field.value?.toString()}
                    onValueChange={(val) => {
                      field.onChange(Number(val));
                      dispatch?.({
                        type: "EDIT_SKILLS",
                        payload: {
                          section: section as keyof ResumeDocProps,
                          index: idx,
                          field: "rating",
                          value: Number(val),
                        },
                      });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={item.rating} />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 7 }, (_, idx) => (
                        <SelectItem
                          key={`rating-${idx}`} // unique key
                          value={(idx + 1).toString()} // correct value
                        >
                          {idx + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                      section: section as keyof ResumeDocProps,
                      index: idx,
                      field: "rating",
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
            const newItem = { skill: "**Update**", rating: 1 };
            append(newItem); // Adds to RHF with a unique ID
            dispatch?.({
              type: "ADD_SKILL",
              payload: { section: section as keyof ResumeDocProps },
            }); // Adds to Context
          }}
        >
          Add Skill
        </Button>
      </AccordionContent>
    );
  };
  