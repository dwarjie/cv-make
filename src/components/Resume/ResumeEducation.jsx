import ResumeEducationRow from "./ResumeEducationRow";

function ResumeEducation({ data }) {
  const renderRows = () => {
    let rows = data || [];

    if (rows == []) {
      return;
    }

    return rows.map((educ, key) => (
      <div key={key}>
        <ResumeEducationRow data={educ} />
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold">Education:</h2>
      {renderRows()}
    </div>
  );
}

export default ResumeEducation;
