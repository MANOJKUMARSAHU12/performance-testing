// src/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button and updates click count on click', () => {
  render(<Button />);

  // Check if the button renders
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();

  // Check initial click count
  const clickCountElement = screen.getByText(/Click Count: 0/i);
  expect(clickCountElement).toBeInTheDocument();

  // Simulate a click on the button
  fireEvent.click(buttonElement);

  // Check if the click count updates
  expect(screen.getByText(/Click Count: 1/i)).toBeInTheDocument();
});
