import { createContext, useState } from "react";

export const ApplicationContext = createContext();

function Context({ children }) {
  const [sort, setSort] = useState("Ascendente");
  const [selectedYear, setSelectedYear] = useState(2015);
  const [selectedState, setSelectedState] = useState("Colima");
  return (
    <ApplicationContext.Provider
      value={{
        sort,
        setSort,
        selectedYear,
        setSelectedYear,
        selectedState,
        setSelectedState,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default Context;
