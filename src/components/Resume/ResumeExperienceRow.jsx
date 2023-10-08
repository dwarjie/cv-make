function ResumeExperienceRow({ data }) {
  const renderDate = () => {
    if (data.startDate == undefined && data.endDate == undefined) return "";

    return `${data.startDate} - ${data.endDate}`;
  };
  return (
    <div className="grid grid-cols-3 w-auto">
      <h2 className="font-bold">{renderDate()}</h2>
      <div className="flex flex-col col-span-2 break-words">
        <h2 className="font-bold">{data.companyName}</h2>
        <p>{data.position}</p>
        <p>{data.companyLocation}</p>
        <p className="prose text-sm">{data.description}</p>
      </div>
    </div>
  );
}

export default ResumeExperienceRow;
