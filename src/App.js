import { BarChart } from "./components/BarChart";
import { BottomCard } from "./components/BottomCard";
import { DropDown } from "./components/DropDown";

export const App = () => {
  return (
    <div>
      <DropDown />
      <BarChart />
      <BottomCard />
    </div>
  );
};
