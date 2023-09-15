import { Input } from "../ui/input";
import { Label } from "../ui/label";

function PersonalForm() {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold text-primary">Personal Details</h1>
      <div className="grid grid-cols-6 gap-5 pt-3">
        <div className="col-span-2 md:col-span-3 w-auto items-center gap-1">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" className="text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 pt-3">
        <div className="col-span-6">
          <form className="flex flex-col gap-3">
            <div>
              <Label htmlFor="firstName">First Name:</Label>
              <Input type="text" id="firstName" placeholder="Your first name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name:</Label>
              <Input type="text" id="lastName" placeholder="Your last name" />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" placeholder="email@sample.com" />
            </div>
            <div>
              <Label htmlFor="phoneNo">Mobile Number:</Label>
              <Input type="text" id="phoneNo" placeholder="+6309090909" />
            </div>
            <div>
              <Label htmlFor="address">Address:</Label>
              <Input
                type="text"
                id="adress"
                placeholder="Block, Street, City, State"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalForm;
