import  { ColorPicker } from "../custom/CircleContainer"
import { Input } from "../ui/input"
import { Label } from "../ui/label"



export const TemplateStyle = () => {

    return (
        <div className="rounded-lg h-100">
            <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label>Page Margin:</Label>
                        <Input />
                    </div>
                    <div className="grid gap-2">
                        <Label>Section Spacing:</Label>
                        <Input />
                    </div>
                    <div className="grid gap-2">
                        <Label>Line Height:</Label>
                        <Input />
                    </div>

                    <div className="grid gap-2">
                        <Label>Color Selector</Label>
                        <ColorPicker />
                    </div>

                </div>
            </form>

        </div>
    )
}