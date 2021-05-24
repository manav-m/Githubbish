import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('Home renders input and button', () => {
  render(<Home />);
  const inputElement = screen.getByLabelText('User Name');
  expect(inputElement).toBeInTheDocument();
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
