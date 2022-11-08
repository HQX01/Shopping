import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import HomePage from "./pages/homePage/index";

test("renders learn react link", () => {
  render(<HomePage />);
  expect(screen.getByText("Home")).toBeInTheDocument();
});
