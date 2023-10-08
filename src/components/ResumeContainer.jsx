import React from "react";
import Header from "./Resume/Header";
import ResumeEducation from "./Resume/ResumeEducation";
import ResumeExperience from "./Resume/ResumeExperience";

// function ResumeContainer({ data }) {
// }

class ResumeContainer extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="col-span-6 px-5 border border-primary-foreground text-primary font-body text-justify">
        <div className="flex flex-col gap-3 py-5 w-auto">
          <Header data={data[0]} />
          <hr className="h-px bg-primary border-0" />
          <ResumeExperience data={data[1]} />
          <hr className="h-px bg-primary border-0" />
          <ResumeEducation data={data[2]} />
        </div>
      </div>
    );
  }
}

export const ResumeToPrint = React.forwardRef((props, ref) => {
  return <ResumeContainer data={data} ref={ref} />;
});

export default ResumeContainer;
