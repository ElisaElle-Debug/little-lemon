import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

const renderBookingForm = () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    </BrowserRouter>
  );
};

test('renders the Choose date label', () => {
  renderBookingForm();

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('date input is required', () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('required');
});

test('time select is required', () => {
  renderBookingForm();

  const timeSelect = screen.getByLabelText('Choose time');
  expect(timeSelect).toHaveAttribute('required');
});

test('guest input has correct validation attributes', () => {
  renderBookingForm();

  const guestsInput = screen.getByLabelText('Number of guests');

  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('occasion select is required', () => {
  renderBookingForm();

  const occasionSelect = screen.getByLabelText('Occasion');
  expect(occasionSelect).toHaveAttribute('required');
});

test('submit button is disabled when the form is invalid', () => {
  renderBookingForm();

  const submitButton = screen.getByRole('button', {
    name: 'Make Your Reservation',
  });

  expect(submitButton).toBeDisabled();
});

test('submit button is enabled when the form is valid', () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText('Choose date');

  fireEvent.change(dateInput, {
    target: { value: '2026-09-27' },
  });

  const submitButton = screen.getByRole('button', {
    name: 'Make Your Reservation',
  });

  expect(submitButton).toBeEnabled();
});