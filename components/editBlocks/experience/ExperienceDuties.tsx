
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash2 } from "lucide-react";
import { Controller, useFieldArray } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ExperienceDuties = ({ nestIndex, control, dispatch }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `experience.${nestIndex}.duties` as const,
  });

  return (
    <div className="flex flex-col gap-2 mt-4">
      <Label>Duties:</Label>
      {fields.map((field, k) => (
        <div key={field.id} className="flex gap-2">
          <Controller
            control={control}
            name={`experience.${nestIndex}.duties.${k}` as const}
            render={({ field: { onChange, value } }) => (
              <Textarea
                value={value.content as string}
                onChange={(e) => {
                  const val = e.target.value;
                  onChange(val);
                  dispatch?.({
                    type: "EDIT_DUTY", // Create a specific action for nested arrays
                    payload: {
                      section: "experience",
                      index: nestIndex,
                      dutyIndex: k,
                      value: val,
                    },
                  });
                }}
              />
            )}
          />
          <div className="flex flex-col gap-5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => {
                remove(k);
                dispatch?.({
                  type: "DELETE_DUTY",
                  payload: {
                    section: "experience",
                    index: nestIndex,
                    dutyIndex: k,
                    value: "",
                  },
                });
              }}
            >
              <Trash2 color="red" />
            </Button>
            <Label>Visible</Label>
            <Controller 
              control={control}
              name={`experience.${nestIndex}.duties.${k}` as const}
              render={({ field: { onChange, value } }) => {
            
                return (
                  <Switch
                    id={nestIndex}
                    checked={value.visible as boolean}
                    // Use 'checked' (controlled) instead of 'defaultChecked'
                    // checked={sectionVisibility}
                    // // Manually pipe the custom event into the RHF onChange
                    onCheckedChange={(checked) => {
                      onChange(checked)

                      dispatch?.({
                        type: "SET_DUTY_VISIBILITY",
                        payload: {
                          section: "experience",
                          index: nestIndex,
                          dutyIndex: k,
                          value: checked,
                        }
                    })
                    }
                      
                    }
                  />
                )
              }}
            />
            
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append("")}
      >
        Add Duty
      </Button>
    </div>
  );
};
