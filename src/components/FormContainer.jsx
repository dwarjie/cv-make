import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { useGlobalState } from "@/context/GlobalStateProvider";

function FormContainer() {
  const [state, dispatch] = useGlobalState();

  const renderForm = () => {
    let sectionName = state.sections[state.currentSection].name;
    let currentSection = <PersonalForm />;
    switch (sectionName) {
      case "personal":
        currentSection = <PersonalForm />;
        break;
      case "experience":
        currentSection = <ExperienceForm />;
        break;
      case "education":
        currentSection = <EducationForm />;
        break;
    }

    return currentSection;
  };

  return (
    <div className="flex flex-col justify-between col-span-6 px-5">
      {renderForm()}
      <div className="flex flex-row justify-between gap-5 mt-12">
        <div className="flex flex-row gap-5">
          <button className="bg-primary px-5 rounded-md">
            <MdNavigateNext size={"2.5rem"} />
          </button>
          <button className="bg-primary px-5 rounded-md">
            <MdNavigateBefore size={"2.5rem"} />
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
