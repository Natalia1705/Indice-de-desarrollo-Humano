// import { useState } from "react";
import { Container } from "react-bootstrap";
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

export function BarChart({ sort, selectedYear, selectedState }) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  let newStates = [];
  let newidhData = [];

  const yearFilteredArray = arrayObj.filter((e) => e.year === selectedYear);

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
        label: "labels",
        data: newidhData,
        backgroundColor,
        borderRadius: "3",
      },
    ],
  };

  const stateFilteredArray = arrayObj.filter((e) => e.label === selectedState);

  //Calculating the average of ihd
  let total = 0;
  stateFilteredArray.map(({ data }) => (total += data));
  const average = total / stateFilteredArray.length;

  //Calculating the max
  const max = Math.max.apply(
    Math,
    stateFilteredArray.map((e) => {
      return e.data;
    })
  );

  //Calculating the min
  const min = Math.min.apply(
    Math,
    stateFilteredArray.map((e) => {
      return e.data;
    })
  );

  return (
    <Container className="d-flex flex-column align-items-center p-0">
      <Bar
        options={options}
        data={data}
        style={{ width: "100vh", height: "100%" }}
      />
      <Card
        className="border-0 shadow p-1 mb-5 bg-white rounded "
        style={{ width: "18rem" }}
      >
        <Card.Body className="d-flex flex-column p-1 align-items-center ">
          <Card.Title
            className="m-1 "
            style={{ fontSize: "1rem", color: "rgba(39,178,245,0.8)" }}
          >
            {selectedState}
          </Card.Title>
          <Card.Text
            className="m-0 text-muted"
            style={{ fontSize: "0.7rem" }}
          >{`Promedio IDH ${average.toFixed(3)}`}</Card.Text>
          <Card.Text
            className="m-0 text-muted"
            style={{ fontSize: "0.7rem" }}
          >{`IDH más alto ${max.toFixed(3)}`}</Card.Text>
          <Card.Text
            className="m-0 text-muted"
            style={{ fontSize: "0.7rem" }}
          >{`IDH más bajo ${min.toFixed(3)}`}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
