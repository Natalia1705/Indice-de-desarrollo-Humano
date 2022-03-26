import { createContext, useState } from "react";
import { labels } from "../data/data";

export const ApplicationContext = createContext();

function Context({ children }) {
  const [sort, setSort] = useState("Ascendente");
  const [selectedYear, setSelectedYear] = useState(2015);
  const [selectedState, setSelectedState] = useState(
    labels[Math.floor(Math.random() * labels.length)]
  );
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
