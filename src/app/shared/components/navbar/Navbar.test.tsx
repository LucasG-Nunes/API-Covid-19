import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('testing navbar component', () => {
  test('testing if has a navigation in navbar,a list and a button to change to darkmode', () => {
    render(<Navbar />);
    const navigation = screen.getByRole('navigation');
    const options = screen.getAllByRole('listitem');
    const button = screen.getByRole('button');
    expect(navigation).toBeInTheDocument();
    expect(options).toHaveLength(5);
    expect(button).toBeInTheDocument();
  });
});
