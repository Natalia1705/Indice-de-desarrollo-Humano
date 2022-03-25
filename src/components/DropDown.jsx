// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import { labels } from "../data/data";
import { years } from "../data/data";

export const DropDown = ({
  setSort,
  setSelectedYear,
  setSelectedState,
  selectedState,
  selectedYear,
}) => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form.Control
          className="m-4 shadow-sm p-2 mb-4 bg-white rounded text-center border-0"
          style={{
            width: "auto",
            fontSize: ".8rem",
            color: "rgba(196,39,245,0.8)",
          }}
          as="select"
          defaultValue={selectedState}
          onChange={(event) => {
            setSelectedState(event.target.value);
          }}
        >
          {labels.map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </Form.Control>
        <Form.Control
          className="m-4 shadow-sm p-2 mb-4 bg-white rounded text-center border-0"
          style={{
            width: "auto",
            fontSize: ".8rem",
            color: "rgba(196,39,245,0.8)",
          }}
          as="select"
          defaultValue={selectedYear}
          onChange={(event) => {
            setSelectedYear(Number(event.target.value));
          }}
        >
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </Form.Control>
        <Form.Control
          className="m-4 shadow-sm p-2 mb-4 bg-white rounded text-center border-0"
          style={{
            width: "auto",
            fontSize: ".8rem",
            color: "rgba(196,39,245,0.8)",
          }}
          as="select"
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
          <option value="Alfabetiamente A-Z"> Alfabetiamente A-Z</option>
          <option value="Alfabetiamente Z-A">Alfabetiamente Z-A</option>
        </Form.Control>
      </Container>
    </>
  );
};
