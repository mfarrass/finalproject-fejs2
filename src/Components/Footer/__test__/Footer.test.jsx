import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

test("Testing Footer Text", () => {
render(<Footer />);
const linkElement= screen.getByText(
    /© FINAL PROJECT FEJS2 x BEJS2 - KEL 1/i
);
expect(linkElement).toBeInTheDocument();
});
