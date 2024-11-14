import React from 'react';
import { render, screen } from "@testing-library/react";
import AboutSection from "./About";

describe('<AboutSection />', () => {
  test('Should render the component correctly', () => {
    jest.spyOn(React,'useContext').mockImplementation(() => ({ configs: { name: "Lee Richmond", email: { address: "lee@test.com"} } }));
    
    render(<AboutSection />);
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('The home of full stack developer Lee Richmond');
  });
});