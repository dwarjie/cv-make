import Header from "./Resume/Header";
import ResumeEducation from "./Resume/ResumeEducation";
import ResumeExperience from "./Resume/ResumeExperience";

function ResumeContainer() {
  return (
    <div className="col-span-6 px-5 shadow-lg border border-primary-foreground text-primary font-body overflow-y-scroll text-justify">
      <div className="flex flex-col gap-3 py-5">
        <Header />
        <hr className="h-px bg-primary border-0" />
        <ResumeExperience />
        <hr className="h-px bg-primary border-0" />
        <ResumeEducation />
      </div>
    </div>
  );
}

export default ResumeContainer;
