import React from "react";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
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

  it("should show open when menu button is clicked", async () => {
    render(<HomePage />);
    await userEvent.click(screen.getByTestId("circle"));

    expect(screen.getByTestId("container")).toHaveStyleRule(
      "transform",
      "rotate(-20deg)"
    );
    expect(screen.getByTestId("circle")).toHaveStyleRule(
      "transform",
      "rotate(-70deg)"
    );
  });
});
