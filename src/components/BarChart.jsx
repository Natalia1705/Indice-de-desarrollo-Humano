import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { ApplicationContext } from "../context/Context";
import { Container } from "react-bootstrap";
import { useWindowSize } from "../Hooks/windowSize";
import { sortGraph } from "../utils/ChartSort";
import {
  selectBackgroundColor,
  optionsAbr,
  options,
  newData,
} from "../utils/ChartOptions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

export function BarChart() {
  const { sort } = useContext(ApplicationContext);
  const { selectedYear } = useContext(ApplicationContext);
  const { selectedState } = useContext(ApplicationContext);
  const size = useWindowSize();

  const sortData = sortGraph(selectedYear, sort);
  const newStates = sortData[0];
  const newStatesAbr = sortData[1];
  const newidhData = sortData[2];

  //Conditional color
  const backgroundColor = selectBackgroundColor(newStates, selectedState);
  const data = newData(newStates, newidhData, backgroundColor);
  const dataAbr = newData(newStatesAbr, newidhData, backgroundColor);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  return (
    <Container className="d-flex flex-column align-items-center p-0">
      <Bar
        options={size.width < 480 ? optionsAbr : options}
        data={size.width < 480 ? dataAbr : data}
      />
    </Container>
  );
}
