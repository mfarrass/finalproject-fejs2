import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../Footer';

it("should render project by", () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find("span");
    const result = span.text();

    expect(result).toBe("© FINAL PROJECT FEJS2 x BEJS2 - KEL 1");
});