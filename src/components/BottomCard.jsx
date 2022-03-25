import React, { useContext } from "react";
import { ApplicationContext } from "../App";
import { arrayObj } from "../data/data.js";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const BottomCard = () => {
  const { selectedState } = useContext(ApplicationContext);

  const stateFilteredArray = arrayObj.filter((e) => e.label === selectedState);

  //Calculating the average of idh
  let total = 0;
  stateFilteredArray.map(({ data }) => (total += data));
  const average = total / stateFilteredArray.length;

  //Calculating the max
  const max = Math.max.apply(
    Math,
    stateFilteredArray.map((idh) => {
      return idh.data;
    })
  );

  //Calculating the min
  const min = Math.min.apply(
    Math,
    stateFilteredArray.map((idh) => {
      return idh.data;
    })
  );
  return (
    <Container className="d-flex flex-column align-items-center p-0">
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
};