import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import { labels } from "../data/data";
import { years } from "../data/data";

export const DropDown = () => {
  const [sort, setSort] = useState("Alfabetiamente Z-A");
  const [selectedYear, setSelectedYear] = useState(2019);
  const [selectedState, setSelectedState] = useState("Oaxaca");

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
          custom
          onChange={(event) => {
            setSelectedState(event.target.value);
          }}
        >
          {labels.map((e) => (
            <option value={e}>{e}</option>
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
          custom
          onChange={(event) => {
            setSelectedYear(event.target.value);
          }}
        >
          {years.map((e) => (
            <option value={e}>{e}</option>
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
          custom
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
      {console.log(sort, selectedYear, selectedState)}
    </>
  );
};
