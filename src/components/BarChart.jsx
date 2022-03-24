// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { arrayObj } from "../data/data.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
};

// provitional constants
let sort = "Alfabetiamente Z-A";
let selectedYear = 2019;
let selectedState = "Oaxaca";
let newStates = [];
let newidhData = [];

const yearFilteredArray = arrayObj.filter((e) => e.year === selectedYear);

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
  const stateFilteredArray = arrayObj.filter((e) => e.label === selectedState);
  console.log(stateFilteredArray);

  return (
    <div className="chart">
      <Bar
        style={{ margin: "10px 60px " }}
        options={options}
        data={data}
        className="font-weight-normal"
      />
      ;
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Promedio IDH</Card.Title>
          <Card.Text>{}</Card.Text>
          <Card.Title>IDH más alto</Card.Title>
          <Card.Text>{}</Card.Text>
          <Card.Title>IDH más alto</Card.Title>
          <Card.Text>{}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}
