import ResumeEducationRow from "./ResumeEducationRow";

function ResumeEducation() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold">Education:</h2>
      <ResumeEducationRow />
      <ResumeEducationRow />
    </div>
  );
}

export default ResumeEducation;
