import ExperienceRow from "./ExperienceRow";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function ExperienceForm({ data, handleInputChange }) {
  const [currentRow, setCurrentRow] = useState(-1);
  const [isFold, setIsFold] = useState(true);

  const renderRows = () => {
    let rows = data.experience || [];

    if (rows == []) {
      return;
    }

    return rows.map((experience, key) => (
      <div key={key}>
        <button
          className="w-full block border-none text-left"
          onClick={() => {
            setCurrentRow(key);
            setIsFold((prevData) => !prevData);
          }}
        >
          <ExperienceRow inputValue={experience.companyName} />
        </button>
        {currentRow === key && !isFold ? unfoldRow(experience) : ""}
      </div>
    ));
  };

  const unfoldRow = (info) => {
    return (
      <div className="grid grid-cols-6 gap-5 pt-3">
        <div className="col-span-6">
          <form className="flex flex-col gap-3">
            <div>
              <Label className="text-primary" htmlFor="companyName">
                Company Name:
              </Label>
              <Input
                type="text"
                className="text-primary"
                id="companyName"
                name="companyName"
                placeholder="Company ABC"
                value={info.companyName}
                onChange={(e) => handleInputChange(e, info.id)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="position">
                Position title:
              </Label>
              <Input
                type="text"
                className="text-primary"
                id="position"
                name="position"
                placeholder="e.g., Developer"
                value={info.position}
              />
            </div>
            <div className="grid grid-cols-6 gap-1">
              <div className="col-span-3">
                <Label className="text-primary" htmlFor="email">
                  Start Date:
                </Label>
                <Input
                  type="date"
                  className="text-primary"
                  id="startDate"
                  name="startDate"
                  value={info.startDate}
                />
              </div>
              <div className="col-span-3">
                <Label className="text-primary" htmlFor="email">
                  End Date:
                </Label>
                <Input
                  type="date"
                  className="text-primary"
                  id="endDate"
                  name="endDate"
                  value={info.endDate}
                />
              </div>
            </div>
            <div>
              <Label className="text-primary" htmlFor="companyLocation">
                Location:
              </Label>
              <Input
                type="text"
                className="text-primary"
                id="companyLocation"
                name="companyLocation"
                placeholder="Block, Street, City, State"
                value={info.companyLocation}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="description">
                Address:
              </Label>
              <Textarea
                id="description"
                className="text-primary"
                placeholder="Type your description here."
                name="description"
                value={info.description}
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold text-primary">Experience</h1>
      {renderRows()}
      <button className="bg-primary px-6 py-2 rounded-md mt-3">
        <AiOutlinePlus size={"1.5rem"} />
      </button>
    </div>
  );
}

export default ExperienceForm;
