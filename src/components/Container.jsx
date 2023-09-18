import FormContainer from "./FormContainer";
import ResumeContainer from "./ResumeContainer";

function Container() {
  return (
    <div className="grid grid-cols-12 gap-5 w-auto h-screen max-h-screen px-20 py-14">
      <FormContainer />
      <ResumeContainer />
    </div>
  );
}

export default Container;
