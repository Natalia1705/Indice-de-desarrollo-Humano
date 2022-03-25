import { createContext, useState } from "react";
import { BarChart } from "./components/BarChart";
import { BottomCard } from "./components/BottomCard";
import { DropDown } from "./components/DropDown";

export const ApplicationContext = createContext();

function App() {
  const [sort, setSort] = useState("Ascendente");
  const [selectedYear, setSelectedYear] = useState(2015);
  const [selectedState, setSelectedState] = useState("Oaxaca");
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
      <DropDown />
      <BarChart />
      <BottomCard />
    </ApplicationContext.Provider>
  );
}

export default App;
