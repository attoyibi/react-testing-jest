import { render, screen } from '@testing-library/react';
import Button from '../components/Button'; // Sesuaikan dengan lokasi komponen Button

test('renders the button with correct text', () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});
