import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

const DefaultProviders = ({ children }) => <div>{children}</div>;

DefaultProviders.propTypes = {
  children: PropTypes.element.isRequired
};

const customRender = (ui, options) =>
  render(ui, { wrapper: DefaultProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
