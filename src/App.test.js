import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon main heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headingElement = screen.getByRole('heading', {
    name: /little lemon/i,
    level: 1,
  });

  expect(headingElement).toBeInTheDocument();
});