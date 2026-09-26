import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';

// Load available booking times for today's date
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Update available times when the user selects a new date
export const updateTimes = (state, action) => {
  if (action.type === 'update_times') {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate);
  }

  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  // Submit booking data to the API and navigate on success
  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;