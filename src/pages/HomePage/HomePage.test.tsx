import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("App", () => {
  it("should renders without crashing", () => {
    const { container } = render(<HomePage />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
