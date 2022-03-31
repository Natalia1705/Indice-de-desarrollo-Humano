/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, fireEvent } from "@testing-library/react";
import Context from "../../context/Context";
import "@testing-library/jest-dom";

import { DropDown } from "./DropDown";

test("title should de render without crashing", () => {
  render(
    <Context>
      <DropDown />
    </Context>
  );
  const title = screen.getByText("Índice de Desarrollo Humano");
  expect(title).toBeInTheDocument();
});

test("state selected should have the same value", () => {
  const { getByTestId, getAllByTestId } = render(
    <Context>
      <DropDown />
    </Context>
  );
  fireEvent.change(getByTestId("state"), {
    target: { value: "Aguascalientes" },
  });
  let options = getAllByTestId("select-state");
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
});

test("year selected should have the same value", () => {
  const { getByTestId, getAllByTestId } = render(
    <Context>
      <DropDown />
    </Context>
  );
  fireEvent.change(getByTestId("year"), { target: { value: 2016 } });
  let options = getAllByTestId("select-year");
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
});

test("sort selected should have the same value", () => {
  const { getByTestId, getAllByTestId } = render(
    <Context>
      <DropDown />
    </Context>
  );
  fireEvent.change(getByTestId("sort"), { target: { value: "Descendente" } });
  let options = getAllByTestId("select-sort");
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
});
