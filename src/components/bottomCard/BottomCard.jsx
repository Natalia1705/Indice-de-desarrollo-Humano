import { Container, Card } from "react-bootstrap";
import { useContext } from "react";

import { ApplicationContext } from "../../context/Context";
import { arrayObj } from "../../data/data.js";
import { average, max, min } from "../../utils/BottomCardUtils";

export const BottomCard = () => {
  const { selectedState } = useContext(ApplicationContext);
  const stateFilteredArray = arrayObj.filter((e) => e.label === selectedState);

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      data-testid="bottomCard"
    >
      <Card className="border-0">
        <Card.Body className="d-flex flex-column p-1 align-items-center ">
          <Card.Title
            className="m-1 "
            style={{
              fontSize: "calc(0.70em + 1.1vmin)",
              color: "rgba(223,63,34,0.9)",
            }}
          >
            {selectedState}
          </Card.Title>
          <Card.Text
            className="m-0 text-muted "
            style={{ fontSize: "calc(0.50em + 1vmin)" }}
          >
            {`Promedio IDH ${average(stateFilteredArray).toFixed(3)}`}
          </Card.Text>
          <Card.Text
            className="m-0 text-muted"
            style={{ fontSize: "calc(0.50em + 1vmin)" }}
          >
            {`IDH más alto ${max(stateFilteredArray).toFixed(3)}`}
          </Card.Text>
          <Card.Text
            className="m-0 text-muted"
            style={{ fontSize: "calc(0.50em + 1vmin)" }}
          >
            {`IDH más bajo ${min(stateFilteredArray).toFixed(3)}`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
