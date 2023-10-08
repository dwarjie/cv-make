import { v4 as uuid } from "uuid";
import cvData from "./context/initialData";
import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";

function FormContainer({ fetchData }) {
  const SECTIONS = [
    { name: "personal" },
    { name: "experience" },
    { name: "education" },
  ];
  const [currentSection, setCurrenSection] = useState(0);
  const [personal, setPersonal] = useState(cvData.emptyResumeData[0]);
  const [experience, setExperience] = useState(cvData.emptyResumeData[1]);
  const [education, setEducation] = useState(cvData.emptyResumeData[2]);

  useEffect(() => {
    fetchData([personal, experience, education]);
  }, [personal, experience, education]);

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

  const handleEducationInputChange = (e, id) => {
    let name = e.target.name;
    let value = e.target.value;
    setEducation((prevData) => {
      const newData = prevData.map((educ) => {
        if (educ.id === id) {
          return { ...educ, [name]: value };
        }

        return educ;
      });

      return newData;
    });
  };

  const addExperience = () => {
    let newExperience = {
      id: uuid().slice(0, 8),
      companyName: "New Experience",
      position: "",
      startDate: "2023-01",
      endDate: "2023-01",
      companyLocation: "",
      description: "",
    };
    setExperience([...experience, newExperience]);
  };

  const deleteExperience = (experienceId) => {
    setExperience(experience.filter((exp) => exp.id !== experienceId));
  };

  const addEducation = () => {
    let newEducation = {
      id: uuid().slice(0, 8),
      schoolName: "New education",
      degree: "",
      startDate: "2023-01",
      endDate: "2023-01",
      schoolLocation: "",
    };
    setEducation([...education, newEducation]);
  };

  const deleteEducation = (educationId) => {
    setEducation(education.filter((educ) => educ.id !== educationId));
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
        return (
          <EducationForm
            data={education}
            handleInputChange={handleEducationInputChange}
            handleAdd={addEducation}
            handleDelete={deleteEducation}
          />
        );
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
