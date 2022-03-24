import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BarChart } from "./components/BarChart";
import { DropDown } from "./components/DropDown";

function App() {
  return (
    <Container>
      <h4 className="text-center text-muted mt-4">
        Índice de Desarrollo Humano
      </h4>
      <DropDown />
      <BarChart />
    </Container>
  );
}

export default App;
