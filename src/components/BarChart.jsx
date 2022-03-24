/* eslint-disable no-unreachable */
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
import { states } from "../data/states";
import { years } from "../data/states";
import { DropdownButton, Dropdown } from "react-bootstrap";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
};

//Import data
const labels = states;
let idhData = labels.map(() => Math.random());

// provitional let
let sort = "Descendente";

let arrayObj = states.map((d, i) => {
  return {
    label: d,
    data: idhData[i] || 0,
  };
});

let newStates = [];
let newidhData = [];

if (sort === "Ascendente") {
  let sortedState = arrayObj.sort((a, b) => {
    return b.data > a.data;
  });
  sortedState.forEach((e) => {
    newStates.push(e.label);
    newidhData.push(e.data);
  });
}
if (sort === "Descendente") {
  let sortedState = arrayObj.sort((a, b) => {
    return a.data > b.data;
  });
  sortedState.forEach((e) => {
    newStates.push(e.label);
    newidhData.push(e.data);
  });
}
if (sort === "Alfabetiamente A-Z") {
  let sortedState = arrayObj.sort((a, b) => {
    return a.label > b.label;
  });
  sortedState.forEach((e) => {
    newStates.push(e.label);
    newidhData.push(e.data);
  });
}

if (sort === "Alfabetiamente Z-A") {
  let sortedState = arrayObj.sort((a, b) => {
    return b.label > a.label;
  });
  sortedState.forEach((e) => {
    newStates.push(e.label);
    newidhData.push(e.data);
  });
}

export const data = {
  labels: newStates,
  datasets: [
    {
      data: newidhData,
      backgroundColor: "#d82ccd",
    },
  ],
};

export function BarChart() {
  return (
    <div className="barChart mb-2">
      <div className="dropDown">
        <DropdownButton id="dropdown-item-button" title="Estado">
          {states.map((e) => (
            <Dropdown.Item as="button">{e}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="dropDown">
        <DropdownButton id="dropdown-item-button" title="Año">
          {years.map((e) => (
            <Dropdown.Item as="button">{e}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="dropDown">
        <DropdownButton id="dropdown-item-button" title="Ordenar Datos">
          <Dropdown.Item as="button">Ascendente</Dropdown.Item>
          <Dropdown.Item as="button">Descendente</Dropdown.Item>
          <Dropdown.Item as="button">Alfabetiamente A-Z</Dropdown.Item>
          <Dropdown.Item as="button">Alfabetiamente Z-A</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="chart">
        <Bar style={{ margin: "10px 60px " }} options={options} data={data} />;
      </div>
    </div>
  );
}
