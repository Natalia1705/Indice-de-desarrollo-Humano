import { useContext } from "react";
import { ApplicationContext } from "../../context/Context";
import { labels } from "../../data/data";
import { years } from "../../data/data";
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
      <h4
        className="d-flex justify-content-center align-items-center text-muted mt-4"
        style={{
          fontSize: "calc(1em + 1vmin)",
        }}
      >
        Índice de Desarrollo Humano
      </h4>
      <Container className="row md-column align-items-center m-3">
        <div class="col-6 col-sm-9 d-flex justify-content-center">
          <Form.Control
            className="m-2 p-1 text-muted"
            style={{
              width: "auto",
              fontSize: "calc(0.50em + 1vmin)",
              cursor: "pointer",
            }}
            as="select"
            defaultValue={selectedState}
            id="state"
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
            className="d-flex m-2 p-1 text-muted"
            style={{
              width: "auto",
              fontSize: "calc(0.50em + 1vmin)",
              cursor: "pointer",
            }}
            as="select"
            defaultValue={selectedYear}
            id="year"
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
        <div class="col-6 col-sm-3">
          <Form.Control
            className="align-text-center m-2 p-1 text-muted"
            style={{
              width: "auto",
              fontSize: "calc(0.50em + 1vmin)",
              cursor: "pointer",
            }}
            as="select"
            id="sort"
            defaultValue={sort}
            onChange={(event) => {
              setSort(event.target.value);
            }}
          >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            <option value="Alfabeticamente A-Z"> Alfabeticamente A-Z</option>
          </Form.Control>
        </div>
      </Container>
    </>
  );
};
