function ResumeEducationRow({ data }) {
  const renderDate = () => {
    if (data.startDate == undefined && data.endDate == undefined) return "";

    return `${data.startDate} - ${data.endDate}`;
  };
  return (
    <div className="grid grid-cols-3">
      <h2 className="font-bold">{renderDate()}</h2>
      <div className="flex flex-col col-span-2">
        <h2 className="font-bold">{data.schoolName}</h2>
        <p>{data.degree}</p>
        <p>{data.schoolLocation}</p>
      </div>
    </div>
  );
}

export default ResumeEducationRow;
