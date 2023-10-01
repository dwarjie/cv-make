import { v4 as uuid } from "uuid";

const initialData = {
  currentSection: 0,
  sections: [
    { name: "personal" },
    { name: "experience" },
    { name: "education" },
  ],
  personal: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@sample.com",
    phoneNo: "+63",
    address: "Sample Street, City, State",
  },
  education: {
    rows: [
      {
        schoolName: "Sample University School",
        degree: "BSIT - Bachelor of Science in Information Technology",
        startDate: "2019-01-01",
        endDate: "2029-01-01",
        schoolLocation: "",
      },
    ],
  },
  experience: [
      {
        id: uuid().slice(0, 8),
        companyName: "Sample Company",
        position: "Software Engineer",
        startDate: "2019-01-01",
        endDate: "2029-01-01",
        companyLocation: "",
        description: "",
      },
  ],
};

export default initialData;