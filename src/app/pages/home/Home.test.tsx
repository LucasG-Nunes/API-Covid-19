import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Home from './Home';

describe('Home component', () => {
  render(<Home />);
  test('testing if has a navigation and a button to change a style in the DOM', () => {
    const nav = screen.getByRole('navigation');
    const button = screen.getByText('Ativar modo noturno');

    expect(nav).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
