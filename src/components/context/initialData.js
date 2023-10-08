import { v4 as uuid } from "uuid";

const emptyResumeData = [
  {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
  },
  [
    {
      id: uuid().slice(0, 8),
      companyName: "Sample Company",
      position: "Software Engineer",
      startDate: "2023-01",
      endDate: "2023-01",
      companyLocation: "",
      description: "",
    },
  ],
  [
    {
      id: uuid().slice(0, 8),
      schoolName: "Sample University School",
      degree: "Bachelor of Science in Information Technology",
      startDate: "2023-01",
      endDate: "2023-01",
      schoolLocation: "",
    },
  ]
]

const cvData = {
  emptyResumeData
} 

export default cvData;
