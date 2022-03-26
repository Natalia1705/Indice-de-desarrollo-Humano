import { useContext } from "react";
import { ApplicationContext } from "../context/Context";
import { arrayObj } from "../data/data.js";
import { Container, Card } from "react-bootstrap";
import { average, max, min } from "../utils/BottomUtils";
import "bootstrap/dist/css/bootstrap.min.css";

export const BottomCard = () => {
  const { selectedState } = useContext(ApplicationContext);
  const stateFilteredArray = arrayObj.filter((e) => e.label === selectedState);

  console.log(arrayObj);
  return (
    <Container className="d-flex flex-column align-items-center p-4">
      <Card
        className="border-0 shadow rounded shadow-sm-none"
        style={{ width: "18rem" }}
      >
        <Card.Body className="d-flex flex-column p-1 align-items-center ">
          <Card.Title
            className="m-1 "
            style={{ fontSize: "1rem", color: "rgba(39,178,245,0.8)" }}
          >
            {selectedState}
          </Card.Title>
          <Card.Text className="m-0 text-muted" style={{ fontSize: "0.7rem" }}>
            {`Promedio IDH ${average(stateFilteredArray).toFixed(3)}`}
          </Card.Text>
          <Card.Text className="m-0 text-muted" style={{ fontSize: "0.7rem" }}>
            {`IDH más alto ${max(stateFilteredArray).toFixed(3)}`}
          </Card.Text>
          <Card.Text className="m-0 text-muted" style={{ fontSize: "0.7rem" }}>
            {`IDH más bajo ${min(stateFilteredArray).toFixed(3)}`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
