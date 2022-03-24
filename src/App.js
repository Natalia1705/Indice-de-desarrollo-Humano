import "./App.css";
import { BarChart } from "./components/BarChart";
import { DropDown } from "./components/DropDown";

function App() {
  return (
    <div className="App">
      <h1>Índice de Desarrollo Humano</h1>
      <DropDown />
      <BarChart />
    </div>
  );
}

export default App;
