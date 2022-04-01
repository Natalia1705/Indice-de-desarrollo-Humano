/* eslint-disable testing-library/prefer-screen-queries */
import Context from "../../context/Context";
import { render, screen } from "@testing-library/react";

import { BottomCard } from "./BottomCard";

test("promedio must render", () => {
  render(
    <Context>
      <BottomCard />
    </Context>
  );
  const promedio = screen.getByText(/Promedio/i);
  expect(promedio).toBeInTheDocument();
});

test("IDH más alto must render", () => {
  render(
    <Context>
      <BottomCard />
    </Context>
  );
  const maxIhd = screen.getByText(/IDH más alto/i);
  expect(maxIhd).toBeInTheDocument();
});

test("IDH más bajo must render", () => {
  render(
    <Context>
      <BottomCard />
    </Context>
  );
  const minIhd = screen.getByText(/IDH más alto/i);
  expect(minIhd).toBeInTheDocument();
});
