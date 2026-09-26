import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

test('renders the Choose date label', () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatch={() => {}}
      />
    </BrowserRouter>
  );

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});