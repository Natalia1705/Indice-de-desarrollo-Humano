import { BarChart } from "./components/barChart/BarChart.jsx";
import { BottomCard } from "./components/bottomCard/BottomCard.jsx";
import { DropDown } from "./components/dropDown/DropDown.jsx";

export const App = () => {
  return (
    <div>
      <DropDown />
      <BarChart />
      <BottomCard />
    </div>
  );
};
