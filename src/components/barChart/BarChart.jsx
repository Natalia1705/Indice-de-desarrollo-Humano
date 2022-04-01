import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Container } from "react-bootstrap";

import { useWindowSize } from "../../hooks/windowSize";
import { sortGraph } from "../../utils/ChartSort";
import {
  selectBackgroundColor,
  optionsAbr,
  options,
  newData,
  height,
} from "../../utils/ChartOptions";
import { ApplicationContext } from "../../context/Context";

export function BarChart() {
  const { sort, selectedYear, selectedState } = useContext(ApplicationContext);

  //listening the size of screen
  const size = useWindowSize();

  //Return´s sortered and filtered data by year
  const sortData = sortGraph(selectedYear, sort);
  const newStates = sortData[0];
  const newStatesAbr = sortData[1];
  const newidhData = sortData[2];

  //Conditional color , depends on selectedState
  const backgroundColor = selectBackgroundColor(newStates, selectedState);
  //data for horizontal graph,sortered and filtered by year (for complete state name)
  const data = newData(newStates, newidhData, backgroundColor);
  //data for horizontal graph,sortered and filtered by year (for state name abbreviared )
  const dataAbr = newData(newStatesAbr, newidhData, backgroundColor);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  return (
    <Container
      className="d-flex flex-column align-items-center p-0"
      style={{ height: height(size.width) }}
    >
      <Bar
        data-testid="chartBar"
        options={size.width < 480 ? optionsAbr : options}
        data={size.width < 480 ? dataAbr : data}
      />
    </Container>
  );
}
