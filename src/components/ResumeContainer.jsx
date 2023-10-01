import Header from "./Resume/Header";
import ResumeEducation from "./Resume/ResumeEducation";
import ResumeExperience from "./Resume/ResumeExperience";

function ResumeContainer({ data }) {
  return (
    <div className="col-span-6 px-5 shadow-lg border border-primary-foreground text-primary font-body overflow-y-scroll text-justify">
      <div className="flex flex-col gap-3 py-5">
        <Header data={data[0]} />
        <hr className="h-px bg-primary border-0" />
        <ResumeExperience data={data[1]} />
        <hr className="h-px bg-primary border-0" />
        <ResumeEducation data={data[2]} />
      </div>
    </div>
  );
}

export default ResumeContainer;
