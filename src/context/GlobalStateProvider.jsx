import { createContext, useContext, useReducer } from "react";

const initialGlobalState = {
  currentSection: 1,
  sections: [
    { name: "personal" },
    { name: "experience" },
    { name: "education" },
  ],
  personal: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@sample.com",
    phoneNo: "",
    address: "",
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
  experience: {
    rows: [
      {
        companyName: "Sample University School",
        positionTitle: "Software Engineer",
        startDate: "2019-01-01",
        endDate: "2029-01-01",
        companyLocation: "",
        description: "",
      },
    ],
  },
};

const GlobalStateContext = createContext(initialGlobalState);
const DispatchStateContext = createContext(undefined);

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer((state, newValue) => {
    ({ ...state, ...newValue }), initialGlobalState;
  });

  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
}

const useGlobalState = () => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext),
];
export { GlobalStateProvider, useGlobalState };
