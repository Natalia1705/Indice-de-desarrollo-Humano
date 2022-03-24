// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrayObj } from "../data/data.js";
import { labels } from "../data/data";
import { years } from "../data/data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DropdownButton, Dropdown } from "react-bootstrap";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
};

// provitional let
let sort = "Alfabetiamente Z-A";
let selectedYear = 2019;
let selectedState = "Oaxaca";
let newStates = [];
let newidhData = [];

const yearFilteredArray = arrayObj.filter((e) => e.year === selectedYear);

console.log(yearFilteredArray);

if (sort === "Ascendente") {
  let sortedState = yearFilteredArray.sort((a, b) => {
    return b.data > a.data;
  });
  sortedState.forEach((e) => {
    newStates.push(e.label);
    newidhData.push(e.data);
  });
}
if (sort === "Descendente") {
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

export const data = {
  labels: newStates,
  datasets: [
    {
      data: newidhData,
      backgroundColor,
      borderRadius: "3",
    },
  ],
};

export function BarChart() {
  // const [sort, setSort] = useState("Alfabetiamente A-Z");

  return (
    <div className="barChart mb-2">
      <div className="dropDown">
        <DropdownButton id="dropdown-item-button" title="Estado">
          {labels.map((e) => (
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
          <Dropdown.Item as="button" value={"Ascendente"}>
            Ascendente
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            value="Descendente"
            // onChange={(e) => setSort(e.target.value)}
          >
            Descendente
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            value="Alfabetiamente A-Z"
            // onChange={(e) => setSort(e.target.value)}
          >
            Alfabetiamente A-Z
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            value="Alfabetiamente Z-A"
            // onChange={(e) => setSort(e.target.value)}
          >
            Alfabetiamente Z-A
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="chart">
        <Bar style={{ margin: "10px 60px " }} options={options} data={data} />;
      </div>
    </div>
  );
}
