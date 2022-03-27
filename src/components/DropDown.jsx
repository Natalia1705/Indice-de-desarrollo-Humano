import { useContext } from "react";
import { ApplicationContext } from "../context/Context";
import { labels } from "../data/data";
import { years } from "../data/data";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const DropDown = () => {
  const {
    sort,
    setSort,
    selectedYear,
    setSelectedYear,
    selectedState,
    setSelectedState,
  } = useContext(ApplicationContext);

  return (
    <>
      <h4 className="text-center text-muted mt-4">
        Índice de Desarrollo Humano
      </h4>
      <Container className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className="col-8 row ">
          <Form.Control
            className="m-2 shadow-sm bg-white rounded text-center border-0"
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
            className="m-2 ml-4 shadow-sm bg-white rounded text-center justify-content-center border-0"
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
        </div>
        <Form.Control
          className="m-2 ml-4 shadow-sm bg-white rounded text-center border-0"
          style={{
            width: "auto",
            fontSize: ".8rem",
            color: "rgba(196,39,245,0.8)",
          }}
          as="select"
          defaultValue={sort}
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
          <option value="Alfabeticamente A-Z"> Alfabeticamente A-Z</option>
        </Form.Control>
      </Container>
    </>
  );
};
