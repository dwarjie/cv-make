import { v4 as uuid } from "uuid";
import initialData from "./context/initialData";
import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";

function FormContainer() {
  const SECTIONS = [
    { name: "personal" },
    { name: "experience" },
    { name: "education" },
  ];
  const [data, setData] = useState(initialData);
  const [currentSection, setCurrenSection] = useState(0);
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
  });
  const [experience, setExperience] = useState([
    {
      id: uuid().slice(0, 8),
      companyName: "Sample Company",
      position: "Software Engineer",
      startDate: "2019-01-01",
      endDate: "2029-01-01",
      companyLocation: "",
      description: "",
    },
  ]);

  const nextForm = () => {
    const maxForm = 2;
    const minForm = 0;

    if (currentSection === maxForm) {
      setCurrenSection((prevState) => minForm);

      renderForm();
      return;
    }

    setCurrenSection((prevState) => prevState + 1);

    renderForm();
  };

  const prevForm = () => {
    const minForm = 0;
    const maxForm = 2;

    if (currentSection === minForm) {
      setCurrenSection((prevState) => maxForm);

      renderForm();
      return;
    }

    setCurrenSection((prevState) => prevState - 1);

    renderForm();
  };

  const handlePersonalInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPersonal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExperienceInputChange = (e, id) => {
    let name = e.target.name;
    let value = e.target.value;
    setExperience((prevData) => {
      const newData = prevData.map((exp) => {
        if (exp.id === id) {
          return { ...exp, [name]: value };
        }

        return exp;
      });

      return newData;
    });
  };

  const addExperience = () => {
    let newExperience = {
      id: uuid().slice(0, 8),
      companyName: "New Experience",
      position: "",
      startDate: "",
      endDate: "",
      companyLocation: "",
      description: "",
    };
    setExperience([...experience, newExperience]);
  };

  const deleteExperience = (experienceId) => {
    setExperience(experience.filter((exp) => exp.id !== experienceId));
  };

  const renderForm = () => {
    let currentForm = SECTIONS[currentSection].name;
    switch (currentForm) {
      case "personal":
        return (
          <PersonalForm
            data={personal}
            handleInputChange={handlePersonalInputChange}
          />
        );
      case "experience":
        return (
          <ExperienceForm
            data={experience}
            handleInputChange={handleExperienceInputChange}
            handleAdd={addExperience}
            handleDelete={deleteExperience}
          />
        );
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
