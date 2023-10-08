import ResumeExperienceRow from "./ResumeExperienceRow";

function ResumeExperience({ data }) {
  const renderRows = () => {
    let rows = data || [];

    if (rows == []) {
      return;
    }

    return rows.map((experience, key) => (
      <div key={key}>
        <ResumeExperienceRow data={experience} />
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold">Experience:</h2>
      {renderRows()}
    </div>
  );
}

export default ResumeExperience;
