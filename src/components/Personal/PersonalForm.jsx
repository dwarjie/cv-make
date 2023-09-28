import { Input } from "../ui/input";
import { Label } from "../ui/label";

function PersonalForm({ data, handleInputChange }) {
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
              <Label className="text-primary" htmlFor="firstName">
                First Name:
              </Label>
              <Input
                type="text"
                id="firstName"
                className="text-primary"
                name="firstName"
                placeholder="Your first name"
                value={data.personal.firstName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="lastName">
                Last Name:
              </Label>
              <Input
                type="text"
                id="lastName"
                className="text-primary"
                name="lastName"
                placeholder="Your last name"
                value={data.personal.lastName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="email">
                Email:
              </Label>
              <Input
                type="email"
                id="email"
                className="text-primary"
                name="email"
                placeholder="email@sample.com"
                value={data.personal.email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="phoneNo">
                Mobile Number:
              </Label>
              <Input
                type="text"
                id="phoneNo"
                className="text-primary"
                placeholder="+6309090909"
                value={data.personal.phoneNo}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="address">
                Address:
              </Label>
              <Input
                type="text"
                id="adress"
                className="text-primary"
                placeholder="Block, Street, City, State"
                value={data.personal.address}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalForm;
