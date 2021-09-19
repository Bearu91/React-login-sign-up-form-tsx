import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with its content', () => {
  render(<Button>Kruko</Button>);

  const buttonElement = screen.getByText(/kruko/i);
  expect(buttonElement).toBeInTheDocument();
});

test('applies className to rendered component', () => {
  render(<Button className="klasa">Kruko</Button>);

  const buttonElement = screen.getByText(/kruko/i);
  expect(buttonElement).toHaveClass('klasa');
});

test('runs onClick once button is clicked', () => {
  const mockCallBack = jest.fn();
  render(<Button onClick={mockCallBack}>Kruko</Button>);

  const buttonElement = screen.getByText(/kruko/i);
  buttonElement.click();

  expect(mockCallBack).toBeCalledTimes(1);
});
