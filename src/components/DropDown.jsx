import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { labels } from "../data/data";
import { years } from "../data/data";

export const DropDown = () => {
  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="info">
          Estado
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {labels.map((e) => (
            <Dropdown.Item as="button" variant="secondary">
              {e}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="info">
          Año
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {years.map((e) => (
            <Dropdown.Item as="button">{e}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="info">
          Ordenar Datos
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as="button">Ascendente</Dropdown.Item>
          <Dropdown.Item as="button">Descendente</Dropdown.Item>
          <Dropdown.Item as="button">Alfabetiamente A-Z"</Dropdown.Item>
          <Dropdown.Item as="button">Alfabetiamente Z-A"</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
