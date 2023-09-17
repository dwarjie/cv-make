import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { AiOutlinePlus } from "react-icons/ai";
import EducationRow from "./EducationRow";

function EducationForm() {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold text-primary">Experience</h1>
      <EducationRow inputValue={"Education 1"} />
      <div className="grid grid-cols-6 gap-5 pt-3">
        <div className="col-span-6">
          <form className="flex flex-col gap-3">
            <div>
              <Label className="text-primary" htmlFor="schoolName">
                School Name
              </Label>
              <Input type="text" id="schoolName" placeholder="School ABC" />
            </div>
            <div>
              <Label className="text-primary" htmlFor="degree">
                Degree:
              </Label>
              <Input type="text" id="position" placeholder="e.g., BSCS, BSIT" />
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
              <Label className="text-primary" htmlFor="schoolLocation">
                Location:
              </Label>
              <Input
                type="text"
                id="schoolLocation"
                placeholder="Block, Street, City, State"
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

export default EducationForm;
