import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

function PersonalForm() {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pb-2">Personal Details</h1>
      <div className="grid grid-cols-6">
        <div className="col-span-1 md:col-span-2 w-auto items-center gap-1">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <form className="flex flex-row">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="Your first name" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalForm;
