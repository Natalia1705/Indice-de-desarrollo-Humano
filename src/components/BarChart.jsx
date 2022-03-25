import { useContext } from "react";
import { Container } from "react-bootstrap";
import { arrayObj } from "../data/data.js";
import { ApplicationContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export function BarChart() {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  const { sort } = useContext(ApplicationContext);
  const { selectedYear } = useContext(ApplicationContext);
  const { selectedState } = useContext(ApplicationContext);

  let newStates = [];
  let newidhData = [];

  const yearFilteredArray = arrayObj.filter((obj) => obj.year === selectedYear);
  if (sort === "Descendente") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return b.data > a.data;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newidhData.push(e.data);
    });
  }
  if (sort === "Ascendente") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return a.data > b.data;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newidhData.push(e.data);
    });
  }
  if (sort === "Alfabetiamente A-Z") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return a.label > b.label;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newidhData.push(e.data);
    });
  }
  if (sort === "Alfabetiamente Z-A") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return b.label > a.label;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newidhData.push(e.data);
    });
  }

  const backgroundColor = [];
  for (let i = 0; i < newStates.length; i++) {
    if (newStates[i] === selectedState) {
      backgroundColor.push("rgba(39,178,245,0.8)");
    } else {
      backgroundColor.push("rgba(196,39,245,0.8)");
    }
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: newStates,
    datasets: [
      {
        label: "IDH",
        data: newidhData,
        backgroundColor,
        borderRadius: "3",
      },
    ],
  };
  // let width = window.innerWidth;
  return (
    <Container className="d-flex flex-column align-items-center p-0">
      <Bar options={options} data={data} style={{ width: "100vh" }} />
    </Container>
  );
}
