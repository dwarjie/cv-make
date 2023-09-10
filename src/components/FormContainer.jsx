import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

function FormContainer() {
  return (
    <div className="flex flex-col justify-between col-span-6 px-5">
      <ExperienceForm />
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
