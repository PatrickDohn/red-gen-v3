import { useStyleDispatch, useStyles, useStyleState } from "@/app/context/test";
import { ColorPicker } from "../custom/CircleContainer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Controller, useForm } from "react-hook-form";
import { Slider } from "../ui/slider";

type Inputs = {
  documentPadding: number;
};

export const TemplateStyle = () => {
  const { theme } = useStyleState();
  const dispatch = useStyleDispatch();

  console.log(theme.documentPadding, "UPDATED")

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      documentPadding: theme.documentPadding
    }
  });

  return (
    <div className="rounded-lg h-100">
      <form>
        <div className="flex flex-col gap-6">
        <div className="grid gap-2">
            <Label>Page Margin:</Label>
            <Controller
              control={control}
              name={"documentPadding"}
              render={({ field: { onChange, value } }) => (
                <Slider
                  id="documentPadding"
                  defaultValue={[value]}
                  max={30}
                  step={1}
                  onValueChange={(vals) => {
                    const newValue = vals[0];
                    onChange(newValue);
                    dispatch({
                      type: "SET_PAGE_MARGIN",
                      payload: {
                        documentPadding: newValue
                      },
                    });
                  }}
                />
              )}
            />
          </div>
          {/* <div className="grid gap-2">
            <Label>Page Margin:</Label>
            <Slider
              id="headingSection.marginBottom"
              defaultValue={[4]}
              max={12}
              step={1}
              // onValueChange={(vals) => {
              //   const newValue = vals[0];
              //   onChange(newValue);
              //   dispatch({
              //     type: "UPDATE_MARGIN",
              //     section: "headingStyle",
              //     property: "marginBottom",
              //     key: "headingSection",
              //     data: newValue
              //   });
              // }}
            />
          </div>
         
          <div className="grid gap-2">
            <Label>Line Height:</Label>
            <Input />
          </div> */}

          <div className="grid gap-2">
            <Label>Color Selector</Label>
            <ColorPicker />
          </div>
        </div>
      </form>
    </div>
  );
};
