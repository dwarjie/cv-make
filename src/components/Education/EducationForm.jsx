import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import EducationRow from "./EducationRow";

function EducationForm({ data, handleInputChange, handleAdd, handleDelete }) {
  const [currentRow, setCurrentRow] = useState(-1);
  const [isFold, setIsFold] = useState(true);

  const renderRows = () => {
    let rows = data || [];

    if (rows == []) {
      return;
    }

    return rows.map((education, key) => (
      <div key={key}>
        <button
          className="w-full block border-none text-left"
          onClick={() => {
            setCurrentRow(key);
            setIsFold((prevData) => !prevData);
          }}
        >
          <EducationRow inputValue={education.schoolName} />
        </button>
        {currentRow === key && !isFold ? unfoldRow(education) : ""}
      </div>
    ));
  };

  const unfoldRow = (info) => {
    return (
      <div className="grid grid-cols-6 gap-5 pt-3">
        <div className="col-span-6">
          <form className="flex flex-col gap-3">
            <div>
              <Label className="text-primary" htmlFor="schoolName">
                School Name
              </Label>
              <Input
                type="text"
                className="text-primary"
                id="schoolName"
                name="schoolName"
                placeholder="School ABC"
                value={info.schoolName}
                onChange={(e) => handleInputChange(e, info.id)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="degree">
                Degree:
              </Label>
              <Input
                type="text"
                className="text-primary"
                id="degree"
                name="degree"
                placeholder="e.g., BSCS, BSIT"
                value={info.degree}
                onChange={(e) => handleInputChange(e, info.id)}
              />
            </div>
            <div className="grid grid-cols-6 gap-1">
              <div className="col-span-3">
                <Label className="text-primary" htmlFor="email">
                  Start Date:
                </Label>
                <Input
                  type="month"
                  className="text-primary"
                  id="startDate"
                  name="startDate"
                  value={info.startDate}
                  onChange={(e) => handleInputChange(e, info.id)}
                />
              </div>
              <div className="col-span-3">
                <Label className="text-primary" htmlFor="email">
                  End Date:
                </Label>
                <Input
                  type="month"
                  className="text-primary"
                  id="endDate"
                  name="endDate"
                  value={info.endDate}
                  onChange={(e) => handleInputChange(e, info.id)}
                />
              </div>
            </div>
            <div>
              <Label className="text-primary" htmlFor="schoolLocation">
                Location:
              </Label>
              <Input
                type="text"
                className="text-primary"
                id="schoolLocation"
                name="schoolLocation"
                placeholder="Block, Street, City, State"
                value={info.schoolLocation}
                onChange={(e) => handleInputChange(e, info.id)}
              />
            </div>
          </form>
          <div className="flex flex-row justify-end">
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-md mt-3"
              onClick={() => handleDelete(info.id)}
            >
              <AiOutlineDelete size={"1rem"} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold text-primary">Experience</h1>
      {renderRows()}
      <button
        className="bg-primary px-6 py-2 rounded-md mt-3"
        onClick={handleAdd}
      >
        <AiOutlinePlus size={"1.5rem"} />
      </button>
    </div>
  );
}

export default EducationForm;
