import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from './About';

describe('<AboutSection />', () => {
  test('Should render the component correctly', () => {
    jest.spyOn(React,'useContext').mockImplementation(() => ({ 
      configs: { 
        name: 'Lee Richmond', 
        email: { 
          address: 'lee@test.com'
        }, 
        aboutSection: {
          title: 'This is a test',
          description: ''
        },
        links: {
          github: {
            link: '',
            label: ''
          },
          linkedin: {
            link: '',
            label: ''
          }
        } 
      } 
    }));
    
    render(<AboutSection />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('This is a test');
    
    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(2);

    icons.forEach((icon) => {
      expect(icon).toHaveClass('icon');
    });
  });
});