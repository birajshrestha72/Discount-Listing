import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Available Discounts heading', () => {
  render(<App />);
  const heading = screen.getByText(/Available Discounts/i);
  expect(heading).toBeInTheDocument();
});
