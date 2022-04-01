/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-undef */
/* eslint-disable testing-library/await-async-utils */
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Context from "../../context/Context";
import Enzyme, { shallow } from "enzyme";
import { waitFor } from "@testing-library/react";

import { BarChart } from "./BarChart";

Enzyme.configure({ adapter: new Adapter() });
test("BarChart should be render", () => {
  shallow(
    <Context>
      <BarChart />
    </Context>
  );
  waitFor(() => expect(getByTestId("chartBar")).toBeInTheDocument());
});
