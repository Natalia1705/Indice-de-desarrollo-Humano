/* eslint-disable no-undef */
import { useContext } from "react";
import { arrayObj } from "../data/data.js";
import { ApplicationContext } from "../context/Context";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useWindowSize } from "../Hooks/windowSize";

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
  //Manage Graph Sort
  const { sort } = useContext(ApplicationContext);
  const { selectedYear } = useContext(ApplicationContext);
  const { selectedState } = useContext(ApplicationContext);
  const size = useWindowSize();

  let newStates = [];
  let newStatesAbr = [];
  let newidhData = [];

  const yearFilteredArray = arrayObj.filter((obj) => obj.year === selectedYear);
  if (sort === "Descendente") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return b.data - a.data;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newStatesAbr.push(e.abr);
      newidhData.push(e.data);
    });
  }
  if (sort === "Ascendente") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return a.data - b.data;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newStatesAbr.push(e.abr);
      newidhData.push(e.data);
    });
  }
  if (sort === "Alfabeticamente A-Z") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return a.label > b.label;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newStatesAbr.push(e.abr);
      newidhData.push(e.data);
    });
  }

  //Graph optios, data, color, regiser Inputs
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  //Conditional color
  const backgroundColor = [];
  for (let i = 0; i < newStates.length; i++) {
    if (newStates[i] === selectedState) {
      backgroundColor.push("rgba(39,178,245,0.8)");
    } else {
      backgroundColor.push("rgba(196,39,245,0.8)");
    }
  }

  console.log("nuevo", newStates);
  console.log("seleccionado", selectedState);
  console.log(backgroundColor);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const optionsAbr = {
    indexAxis: "y",
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

  const dataAbr = {
    labels: newStatesAbr,
    datasets: [
      {
        label: "IDH",
        data: newidhData,
        backgroundColor,
        borderRadius: "3",
      },
    ],
  };

  return (
    <Container className="d-flex flex-column align-items-center p-0">
      <Bar
        options={size.width > 480 ? options : optionsAbr}
        data={data}
        // data={size.width > 480 ? data : dataAbr}
      />
    </Container>
  );
}
