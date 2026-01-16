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
import { Slider } from "@/components/ui/slider";
import {
  useStyleDispatch,
  useStyles,
} from "../../../app/context/StyleContext";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

type Inputs = {
  headerTitle: {
    fontSize: number;
  };
  headerSubTitle: {
    fontSize: number;
  };
  contactText: {
    fontSize: number;
  };
  link: {
    fontSize: number;
  };
  headingSection: {
    marginBottom: number;
    marginTop: number
  };
};

export const HeadingStyleEdit = () => {
  const { headingStyle } = useStyles();
  const dispatch = useStyleDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      headerTitle: { fontSize: headingStyle.headerTitle.fontSize as number },
      headerSubTitle: {
        fontSize: headingStyle.headerSubTitle.fontSize as number,
      },
      headingSection: {
        marginBottom: headingStyle.headingSection.marginBottom as number,
        marginTop: headingStyle.headingSection.marginTop as number
      },
      contactText: { fontSize: headingStyle.contactText.fontSize as number },
      link: { fontSize: headingStyle.link.fontSize as number },
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch?.({
      type: "UPDATE_STYLE",
      section: "headingStyle",
      data: data,
    });
  };

  return (
    <div className="h-100 border-green-200 rounded-lg">
      <Card className="w-100 max-w-xl">
        <CardHeader>
          <CardTitle>Edit Styles</CardTitle>
          <CardDescription>Edit styles for Header</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Title Font Size:</Label>
                <Input
                  {...register("headerTitle.fontSize", { valueAsNumber: true })}
                  type="number"
                  placeholder="Choose a font"
                  defaultValue={headingStyle.headerTitle.fontSize}
                />
              </div>
              <div className="grid gap-2">
                <Label>SubTitle Font Size:</Label>
                <Input
                  {...register("headerSubTitle.fontSize", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Choose a font"
                  defaultValue={headingStyle.headerSubTitle.fontSize}
                />
              </div>
              <div className="grid gap-2">
                <Label>Contact Info Font Size:</Label>
                <Input
                  {...register("contactText.fontSize", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Choose a font"
                  defaultValue={headingStyle.contactText.fontSize}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex justify-evenly">
                  <Label>Bottom Margin</Label>
                  <Controller
                    control={control}
                    name={"headingSection.marginBottom"}
                    render={({ field: { onChange, value } }) => (
                      <Slider
                        id="headingSection.marginBottom"
                        defaultValue={[value]}
                        max={12}
                        step={1}
                        onValueChange={(vals) => {
                          const newValue = vals[0];
                          onChange(newValue);
                          dispatch({ 
                            type: "UPDATE_MARGIN", 
                            section: "headingStyle",
                            property: "marginBottom",
                            key: "headingSection",
                            data: newValue
                          });
                        }}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-evenly">
                  <Label>Top Margin</Label>
                  <Controller
                    control={control}
                    name={"headingSection.marginTop"}
                    render={({ field: { onChange, value } }) => (
                      <Slider
                        id="headingSection.marginTop"
                        defaultValue={[value]}
                        max={12}
                        step={1}
                        onValueChange={(vals) => {
                          const newValue = vals[0];
                          onChange(newValue);
                          dispatch({ 
                            type: "UPDATE_MARGIN", 
                            section: "headingStyle",
                            property: "marginTop",
                            key: "headingSection",
                            data: newValue
                          });
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button
              className=" hover:bg-green-500 w-full"
              variant={"outline"}
              type="submit"
            >
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
