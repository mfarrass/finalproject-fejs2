import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorAlert from "../ErrorAlert"

test("testing Error Alert Text", () => {
    render(<ErrorAlert />);
    const linkPlaceholder = screen.getByText(/Ooops !/i);
    expect(linkPlaceholder).toBeInTheDocument();
  });