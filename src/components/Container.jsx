import { useState } from "react";
import FormContainer from "./FormContainer";
import ResumeContainer from "./ResumeContainer";

function Container() {
  const [data, setData] = useState([]);

  const fetchData = (data) => {
    setData(data);
  };

  return (
    <div className="grid grid-cols-12 gap-5 w-auto h-screen max-h-screen px-20 py-14">
      <FormContainer fetchData={fetchData} />
      <ResumeContainer data={data} />
    </div>
  );
}

export default Container;
