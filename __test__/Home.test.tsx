import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('should have Docs text', () => {
    render(<Home />); // ARRANGE

    const myElement = screen.getByText('Docs'); // ACT

    expect(myElement).toBeInTheDocument(); // ASSERT
  });

  it('should contain text "information"', () => {
    render(<Home />); // ARRANGE

    const myElement = screen.getByText(/information/i); // ACT

    expect(myElement).toBeInTheDocument(); // ASSERT
  });
});
