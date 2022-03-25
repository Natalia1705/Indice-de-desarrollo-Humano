import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { BarChart } from "./components/BarChart";
import { DropDown } from "./components/DropDown";

function App() {
  const [sort, setSort] = useState("Ascendente");
  const [selectedYear, setSelectedYear] = useState(2015);
  const [selectedState, setSelectedState] = useState("Oaxaca");
  return (
    <Container>
      <h4 className="text-center text-muted mt-4">
        Índice de Desarrollo Humano
      </h4>
      <DropDown
        selectedState={selectedState}
        setSort={setSort}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setSelectedState={setSelectedState}
      />
      <BarChart
        sort={sort}
        selectedYear={selectedYear}
        selectedState={selectedState}
      />
    </Container>
  );
}

export default App;
