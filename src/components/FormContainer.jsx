import initialData from "./context/initialData";
import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";

function FormContainer() {
  const [data, setData] = useState(initialData);

  const nextForm = () => {
    let currentSection = data.currentSection;
    const maxForm = 2;
    const minForm = 0;

    if (currentSection === maxForm) {
      setData((prevData) => ({ ...prevData, currentSection: minForm }));

      renderForm();
      return;
    }

    setData((prevData) => ({
      ...prevData,
      currentSection: currentSection + 1,
    }));

    renderForm();
  };

  const prevForm = () => {
    let currentSection = data.currentSection;
    const minForm = 0;
    const maxForm = 2;

    if (currentSection === minForm) {
      setData((prevData) => ({ ...prevData, currentSection: maxForm }));

      renderForm();
      return;
    }

    setData((prevData) => ({
      ...prevData,
      currentSection: currentSection - 1,
    }));

    renderForm();
  };

  const handlePersonalInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      personal: {
        [name]: value,
      },
    }));
  };

  const renderForm = () => {
    let currentForm = data.sections[data.currentSection].name;
    switch (currentForm) {
      case "personal":
        return (
          <PersonalForm
            data={data}
            handleInputChange={handlePersonalInputChange}
          />
        );
      case "experience":
        return <ExperienceForm data={data} />;
      case "education":
        return <EducationForm />;
      default:
        return <PersonalForm />;
    }
  };

  return (
    <div className="flex flex-col justify-between col-span-6 px-5">
      {renderForm()}
      <div className="flex flex-row justify-between gap-5 mt-12">
        <div className="flex flex-row gap-5">
          <button
            className="bg-primary px-5 rounded-md"
            onClick={() => prevForm()}
          >
            <MdNavigateBefore size={"2.5rem"} />
          </button>
          <button
            className="bg-primary px-5 rounded-md"
            onClick={() => nextForm()}
          >
            <MdNavigateNext size={"2.5rem"} />
          </button>
        </div>
        <button className="bg-primary px-6 rounded-md">
          <HiDownload size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
}

export default FormContainer;
