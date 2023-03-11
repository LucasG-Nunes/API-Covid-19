import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ButtonToggleTheme from './ButtonToggleTheme';

describe('testing ButtonToggleTheme component', () => {
  test('testing if button has Ativar modo noturno', () => {
    render(<ButtonToggleTheme />);
    const button = screen.queryByRole('button');
    expect(button).toContainHTML('Ativar modo noturno');
  });
});
