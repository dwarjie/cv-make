import ExperienceRow from "./ExperienceRow";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { AiOutlinePlus } from "react-icons/ai";

function ExperienceForm() {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold text-primary">Experience</h1>
      <ExperienceRow inputValue={"Experience 1"} />
      <div className="grid grid-cols-6 gap-5 pt-3">
        <div className="col-span-6">
          <form className="flex flex-col gap-3">
            <div>
              <Label className="text-primary" htmlFor="companyName">
                Company Name:
              </Label>
              <Input type="text" id="companyName" placeholder="Company ABC" />
            </div>
            <div>
              <Label className="text-primary" htmlFor="position">
                Position title:
              </Label>
              <Input type="text" id="position" placeholder="e.g., Developer" />
            </div>
            <div className="grid grid-cols-6 gap-1">
              <div className="col-span-3">
                <Label className="text-primary" htmlFor="email">
                  Start Date:
                </Label>
                <Input type="date" id="startDate" />
              </div>
              <div className="col-span-3">
                <Label className="text-primary" htmlFor="email">
                  End Date:
                </Label>
                <Input type="date" id="endDate" />
              </div>
            </div>
            <div>
              <Label className="text-primary" htmlFor="companyLocation">
                Location:
              </Label>
              <Input
                type="text"
                id="companyLocation"
                placeholder="Block, Street, City, State"
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="description">
                Address:
              </Label>
              <Textarea
                id="description"
                placeholder="Type your description here."
              />
            </div>
          </form>
        </div>
      </div>
      <button className="bg-primary px-6 py-2 rounded-md mt-3">
        <AiOutlinePlus size={"1.5rem"} />
      </button>
    </div>
  );
}

export default ExperienceForm;
