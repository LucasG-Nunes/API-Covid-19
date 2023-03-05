import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './Home';

describe('Home component', () => {
  test('renders "Hello', () => {
    render(<Home />);
    const textElement = screen.getByText('HOME');
    expect(textElement).toBeInTheDocument();
  });
});
