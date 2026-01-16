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
import { Switch } from "@/components/ui/switch";
import { useResumeData, useResumeDispatch } from "@/app/context/ResumeContext";
import { toTitleCase } from "@/lib/utils";
import { ContactInfo } from "@/app/types/resume-data";
import { Value } from "@radix-ui/react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  name: string;
  title: { value: string; visible: boolean };
  contact: ContactInfo;
};

export const HeadingEdit = () => {
  const data = useResumeData();
  const dispatch = useResumeDispatch();
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      contact: data.contact,
      title: data.title,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch?.({
      type: "UPDATE_HEADER",
      payload: data,
    });
  };
  console.log(data.title.value, "HERE");
  return (
    <div className="h-100 border-green-200 rounded-lg">
      <Card className="w-100 max-w-xl">
        <CardHeader>
          <CardTitle>Heading Edit</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name:</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="Your name here"
                  required
                  defaultValue={data.name}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex flex-row justify-between">
                  <Label htmlFor="email">Title:</Label>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="airplane-mode">Visible</Label>
                    <Controller
                      control={control}
                      name={`title.visible`}
                      render={({ field: { onChange, value } }) => (
                        <Switch
                          id={"titleVisibility"}
                          // Use 'checked' (controlled) instead of 'defaultChecked'
                          checked={value}
                          // Manually pipe the custom event into the RHF onChange
                          onCheckedChange={onChange}
                        />
                      )}
                    />
                  </div>
                </div>
                <Input
                  id="title"
                  type="text"
                  {...register("title.value")}
                  placeholder="Most recent title held"
                  defaultValue={data.title.value}
                />
              </div>
              {(
                Object.keys(data.contact) as Array<keyof Inputs["contact"]>
              ).map((key) => {
                const info = data.contact[key];

                return (
                  <div key={key} className="grid gap-2">
                    <div className="flex flex-row justify-between">
                      <Label htmlFor="email">{toTitleCase(key)}:</Label>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="airplane-mode">Visible</Label>
                        <Controller
                          control={control}
                          name={`contact.${key}.visible`}
                          render={({ field: { onChange, value } }) => (
                            <Switch
                              id={`visible-${key}`}
                              // Use 'checked' (controlled) instead of 'defaultChecked'
                              checked={value}
                              // Manually pipe the custom event into the RHF onChange
                              onCheckedChange={onChange}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <Input
                      {...register(`contact.${key}.value` as const)}
                      defaultValue={info.value}
                    />
                  </div>
                );
              })}
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
