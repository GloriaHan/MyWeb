import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

test("should renders without crashing", () => {
  const { container } = render(<HomePage />);
  expect(container).not.toBeEmptyDOMElement();
});

describe("App", () => {
  it("should renders without crashing", () => {
    const { container } = render(<HomePage />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
