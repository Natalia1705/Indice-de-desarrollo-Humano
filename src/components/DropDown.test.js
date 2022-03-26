import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { DropDown } from "./DropDown.jsx";

test("DropDown shows default", () => {
  const view = render(<DropDown />);
  view.expect(screen.getByText("Índice de Desarrollo Humano"));
});
