import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

const updateTimes = (state, action) => {
  if (action.type === 'update_times') {
    const selectedDate = new Date(action.date);
    const day = selectedDate.getDay();

    if (day === 5 || day === 6) {
      return ['17:00', '17:30', '18:30', '19:30', '20:30', '21:30'];
    }

    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }

  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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