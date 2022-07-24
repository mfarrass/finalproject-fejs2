import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer"
// import ErrorAlert from "../../ErrorAlert/ErrorAlert";

test("render judul halaman", () => {
  render(<Footer />);
  const linkElement = screen.getByText(
    /© FINAL PROJECT FEJS2 x BEJS2 - KEL 1/i
  );
  expect(linkElement).toBeInTheDocument();
});


it('should have a title', () =>{
  render (<Footer />);
  expect(screen.getByTitle('Footer')).toBeInTheDocument();
});









