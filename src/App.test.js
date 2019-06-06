import React from "react";
import App from "./App";
import { render } from "./utils/testUtils";

describe("<App />", () => {
  test("renders", () => {
    const { getByTestId } = render(<App />);
    getByTestId("header");
  });
});
