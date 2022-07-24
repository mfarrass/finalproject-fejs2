import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WarningAlert from "../WarningAlert"

it('testing component using testById', () =>{
    render (<WarningAlert />);
    expect(screen.getByTestId('swiper')).toBeInTheDocument();
  });