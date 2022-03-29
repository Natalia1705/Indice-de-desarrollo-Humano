import { render } from "@testing-library/react";
import { DropDowm } from "./DropDown.jsx";
// import Context from "../../context/Context";

test("renders title without crashing", () => {
  render(<DropDowm />);
  const title = screen.getByText("Índice de Desarrollo Humano");
  expect(title).toBeInTheDocument();
});
