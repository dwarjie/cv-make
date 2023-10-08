import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import FormContainer from "./FormContainer";
import ResumeContainer from "./ResumeContainer";
import cvData from "./context/initialData";

function Container() {
  const [data, setData] = useState(cvData.emptyResumeData);
  const componentRef = useRef();

  const fetchData = (data) => {
    setData(data);
    console.log(data);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="grid grid-cols-12 gap-5 w-auto h-screen max-h-screen px-16 py-14">
      <FormContainer fetchData={fetchData} handlePrint={handlePrint} />
      <ResumeContainer data={data} ref={componentRef} />
    </div>
  );
}

export default Container;
